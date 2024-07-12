'use client';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { User } from '@supabase/supabase-js';
import { useOptimisticAction } from 'next-safe-action/hooks';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { IoMdSend } from 'react-icons/io';

import { addMessageAction } from '@/lib/messages/add';
import { supabaseBrowserClient } from '@/lib/supabase/client';
import { Tables } from '@/lib/supabase/types';

interface Props {
    user: User | null;
    messages: Tables<'messages'>[];
}

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
        <article className="flex size-full flex-col-reverse sm:flex-row">
            <section className="flex size-full flex-col justify-end sm:w-96">
                <ul>
                    {optimisticState.messages?.map((message) => (
                        <li key={message.id}>{message.content}</li>
                    ))}
                </ul>
                <form onSubmit={handleMessageSubmission} className="flex items-center">
                    <Input
                        classNames={{
                            inputWrapper: 'rounded-none'
                        }}
                        isRequired
                        type="text"
                        placeholder="Leave your mark :)"
                        value={newMessage}
                        onValueChange={setNewMessage}
                    />
                    <Button
                        className="rounded-none"
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
            <section className="grow">
                Map here
            </section>
        </article>
    );
}
