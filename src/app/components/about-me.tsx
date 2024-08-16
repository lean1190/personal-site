import Image from 'next/image';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import { lightBg, lightFontColor, pinkFontColor } from '../constants/colors';
import { biroscript } from '../fonts/fonts';

const reasons = [
    'Radical Candor = Care + Challenge',
    '10+ years of SWE experience',
    '5+ years hiring developers'
];

export default function AboutMe() {
    return (
        <article className={`${lightBg} ${lightFontColor} py-20`}>
            <section className="mx-auto mb-12 px-6 text-center sm:max-w-[1268px] lg:px-0">
                <h5 className={`${biroscript.className} text-6xl`}>Hi, I&apos;m Lean</h5>
            </section>

            <section className="mx-auto mb-20 flex flex-col items-start gap-8 px-6 sm:max-w-[1268px] lg:px-0">
                <div className="mb-12 flex w-full flex-col gap-12 font-light leading-loose sm:mb-0 sm:flex-row">
                    <div className="basis-1/2 rounded-xl bg-slate-950 p-6 text-slate-100 shadow-lg sm:p-12">
                        <h6 className="mb-6 text-2xl lg:text-3xl">Why prepare with me?</h6>
                        {reasons.map((reason, index) => (
                            <div key={index} className="mb-4 flex gap-2 sm:mb-2 sm:items-center">
                                <IoIosCheckmarkCircleOutline size={20} className={`w-5 min-w-5 max-w-5 ${pinkFontColor}`} />
                                <p className="text-sm font-light lg:text-xl">{reason}</p>
                            </div>
                        ))}
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
                        <Image src="/about-me-patagonia.jpg" alt="Lean Vilas" width={350} height={467} />
                    </div>
                </div>
            </section>
        </article>
    );
}
