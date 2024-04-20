import { Link } from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';

import { pragmatica } from '../fonts/fonts';

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

export interface Review {
    id: number;
    review: string;
    reviewed_by: {
        name: string;
        title: string;
        profile_photo_url: string;
    }
}

interface Props {
    reviews: Review[]
}

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

export default function Reviews({ reviews }: Props) {
    return (
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
    );
}
