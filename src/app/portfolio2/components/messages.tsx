'use client';

import { useCallback, useEffect } from 'react';

import { supabaseBrowserClient } from '@/lib/supabase/client';
import { Tables } from '@/lib/supabase/types';

interface Props {
    messages: Tables<'messages'>[];
}

export default function Messages({ messages }: Props) {
    const handleMessageChanges = useCallback(
        (payload: any) => console.log(payload),
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
        <ul>
            {messages?.map((message) => (
                <li key={message.id}>{message.content}</li>
            ))}
        </ul>
    );
}
