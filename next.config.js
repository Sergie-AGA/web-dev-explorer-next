/** @type {import('next').NextConfig} */
const nextConfig = {
    compilerOptions: {
        baseUrl: ".",
        paths: {
            "@/components/*": ["src/components/*"],
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
