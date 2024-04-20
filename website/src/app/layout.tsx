import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

import { roboto } from './fonts/fonts';

export const metadata: Metadata = {
    title: 'Mentor & Coach - Lean Vilas',
    description: 'Become a CONFIDENT Software Engineer',
    icons: { icon: '/favicon.ico' }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${roboto.className} dark h-screen min-h-screen w-full min-w-full bg-slate-900`}>
            <body className="size-full">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
