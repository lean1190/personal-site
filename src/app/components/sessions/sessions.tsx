import { Fragment } from 'react';
import { PiCaretDown } from 'react-icons/pi';

import { indigoGradient } from '../../constants/gradients';
import { biroscript } from '../../fonts/fonts';
import CtaButton from '../ui/cta-button';
import SectionHeader from '../ui/section-header';
import { expectations, faqs, sessions } from './constants';
import Session from './session';
import styles from './sessions.module.css';

export default function Sessions() {
    return (
        <article className="bg-[#0A0A28] py-16 sm:py-32">
            <SectionHeader
                title="Sessions"
                subtitle="1:1 personalized to your needs"
            />

            <section className="mb-40 flex flex-col items-center justify-center gap-8 px-6 font-bold sm:flex-row sm:px-0">
                {sessions.map((session) => <Session key={session.name} session={session} />)}
            </section>

            <section className="mx-auto mb-20 p-6 sm:mb-40 sm:px-0">
                <h5 className="mb-12 text-center text-6xl font-light">Simple and powerful</h5>
                <div className="relative w-full">
                    <div className={`left-5 top-0 h-[380px] w-[3px] sm:h-[3px] sm:w-full ${indigoGradient} absolute z-0 sm:left-0 sm:top-11`}></div>
                    <ul className="mx-auto flex flex-col items-start gap-6 pt-4 sm:max-w-[805px] sm:flex-row sm:gap-4 sm:pt-0">
                        {expectations.map(({ title, description }, indexExpectations) => (
                            <li key={indexExpectations} className="z-10 flex min-w-0 shrink grow basis-0 flex-row items-start justify-center gap-4 sm:flex-col sm:items-center">
                                <div className={`rounded-full px-4 py-2 text-xl font-bold sm:px-6 sm:py-3 sm:text-6xl ${indigoGradient}`}>{indexExpectations + 1}</div>
                                <div className="text-left sm:text-center">
                                    <p className="mb-2 text-2xl font-bold sm:text-xl">{title}</p>
                                    {description.map((value, indexDescription) => (
                                        <p key={indexDescription} className="font-extralight sm:text-lg">
                                            {value}
                                        </p>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="mx-auto mb-20 p-6 sm:max-w-[608px] sm:px-0">
                <h5 className="mb-12 text-center text-6xl font-light tracking-widest">FAQ&apos;s</h5>
                <div className="w-full">
                    {faqs.map(({ question, answer, cta }, index) => (
                        <Fragment key={index}>
                            <hr className="w-full" />
                            <details className={`${styles['toggle-details']} w-full py-4 sm:py-6 [&_i]:open:-rotate-180`}>
                                <summary className="flex cursor-pointer items-center justify-between text-xl font-light leading-6 transition-all">
                                    <span className="text-left">{question}</span>
                                    <i className="transition-all"><PiCaretDown /></i>
                                </summary>
                                <div className="py-4 font-thin">
                                    <p className={cta ? 'mb-6' : ''}>{answer}</p>
                                    {cta ? <CtaButton text={cta.text} link={cta.link} /> : null}
                                </div>
                            </details>
                        </Fragment>
                    ))}
                </div>
            </section>

            <h6 className={`${biroscript.className} mb-28 text-center text-7xl uppercase`}>You got this!</h6>

            <section className="mx-auto flex flex-col items-center justify-center gap-12 px-6 sm:max-w-[608px] sm:flex-row sm:px-0">
                <div>
                    <p className="mb-4 text-center text-2xl font-bold">Ready to get confident?</p>
                    <CtaButton text="Book me now" link="https://tidycal.com/leanvilas/confidence-hour-mentoring-coaching" />
                </div>
                <div>
                    <p className="mb-4 text-center text-2xl font-extralight">Not sure yet?</p>
                    <CtaButton text="Book a FREE 1:1 intro session" variant="secondary" link="contact" />
                </div>
            </section>
        </article>
    );
}
