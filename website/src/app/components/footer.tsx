import { biroscript, pragmatica } from '../fonts/fonts';
import CtaButton from './cta-button';
import { indigoGradient } from './gradients';

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-b from-[#0A0A28] to-indigo-950 p-6 sm:p-36">
            <div className="mx-auto flex w-fit flex-col items-center gap-4 sm:flex-row">
                <section className="sm:w-[350px]">
                    <h2 className={`${pragmatica.className} text-center text-7xl font-thin uppercase leading-tight tracking-wide sm:text-left`}>
                        Let&apos;s start <mark className={`${indigoGradient} px-2 font-light text-white`}>learning</mark> together
                    </h2>
                </section>
                <section>
                    <div className="rounded-3xl border border-indigo-600 bg-black p-14">
                        <h3 className={`${biroscript.className} mb-2 text-5xl`}>Lean Vilas</h3>
                        <p className="mb-8 text-sm font-light text-slate-400">Mentor and Coach for Software Engineers</p>
                        <CtaButton text="Get in touch" link="https://www.linkedin.com/in/leanvilas/" />
                    </div>
                </section>
            </div>
        </footer>
    );
}
