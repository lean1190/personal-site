import { contactLink, linkedinLink } from '@/app/constants/links';

import { Session } from './types';

export const sessions: Session[] = [
    {
        name: 'Break into tech',
        tags: [
            { name: '5 hours program', colorClass: 'bg-green-600 text-white' },
            { name: 'Bootcamp & Uni grads', colorClass: 'bg-indigo-800 text-white' }
        ],
        price: { euros: '125', dollars: '128' },
        link: 'https://tidycal.com/leanvilas/break-into-tech',
        benefits: [
            '1. How to thrive in your first job',
            '2. The hiring process',
            '3. Prepare to apply',
            '4. Practice behavioral interviews',
            '5. Practice technical interviews'
        ]
    },
    {
        name: 'Power hour',
        tags: [
            { name: '60 minutes', colorClass: 'bg-green-600 text-white' },
            { name: 'Any level of experience', colorClass: 'bg-indigo-800 text-white' }
        ],
        price: { euros: '25', dollars: '27' },
        link: 'https://tidycal.com/leanvilas/confidence-hour-mentoring-coaching',
        benefits: [
            'Prepare for job interviews',
            'Upskill your coding practices',
            'Improve your communication',
            'Get industry advice',
            'Enhance your confidence'
        ],
        isPopular: true
    },
    {
        name: 'The way to Senior',
        tags: [
            { name: '5 hours program', colorClass: 'bg-green-600 text-white' },
            { name: 'Junior & Mid SWE', colorClass: 'bg-indigo-800 text-white' }
        ],
        price: { euros: '125', dollars: '128' },
        link: 'https://tidycal.com/leanvilas/the-way-to-senior',
        benefits: [
            '1. Define where you want to go',
            '2. Adopt a Senior mindset',
            '3. Become the go-to person',
            '4. Create a team vision',
            '5. Prepare to negotiate the promotion'
        ]
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
        answer: 'A Power Hour includes 1 session. The programs include 5 sessions'
    },
    {
        question: 'How long is each session?',
        answer: 'Each session is 60 minutes long.'
    },
    {
        question: 'Can I book less than 5 sessions for a program?',
        answer: 'Absolutely! I recommend completing the program, but you are welcome to book fewer sessions if you are confident with your results'
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
