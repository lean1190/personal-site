import { lightBg, lightFontColor } from '@/app/constants/colors';

import Companies from './companies';
import OffersMatrix from './offers-matrix';
import Presentation from './presentation';

export default function Trust() {
    return (
        <section className={`w-full py-6 pb-12 text-center ${lightBg} ${lightFontColor}`}>
            <Companies />
            <Presentation />
            <OffersMatrix />
        </section>
    );
}
