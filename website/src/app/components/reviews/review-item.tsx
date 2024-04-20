
import clsx from 'clsx';
import Image from 'next/image';

import { pragmatica } from '@/app/fonts/fonts';
import { truncate } from '@/lib/strings';

import { Review } from './types';

interface Props {
    review: Review;
}

const reviewStyle = clsx(
    'size-72 overflow-hidden rounded-xl border-l-4 border-solid border-gray-600 p-4 shadow-lg',
    'odd:bg-slate-950 odd:text-slate-100',
    'even:border-y even:border-r even:border-y-slate-300 even:border-r-slate-300 even:bg-white even:text-slate-800'
);

export default function ReviewItem({ review }: Props) {
    return (
        <li key={review.id} className={reviewStyle}>
            <figure className="mb-4 flex w-full items-center gap-2">
                <Image
                    src={review.reviewed_by.profile_photo_url}
                    alt={review.reviewed_by.name}
                    width={48}
                    height={48}
                    className="max-h-12 max-w-12 rounded-full"
                />
                <div className={`${pragmatica.className} min-w-0 max-w-full font-light`}>
                    <figcaption className="truncate font-bold">{review.reviewed_by.name}</figcaption>
                    <div className="truncate text-sm tracking-wide text-slate-400">{review.reviewed_by.title}</div>
                </div>
            </figure>
            <blockquote>
                <i>{truncate(review.review, 227)}</i>
            </blockquote>
        </li>
    );
}
