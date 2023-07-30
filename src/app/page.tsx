import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <article className="mb-24 flex flex-col items-start justify-between gap-16 sm:flex-row">
                <div className="sm:w-[380px]">
                    <Image className="mx-auto rounded-lg sm:mx-0"
                        alt="Hi, I'm Lean"
                        src="/me.jpg"
                        width={460}
                        height={380}
                    />
                </div>
                <div>
                    <h1 className="mb-4 text-5xl font-medium dark:text-slate-200 sm:mt-14">Hi, I&apos;m Lean!</h1>
                    <h2 className="mb-2 text-2xl font-normal dark:text-slate-300">I help people spark ✨ and drive change</h2>
                    <h3 className="mb-16 text-lg font-thin">Mentor @ADPList | Software engineer</h3>
                    <div className="text-center sm:text-left">
                        <Link href="https://www.linkedin.com/in/leandro-nicolas-vilas/"><button type="button" className="button glow">Get in touch</button></Link>
                    </div>
                </div>
            </article>
            <article className="flex flex-wrap justify-between">
                <section className="flex h-80 w-full flex-col justify-between border border-slate-800 p-6 dark:border-slate-300 sm:w-96">
                    <div>
                        <h4 className="mb-8 text-3xl">Team empowerment</h4>
                        <p className="font-light dark:text-slate-300">I had troubles making my team independent from me, but I found a way to revert this.</p>
                    </div>
                    <div>
                        <Link href="/topic/empowerment"><button type="button" className="button button--small glow">I wanna know more</button></Link>
                    </div>
                </section>
            </article>
        </>
    );
}
