import { Session } from './types';

export const sessions: Session[] = [
    {
        name: 'Code mentoring',
        price: { euros: '25', dollars: '27' },
        link: 'https://tidycal.com/leanvilas/code-mentoring-power-hour',
        benefits: [
            'Professional code review',
            'Learn best practices',
            'Live pair programming'
        ]
    },
    {
        name: 'Job preparation',
        price: { euros: '25', dollars: '27' },
        link: 'https://tidycal.com/leanvilas/job-preparation-power-hour',
        benefits: [
            'The 5 stages of the hiring process',
            'Nail each interview stage',
            'Prepare through interview simulations',
            'CV and LinkedIn review',
            'Template to track your applications'
        ],
        isPopular: true
    },
    {
        name: 'Strong contributor',
        price: { euros: '25', dollars: '27' },
        link: 'https://tidycal.com/leanvilas/strong-contributor-power-hour',
        benefits: [
            'Learn how to express your ideas',
            'Learn positive speech patterns',
            'Contribute to team discussions'
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
        cta: { text: 'Book now', link: 'https://tidycal.com/leanvilas/confidence-hour-mentoring-coaching' }
    },
    { question: 'How many sessions am I booking?', answer: 'Each booking includes 1 personalized session.' },
    { question: 'How long is the session?', answer: 'Each session is 60 minutes long.' },
    { question: 'Are any of the sessions free?', answer: 'The first 30 minutes session is free :)' },
    {
        question: 'I would prefer to sign up for long-term mentorship, how can I do it?',
        answer: 'That is amazing, thank you for your trust 🙏',
        cta: { text: 'Book long-term here', link: 'https://tidycal.com/leanvilas/long-term-mentorship' }
    },
    {
        question: 'How can I pay?',
        answer: 'You can pay directly in the booking page which has secure payments via Stripe. If you prefer using Paypal, let me know.'
    },
    { question: 'Can I have the session with a colleague?', answer: 'Yes! That way you can also split the costs.' }
];

export const expectations: { title: string, description: string[] }[] = [
    { title: 'We meet each other', description: ['Let\'s have a chat and get to know each other no strings attached.', 'If we click, we continue 😄'] },
    { title: 'We make a plan', description: ['What do you want to learn?', 'We will make sure we fulfil your expectations.'] },
    { title: 'You get confident', description: ['You feel more secure of your skills, and ready to face your professional challenges 💪'] }
];
