import { Session } from './types';

export const sessions: Session[] = [
    {
        name: 'Code mentoring',
        price: { euros: '27', dollars: '29' },
        link: 'https://tidycal.com/leanvilas/code-mentoring-power-hour',
        benefits: [
            'Professional code review',
            'Learn best practices',
            'Live pair programming'
        ]
    },
    {
        name: 'Job preparation',
        price: { euros: '27', dollars: '29' },
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
        price: { euros: '27', dollars: '29' },
        link: 'https://tidycal.com/leanvilas/strong-contributor-power-hour',
        benefits: [
            'Learn how to express your ideas',
            'Learn positive speech patterns',
            'Contribute to team discussions'
        ]
    }
];

export const faqs: { question: string, answer: string }[] = [
    { question: 'How many sessions am I booking?', answer: 'Each booking includes 2 personalized sessions.' },
    { question: 'How long are the sessions?', answer: 'Each session is 45 minutes long.' },
    { question: 'Are any of the sessions free?', answer: 'The first 30 minutes session is free :)' },
    { question: 'Can I have the sessions with a colleague?', answer: 'Yes! That way you can also split the cost of the sessions.' },
    { question: 'How can I book a session?', answer: 'I manage my sessions through ADPList. You can sign up for free and get access to a whole mentorship community.' },
    { question: 'I would prefer not to sign up to ADPList, what can I do?', answer: 'We can arrange the session without ADPList, let\'s talk about this.' },
    { question: 'How can I pay?', answer: 'ADPList handles secure payments via Stripe, and has a refund policy in place. If you prefer not using ADPList, you can pay via Paypal or bank transfer.' }
];

export const expectations: { title: string, description: string[] }[] = [
    { title: 'We meet each other', description: ['Let\'s have a chat and get to know each other no strings attached.', 'If we click, we continue 😄'] },
    { title: 'We make a plan', description: ['What do you want to learn?', 'We will make sure we fulfil your expectations.'] },
    { title: 'You get confident', description: ['You feel more secure of your skills, and ready to face your professional challenges 💪'] }
];
