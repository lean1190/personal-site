import { Fragment } from 'react';
import { PiCaretDown } from 'react-icons/pi';

import { meetLink, powerHour } from '@/app/constants/links';

import { darkBg, pinkGradient } from '../../constants/colors';
import { biroscript } from '../../fonts/fonts';
import CtaButton from '../ui/cta-button';
import { expectations, faqs } from './constants';
import styles from './sessions.module.css';

export default function Sessions() {
    return (
        <article className={`${darkBg} py-16 sm:py-32`}>
            <section className="mx-auto mb-20 p-6 sm:px-0">
                <h4 className="mb-12 text-center text-6xl font-bold">Simple and powerful</h4>
                <div className="relative w-full">
                    <div className={`left-5 top-0 h-[380px] w-[3px] sm:h-[3px] sm:w-full ${pinkGradient} absolute z-0 sm:left-0 sm:top-11`}></div>
                    <ul className="mx-auto flex flex-col items-start gap-6 pt-4 sm:max-w-[805px] sm:flex-row sm:gap-4 sm:pt-0">
                        {expectations.map(({ title, description }, indexExpectations) => (
                            <li key={indexExpectations} className="z-10 flex min-w-0 shrink grow basis-0 flex-row items-start justify-center gap-4 sm:flex-col sm:items-center">
                                <div className={`rounded-full px-4 py-2 text-xl font-bold sm:px-6 sm:py-3 sm:text-6xl ${pinkGradient}`}>{indexExpectations + 1}</div>
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
                <h4 className="mb-12 text-center text-6xl tracking-widest">FAQ&apos;s</h4>
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

            <p className={`${biroscript.className} mb-28 text-center text-7xl uppercase`}>You got this!</p>

            <section className="mx-auto flex flex-col items-center justify-between gap-12 px-6 sm:max-w-[608px] sm:flex-row sm:px-0">
                <div>
                    <p className="mb-4 text-center text-2xl font-bold">Ready to launch?</p>
                    <CtaButton text="Start now" link={powerHour} />
                </div>
                <div>
                    <p className="mb-4 text-center text-2xl font-extralight">Not sure yet?</p>
                    <CtaButton text="Book an intro session" variant="secondary" link={meetLink} />
                </div>
            </section>
        </article>
    );
}
