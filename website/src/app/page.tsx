import { Button } from '@nextui-org/react';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <header className="flex justify-between items-center p-6">
                <div>
                    <Image src="" alt="Lean Vilas logo" width={200} height={100} />
                </div>
                <nav>
                    <Button>FREE Consultation</Button>
                </nav>
            </header>
            <main className="">

            </main>
        </>
    );
}
