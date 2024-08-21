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
            target="_blank"
            onClick={() => tracking.track(offer.id)}
            className={clsx(
                className,
                'relative h-fit cursor-pointer rounded-3xl p-1',
                { 'bg-black': !offer.isHighlight }
            )}
        >
            <div className={`relative z-10 w-full rounded-3xl p-6 text-left text-white sm:px-6 sm:py-4 ${darkBg} ${darkFontColor}`}>
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
            {offer.isHighlight ? <span className={`${styles['glow-vercel']} z-0`}></span> : null}
        </Link>
    );
}
