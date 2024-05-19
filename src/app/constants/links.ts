import { isDevEnvironment } from '@/lib/environments/is-dev';

export const contactLink = 'https://calendly.com/leanvilas/confidence-session';
export const adplistLink = 'https://adplist.org/mentors/leandro-nicolas-vilas';
export const linkedinLink = 'https://www.linkedin.com/in/leanvilas/';
export const homeLink = isDevEnvironment() ? `http://localhost:${process.env.PORT || 3000}` : 'https://leanvilas.com';
