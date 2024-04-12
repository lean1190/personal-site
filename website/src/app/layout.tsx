import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Mentor & Coach - Lean Vilas',
    description: 'Become a CONFIDENT Software Engineer',
    icons: { icon: '/favicon.ico' }
};

const font = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap'
});

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${font.className} h-screen min-h-screen w-full`}>
            <body className={`${font.className} size-full`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
