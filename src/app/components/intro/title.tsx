import { pinkDecoration } from '@/app/constants/colors';
import { meetLink } from '@/app/constants/links';

import CtaButton from '../ui/cta-button';

export default function Title() {
    return (
        <section className="relative mx-auto flex max-w-[740px] flex-col items-center gap-8 p-6 pb-16 pt-40 sm:pb-24 sm:pt-32">
            <h1 className="text-center text-5xl font-bold leading-tight sm:text-6xl sm:leading-tight">
                Get job-ready{' '}
                <i className={`underline ${pinkDecoration} underline-offset-8`}>FAST</i>
            </h1>
            <p className="max-w-[500px] text-center text-lg font-light sm:text-xl">
                Stand out in the market, solidify your knowledge, and build <strong className="font-bold">your path to a successful career</strong>
            </p>
            <div className="w-full sm:max-w-96">
                <CtaButton text="Start for free 🚀" size="md" link={meetLink} />
            </div>
        </section>
    );
}
