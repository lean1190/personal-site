'use client';

import { useEffect } from 'react';

import { supabaseBrowserClient } from '@/lib/supabase/client';

export default function Auth() {
    useEffect(() => {
        const signInIfNoUser = async () => {
            const { data: user, error } = await supabaseBrowserClient.auth.getUser();
            if (!error && !!user) {
                return;
            }
            await supabaseBrowserClient.auth.signInAnonymously();
        };

        signInIfNoUser();
    }, []);

    return null;
}
