import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

import { roboto } from './fonts/fonts';

export const metadata: Metadata = {
    title: 'Mentor and Coach for Software Engineers',
    description: 'Become a CONFIDENT Software Engineer, learn faster, upskill your coding, and get the job you are looking for.',
    icons: { icon: '/favicon.ico' },
    metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT || 3000}`),
    openGraph: {
        images: ['/profile_big.jpg'],
        url: 'https://leanvilas.com',
        locale: 'en_US',
        type: 'website'
    },
    authors: [{ name: 'Lean Vilas' }]
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${roboto.className} h-screen min-h-screen w-full min-w-full bg-slate-900 dark`}>
            <body className="size-full">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
