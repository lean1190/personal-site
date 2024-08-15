import { pinkFontColor } from '@/app/constants/colors';

export function truncateString(text: string, length: number): string {
    return text.length > length ? `${text.slice(0, length)}...` : text;
}

export function highlightText(text: string) {
    return <span className={`${pinkFontColor} text-5xl font-bold text-white sm:text-6xl`}>{text}</span>;
}
