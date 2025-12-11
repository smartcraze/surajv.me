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
      // Redirect old domain to new domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "surajv.me" }],
        destination: "https://surajv.dev/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.surajv.me" }],
        destination: "https://surajv.dev/:path*",
        permanent: true,
      },
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
        has: [{ type: "host", value: "betteruptime.surajv.dev" }],
        destination: "/soon",
        permanent: false,
      },
      {
        source: "/",
        has: [{ type: "host", value: "rapidserve.surajv.dev" }],
        destination: "/soon",
        permanent: false,
      }
    ];
  },
};

export default nextConfig;
