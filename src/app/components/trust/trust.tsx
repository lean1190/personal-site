import { lightBg, lightFontColor } from '@/app/constants/colors';

import { sessions } from '../sessions/constants';
import MainSession from '../sessions/main-session';
import Companies from './companies';
import Presentation from './presentation';

const session = sessions[0];

export default function Trust() {
    return (
        <section className={`w-full py-6 pb-12 text-center ${lightBg} ${lightFontColor}`}>
            <Companies />
            <Presentation />
            <MainSession session={session} />
        </section>
    );
}
