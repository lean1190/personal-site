import { getMessages } from '@/lib/messages/get';
import { supabaseServerClient } from '@/lib/supabase/server';

import MapView from './components/map-view';
import Messages from './components/messages';


export default async function PortfolioPage() {
    const messages = await getMessages() ?? [];
    const { data: { user } } = await supabaseServerClient.auth.getUser();

    return (
        <article className="flex size-full flex-col-reverse sm:flex-row">
            <Messages messages={messages} user={user} />
            <MapView />
        </article>
    );
}
