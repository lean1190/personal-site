import clsx from 'clsx';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa6';

import { Review } from '@/lib/reviews/types';
import { truncateString } from '@/lib/strings';

import { indigoGradient } from '../../constants/gradients';

interface Props {
    review: Review;
    index: number;
}

const selectedReviewIndex = 1;
const isSelectedIndex = (index: number) => index === selectedReviewIndex;

const reviewStyle = (reviewIndex: number) => clsx(
    'relative flex w-full min-w-0 max-w-full rounded-xl p-4 transition-all',
    { 'bg-white h-44 text-slate-950 text-sm sm:w-[600px] sm:w-max-[600px] opacity-100 shadow-lg z-10': isSelectedIndex(reviewIndex) },
    { 'bg-slate-700 h-24 text-slate-100 text-xs sm:w-[500px] sm:w-max-[500px] overflow-hidden -my-4': !isSelectedIndex(reviewIndex) }
);

const quoteStyle = (isMobile: boolean) => (reviewIndex: number) => clsx(
    { 'hidden text-sm sm:block': !isMobile },
    { 'text-xs': !isMobile && !isSelectedIndex(reviewIndex) },
    { 'block text-xs sm:hidden': isMobile },
    { 'text-xs': isMobile && !isSelectedIndex(reviewIndex) },
);

const nameStyle = (reviewIndex: number) => clsx(
    'truncate font-bold',
    { 'text-sm': isSelectedIndex(reviewIndex) },
    { 'text-xs': !isSelectedIndex(reviewIndex) }
);

const imageStyle = (reviewIndex: number) => clsx(
    'max-h-20 min-h-20 min-w-20 max-w-20 rounded-full object-cover',
    { 'sm:max-h-32 sm:min-h-32 sm:min-w-32 sm:max-w-32': isSelectedIndex(reviewIndex) },
    { 'sm:max-h-20 sm:min-h-20 sm:min-w-20 sm:max-w-20': !isSelectedIndex(reviewIndex) },
);

const truncateReviewByIndex = (
    review: string,
    length: number,
    index: number
): string => {
    if (isSelectedIndex(index)) {
        return truncateString(review, length);
    }

    const minimumLength = 100;

    return truncateString(review, minimumLength);
};

export default function ReviewItem({
    review: { review, reviewed_by },
    index
}: Props) {
    return (
        <li className={reviewStyle(index)}>
            <figure className="flex w-full items-center gap-8">
                <div className="relative">
                    <Image
                        src={reviewed_by.profile_photo_url}
                        alt={reviewed_by.name}
                        width={128}
                        height={128}
                        className={imageStyle(index)}
                    />
                    {isSelectedIndex(index) ? (
                        <div className={`absolute right-0 top-0 rounded-full p-2 text-white ${indigoGradient}`}>
                            <FaQuoteRight size={30} className="hidden sm:block" />
                            <FaQuoteRight size={15} className="block sm:hidden" />
                        </div>
                    ) : null}
                </div>
                <div className="flex max-h-full min-w-0 max-w-full flex-col justify-between gap-2 font-light">
                    <blockquote className={quoteStyle(false)(index)}>{truncateReviewByIndex(review, 312, index)}</blockquote>
                    <blockquote className={quoteStyle(true)(index)}>{truncateReviewByIndex(review, 140, index)}</blockquote>
                    <figcaption className={nameStyle(index)}>{reviewed_by.name}, {reviewed_by.title}</figcaption>
                </div>
            </figure>
            {!isSelectedIndex(index) ? <div className="absolute left-0 top-0 size-full rounded-xl bg-black opacity-50"></div> : null}
        </li>
    );
}
