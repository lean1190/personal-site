/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'adplist-bucket.s3.amazonaws.com'
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'cloudflare-ipfs.com'
            },
            {
                protocol: 'https',
                hostname: 'loremflickr.com'
            }
        ]
    }
};

export default nextConfig;
