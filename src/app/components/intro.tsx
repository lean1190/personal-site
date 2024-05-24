import Image from 'next/image';
import { GoPlus } from 'react-icons/go';

import { indigoGradient } from '../constants/gradients';
import { biroscript } from '../fonts/fonts';
import CtaButton from './cta-button';

const learnings = [
    'Get the job you deserve',
    'Overcome impostor syndrome',
    'Master best coding practices',
    'Communicate effectively'
];

export default function Intro() {
    return (
        <article className="flex flex-col gap-12 p-6 pt-12 sm:flex-row sm:items-center sm:justify-between sm:p-36">
            <section className="mb-8 max-w-[630px] sm:mb-0">
                <h1 className="mb-8 text-5xl leading-tight sm:mb-6 sm:text-6xl sm:leading-tight">
                    <span>Become a</span>{' '}
                    <mark className={`${indigoGradient} px-2 font-bold text-white`}>CONFIDENT</mark>{' '}
                    <span className="text-4xl sm:text-6xl">Software Engineer</span>
                </h1>
                <ul className="mb-16">
                    {learnings.map((learning, index) => (
                        <li key={index} className="mb-2 flex items-center gap-2">
                            <GoPlus size={30} />
                            <span className="text-xl sm:text-2xl">{learning}</span>
                        </li>
                    ))}
                </ul>
                <CtaButton text="Book a FREE 1:1 session 💪" size="lg" />
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
