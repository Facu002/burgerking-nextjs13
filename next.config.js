/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["s3-eu-central-1.amazonaws.com", "firebasestorage.googleapis.com"]
    }
}

module.exports = nextConfig
