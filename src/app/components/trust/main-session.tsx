import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import { darkBg, darkFontColor } from '@/app/constants/colors';

import { Session } from '../sessions/types';
import CtaButton from '../ui/cta-button';

interface Props {
    session: Session;
}

export default function MainSession({ session }: Props) {
    return (
        <div className="mx-auto max-w-[790px] p-6">
            <div className="group relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-slate-400 to-slate-700 opacity-0 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="group relative animate-bg-move rounded-3xl bg-gradient-to-r from-indigo-700 via-green-200 to-indigo-900 bg-400% p-1">
                    <div className={`w-full rounded-3xl p-10 text-left text-white  ${darkBg} ${darkFontColor}`}>
                        <h3 className="mb-4 text-5xl font-light sm:text-6xl">{session.name}</h3>
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
                                <CtaButton text="Begin your guided journey to success 💪" link={session.link} size="md" />
                            </div>
                            <div className="block sm:hidden">
                                <CtaButton text="Begin your journey 💪" link={session.link} size="md" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
