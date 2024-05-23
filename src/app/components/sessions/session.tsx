import clsx from 'clsx';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

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
    );
}
