import CtaButton from './components/ui/cta-button';
import { homeLink } from './constants/links';

export default function NotFound() {
    return (
        <main className="flex h-screen min-h-screen w-full flex-col items-center justify-center">
            <h1 className="mb-6 bg-gradient-to-r from-pink-600 to-indigo-500 bg-clip-text px-4 py-3 text-8xl text-transparent">Oops!</h1>
            <h2 className="mb-12 text-2xl">Seems like you are lost</h2>
            <div className="max-w-96">
                <CtaButton rel="author" text="Get home safe" link={homeLink} />
            </div>
        </main>
    );
}
