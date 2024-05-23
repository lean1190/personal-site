import { Link } from '@nextui-org/react';
import clsx from 'clsx';
import ky from 'ky';
import Image from 'next/image';

import { adplistLink } from '@/app/constants/links';
import { shuffle } from '@/lib/arrays';

import SectionHeader from '../section-header';
import ReviewItem from './review-item';
import styles from './reviews.module.css';
import { Review } from './types';

const marqueeWrapperStyles = 'flex overflow-hidden gap-4 select-none';
// Disabled because the Tailwindcss animate package is not properly recognized
// eslint-disable-next-line tailwindcss/no-custom-classname
const marqueeListStyles = clsx(
    'flex min-w-full shrink-0 animate-marquee justify-around gap-4 py-4 direction-reverse',
    'motion-reduce:paused'
);

export default async function Reviews() {
    const { results }: {
        results: Review[]
    } = await ky.get('https://api2.adplist.org/core/review/?user_id=112087&offset=0&limit=14&filter_keywords=').json();

    const reviews: Review[] = shuffle(results);

    return (
        <article className="bg-white py-12 text-slate-800">
            <SectionHeader title="What mentees are saying about me 💜" />
            <section className="mb-12">
                <div className={`${styles['marquee-wrapper']} ${marqueeWrapperStyles}`}>
                    <ul className={marqueeListStyles}>{reviews.map((r) => <ReviewItem key={r.id} review={r} />)}</ul>
                    <ul className={marqueeListStyles} aria-hidden="true">{reviews.map((r) => <ReviewItem key={r.id} review={r} />)}</ul>
                </div>
            </section>
            <section className="mx-auto w-fit">
                <Link
                    href={adplistLink}
                    target="_blank"
                    rel="nofollow"
                    className="w-full text-slate-800"
                >
                    <div className="flex w-full items-center justify-center gap-5">
                        <div className="hidden text-3xl font-bold sm:block">Top 1% Mentor</div>
                        <Image src="/toprated.png" alt="ADPList top rated" width={100} height={115} />
                        <Image src="/adplist_logo.svg" alt="ADPList logo" width={200} height={51} />
                    </div>
                </Link>
            </section>
        </article>
    );
}
