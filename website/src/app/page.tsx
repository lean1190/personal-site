import { Button, Link } from '@nextui-org/react';
import clsx from 'clsx';
import ky from 'ky';
import Image from 'next/image';
import { GoPlus } from 'react-icons/go';

import { biroscript, pragmatica } from './fonts/fonts';

interface Review {
    id: number;
    review: string;
    reviewed_by: {
        name: string;
        title: string;
        profile_photo_url: string;
    }
}

const learnings = [
    'Get the job you deserve',
    'Overcome impostor syndrome',
    'Master best coding practices',
    'Communicate effectively'
];

const indigoGradient = 'bg-gradient-to-r from-indigo-700 to-indigo-900';
// FIXME: the hover is weird, only one list stops
const marqueeStyles = 'flex overflow-hidden gap-4 select-none hover:[&_ul]:paused';
const marqueeContentStyles = clsx(
    'animate-marquee direction-reverse flex min-w-full shrink-0 justify-around gap-4',
    'motion-reduce:paused'
);
const reviewStyle = clsx(
    'size-72 overflow-hidden rounded border-l-4 border-solid border-gray-600 p-4',
    'odd:bg-slate-950 odd:text-slate-100',
    'even:border-y even:border-r even:border-y-slate-300 even:border-r-slate-300 even:bg-white even:text-slate-800'
);

const sliceReviewText = (text: string) => (text.length > 227 ? `${text.slice(0, 227)}...` : text);

const reviewListItem = (review: Review) => (
    <li key={review.id} className={reviewStyle}>
        <figure className="mb-2 flex w-full items-center gap-2">
            <Image
                src={review.reviewed_by.profile_photo_url}
                alt={review.reviewed_by.name}
                width={48}
                height={48}
                className="max-h-12 max-w-12 rounded-full"
            />
            <div className={`${pragmatica.className} min-w-0 max-w-full font-light`}>
                <figcaption className="truncate font-bold">{review.reviewed_by.name}</figcaption>
                <div className="truncate text-sm text-slate-400">{review.reviewed_by.title}</div>
            </div>
        </figure>
        <blockquote>
            <i>&quot; {sliceReviewText(review.review)}</i>
        </blockquote>
    </li>
);

export default async function Home() {
    const { results: reviews }: {
        results: Review[]
    } = await ky.get('https://api2.adplist.org/core/review/?user_id=112087&offset=0&limit=14&filter_keywords=').json();

    return (
        <main className="text-white">
            <article className="flex flex-col gap-12 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-36">
                <section className="max-w-[630px]">
                    <h1 className="mb-8 text-6xl leading-tight sm:mb-6">
                        <span>Become a</span>{' '}
                        <mark className={`${indigoGradient} px-2 font-bold text-white`}>CONFIDENT</mark>{' '}
                        <span className="text-4xl sm:text-6xl">Software Engineer</span>
                    </h1>
                    <ul className="mb-16">
                        {learnings.map((learning, index) => (
                            <li key={index} className="mb-2 flex items-center gap-2">
                                <GoPlus size={30} />
                                <span className="text-2xl">{learning}</span>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="https://leanvilas.com"
                        target="_blank"
                        className="w-full"
                    >
                        <Button
                            fullWidth
                            variant="ghost"
                            color="secondary"
                            radius="sm"
                            className="py-8 text-2xl"
                        >
                            Book a FREE 1:1 call
                        </Button>
                    </Link>
                </section>
                <section className="flex items-start">
                    <div>
                        <div className={`${biroscript.className} pr-7 text-5xl`}>Hi, I&apos;m Lean!</div>
                        <div><Image className="ml-auto" src="/arrow.png" alt="Arrow" width={200} height={100} /></div>
                    </div>
                    <div><Image src="/profile_big.jpg" alt="Lean Vilas" width={450} height={600} className="rounded-full" /></div>
                </section>
            </article>

            <div className={`${indigoGradient} h-[2px] w-full`}></div>

            <article className="bg-white py-6 text-slate-800">
                <div className="mb-6">
                    <div className={marqueeStyles}>
                        <ul className={marqueeContentStyles}>{reviews.map(reviewListItem)}</ul>
                        <ul className={marqueeContentStyles} aria-hidden="true">{reviews.map(reviewListItem)}</ul>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center gap-5   ">
                    <div className={`${pragmatica.className} text-3xl font-bold`}>Top 1% Mentor</div>
                    <Image src="/toprated.png" alt="ADPList top rated" width={100} height={100} />
                    <Image src="/adplist_logo.svg" alt="ADPList logo" width={200} height={500} />
                </div>
            </article>

            <article>
                Most popular packages
                - Code mentoring
                - Job preparation - most popular
                - Improve communication
            </article>
        </main>
    );
}
