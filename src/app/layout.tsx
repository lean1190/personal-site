import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import Script from 'next/script';

import { getVercelUrl } from '@/lib/environments/is-dev';

import { darkBg } from './constants/colors';
import { roboto } from './fonts/fonts';

export const revalidate = 14400; // 4 hours

export const metadata: Metadata = {
    title: 'Mentor and Coach for Software Developers',
    description: 'Break into tech with CONFIDENCE. Learn faster, upskill your coding, and get the job you are looking for.',
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
        <html lang="en" className={`${roboto.className} h-screen min-h-screen w-full min-w-full ${darkBg} dark`}>
            <Script defer src="https://cloud.umami.is/script.js" data-website-id="7287db56-469b-4969-94c7-acafbc056e0d" />
            <body className="size-full">
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
