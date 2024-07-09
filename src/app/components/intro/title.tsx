import { highlightText } from '@/lib/strings';

import CtaButton from '../ui/cta-button';
import { learnings } from './constants';

export default function Title() {
    return (
        <section className="relative mx-auto flex max-w-[740px] flex-col items-center gap-8 p-6 pb-16 pt-40 sm:pb-24 sm:pt-32">
            <h1 className="text-center text-4xl font-bold leading-tight sm:text-6xl sm:leading-tight">
                <p className="mb-4 sm:mb-0 sm:inline">Break into tech with</p>{' '}
                {highlightText('CONFIDENCE')}
            </h1>
            <p className="max-w-[500px] text-center text-lg font-light sm:text-xl">
                {learnings.map((learning, index) => (
                    <span key={index}>{`
                        ${learning}${index !== learnings.length - 1 ? ', ' : ''}${index === learnings.length - 2 ? 'and' : ''}`}
                    </span>
                ))}
            </p>
            <div className="w-full sm:max-w-96">
                <CtaButton text="Launch your career for free 🚀" size="md" />
            </div>
        </section>
    );
}
