import { supabaseServerClient } from '@/lib/supabase/server';
import { Tables } from '@/lib/supabase/types';

import Messages from './components/messages';


export default async function PortfolioPage() {
    const { data: messages }: { data: Tables<'messages'>[] | null } = await supabaseServerClient
        .from('messages')
        .select()
        .order('created_at', { ascending: true });

    return (
        <Messages messages={messages ?? []} />
    );
}
