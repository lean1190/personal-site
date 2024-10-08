import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import { darkBg, darkFontColor } from '@/app/constants/colors';

import CtaButton from '../ui/cta-button';
import { Offer } from './types';

interface Props {
    session: Offer;
}

export default function MainSession({ session }: Props) {
    return (
        <div className="mx-auto max-w-[500px] p-6">
            <div className="animate-bg-move rounded-3xl bg-gradient-to-r from-indigo-700 via-pink-400 to-indigo-900 bg-400% p-2">
                <div className={`w-full rounded-2xl p-8 text-left text-white sm:p-10 ${darkBg} ${darkFontColor}`}>
                    <h3 className="mb-4 text-4xl font-light sm:text-6xl">{session.name}</h3>
                    {session.description ? <p className="mb-4 text-lg font-light text-slate-300 sm:text-xl">{session.description}</p> : null}
                    <div className="mb-8 flex flex-wrap items-center gap-2">
                        {session.tags.map(({ name, colorClass }, index) => (
                            <span key={index} className={`rounded px-2 py-1 text-xs font-light sm:text-sm ${colorClass}`}>{name}</span>
                        ))}
                    </div>
                    <ul className="mb-14 font-light">
                        {session.benefits.map((benefit, index) => (
                            <li key={index} className="mb-2 flex items-center gap-2">
                                <IoIosCheckmarkCircleOutline size={20} className="text-indigo-600" />
                                <span className="text-sm sm:text-base">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <div className="hidden sm:block">
                            <CtaButton text="Begin your guided journey 💪" link={session.link} size="md" />
                        </div>
                        <div className="block sm:hidden">
                            <CtaButton text="Begin your journey 💪" link={session.link} size="md" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
