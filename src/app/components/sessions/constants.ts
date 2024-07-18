import { contactLink, linkedinLink } from '@/app/constants/links';

import { Session } from './types';

export const sessions: Session[] = [
    {
        name: 'Power hour',
        description: 'Uncover the missing piece',
        tags: [
            { name: '60 minutes', colorClass: 'rounded-xl border border-pink-400 text-white' },
            { name: 'Ideal for Bootcamp devs', colorClass: 'rounded-xl border border-indigo-400 text-white' }
        ],
        price: null,
        link: 'https://tidycal.com/leanvilas/the-missing-piece',
        benefits: [
            'Set your mind for success',
            'Find options to land your 1st job',
            'Optimize your visibility',
            'Practice with mock interviews',
            'Learn how to thrive in your first job'
        ],
        isPopular: true
    }
];

export const faqs: {
    question: string,
    answer: string,
    cta?: {
        text: string;
        link: string;
    };
}[] = [
    {
        question: 'Who is this for?',
        answer: 'If you are Bootcamp grad developer, these sessions are for you'
    },
    {
        question: 'How can I book a session?',
        answer: 'You can book directly through my calendar here 👇',
        cta: { text: 'Let\'s meet', link: 'https://tidycal.com/leanvilas/confidence-hour-mentoring-coaching' }
    },
    {
        question: 'How many sessions am I booking?',
        answer: 'A Power Hour includes 1 session'
    },
    {
        question: 'How long is each session?',
        answer: 'Each session is 60 minutes long'
    },
    {
        question: 'Do I need to book a minimum amount of sessions?',
        answer: 'Nope. You can book 1 or more'
    },
    {
        question: 'Are any of the sessions free?',
        answer: 'The first 30-minute session is free 😁',
        cta: { text: 'Start for free here 🚀', link: contactLink }
    },
    {
        question: 'I wanna book but I cannot afford it, what can I do?',
        answer: 'I would recommend you gather some of your fellow developers and we create a group session at a discounted price 🤩'
    },
    {
        question: 'Do you also offer workshops for Bootcamps?',
        answer: 'Yes, and I love them 💜 Contact me on LinkedIn to organize this',
        cta: { text: 'Contact me', link: linkedinLink }
    },
    {
        question: 'How can I pay?',
        answer: 'You can pay directly on the booking page through Stripe\'s secure payments 💸'
    }
];

export const expectations: { title: string, description: string[] }[] = [
    { title: 'We meet each other', description: ['Let\'s chat and get to know each other no strings attached.', 'If we click, we continue 😄'] },
    { title: 'We make a plan', description: ['What\'s stopping you from breaking into tech?', 'Uncover the missing piece'] },
    { title: 'You get a job', description: ['You learn what\'s required to succeed and you are ready to get hired 💪'] }
];
