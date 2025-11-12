import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "github-production-user-asset-6210df.s3.amazonaws.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/instagram",
        destination: "https://instagram.com/surajv354",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.com/surajv354",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://x.com/surajv354",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/smartcraze",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/surajv354",
        permanent: true,
      },
      {
        source: "/yt",
        destination: "https://www.youtube.com/@Smartcraze17",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "/passion",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "host", value: "betteruptime.surajv.me" }],
        destination: "/soon",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "host", value: "rapidserve.surajv.me" }],
        destination: "/soon",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
