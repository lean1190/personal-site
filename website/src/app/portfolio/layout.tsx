import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio - Lean Vilas',
    description: 'My personal work'
};

export default function PortfolioLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <article className="size-full max-h-full max-w-full overflow-x-hidden bg-[#343D35FF]">{children}</article>
    );
}
