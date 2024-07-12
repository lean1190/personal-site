import { getMessages } from '@/lib/messages/get';
import { supabaseServerClient } from '@/lib/supabase/server';

import Messages from './components/messages';


export default async function PortfolioPage() {
    const messages = await getMessages() ?? [];
    const { data: { user } } = await supabaseServerClient.auth.getUser();

    return (
        <Messages messages={messages} user={user} />
    );
}
