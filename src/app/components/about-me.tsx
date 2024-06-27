import Image from 'next/image';

import { biroscript } from '../fonts/fonts';

export default function AboutMe() {
    return (
        <article className="bg-white py-20 text-slate-800">
            <section className="mx-auto mb-12 px-6 sm:max-w-[1268px] sm:px-0">
                <h2 className={`${biroscript.className} mb-2 text-6xl`}>Hi, I&apos;m Lean</h2>
            </section>

            <section className="mx-auto mb-20 flex w-fit flex-col items-start gap-8 px-6 sm:max-w-[1268px] sm:flex-row sm:px-0">
                <div className="mb-12 font-light leading-loose sm:mb-0 sm:max-w-[550px]">
                    <div className="mb-8 rounded-xl p-6 shadow-lg sm:p-12">
                        <p className="mb-4 text-3xl leading-normal">Being a Confident Software Engineer means embracing uncertainty as a learning opportunity. It means speaking our minds while giving space to be curious about other ideas.</p>
                        <p className="text-3xl font-bold">It means believing in ourselves.</p>
                    </div>
                    <div className="rounded-xl bg-slate-950 p-6 text-slate-100 shadow-lg sm:p-12">
                        <h4 className="mb-6 text-3xl">The 3 pillars of confidence</h4>
                        <div className="mb-4 flex flex-col sm:mb-2 sm:flex-row sm:items-center sm:gap-2">
                            <p className="text-xl font-normal">Curiosity</p>
                            <p className="leading-normal text-slate-300">Look for opportunities to learn</p>
                        </div>
                        <div className="mb-4 flex flex-col sm:mb-2 sm:flex-row sm:items-center sm:gap-2">
                            <p className="text-xl font-normal">Assertiveness</p>
                            <p className="leading-normal text-slate-300">Communicate your thoughts effectively</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                            <p className="text-xl font-normal">Competence</p>
                            <p className="leading-normal text-slate-300">Know what you know and what you don&apos;t know</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <Image className="hidden rounded-xl shadow-xl sm:block" src="/about-me-patagonia-bg.jpg" alt="Lean Vilas" width={700} height={525} />
                    <div className="bg-white p-4 shadow-xl sm:absolute sm:right-4 sm:top-12">
                        <Image src="/about-me-patagonia.jpg" alt="Lean Vilas" width={350} height={440} />
                    </div>
                </div>
            </section>
        </article>
    );
}
