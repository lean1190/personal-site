import clsx from 'clsx';
import Image from 'next/image';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

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
            'Learn how to nail each interview stage',
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

const ribbon = (text: string) => (
    <div className="absolute right-0 top-0 size-16">
        <div className="absolute right-[-35px] top-[32px] w-[170px] rotate-45 bg-green-600 py-1 text-center font-semibold text-white">{text}</div>
    </div>
);

export default function Sessions() {
    return (
        <article className="bg-[#0A0A28] py-16 sm:px-36 sm:py-32">
            <SectionHeader
                title="90 minutes Power Sessions"
                subtitle="x2 45 minutes sessions, personalized to your needs"
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
                        <h3 className="mb-8 text-6xl">{session.name}</h3>
                        <p className="mb-8">
                            <span className="text-4xl font-bold">€{session.price.euros}</span>
                            <span className="text-xl font-light text-slate-300"> / ${session.price.dollars}</span>
                        </p>
                        <ul className="mb-14 font-light">
                            {session.benefits.map((benefit, index) => (
                                <li key={index} className="mb-2 flex items-center gap-2">
                                    <IoIosCheckmarkCircleOutline size={20} className="text-indigo-600" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            <section className="flex flex-col items-center justify-center gap-12 px-6 sm:flex-row sm:px-0">
                <div>
                    <p className="mb-4 text-center text-2xl font-bold">Ready to get confident?</p>
                    <CtaButton text="Book me on ADPList" />
                </div>
                <div>
                    <p className="mb-4 text-center text-2xl font-extralight">Not sure yet?</p>
                    <CtaButton text="Book a FREE 1:1 intro session" variant="secondary" />
                </div>
            </section>
        </article>
    );
}
