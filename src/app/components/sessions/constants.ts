import { linkedinLink, meetLink, powerHour } from '@/app/constants/links';

import { Session } from './types';

export const sessions: Session[] = [
    {
        name: 'Power hour',
        description: 'Get ready for the tech market',
        tags: [
            { name: '60 minutes', colorClass: 'rounded-xl border border-pink-400 text-white' },
            { name: 'Ideal for Bootcamp grads', colorClass: 'rounded-xl border border-indigo-400 text-white' }
        ],
        price: null,
        link: powerHour,
        benefits: [
            'Optimize CV, LinkedIn and Portfolio',
            'Learn how to thrive in your 1st job',
            'Find options to land your 1st job',
            'Practice with mock interviews',
            'Solidify your skills'
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
        question: 'Why should I buy a session?',
        answer: 'If you feel doubtful about yourself, your skills, and what the industry needs from you, I can show you exactly what you need to thrive and how to practice it. Most Bootcamp grad developers struggle with self-confidence competing in a crowded market with many other talented developers. On top of this, not every Bootcamp teaches all the essentials to be part of a real software development team. That\'s where I come in. I will help you fill the gaps with knowledge from 10+ years of industry experience, solidify your skills, boost your confidence, and be prepared for your first job as a developer.'
    },
    {
        question: 'How can I book a session?',
        answer: 'You can book directly through my calendar here 👇',
        cta: { text: 'Let\'s meet', link: powerHour }
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
        question: 'Do I need to book more than 1 session?',
        answer: 'Nope, it\'s up to you how far you want to go. If after 1 session you are confident and prepared for your first job in tech, my job here is done 😁'
    },
    {
        question: 'How many sessions do you recommend?',
        answer: 'The average amount of sessions a person books is 4-5. The sweet spot is around 3'
    },
    {
        question: 'Are any of the sessions free?',
        answer: 'The first 30-minute session is free 😁',
        cta: { text: 'Start for free here 🚀', link: meetLink }
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
    { title: 'We make a plan', description: ['What\'s blocking you from breaking into tech?', 'Let\'s find the missing pieces'] },
    { title: 'You get a job', description: ['You learn what\'s required to succeed and you are ready to get hired 💪'] }
];
