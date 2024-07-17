'use client';

import { faker } from '@faker-js/faker';
import { Button } from '@nextui-org/button';
import { Textarea } from '@nextui-org/react';
import { User } from '@supabase/supabase-js';
import clsx from 'clsx';
import Image from 'next/image';
import { useOptimisticAction } from 'next-safe-action/hooks';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { IoMdSend } from 'react-icons/io';

import { darkBg, darkFontColor, indigoGradient } from '@/app/constants/colors';
import { addMessageAction } from '@/lib/messages/add';
import { supabaseBrowserClient } from '@/lib/supabase/client';
import { Tables } from '@/lib/supabase/types';

interface Props {
    user: User | null;
    messages: Tables<'messages'>[];
}

const fakeProperties = {
    avatar: faker.image.avatar(),
    name: faker.person.fullName()
};

export default function Messages({ messages, user }: Props) {
    const [newMessage, setNewMessage] = useState('');

    const { execute: addMessage, optimisticState } = useOptimisticAction(
        addMessageAction,
        {
            currentState: { messages },
            updateFn: (state, addedMessage: Tables<'messages'>) => ({
                messages: [...state.messages, addedMessage]
            })
        }
    );

    const handleMessageSubmission = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addMessage({
            id: new Date().getTime().toString(),
            content: newMessage,
            user_id: user?.id!,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        } as Tables<'messages'>);
        setNewMessage('');
    };

    const handleMessageChanges = useCallback(
        (payload: any) => console.debug(payload),
        []
    );

    useEffect(() => {
        const messagesChannel = supabaseBrowserClient.channel('messages');
        messagesChannel.on(
            'postgres_changes',
            { event: 'INSERT', schema: 'public', table: 'messages' },
            handleMessageChanges
        );
        messagesChannel.subscribe();

        return () => {
            supabaseBrowserClient.removeChannel(messagesChannel);
        };
    }, [handleMessageChanges]);


    return (
        <section className="flex size-full flex-col justify-end sm:w-96">
            <ul className="overflow-y-auto">
                {optimisticState.messages?.map((message) => (
                    <li
                        key={message.id}
                        className={clsx(
                            'w-full p-1',
                            { 'animate-bg-move bg-gradient-to-r from-yellow-700 via-pink-200 to-yellow-900 bg-400%': message.user_id === user?.id },
                            { 'bg-slate-800': message.user_id !== user?.id }
                        )}
                    >
                        <div className={`${darkBg} ${darkFontColor}`}>
                            <div className="relative h-16 w-full border-b-2 border-b-yellow-900 bg-gradient-to-b from-yellow-500 to-yellow-600 text-center">
                                <Image
                                    src={faker.image.urlLoremFlickr({ category: 'background' })}
                                    fill={true}
                                    alt="Background"
                                    className="object-cover"
                                />
                                <Image
                                    src={fakeProperties.avatar}
                                    alt={fakeProperties.name}
                                    height={60}
                                    width={60}
                                    className="relative top-2 mx-auto rounded-full"
                                />
                            </div>
                            <div className="p-6">
                                {message.content}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleMessageSubmission} className="flex items-center">
                <Textarea
                    classNames={{
                        input: 'p-5 bg-slate-900',
                        inputWrapper: `rounded-none h-24 p-1 ${indigoGradient}`
                    }}
                    isRequired
                    autoFocus
                    type="text"
                    placeholder="Leave your mark :)"
                    maxRows={3}
                    minRows={3}
                    value={newMessage}
                    onValueChange={setNewMessage}
                />
                <Button
                    className="h-full rounded-none"
                    isIconOnly
                    type="submit"
                    variant="ghost"
                    color="secondary"
                    isDisabled={!newMessage}
                >
                    <IoMdSend size={20} />
                </Button>
            </form>
        </section>
    );
}
