'use client';

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
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

// For avatars https://www.dicebear.com/

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
            <ul>
                {optimisticState.messages?.map((message) => (
                    <li key={message.id}>
                        <Card className="rounded-none">
                            <CardHeader className="justify-between">
                                <div className="flex gap-5">
                                    <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
                                    <div className="flex flex-col items-start justify-center gap-1">
                                        <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                                        <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody className="px-3 py-0 text-small text-default-400">
                                <p>
                                    {message.content}
                                </p>
                            </CardBody>
                            <CardFooter className="gap-3">
                                <div className="flex gap-1">
                                    <p className="text-small font-semibold text-default-400">4</p>
                                    <p className=" text-small text-default-400">Following</p>
                                </div>
                                <div className="flex gap-1">
                                    <p className="text-small font-semibold text-default-400">97.1K</p>
                                    <p className="text-small text-default-400">Followers</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleMessageSubmission} className="flex items-center">
                <Input
                    classNames={{
                        inputWrapper: 'rounded-none'
                    }}
                    isRequired
                    autoFocus
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
    );
}
