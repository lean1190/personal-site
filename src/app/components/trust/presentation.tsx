import Image from 'next/image';

import { highlightText } from '@/lib/strings';

import styles from './presentation.module.css';

export default function Presentation() {
    return (
        <div className="relative">
            <div className={`${styles.fade} relative z-20 mx-auto flex flex-col items-center gap-8 p-6 pt-16 sm:pt-24 lg:pt-32`}>
                <h2 className="text-center text-4xl font-bold leading-tight sm:max-w-[365px] sm:text-6xl sm:leading-tight lg:max-w-full">
                    <p className="mb-2 sm:mb-0 sm:inline">Professional</p>{' '}{highlightText('MENTORING')}
                </h2>
                <p className="max-w-[500px] text-center text-lg font-light sm:text-xl">
                    Prepare to succeed with my advice from <strong className="font-bold">10+ years</strong> of Software Engineering experience
                </p>
            </div>
            <div className="absolute inset-0 z-10 hidden w-full justify-around gap-2 pt-16 sm:flex">
                {Array(14).fill(0).map((_, index) => (
                    <div key={index} className="relative h-[200px] max-h-[200px] w-[127px] max-w-[127px] rounded-xl">
                        <Image className="rounded-xl object-cover" priority src={`/mentees/mentee${index + 1}.webp`} fill={true} alt="Mentee" />
                    </div>
                ))}
            </div>
        </div>
    );
}
