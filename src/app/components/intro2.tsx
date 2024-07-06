import Image from 'next/image';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import { getStatistics } from '@/lib/reviews/get';

import { darkBg, darkFontColor, indigoGradient, lightBg, lightFontColor, sectionDarkGradient } from '../constants/colors';
import { adpListUserId, directMentees } from '../constants/me';
import { biroscript } from '../fonts/fonts';
import { sessions } from './sessions/constants';
import CtaButton from './ui/cta-button';
import Separator from './ui/separator';

const learnings = [
    'Get the basics right',
    'code like a Senior',
    'overcome impostor syndrome'
];

const highlightedText = (text: string) => <mark className={`${indigoGradient} px-2 text-5xl font-bold text-white sm:text-6xl`}>{text}</mark>;

export default async function Intro2() {
    const statistics = await getStatistics(adpListUserId);
    const mentees = statistics.sessions_completed + directMentees;
    const session = sessions[0];

    return (
        <article className={`relative ${sectionDarkGradient} sm:items-center sm:justify-between`}>
            <header className="absolute right-0 flex items-start gap-6 p-6">
                <div>
                    <div className={`${biroscript.className} pr-7 text-2xl sm:text-4xl sm:leading-tight`}>
                        Hi, I&apos;m Lean!
                    </div>
                    <Image
                        className="ml-auto"
                        src="/arrow.png"
                        alt="Arrow"
                        width={100}
                        height={42}
                    />
                </div>
                <div className="relative min-h-[80px] min-w-[80px] sm:size-[150px] sm:min-h-[150px] sm:min-w-[150px]">
                    <Image
                        className="rounded-full"
                        priority
                        src="/profile_big.jpg"
                        alt="Lean Vilas"
                        fill
                        sizes="(max-width: 430px) 80px, (min-width: 640px) 150px"
                    />
                </div>
            </header>
            <section className="relative mx-auto flex max-w-[740px] flex-col items-center gap-8 p-6 pt-32 sm:pb-24">
                <h1 className="text-center text-4xl font-bold leading-tight sm:text-6xl sm:leading-tight">
                    <p className="mb-2 sm:mb-0 sm:inline">Land your first dev job with</p>{' '}
                    {highlightedText('CONFIDENCE')}
                </h1>
                <p className="max-w-[500px] text-center text-lg font-light sm:text-xl">
                    {learnings.map((learning, index) => (
                        <span key={index}>{`
                            ${learning}${index !== learnings.length - 1 ? ', ' : ''}${index === learnings.length - 2 ? 'and' : ''}`}
                        </span>
                    ))}
                </p>
                <div className="w-full sm:max-w-96">
                    <CtaButton text="Launch your career for free 🚀" size="md" />
                </div>
            </section>
            <Separator />
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
                    Trusted by <strong className="font-bold">{mentees}+</strong> Software Developers 💜
                </p>
                <div className="mx-auto flex max-w-[790px] flex-col items-center gap-8 p-6 pt-24 sm:pt-32">
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
        </article>
    );
}
