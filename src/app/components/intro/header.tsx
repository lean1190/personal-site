import Image from 'next/image';

import { biroscript } from '@/app/fonts/fonts';

export default function Header() {
    return (
        <header className="absolute right-0 flex items-start gap-6 p-6">
            <div>
                <div className={`${biroscript.className} pr-7 text-2xl sm:text-4xl sm:leading-tight`}>
                    Hi, I&apos;m Lean!
                </div>
                <Image
                    className="ml-auto"
                    src="/arrow.png"
                    alt="Arrow"
                    width={100}
                    height={42}
                />
            </div>
            <div className="relative min-h-[80px] min-w-[80px] sm:size-[150px] sm:min-h-[150px] sm:min-w-[150px]">
                <Image
                    className="rounded-full"
                    priority
                    src="/profile_big.jpg"
                    alt="Lean Vilas"
                    fill
                    sizes="(max-width: 430px) 80px, (min-width: 640px) 150px"
                />
            </div>
        </header>
    );
}
