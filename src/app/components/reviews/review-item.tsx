import clsx from 'clsx';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa6';
import { MdVerified } from 'react-icons/md';

import { Review } from '@/lib/reviews/types';
import { truncateString } from '@/lib/strings';

import { indigoGradient } from '../../constants/colors';

interface Props {
    review: Review;
    index: number;
}

const isOddIndex = (index: number) => index % 2 !== 0;

const reviewStyle = clsx(
    'w-full min-w-0 max-w-full rounded-xl p-1',
    'h-80 bg-gradient-to-r from-indigo-700 via-green-200 to-indigo-900 text-sm text-slate-950 opacity-100 shadow-lg',
    'sm:h-96'
);

const figureStyle = (index: number) => clsx(
    'flex size-full flex-col justify-between rounded-xl p-6 text-left sm:p-10',
    { 'bg-white text-slate-800': isOddIndex(index) },
    { 'bg-[#0A0A28] text-white': !isOddIndex(index) }
);

const imageStyle = clsx(
    'max-h-20 min-h-20 min-w-20 max-w-20 rounded-full object-cover',
    'sm:max-h-28 sm:min-h-28 sm:min-w-28 sm:max-w-28'
);

export default function ReviewItem({
    review: { review, reviewed_by },
    index
}: Props) {
    return (
        <li className={reviewStyle}>
            <figure className={figureStyle(index)}>
                <div>
                    <blockquote className="hidden text-sm font-light leading-normal sm:block sm:text-lg">{truncateString(review, 350)}</blockquote>
                    <blockquote className="block text-sm font-light leading-normal sm:hidden sm:text-lg">{truncateString(review, 320)}</blockquote>
                </div>
                <div className="flex items-center justify-start gap-x-6">
                    <div className="relative">
                        <Image
                            src={reviewed_by.profile_photo_url}
                            alt={reviewed_by.name}
                            width={128}
                            height={128}
                            className={imageStyle}
                        />
                        <div className={`absolute right-0 top-0 rounded-full p-2 text-white ${indigoGradient}`}>
                            <FaQuoteRight size={30} className="hidden sm:block" />
                            <FaQuoteRight size={15} className="block sm:hidden" />
                        </div>
                    </div>
                    <div className="flex min-w-0 max-w-full flex-col items-start gap-1 font-light">
                        <div className="flex items-center gap-2">
                            <figcaption className="max-w-28 truncate text-sm font-bold sm:max-w-72 sm:text-lg">{reviewed_by.name}</figcaption>
                            <label className="flex w-fit items-center gap-1 rounded-full border border-green-600 px-2 py-1 text-xs font-bold text-green-600">
                                <MdVerified size={18} /> <span className="hidden sm:inline">Verified</span>
                            </label>
                        </div>
                        <figcaption className="text-sm capitalize sm:text-lg">{reviewed_by.title}</figcaption>
                    </div>
                </div>
            </figure>
        </li>
    );
}
