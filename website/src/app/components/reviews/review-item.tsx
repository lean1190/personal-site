
import { User } from '@nextui-org/react';
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
            <User
                className="mb-4"
                name={review.reviewed_by.name}
                description={review.reviewed_by.title}
                avatarProps={{
                    src: review.reviewed_by.profile_photo_url
                }}
            />
            <blockquote>
                <i>{truncate(review.review, 227)}</i>
            </blockquote>
        </li>
    );
}
