import { lightBg, lightFontColor } from '@/app/constants/colors';

import { sessions } from '../sessions/constants';
import Companies from './companies';
import MainSession from './main-session';
import Presentation from './presentation';

interface Props {
    menteesCount: number;
}

const session = sessions[0];

export default function Trust({ menteesCount }: Props) {
    return (
        <section className={`w-full py-6 pb-12 text-center ${lightBg} ${lightFontColor}`}>
            <Companies menteesCount={menteesCount} />
            <Presentation />
            <MainSession session={session} />
        </section>
    );
}
