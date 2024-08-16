import { isDevEnvironment } from '@/lib/environments/is-dev';

export const meetLink = 'https://tidycal.com/leanvilas/meet';
export const powerHour = 'https://tidycal.com/leanvilas/hour';

export const reviewLink = 'https://leanvilas.gumroad.com/l/review';
export const gumroadProfileLink = 'https://leanvilas.gumroad.com/';

export const cohortLink = 'https://u2l5t0gtmz7.typeform.com/to/fvnFQu1I';

export const adplistLink = 'https://adplist.org/mentors/leandro-nicolas-vilas';
export const linkedinLink = 'https://www.linkedin.com/in/leanvilas/';
export const hcsLink = 'https://hamburgcodingschool.com/en/team/lean/';

export const homeLink = isDevEnvironment() ? `http://localhost:${process.env.PORT || 3000}` : 'https://leanvilas.com';
