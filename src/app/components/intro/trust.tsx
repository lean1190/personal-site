import Image from 'next/image';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import { darkBg, darkFontColor, lightBg, lightFontColor } from '@/app/constants/colors';

import { sessions } from '../sessions/constants';
import CtaButton from '../ui/cta-button';
import { highlightedText } from './functions';

interface Props {
    menteesCount: number;
}

const session = sessions[0];

export default function Trust({ menteesCount }: Props) {
    return (
        <section className={`w-full py-6 pb-12 text-center ${lightBg} ${lightFontColor}`}>
            <div className="mb-8 flex flex-col flex-wrap items-center justify-center gap-12 sm:flex-row">
                <div className="flex items-center gap-2 transition hover:grayscale-0 sm:grayscale">
                    <Image src="/logos/toprated.png" width={60} height={69} alt="ADPList 1% mentor" />
                    <Image src="/logos/adplist_logo.svg" width={160} height={41} alt="ADPList logo" />
                </div>
                <Image className="hidden grayscale transition hover:grayscale-0 sm:block" src="/logos/hcs_logo.png" width={160} height={75} alt="HCS logo" />
                <Image className="hidden grayscale transition hover:grayscale-0 sm:block" src="/logos/awork_logo.webp" width={160} height={44} alt="Awork logo" />
                <Image className="hidden grayscale transition hover:grayscale-0 sm:block" src="/logos/fashion_cloud_logo.png" width={160} height={43} alt="Fashion Cloud logo" />
                <Image className="hidden grayscale transition hover:grayscale-0 sm:block" src="/logos/fluxit_logo.jpg" width={140} height={70} alt="FluxIt logo" />
            </div>
            <p className="text-2xl font-light sm:text-3xl">
                    Trusted by <strong className="font-bold">{menteesCount}+</strong> Software Developers 💜
            </p>
            <div className="mx-auto flex max-w-[790px] flex-col items-center gap-8 p-6 pt-16 sm:pt-32">
                <h2 className="text-center text-4xl font-bold leading-tight sm:text-6xl sm:leading-tight">
                    <p className="mb-2 sm:mb-0 sm:inline">Professional</p>{' '}{highlightedText('MENTORING')}
                </h2>
                <p className="max-w-[500px] text-center text-lg font-light sm:text-xl">
                        Prepare to succeed with my advice from <strong className="font-bold">10+ years</strong> of Software Engineering experience
                </p>
            </div>
            <div className="mx-auto max-w-[790px] p-6">
                <div
                    className={`w-full rounded-3xl border border-indigo-600 p-10 text-left text-white ${darkBg} ${darkFontColor}`}
                >
                    <h3 className="mb-4 text-5xl font-light sm:text-6xl">{session.name}</h3>
                    <div className="mb-8 flex flex-wrap items-center gap-2">
                        {session.tags.map(({ name, colorClass }, index) => (
                            <span key={index} className={`rounded px-2 py-1 text-xs font-light sm:text-sm ${colorClass}`}>{name}</span>
                        ))}
                    </div>
                    <ul className="mb-14 font-light">
                        {session.benefits.map((benefit, index) => (
                            <li key={index} className="mb-2 flex items-center gap-2">
                                <IoIosCheckmarkCircleOutline size={20} className="text-indigo-600" />
                                <span className="text-sm sm:text-base">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <div className="hidden sm:block">
                            <CtaButton text="Begin your guided journey to success 💪" link={session.link} size="md" />
                        </div>
                        <div className="block sm:hidden">
                            <CtaButton text="Begin your journey 💪" link={session.link} size="md" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
