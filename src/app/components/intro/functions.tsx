import { indigoGradient } from '@/app/constants/colors';

export const highlightedText = (text: string) => <mark className={`${indigoGradient} px-2 text-5xl font-bold text-white sm:text-6xl`}>{text}</mark>;
