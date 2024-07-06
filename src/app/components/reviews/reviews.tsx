import Image from 'next/image';

import { adpListUserId } from '@/app/constants/me';
import { biroscript } from '@/app/fonts/fonts';
import { getShuffledReviews } from '@/lib/reviews/get';

import { sessions } from '../sessions/constants';
import Session from '../sessions/session';
import ReviewsList from './reviews-list';

export default async function Reviews() {
    const reviews = await getShuffledReviews({ userId: adpListUserId });

    return (
        <article className="flex size-full flex-col items-start bg-white sm:flex-row sm:justify-between">
            <section className="flex h-full flex-col items-center justify-between gap-12 bg-white p-12 text-slate-800 sm:basis-1/2 sm:px-36">
                <div className={`${biroscript.className} mb-12 text-4xl sm:text-5xl sm:leading-tight`}>
                    Trusted by many 💜
                </div>
                <ReviewsList reviews={reviews} />
                <div className="flex flex-col flex-wrap items-center sm:flex-row">
                    <div className="flex items-center gap-2">
                        <Image src="/logos/toprated.png" width={100} height={50} alt="ADPList 1% mentor" />
                        <Image src="/logos/adplist_logo.svg" width={200} height={50} alt="ADPList logo" />
                    </div>
                    <Image src="/logos/awork_logo.webp" width={200} height={50} alt="ADPList logo" />
                    <Image src="/logos/fashion_cloud_logo.png" width={200} height={50} alt="ADPList logo" />
                    <Image src="/logos/fluxit_logo.svg" width={200} height={50} alt="ADPList logo" />
                </div>
            </section>
            <section className="flex flex-col items-center bg-[#0A0A28] p-12 sm:basis-1/2 sm:px-36">
                <div className={`${biroscript.className} mb-12 text-4xl uppercase sm:text-5xl sm:leading-tight`}>
                    Get Confident in 1 hour
                </div>
                <div className="grow"><Session session={sessions[0]} /></div>
            </section>
        </article>
    );
}
