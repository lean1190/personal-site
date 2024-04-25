import clsx from 'clsx';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa6';

import { truncate } from '@/lib/strings';

import { indigoGradient } from '../gradients';
import { Review } from './types';

interface Props {
    review: Review;
}

const reviewStyle = clsx(
    'flex h-44 w-[600px] rounded-xl p-4 shadow-lg',
    'odd:bg-slate-950 odd:text-slate-100',
);

export default function ReviewItem({ review }: Props) {
    return (
        <li key={review.id} className={reviewStyle}>
            <figure className="flex w-full items-center gap-8">
                <div className="relative">
                    <Image
                        src={review.reviewed_by.profile_photo_url}
                        alt={review.reviewed_by.name}
                        width={128}
                        height={128}
                        className="max-h-32 min-h-32 min-w-32 max-w-32 rounded-full"
                    />
                    <div className={`absolute right-0 top-0 rounded-full p-2 text-white ${indigoGradient}`}>
                        <FaQuoteRight size={30} />
                    </div>
                </div>
                <div className="min-w-0 max-w-full font-light">
                    <blockquote className="mb-4">{truncate(review.review, 227)}</blockquote>
                    <figcaption className="truncate font-bold">{review.reviewed_by.name}, {review.reviewed_by.title}</figcaption>
                </div>
            </figure>
        </li>
    );
}
