import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Thank you for trusting me!',
    description: 'All my gratitude to you 🙏',
    icons: {
        icon: './favicon.ico'
    }
};

export default function ThanksLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return <article className="grid min-h-screen place-items-center overflow-hidden bg-[#fae1dd]">{children}</article>;
}
