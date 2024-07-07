import { getShuffledReviews, getStatistics } from '@/lib/reviews/get';

import AboutMe from './components/about-me';
import Footer from './components/footer';
import Intro from './components/intro';
import Reviews from './components/reviews/reviews';
import Sessions from './components/sessions/sessions';
import Trust from './components/trust/trust';
import Separator from './components/ui/separator';
import { adpListUserId, directMentees } from './constants/me';

export default async function Home() {
    const statistics = await getStatistics(adpListUserId);
    const reviews = await getShuffledReviews({ userId: adpListUserId });
    const menteesCount = statistics.sessions_completed + directMentees;

    return (
        <main className="text-white">
            <Intro />
            <Separator />

            <Trust menteesCount={menteesCount} />

            <Sessions />
            <Separator />

            <Reviews reviews={reviews.slice(0, 6)} />

            <AboutMe />

            <Footer />
        </main>
    );
}
