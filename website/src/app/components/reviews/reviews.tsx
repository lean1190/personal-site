import { Link } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';

import { pragmatica } from '../../fonts/fonts';
import ReviewItem from './review-item';
import styles from './reviews.module.css';
import { Review } from './types';

const marqueeWrapperStyles = 'flex overflow-hidden gap-4 select-none';
// Disabled because the Tailwindcss animate package is not properly recognized
// eslint-disable-next-line tailwindcss/no-custom-classname
const marqueeListStyles = clsx(
    'animate-marquee direction-reverse flex min-w-full shrink-0 justify-around gap-4 p-4',
    'motion-reduce:paused'
);

interface Props {
    reviews: Review[]
}

export default function Reviews({ reviews }: Props) {
    return (
        <article className="bg-white py-12 text-slate-800">
            <h2 className={`${pragmatica.className} mb-12 text-center text-5xl font-bold`}>What mentees are saying about me 💜</h2>
            <div className="mb-12">
                <div className={`${styles['marquee-wrapper']} ${marqueeWrapperStyles}`}>
                    <ul className={marqueeListStyles}>{reviews.map((r) => <ReviewItem key={r.id} review={r} />)}</ul>
                    <ul className={marqueeListStyles} aria-hidden="true">{reviews.map((r) => <ReviewItem key={r.id} review={r} />)}</ul>
                </div>
            </div>
            <div className="mx-auto w-fit">
                <Link
                    href="https://adplist.org/mentors/leandro-nicolas-vilas"
                    target="_blank"
                    rel="nofollow"
                    className="w-full text-slate-800"
                >
                    <div className="flex w-full items-center justify-center gap-5">
                        <div className={`${pragmatica.className} hidden text-3xl font-bold sm:block`}>Top 1% Mentor</div>
                        <Image src="/toprated.png" alt="ADPList top rated" width={100} height={115} />
                        <Image src="/adplist_logo.svg" alt="ADPList logo" width={200} height={51} />
                    </div>
                </Link>
            </div>
        </article>
    );
}
