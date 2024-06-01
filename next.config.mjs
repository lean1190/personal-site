/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'adplist-bucket.s3.amazonaws.com'
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/:page*.html',
                destination: '/',
                permanent: true
            }
        ];
    }
};

export default nextConfig;
