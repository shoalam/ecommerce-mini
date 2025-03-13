/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Match any path starting with /api
        destination: "https://course-api.com/:path*", // Forward to the target API
      },
    ];
  },
};

export default nextConfig;
