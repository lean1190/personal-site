import Image from 'next/image';
import { GoPlus } from 'react-icons/go';

import SectionHeader from './ui/section-header';

const reasons = [
    'I will listen to you deeply and empathetically',
    'I will help you spark new ideas and opportunities',
    'I will help you reach your full potential'
];

const values: { name: string, description: string }[] = [
    { name: 'Collaboration', description: 'I believe the best results are achieved by having different perspectives and opinions on the table, to be able to craft compelling and holistic solutions.' },
    { name: 'Transparency', description: 'Transparent, honest, and clear communication are core to my person. In tough times, I prefer to talk about things instead of avoiding a conflict.' },
    { name: 'Relatedness', description: 'I value relationships a lot, and it\'s important to me that we can create a meaningful relationship beyond a working transaction.' },
    { name: 'Curiosity', description: 'There\'s always more to learn, and I\'m happy to learn from you and embrace new challenges with a growth mindset.' }
];

export default function AboutMe() {
    return (
        <article className="bg-white pb-20 pt-12 text-slate-800">
            <SectionHeader
                title="I'm Lean"
                subtitle="Your software engineering mentor and coach"
            />
            <section className="mx-auto mb-20 flex w-fit flex-col items-start gap-8 px-6 sm:max-w-[1268px] sm:flex-row sm:px-0">
                <div className="mb-32 font-light leading-loose sm:mb-0 sm:max-w-[550px]">
                    <div className="mb-20">
                        <h4 className="mb-6 text-6xl">This is me</h4>
                        <p className="mb-4 font-bold leading-tight">I&apos;m a lead software engineer, mentor, coach, and communication advocate. </p>
                        <p className="mb-2 text-sm sm:text-base">I consider myself a chilled and approachable person.</p>
                        <p className="mb-2 text-sm sm:text-base">I laugh a lot and I don&apos;t mind making fun of myself.</p>
                        <p className="text-sm sm:text-base">I was born in Argentina 🇦🇷 and moved to Germany 🇩🇪 for work.</p>
                    </div>
                    <div>
                        <h4 className="mb-6 text-6xl">Why learn with me</h4>
                        <p className="mb-4 font-bold leading-tight">I&apos;m driven by helping people grow and overcome difficult situations.</p>
                        <ul>
                            {reasons.map((reason, index) => (
                                <li key={index} className="mb-2 flex items-center gap-2 text-sm sm:mb-0 sm:text-base">
                                    <GoPlus /> {reason}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="relative">
                    <Image className="rounded-xl" src="/about-me-patagonia-bg.jpg" alt="Lean Vilas" width={700} height={525} />
                    <Image className="absolute -bottom-8 right-4 bg-white px-4 pt-4 sm:right-10" src="/about-me-patagonia.jpg" alt="Lean Vilas" width={350} height={440} />
                </div>
            </section>
            <section className="mx-auto w-fit px-6 sm:w-[1268px] sm:px-0">
                <h4 className="mb-8 text-6xl font-light">My values</h4>
                <ul className="flex flex-col items-start justify-between gap-6 sm:flex-row">
                    {values.map((value, index) => (
                        <li key={index} className="min-w-0 shrink grow basis-0">
                            <p className="mb-2 text-xl font-bold uppercase tracking-wider">{value.name}</p>
                            <p>{value.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}
