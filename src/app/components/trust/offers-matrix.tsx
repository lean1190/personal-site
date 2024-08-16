'use client';

import Image from 'next/image';
import Link from 'next/link';

import { gumroadProfileLink } from '@/app/constants/links';
import { biroscript } from '@/app/fonts/fonts';
import useTracking from '@/lib/tracking/use-tracking';

import { offers } from '../sessions/constants';
import OfferItem from './offer-item';

export default function OffersMatrix() {
    const tracking = useTracking();

    return (
        <div className="relative mx-auto p-6 sm:my-12 sm:max-w-[860px] sm:px-0">
            <div className="grid gap-4 sm:grid-cols-2">
                {offers.map((offer, index) => <OfferItem
                    key={index}
                    offer={offer}
                />)}
            </div>
            <div className="absolute -left-36 bottom-12 hidden lg:block">
                <Image alt="arrow" src="/arrow-black.png" width={130} height={83} />
                <Link
                    href={gumroadProfileLink}
                    target="_blank"
                    className={`${biroscript.className} absolute -left-16 mt-4 -rotate-12 text-4xl hover:underline`}
                    onClick={() => tracking.track('freebies')}
                >
                    <p>Get</p>
                    <p>FREEBIES</p>
                </Link>
            </div>
        </div>
    );
}
