/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // ─── ADD THIS REDIRECTS SECTION ──────────────────────────
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/portfolios',
        permanent: true,
      },
      {
        source: '/portfolio/:category',
        destination: '/portfolios/:category',
        permanent: true,
      },
    ];
  },
  // ─────────────────────────────────────────────────────────
}

export default nextConfig