import clsx from 'clsx';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import CtaButton from './cta-button';

interface Session {
    name: string;
    benefits: string[];
    isPopular?: boolean;
}

const sessions: Session[] = [
    {
        name: 'Code mentoring',
        benefits: [
            'Personalized 1:1 mentoring',
            'Professional code review',
            'Live pair programming',
            'Document with best practices'
        ]
    },
    {
        name: 'Job preparation',
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
        <article className="bg-[#0A0A28] py-32">
            <div className="mb-6 flex items-center justify-center gap-8 font-bold">
                {sessions.map((session) => (
                    <div
                        key={session.name}
                        className={clsx(
                            'h-[600px] w-full rounded-3xl bg-black p-10 sm:w-96',
                            { 'border border-indigo-600 relative overflow-hidden': session.isPopular }
                        )}
                    >
                        {session.isPopular ? ribbon('Popular') : null}
                        <h3 className="mb-8 text-6xl">{session.name}</h3>
                        <p className="mb-6 text-sm font-light">This is what you get</p>
                        <ul className="mb-14 font-light">
                            {session.benefits.map((benefit, index) => (
                                <li key={index} className="mb-2 flex items-center gap-2">
                                    <IoIosCheckmarkCircleOutline size={20} className="text-indigo-600" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <CtaButton />
                    </div>
                ))}
            </div>
        </article>
    );
}
