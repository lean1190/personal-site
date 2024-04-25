/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'adplist-bucket.s3.amazonaws.com'
            }
        ]
    }
};

export default nextConfig;
