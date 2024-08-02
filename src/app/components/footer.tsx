import { indigoGradient } from '../constants/colors';
import { linkedinLink } from '../constants/links';
import { biroscript, pragmatica } from '../fonts/fonts';
import CtaButton from './ui/cta-button';

export default function Footer() {
    return (
        <footer className="mx-auto flex w-full flex-col items-center justify-center gap-12 bg-gradient-to-b from-[#0A0A28] to-indigo-950 px-6 pb-32 pt-12 sm:flex-row sm:p-36">
            <section className="sm:w-[350px]">
                <p className={`${pragmatica.className} text-center text-7xl font-thin uppercase leading-tight tracking-wide`}>
                    <mark className={`${indigoGradient} px-2 font-light text-white`}>Launch</mark> your career
                </p>
            </section>
            <section>
                <div className="rounded-3xl border border-indigo-600 bg-black p-14">
                    <p className={`${biroscript.className} mb-2 text-5xl`}>Lean Vilas</p>
                    <p className="mb-8 text-sm font-light text-slate-400">Mentor and Coach for Software Engineers</p>
                    <CtaButton text="Get in touch" link={linkedinLink} />
                </div>
            </section>
        </footer>
    );
}
