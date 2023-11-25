import Image from 'next/image';
import Link from 'next/link';

export default function Empowerment() {
    return (
        <>
            <div className="mb-8 text-sm">
                <Link href="/" className="text-slate-500 hover:underline dark:text-slate-200">Home</Link> &gt;{' '}
                <span className="">Empowerment</span>
            </div>
            <div className="relative mb-8 h-72 w-full"><Image className="object-cover" alt="Empowerment" src="/empowerment_1.jpeg" fill={true} /></div>
            <h1 className="mb-2 text-3xl">Empowerment</h1>
            <h2 className="mb-12 text-xl text-slate-400">What all teams want but few have</h2>
            <p className="mb-16">This is what it is about</p>
            <div>
                <p className="mb-6 italic">Learn more about this with these resources</p>
                <div className="flex gap-8">
                    <button type="button" className="button button--small">More here</button>
                    <button type="button" className="button button--small">More here</button>
                    <button type="button" className="button button--small">More here</button>
                </div>
            </div>
        </>
    );
}
