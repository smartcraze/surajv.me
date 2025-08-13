import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/instagram",
        destination: "https://instagram.com/surajv354",
        permanent: false,
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
    ];
  },
};

export default nextConfig;
