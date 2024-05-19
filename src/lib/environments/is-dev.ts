export function isDevEnvironment() {
    return process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production';
}

export function getEnvUrl() {
    return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT || 3000}`;
}
