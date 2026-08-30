/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sorence-nora.vercel.app",
      },
    ],
  },
};

export default nextConfig;
