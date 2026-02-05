import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // mothervegetables.org（apex）→ www.mothervegetable.org
      {
        source: "/:path*",
        has: [{ type: "host", value: "mothervegetables.org" }],
        destination: "https://www.mothervegetable.org/:path*",
        permanent: true, // 308
      },
      // www.mothervegetables.org → www.mothervegetable.org
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mothervegetables.org" }],
        destination: "https://www.mothervegetable.org/:path*",
        permanent: true, // 308
      },
    ];
  },

  async rewrites() {
    return [
      // 既存: /achieve-howto → mothervegetablemenu.vercel.app
      {
        source: "/achieve-howto",
        destination: "https://mothervegetablemenu.vercel.app/achieve-howto",
      },
      {
        source: "/achieve-howto/:path*",
        destination: "https://mothervegetablemenu.vercel.app/achieve-howto/:path*",
      },

      // 既存: /forever-howto → forever-htu.vercel.app
      {
        source: "/forever-howto",
        destination: "https://forever-htu.vercel.app/forever-howto",
      },
      {
        source: "/forever-howto/:path*",
        destination: "https://forever-htu.vercel.app/forever-howto/:path*",
      },

      // ★ 追加: /confidence-howto → confidence-htu.vercel.app
      {
        source: "/confidence-howto",
        destination: "https://confidence-htu.vercel.app/confidence-howto",
      },
      {
        source: "/confidence-howto/:path*",
        destination: "https://confidence-htu.vercel.app/confidence-howto/:path*",
      },

      //  追加!: /athlete → mvathletefoundation.vercel.app
      {
        source: "/athlete",
        destination: "https://mvathletefoundation.vercel.app/athlete/",
      },
      {
        source: "/athlete/",
        destination: "https://mvathletefoundation.vercel.app/athlete/",
      },
      {
        source: "/athlete/:path*",
        destination: "https://mvathletefoundation.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
