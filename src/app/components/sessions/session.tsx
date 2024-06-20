import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import CtaButton from '../ui/cta-button';
import { Session as SessionModel } from './types';

interface Props {
    session: SessionModel
}

const ribbon = (text: string) => (
    <div className="absolute right-0 top-0 size-16">
        <div className="absolute right-[-35px] top-[32px] w-[170px] rotate-45 bg-green-600 py-1 text-center font-semibold text-white">{text}</div>
    </div>
);

export default function Session({ session }: Props) {
    return (
        <div
            className="relative w-full overflow-hidden rounded-3xl border border-indigo-600 bg-black p-10 sm:w-96"
        >
            {session.isPopular ? ribbon('Popular') : null}
            <h3 className="mb-4 text-5xl sm:text-6xl">{session.name}</h3>
            <div className="mb-8 flex flex-wrap items-center gap-2">
                {session.tags.map(({ name, colorClass }, index) => (
                    <span key={index} className={`rounded px-2 py-1 text-xs font-light sm:text-sm ${colorClass}`}>{name}</span>
                ))}
            </div>
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
            <CtaButton text="Book now" link={session.link} />
        </div>
    );
}
