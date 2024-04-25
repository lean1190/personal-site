import clsx from 'clsx';
import { Fragment } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { PiCaretDown } from 'react-icons/pi';

import { biroscript } from '../fonts/fonts';
import CtaButton from './cta-button';
import { indigoGradient } from './gradients';
import SectionHeader from './section-header';

interface Session {
    name: string;
    price: { euros: string, dollars: string };
    benefits: string[];
    isPopular?: boolean;
}

const sessions: Session[] = [
    {
        name: 'Code mentoring',
        price: { euros: '46', dollars: '50' },
        benefits: [
            'Personalized 1:1 mentoring',
            'Professional code review',
            'Live pair programming',
            'Document with best practices'
        ]
    },
    {
        name: 'Job preparation',
        price: { euros: '28', dollars: '30' },
        benefits: [
            'The 5 stages of the hiring process',
            'Nail each interview stage',
            'Prepare through interview simulations',
            'CV and LinkedIn review',
            'Template to track your applications'
        ],
        isPopular: true
    },
    {
        name: 'Speak confidently',
        price: { euros: '38', dollars: '40' },
        benefits: [
            '1:1 communication coaching',
            'Contribute to team discussions',
            'Learn positive speech patterns',
            'Learn how to express your ideas'
        ]
    }
];

const faqs: { question: string, answer: string }[] = [
    { question: 'How many sessions am I booking?', answer: 'Each booking includes 2 personalized sessions.' },
    { question: 'How long are the sessions?', answer: 'Each session is 45 minutes long.' },
    { question: 'Are any of the sessions free?', answer: 'The first 30 minutes session is free :)' },
    { question: 'Can I have the sessions with a colleague?', answer: 'Yes! That way you can also split the cost of the sessions.' },
    { question: 'How can I book a session?', answer: 'I manage my sessions through ADPList. You can sign up for free and get access to a whole mentorship community.' },
    { question: 'I would prefer not to sign up to ADPList, what can I do?', answer: 'We can arrange the session without ADPList, let\'s talk about this.' },
    { question: 'How can I pay?', answer: 'ADPList handles secure payments via Stripe, and has a refund policy in place. If you prefer not using ADPList, you can pay via Paypal or bank transfer.' }
];

const expectations: { title: string, description: string[] }[] = [
    { title: 'We meet each other', description: ['Let\'s have a chat and get to know each other no strings attached.', 'If we click, we continue 😄'] },
    { title: 'We make a plan', description: ['What do you want to learn?', 'We will make sure we fulfil your expectations.'] },
    { title: 'You get confident', description: ['You feel more secure of your skills, and ready to face your professional challenges 💪'] }
];

const ribbon = (text: string) => (
    <div className="absolute right-0 top-0 size-16">
        <div className="absolute right-[-35px] top-[32px] w-[170px] rotate-45 bg-green-600 py-1 text-center font-semibold text-white">{text}</div>
    </div>
);

export default function Sessions() {
    return (
        <article className="bg-[#0A0A28] py-16 sm:py-32">
            <SectionHeader
                title="90 minutes Power Sessions"
                subtitle="1:1 personalized to your needs"
            />

            <section className="mb-20 flex flex-col items-center justify-center gap-8 px-6 font-bold sm:flex-row sm:px-0">
                {sessions.map((session) => (
                    <div
                        key={session.name}
                        className={clsx(
                            'w-full rounded-3xl bg-black p-10 sm:w-96',
                            { 'border border-indigo-600 relative overflow-hidden': session.isPopular }
                        )}
                    >
                        {session.isPopular ? ribbon('Popular') : null}
                        <h3 className="mb-8 text-5xl sm:text-6xl">{session.name}</h3>
                        <p className="mb-8">
                            <span className="text-4xl font-bold">€{session.price.euros}</span>
                            <span className="text-xl font-light text-slate-300"> / ${session.price.dollars}</span>
                        </p>
                        <ul className="mb-14 font-light">
                            {session.benefits.map((benefit, index) => (
                                <li key={index} className="mb-2 flex items-center gap-2">
                                    <IoIosCheckmarkCircleOutline size={20} className="text-indigo-600" />
                                    <span className="text-sm sm:text-base">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="mx-auto mb-12 p-6 sm:mb-28 sm:px-0">
                <h5 className="mb-12 text-center text-6xl font-light">Simple and powerful</h5>
                <div className="relative w-full">
                    <div className={`left-5 top-0 h-[380px] w-[3px] sm:h-[3px] sm:w-full ${indigoGradient} absolute z-0 sm:top-11`}></div>
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
                    {faqs.map(({ question, answer }, index) => (
                        <Fragment key={index}>
                            <hr className="w-full" />
                            <details className="w-full py-4 sm:py-6 [&_i]:open:-rotate-180">
                                <summary
                                    className={clsx(
                                        'flex cursor-pointer items-center justify-between text-xl font-light leading-6 transition-all',
                                        'marker:hidden marker:content-none',
                                        'before:hidden before:content-none'
                                    )}
                                >
                                    <span>{question}</span>
                                    <i className="transition-all"><PiCaretDown /></i>
                                </summary>
                                <div className="py-4 font-thin">{answer}</div>
                            </details>
                        </Fragment>
                    ))}
                </div>
            </section>

            <h6 className={`${biroscript.className} mb-28 text-center text-7xl uppercase`}>You got this!</h6>

            <section className="mx-auto flex flex-col items-center justify-center gap-12 px-6 sm:max-w-[608px] sm:flex-row sm:px-0">
                <div>
                    <p className="mb-4 text-center text-2xl font-bold">Ready to get confident?</p>
                    <CtaButton text="Book me on ADPList" link="adplist" />
                </div>
                <div>
                    <p className="mb-4 text-center text-2xl font-extralight">Not sure yet?</p>
                    <CtaButton text="Book a FREE 1:1 intro session" variant="secondary" />
                </div>
            </section>
        </article>
    );
}
