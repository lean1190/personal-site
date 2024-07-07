import Image from 'next/image';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import { biroscript } from '../fonts/fonts';

export default function AboutMe() {
    return (
        <article className="bg-white py-20 text-slate-800">
            <section className="mx-auto mb-12 px-6 text-center sm:max-w-[1268px] sm:px-0">
                <h2 className={`${biroscript.className} mb-2 text-6xl`}>Hi, I&apos;m Lean</h2>
            </section>

            <section className="mx-auto mb-20 flex flex-col items-start gap-8 px-6 sm:max-w-[1268px] sm:px-0">
                <div className="mb-12 flex w-full flex-col gap-12 font-light leading-loose sm:mb-0 sm:flex-row">
                    <div className="basis-1/2 rounded-xl bg-slate-950 p-6 text-slate-100 shadow-lg sm:p-12">
                        <h4 className="mb-6 text-2xl sm:text-3xl">Why prepare with me?</h4>
                        <div className="mb-4 flex gap-2 sm:mb-2 sm:items-center">
                            <IoIosCheckmarkCircleOutline size={20} className="text-indigo-600" />
                            <p className="text-sm font-light sm:text-xl">Software Engineer for 10+ years</p>
                        </div>
                        <div className="mb-4 flex gap-2 sm:mb-2 sm:items-center">
                            <IoIosCheckmarkCircleOutline size={20} className="text-indigo-600" />
                            <p className="text-sm font-light sm:text-xl">Interviewed and hired people for 5+ years</p>
                        </div>
                        <div className="mb-4 flex gap-2 sm:mb-2 sm:items-center">
                            <IoIosCheckmarkCircleOutline size={20} className="text-indigo-600" />
                            <p className="text-sm font-light sm:text-xl">I will listen empathetically to your needs</p>
                        </div>
                    </div>
                    <div className="basis-1/2 rounded-xl p-6 shadow-lg sm:p-12">
                        <span className="text-2xl leading-normal">&quot;Being confident means embracing uncertainty as a learning opportunity. It means speaking our minds while giving space to be curious about other ideas.{' '}</span>
                        <span className="text-2xl font-bold">It means believing in ourselves&quot;</span>
                        <p className="mt-2 text-right text-xl italic text-slate-500">-- Lean Vilas</p>
                    </div>
                </div>
                <div className="relative w-full sm:h-[500px]">
                    <Image className="hidden rounded-xl object-cover shadow-xl sm:block" src="/about-me-patagonia-bg.jpg" alt="Lean Vilas" fill={true} />
                    <div className="bg-white p-4 shadow-xl sm:absolute sm:left-1/2 sm:top-12">
                        <Image src="/about-me-patagonia.jpg" alt="Lean Vilas" width={350} height={440} />
                    </div>
                </div>
            </section>
        </article>
    );
}
