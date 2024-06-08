import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import { getVercelUrl } from '@/lib/environments/is-dev';

import { roboto } from './fonts/fonts';

export const revalidate = 14400; // 4 hours

export const metadata: Metadata = {
    title: 'Mentor and Coach for Software Engineers',
    description: 'Become a CONFIDENT Software Engineer, learn faster, upskill your coding, and get the job you are looking for.',
    icons: { icon: '/favicon.ico' },
    metadataBase: new URL(getVercelUrl()),
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
                <SpeedInsights />
            </body>
        </html>
    );
}
