'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import { darkBg, darkFontColor, pinkFontColor } from '@/app/constants/colors';
import useTracking from '@/lib/tracking/use-tracking';

import { Offer } from '../sessions/types';
import styles from './offer-item.module.css';

interface Props {
    offer: Offer;
    className?: string;
}

export default function OfferItem({ offer, className }: Props) {
    const tracking = useTracking();

    return (
        <Link
            href={offer.link}
            onClick={() => tracking.track(offer.id)}
            className={clsx(
                className,
                'cursor-pointer rounded-3xl p-1',
                styles.glow,
                {
                    'bg-black': !offer.isHighlight,
                    'animate-bg-move bg-gradient-to-r from-indigo-700 via-pink-400 to-indigo-900 bg-400%': offer.isHighlight
                }
            )}
        >
            <div className={`w-full rounded-3xl p-6 text-left text-white sm:px-6 sm:py-4 ${darkBg} ${darkFontColor}`}>
                <h3 className="text-2xl font-bold">{offer.name}</h3>
                <p className="mb-6 font-light text-slate-300">{offer.description}</p>
                <ul className="font-light">
                    {offer.benefits.map((benefit, i) => (
                        <li key={i} className="mb-2 flex items-center gap-2">
                            <IoIosCheckmarkCircleOutline size={20} className={pinkFontColor} />
                            <span className="text-sm sm:text-base">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Link>
    );
}
