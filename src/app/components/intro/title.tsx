import { highlightText } from '@/lib/strings';

import CtaButton from '../ui/cta-button';

export default function Title() {
    return (
        <section className="relative mx-auto flex max-w-[740px] flex-col items-center gap-8 p-6 pb-16 pt-40 sm:pb-24 sm:pt-32">
            <h1 className="text-center text-4xl font-bold leading-tight sm:text-6xl sm:leading-tight">
                <p className="mb-4 sm:mb-0 sm:inline">Get your first job in tech with</p>{' '}{highlightText('CONFIDENCE')}
            </h1>
            <p className="max-w-[500px] text-center text-lg font-light sm:text-xl">
                Leverage your experience to stand out in the market and find <strong className="font-bold">your path to a successful career</strong>
            </p>
            <div className="w-full sm:max-w-96">
                <CtaButton text="Start for free 🚀" size="md" />
            </div>
        </section>
    );
}
