import { getShuffledReviews } from '@/lib/reviews/get';

import AboutMe from './components/about-me';
import Footer from './components/footer';
import Intro from './components/intro';
import Reviews from './components/reviews/reviews';
import Sessions from './components/sessions/sessions';
import Trust from './components/trust/trust';
import Separator from './components/ui/separator';
import { adpListUserId } from './constants/me';

export default async function Home() {
    const reviews = await getShuffledReviews({ userId: adpListUserId });

    return (
        <main className="text-white">
            <Intro />
            <Separator />

            <Trust />

            <Sessions />
            <Separator />

            <Reviews reviews={reviews.slice(0, 6)} />

            <AboutMe />

            <Footer />
        </main>
    );
}
