import ky from 'ky';

import { shuffle } from '@/lib/arrays';

import { indigoGradient } from './components/gradients';
import Intro from './components/intro';
import Reviews from './components/reviews/reviews';
import { Review } from './components/reviews/types';
import Sessions from './components/sessions';

export default async function Home() {
    const { results }: {
        results: Review[]
    } = await ky.get('https://api2.adplist.org/core/review/?user_id=112087&offset=0&limit=14&filter_keywords=').json();

    const reviews: Review[] = shuffle(results);

    return (
        <main className="text-white">
            <Intro />

            <div className={`${indigoGradient} h-[2px] w-full`}></div>

            <Reviews reviews={reviews} />

            <Sessions />
        </main>
    );
}
