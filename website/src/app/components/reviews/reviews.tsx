import { Link } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';

import { pragmatica } from '../../fonts/fonts';
import ReviewItem from './review-item';
import styles from './reviews.module.css';
import { Review } from './types';

// FIXME: the hover is weird, only one list stops
const marqueeWrapperStyles = 'flex overflow-hidden gap-4 select-none';
const marqueeListStyles = clsx(
    'animate-marquee direction-reverse flex min-w-full shrink-0 justify-around gap-4',
    'motion-reduce:paused'
);

interface Props {
    reviews: Review[]
}

export default function Reviews({ reviews }: Props) {
    return (
        <article className="bg-white py-6 text-slate-800">
            <div className="mb-6">
                <div className={`${styles['marquee-wrapper']} ${marqueeWrapperStyles}`}>
                    <ul className={marqueeListStyles}>{reviews.map((r) => <ReviewItem key={r.id} review={r} />)}</ul>
                    <ul className={marqueeListStyles} aria-hidden="true">{reviews.map((r) => <ReviewItem key={r.id} review={r} />)}</ul>
                </div>
            </div>
            <div className="mx-auto w-fit">
                <Link
                    href="https://adplist.org/mentors/leandro-nicolas-vilas"
                    target="_blank"
                    className="w-full text-slate-800"
                >
                    <div className="flex w-full items-center justify-center gap-5">
                        <div className={`${pragmatica.className} text-3xl font-bold`}>Top 1% Mentor</div>
                        <Image src="/toprated.png" alt="ADPList top rated" width={100} height={100} />
                        <Image src="/adplist_logo.svg" alt="ADPList logo" width={200} height={500} />
                    </div>
                </Link>
            </div>
        </article>
    );
}
