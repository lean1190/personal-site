import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import Nav from './nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Hi, I\'m Lean!',
    description: 'Thanks for stopping by :)'
};

function LogoButton({ link, alt, src }: { link: string, alt: string, src: string }) {
    return (
        <Link href={link}>
            <button type="button" className="h-8 rounded-lg bg-white px-4 shadow-lg shadow-slate-400">
                <Image alt={alt} width={100} height={20} src={src} />
            </button>
        </Link>
    );
}

export default function RootLayout({
    children
}: {
  children: React.ReactNode
}) {
    return (
        <html id="html" lang="en">
            <body className={`${inter.className} mx-auto w-full bg-white text-black dark:bg-black dark:text-white sm:max-w-5xl`}>
                <Nav />
                <main className="mb-40 p-4 sm:p-0">{children}</main>
                <footer className="px-4 py-12">
                    <div className="mx-auto flex max-w-md items-center justify-between gap-4">
                        <LogoButton src="/adplist_logo.png" alt="ADPList logo" link="https://adplist.org/mentors/leandro-nicolas-vilas" />
                        <LogoButton src="/linkedin_logo.png" alt="Linkedin logo" link="https://www.linkedin.com/in/leandro-nicolas-vilas/" />
                        <LogoButton src="/spotify_logo.png" alt="Spotify logo" link="https://open.spotify.com/show/6kCt1492d5OV3LVyVe8etT?si=350a51e186fb444b" />
                        <LogoButton src="/medium__logo.png" alt="Medium logo" link="https://medium.com/@lean1190" />
                    </div>
                </footer>
                <Analytics />
            </body>
        </html>
    );
}
