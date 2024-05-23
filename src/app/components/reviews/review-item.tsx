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
    'flex h-44 w-[300px] rounded-xl p-4 shadow-lg sm:h-44 sm:w-[600px]',
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
                        className="max-h-20 min-h-20 min-w-20 max-w-20 rounded-full object-cover sm:max-h-32 sm:min-h-32 sm:min-w-32 sm:max-w-32"
                    />
                    <div className={`absolute right-0 top-0 rounded-full p-2 text-white ${indigoGradient}`}>
                        <FaQuoteRight size={30} className="hidden sm:block" />
                        <FaQuoteRight size={15} className="block sm:hidden" />
                    </div>
                </div>
                <div className="flex max-h-full min-w-0 max-w-full flex-col justify-between gap-2 font-light">
                    <blockquote className="hidden text-sm sm:block">{truncate(review.review, 312)}</blockquote>
                    <blockquote className="block text-xs sm:hidden">{truncate(review.review, 140)}</blockquote>
                    <figcaption className="truncate text-xs font-bold sm:text-base">{review.reviewed_by.name}, {review.reviewed_by.title}</figcaption>
                </div>
            </figure>
        </li>
    );
}
