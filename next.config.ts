import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.graphassets.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      new URL("https://www.gatesfoundation.org/-/media/gfo/5ideas_articles/articles/20250804-2-billion-womens-health-innovations/hero_ghana_oa138193-jpg-325383_1600x1000.jpg?rev=08922a2c39b34d8b97564b6203d16be7&w=800&hash=F74B550EDC8C43D6D0AD05C6ABCC4113"),
      new URL("https://www.gatesfoundation.org/-/media/gfo/4our-work/areas-of-impact/gender-equality_ga17574144_fm689855_1600x1000.jpg?rev=2a9308816f58435387e872832cc66b1c&w=1600&hash=B2891AAF7AD2D63229B6EF923B53C793"),
      new URL("https://www.fordfoundation.org/wp-content/uploads/2023/07/Program-Header_Natural_Resources_Climate_Change.jpg"),
      new URL("https://www.fordfoundation.org/wp-content/uploads/2015/01/PP_Civic_Engagement_V2Option-4_V2.jpg"),
      new URL("https://www.fordfoundation.org/wp-content/uploads/2018/02/Future_of_Workers_2026_hero.jpg"),
      new URL("https://assets.weforum.org/article/image/**")
    ]
  },
};

export default nextConfig;
