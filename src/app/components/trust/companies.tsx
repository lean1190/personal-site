import Image from 'next/image';

export default function Companies() {
    return (
        <>
            <div className="mb-8 flex flex-col flex-wrap items-center justify-center gap-12 sm:flex-row">
                <div className="flex items-center gap-2 transition hover:grayscale-0 sm:grayscale">
                    <Image src="/logos/toprated.png" width={60} height={69} alt="ADPList 1% mentor" />
                    <Image src="/logos/adplist_logo.svg" width={160} height={41} alt="ADPList logo" />
                </div>
                <Image className="hidden grayscale transition hover:grayscale-0 sm:block" src="/logos/hcs_logo.png" width={160} height={75} alt="HCS logo" />
                <Image className="hidden grayscale transition hover:grayscale-0 sm:block" src="/logos/awork_logo.webp" width={160} height={44} alt="Awork logo" />
                <Image className="hidden grayscale transition hover:grayscale-0 sm:block" src="/logos/fashion_cloud_logo.png" width={160} height={43} alt="Fashion Cloud logo" />
                <Image className="hidden grayscale transition hover:grayscale-0 sm:block" src="/logos/fluxit_logo.jpg" width={140} height={70} alt="FluxIt logo" />
            </div>
            <p className="text-2xl font-light sm:text-3xl">
                Trusted by <strong className="font-bold">120+</strong> Software Developers 💜
            </p>
        </>
    );
}
