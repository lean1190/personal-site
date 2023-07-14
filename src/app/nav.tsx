'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.getElementById('html')?.classList.add('dark');
        } else {
            document.getElementById('html')?.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDarkMode) {
            setDarkMode(true);
        }
    }, []);

    return (
        <nav className="mb-6 flex w-full items-center justify-between border-b border-b-slate-300 p-4 dark:border-b-slate-500 sm:px-0">
            <Link href="/"><strong>LEAN</strong></Link>
            <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" checked={darkMode} onChange={() => setDarkMode((value) => !value)} className="peer sr-only" />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <i className="icon-dark-mode text-black dark:text-white"></i>
                </span>
            </label>
        </nav>
    );
}
