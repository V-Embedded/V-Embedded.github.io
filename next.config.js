const isProd = process.env.NODE_ENV === 'production';
const repoName = 'VEmbedded.github.io';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'site',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
  trailingSlash: true,
};

module.exports = nextConfig;
