import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
import * as animate from 'tailwindcss-animate';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['var(--font-roboto)'],
                biroscript: ['var(--font-biroscript)'],
                pragmatica: ['var(--font-pragmatica)']
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-vercel': 'linear-gradient(-90deg, #007cf0, #00dfd8, #ff0080, #007cf0)'
            },
            backgroundSize: {
                '400%': '400%',
                400100: '400% 100%',
                'size-inherit': 'inherit'
            },
            keyframes: {
                rotate: {
                    '0%': { opacity: '0', transform: 'translateY(-50px)' },
                    '2%': { opacity: '1', transform: 'translateY(0px)' },
                    '18%': { opacity: '1', transform: 'translateY(0px)' },
                    '20%': { opacity: '0', transform: 'translateY(50px)' },
                    '100%': { opacity: '0', transform: 'translateY(50px)' }
                },
                up: {
                    '0%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-30px)' },
                    '100%': { transform: 'translateY(0)' }
                },
                scale: {
                    '0%': { transform: 'scaleX(1)' },
                    '50%': { transform: 'scaleX(.85)' },
                    '100%': { transform: 'scaleX(1)' }
                },
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(calc(-100% - 1rem))' }
                },
                'bg-move': {
                    '0%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                    '100%': { 'background-position': '0% 50%' }
                },
                glow: {
                    '0%': { 'background-position': '0 0' },
                    '50%': { 'background-position': '400% 0' },
                    '100%': { 'background-position': '0 0' }
                },
                'moving-glow': {
                    '50%': { 'background-position': '140% 50%', transform: 'skew(-2deg)' }
                }
            },
            animation: {
                inherit: 'inherit',
                rotate: 'rotate 10s linear infinite',
                up: 'up 3s linear infinite',
                scale: 'scale 3s linear infinite',
                marquee: 'marquee 400s linear infinite',
                'bg-move': 'bg-move 10s ease infinite',
                'moving-glow': 'moving-glow 8s ease-in-out infinite;'
            },
            animationDuration: {
                '150s': '150s',
                '300s': '300s'
            }
        }
    },
    darkMode: 'class',
    plugins: [nextui(), animate]
};
export default config;
