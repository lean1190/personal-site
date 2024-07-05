import { Link } from '@nextui-org/react';
import clsx from 'clsx';
import ky from 'ky';
import Image from 'next/image';

import { adplistLink, hcsLink } from '@/app/constants/links';
import { shuffle } from '@/lib/arrays';
import { Review, Statistics } from '@/lib/reviews/types';

import SectionHeader from '../ui/section-header';
import ReviewItem from './review-item';
import styles from './reviews.module.css';

const marqueeWrapperStyles = 'flex overflow-hidden gap-4 select-none';
// Disabled because the Tailwindcss animate package is not properly recognized
// eslint-disable-next-line tailwindcss/no-custom-classname
const marqueeListStyles = clsx(
    'flex min-w-full shrink-0 animate-marquee justify-around gap-4 py-4 duration-150s direction-reverse',
    'motion-reduce:paused',
    'sm:duration-300s'
);

const userId = '112087';
const directMentees = 30;

export default async function Reviews() {
    const { results }: {
        results: Review[]
    } = await ky.get(`https://api2.adplist.org/core/review/?user_id=${userId}&offset=0&limit=14&filter_keywords=`).json();

    const reviews: Review[] = shuffle(results);

    const statistics: Statistics = await ky.get(`https://api2.adplist.org/core/user-community-statistics/?identity_id=${userId}`).json();

    return (
        <article className="bg-white py-12 text-slate-800">
            <SectionHeader title="What mentees are saying about me 💜" />
            <section className="mb-12">
                <div className={`${styles['marquee-wrapper']} ${marqueeWrapperStyles}`}>
                    <ul className={marqueeListStyles}>{reviews.map((r) => <ReviewItem key={r.id} review={r} />)}</ul>
                    <ul className={marqueeListStyles} aria-hidden="true">{reviews.map((r) => <ReviewItem key={r.id} review={r} />)}</ul>
                </div>
            </section>
            <section className="mx-auto flex w-fit flex-col items-center gap-20 sm:flex-row">
                <div className="flex flex-col items-center justify-between gap-12 sm:flex-row">
                    <div className="text-center">
                        <p className="text-8xl font-bold sm:text-7xl">{statistics.sessions_completed + directMentees}+</p>
                        <p className="text-3xl font-light sm:text-2xl">Mentees 💜</p>
                    </div>
                    <div className="text-center">
                        <p className="text-8xl font-bold sm:text-7xl">{statistics.average_attendance}%</p>
                        <p className="text-3xl font-light sm:text-2xl">Attendance rate</p>
                    </div>
                </div>

                <Image className="hidden sm:block" src="/toprated.png" alt="ADPList top rated" width={100} height={115} />

                <div className="flex flex-col gap-12 sm:flex-row">
                    <Link
                        href={adplistLink}
                        target="_blank"
                        rel="nofollow"
                        className="w-full text-slate-800"
                    >
                        <Image src="/adplist_logo.svg" alt="ADPList logo" width={200} height={51} />
                    </Link>
                    <Link
                        href={hcsLink}
                        target="_blank"
                        rel="nofollow"
                        className="w-full text-slate-800"
                    >
                        <div>
                            <Image src="/hcs_logo.png" alt="Hamburg Coding School logo" width={200} height={94} />
                        </div>
                    </Link>
                </div>
            </section>
        </article>
    );
}
