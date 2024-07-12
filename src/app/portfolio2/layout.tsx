import type { Metadata } from 'next';

import Auth from './components/auth';


export const metadata: Metadata = {
    title: 'Portfolio - Lean Vilas',
    description: 'My personal work'
};

export default async function PortfolioLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <Auth />
            <main className="size-full max-h-full max-w-full overflow-x-hidden">
                {children}
            </main>
        </>
    );
}
