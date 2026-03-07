import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// Determine if we're building for GitHub Pages (static export)
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  // Only use static export for GitHub Pages, Vercel handles SSR natively
  ...(isGitHubPages && { output: 'export' }),
  // Only set basePath for GitHub Pages deployment
  ...(isGitHubPages && { basePath: '/Welfare-Plus' }),
  // Only enable trailingSlash for GitHub Pages
  ...(isGitHubPages && { trailingSlash: true }),
  images: {
    // Unoptimized images needed for static export, but can be optimized on Vercel
    unoptimized: isGitHubPages,
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default withNextIntl(nextConfig);
