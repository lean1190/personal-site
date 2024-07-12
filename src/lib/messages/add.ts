'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { actionClient } from '@/lib/server-actions/client';

import { supabaseServerClient } from '../supabase/server';

const schema = z.object({
    id: z.string(),
    user_id: z.string().uuid(),
    content: z.string().min(1),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime()
});

export type NewMessage = z.infer<typeof schema>;

export const addMessageAction = actionClient
    .metadata({ actionName: 'Add message' })
    .schema(schema)
    .action(async ({ parsedInput }: { parsedInput: NewMessage }) => {
        await supabaseServerClient.from('messages').insert({ ...parsedInput, id: undefined });
        revalidatePath('/portfolio2');
    });
