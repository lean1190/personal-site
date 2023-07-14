import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import Nav from './nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};

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
                    <div className="mx-auto flex max-w-md justify-between">
                        <div><Link href="/">ADPList logo</Link></div>
                        <div><Link href="/">Linkedin</Link></div>
                        <div><Link href="/">Spotify</Link></div>
                        <div><Link href="/">Medium</Link></div>
                    </div>
                </footer>
                <Analytics />
            </body>
        </html>
    );
}
