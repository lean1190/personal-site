import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

export const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto'
});

export const biroscript = localFont({
    src: [
        {
            path: './biroscript/BiroScriptPlus-Sloppy.woff2',
            weight: '200',
            style: 'normal'
        },
        {
            path: './biroscript/BiroScriptPlus.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './biroscript/BiroScriptPlus-Bold.woff2',
            weight: '700',
            style: 'normal'
        }
    ],
    display: 'swap',
    variable: '--font-biroscript'
});

export const pragmatica = localFont({
    src: [
        {
            path: './pragmatica/PragmaticaCond-ExtraLight.woff2',
            weight: '100',
            style: 'normal'
        },
        {
            path: './pragmatica/PragmaticaCond-Light.woff2',
            weight: '200',
            style: 'normal'
        },
        {
            path: './pragmatica/PragmaticaCond-Medium.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: './pragmatica/PragmaticaCond-Bold.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: './pragmatica/PragmaticaCond-ExtraBold.woff2',
            weight: '700',
            style: 'normal'
        }
    ],
    display: 'swap',
    variable: '--font-pragmatica'
});
