/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Match any path starting with /api
        destination: "http://localhost:3001/:path*", // Forward to the target API
      },
    ];
  },
  images: {
    domains: ["localhost"], // Allow images from localhost
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", // This allows images from assets.example.com
        port: "3001",
        pathname: "/**", // This path will be used to match image URLs
        search: "",
      },
    ],
  },
};

export default nextConfig;
