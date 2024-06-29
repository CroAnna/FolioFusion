/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
        port: "",
        pathname: "/icons/**",
      },
    ],
  },
};

export default nextConfig;
