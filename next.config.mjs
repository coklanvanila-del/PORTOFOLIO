/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.symlinks = false;
    // Disable filesystem cache on FAT32 to avoid timestamp snapshot issues
    config.cache = false;
    return config;
  },
};

export default nextConfig;
