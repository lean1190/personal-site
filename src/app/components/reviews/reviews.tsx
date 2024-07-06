import { adpListUserId } from '@/app/constants/me';
import { biroscript } from '@/app/fonts/fonts';
import { getShuffledReviews } from '@/lib/reviews/get';

import ReviewsList from './reviews-list';

export default async function Reviews() {
    const reviews = await getShuffledReviews({ userId: adpListUserId });

    return (
        <article className="bg-white p-6 py-12 text-slate-800 sm:p-36">
            <section className="flex w-full min-w-full max-w-full flex-col items-center gap-6 sm:w-[600px] sm:min-w-[600px] sm:max-w-[600px]">
                <div className={`${biroscript.className} text-4xl sm:text-5xl sm:leading-tight`}>
                    Trusted by many 💜
                </div>
                <ReviewsList reviews={reviews} />
            </section>
        </article>
    );
}
