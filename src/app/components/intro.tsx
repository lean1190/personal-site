import Image from 'next/image';

import { indigoGradient } from '../constants/gradients';
import { biroscript } from '../fonts/fonts';
import CtaButton from './ui/cta-button';

const learnings = [
    'Catapult your career in tech',
    'Overcome impostor syndrome',
    'Adopt a Senior mindset'
];

export default function Intro() {
    return (
        <article className="flex flex-col gap-12 p-6 pt-12 sm:flex-row sm:items-center sm:justify-between sm:p-36">
            <section className="mb-8 max-w-[630px] sm:mb-0">
                <h1 className="mb-8 text-5xl font-light leading-tight sm:mb-6 sm:text-6xl sm:leading-tight">
                    <span>Grok into tech with</span>{' '}
                    <mark className={`${indigoGradient} px-2 font-bold text-white`}>CONFIDENCE</mark>
                </h1>
                <ul className="mb-16">
                    {learnings.map((learning, index) => (
                        <li key={index} className="mb-2 flex items-center gap-2">
                            <Image priority alt="plus" src="/plus.png" width={25} height={25} />
                            <span className="text-xl font-light sm:text-2xl">{learning}</span>
                        </li>
                    ))}
                </ul>
                <CtaButton text="Book a FREE confidence session 💪" size="lg" />
            </section>
            <section className="flex items-start gap-6">
                <div>
                    <div className={`${biroscript.className} pr-7 text-4xl sm:text-5xl sm:leading-tight`}>
                        Hi, I&apos;m Lean!
                    </div>
                    <Image
                        className="ml-auto"
                        src="/arrow.png"
                        alt="Arrow"
                        width={200}
                        height={84}
                    />
                </div>
                <div className="relative min-h-[180px] min-w-[180px] sm:size-[450px] sm:min-h-[450px] sm:min-w-[450px]">
                    <Image
                        className="rounded-full"
                        priority
                        src="/profile_big.jpg"
                        alt="Lean Vilas"
                        fill
                        sizes="(max-width: 430px) 180px, (min-width: 640px) 450px"
                    />
                </div>
            </section>
        </article>
    );
}
