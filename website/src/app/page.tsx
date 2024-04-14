import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import { GoPlus } from 'react-icons/go';

import { biroscript, pragmatica } from './fonts/fonts';

const learnings = [
    'Get the job you deserve',
    'Overcome impostor syndrome',
    'Master best coding practices',
    'Communicate effectively'
];

const indigoGradient = 'bg-gradient-to-r from-indigo-700 to-indigo-900';
const greyGradient = 'bg-gradient-to-b from-slate-900 to-slate-800';

export default function Home() {
    // https://api2.adplist.org/core/review/?user_id=112087&offset=0&limit=3&filter_keywords=
    // Call for reviews
    return (
        <main className="text-white">
            <article className="flex flex-col gap-12 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-36">
                <section className="max-w-[630px]">
                    <h1 className="mb-8 text-6xl leading-tight sm:mb-6">
                        <span>Become a</span>{' '}
                        <mark className={`${indigoGradient} px-2 font-bold text-white`}>CONFIDENT</mark>{' '}
                        <span className="text-4xl sm:text-6xl">Software Engineer</span>
                    </h1>
                    <ul className="mb-16">
                        {learnings.map((learning, index) => (
                            <li key={index} className="mb-2 flex items-center gap-2">
                                <GoPlus size={30} />
                                <span className="text-2xl">{learning}</span>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="https://leanvilas.com"
                        target="_blank"
                        className="w-full"
                    >
                        <Button
                            fullWidth
                            variant="ghost"
                            color="secondary"
                            radius="sm"
                            className="py-8 text-2xl"
                        >
                            Book a FREE 1:1 call
                        </Button>
                    </Link>
                </section>
                <section className="flex items-start">
                    <div>
                        <div className={`${biroscript.className} pr-7 text-5xl`}>Hi, I&apos;m Lean!</div>
                        <div><Image className="ml-auto" src="/arrow.png" alt="Arrow" width={200} height={100} /></div>
                    </div>
                    <div><Image src="/profile_big.jpg" alt="Lean Vilas" width={450} height={600} className="rounded-full" /></div>
                </section>
            </article>

            <div className={`${indigoGradient} h-[2px] w-full`}></div>

            <article className="">
                <div className="flex h-96 w-full items-center justify-center gap-5 bg-white p-6 text-slate-800 sm:px-36">
                    <div className={`${pragmatica} text-3xl font-bold`}>Top 1% Mentor</div>
                    <Image src="/toprated.png" alt="ADPList top rated" width={100} height={100} />
                    <Image src="/adplist_logo.svg" alt="ADPList logo" width={200} height={500} />
                </div>
            </article>

            <div>
                    People I mentored from ADPList - As the ICP
                    Trend of amount of sessions in the last months?
            </div>

            <article>
                Most popular packages
                - Code mentoring
                - Job preparation - most popular
                - Improve communication
            </article>
        </main>
    );
}
