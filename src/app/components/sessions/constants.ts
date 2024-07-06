import { contactLink, linkedinLink } from '@/app/constants/links';

import { Session } from './types';

export const sessions: Session[] = [
    {
        name: 'Power hour',
        tags: [
            { name: '60 minutes', colorClass: 'bg-green-600 text-white' },
            { name: 'Bootcamp grads', colorClass: 'bg-indigo-800 text-white' },
            { name: 'Uni grads', colorClass: 'bg-indigo-800 text-white' },
            { name: 'Self-taught devs', colorClass: 'bg-indigo-800 text-white' }
        ],
        price: { euros: '32', dollars: '35' },
        link: 'https://tidycal.com/leanvilas/confidence-hour-mentoring-coaching',
        benefits: [
            'Set your mind for success',
            'Find options to land your 1st job',
            'Prepare to apply with optimized visibility',
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
        question: 'How can I book a session?',
        answer: 'You can book directly through my calendar here 👇',
        cta: { text: 'Get confident', link: 'https://tidycal.com/leanvilas/confidence-hour-mentoring-coaching' }
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
        cta: { text: 'Book a free session here', link: contactLink }
    },
    {
        question: 'I wanna book but I cannot afford it, what can I do?',
        answer: 'I would recommend you gather some of your fellow Software Engineers and we create a group session at a discounted price 🤩'
    },
    {
        question: 'Do you also offer team workshops?',
        answer: 'Yes, and I love them 💜 Contact me on LinkedIn to organize this',
        cta: { text: 'Contact me', link: linkedinLink }
    },
    {
        question: 'How can I pay?',
        answer: 'You can pay directly on the booking page through Stripe\'s secure payments 💸'
    }
];

export const expectations: { title: string, description: string[] }[] = [
    { title: 'We meet each other', description: ['Let\'s have a chat and get to know each other no strings attached.', 'If we click, we continue 😄'] },
    { title: 'We make a plan', description: ['What do you want to learn?', 'We will make sure we fulfill your expectations.'] },
    { title: 'You get confident', description: ['You feel more secure of your skills and ready to face your professional challenges 💪'] }
];
