import { Button, Link } from '@nextui-org/react';
import clsx from 'clsx';
import ky from 'ky';
import Image from 'next/image';
import { GoPlus } from 'react-icons/go';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import { shuffle } from '@/lib/arrays';

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

interface Session {
    name: string;
    benefits: string[];
    isPopular?: boolean;
}

const learnings = [
    'Get the job you deserve',
    'Overcome impostor syndrome',
    'Master best coding practices',
    'Communicate effectively'
];

const sessions: Session[] = [
    {
        name: 'Code mentoring',
        benefits: [
            'Personalized 1:1 mentoring',
            'Professional code review',
            'Live pair programming',
            'Document with best practices'
        ]
    },
    {
        name: 'Job preparation',
        benefits: [
            'Learn the 5 stages of the hiring process',
            'Learn how to nail each interview stage',
            'Prepare through interview simulations',
            'CV and LinkedIn review',
            'Template to track your applications'
        ],
        isPopular: true
    },
    {
        name: 'Speak confidently',
        benefits: [
            '1:1 communication coaching',
            'Contribute to team discussions',
            'Learn positive speech patterns',
            'Learn how to express your ideas'
        ]
    }
];

const indigoGradient = 'bg-gradient-to-r from-indigo-700 to-indigo-900';
// FIXME: the hover is weird, only one list stops
const marqueeStyles = 'flex overflow-hidden gap-4 select-none hover:[&_ul]:paused';
const marqueeContentStyles = clsx(
    'animate-marquee direction-reverse flex min-w-full shrink-0 justify-around gap-4',
    'motion-reduce:paused'
);
const reviewStyle = clsx(
    'size-72 overflow-hidden rounded-xl border-l-4 border-solid border-gray-600 p-4 shadow-lg',
    'odd:bg-slate-950 odd:text-slate-100',
    'even:border-y even:border-r even:border-y-slate-300 even:border-r-slate-300 even:bg-white even:text-slate-800'
);

const ctaButton = (
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
        Book a FREE 1:1 session
        </Button>
    </Link>
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

const ribbon = (text: string) => (
    <div className="absolute right-0 top-0 size-16">
        <div className="absolute right-[-35px] top-[32px] w-[170px] rotate-45 bg-green-600 py-1 text-center font-semibold text-white">{text}</div>
    </div>
);

export default async function Home() {
    const { results }: {
        results: Review[]
    } = await ky.get('https://api2.adplist.org/core/review/?user_id=112087&offset=0&limit=14&filter_keywords=').json();

    const reviews: Review[] = shuffle(results);

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
                    {ctaButton}
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
            </article>

            <article className="bg-[#0A0A28] py-32">
                <div className="mb-6 flex items-center justify-center gap-8 font-bold">
                    {sessions.map((session) => (
                        <div
                            key={session.name}
                            className={clsx(
                                'h-[600px] w-full rounded-3xl bg-black p-10 sm:w-96',
                                { 'border border-indigo-600 relative overflow-hidden': session.isPopular }
                            )}
                        >
                            {session.isPopular ? ribbon('Popular') : null}
                            <h3 className="mb-8 text-6xl">{session.name}</h3>
                            <p className="mb-6 text-sm font-light">This is what you get</p>
                            <ul className="mb-14 font-light">
                                {session.benefits.map((benefit, index) => (
                                    <li key={index} className="mb-2 flex items-center gap-2">
                                        <IoIosCheckmarkCircleOutline size={20} className="text-indigo-600" />
                                        <span>{benefit}</span>
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
                                    className="py-6 text-xl"
                                >
                                    Book now
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </article>
        </main>
    );
}

/**
 * Most popular packages
    - Code mentoring
    - Job preparation - most popular
    - Improve communication
 */
