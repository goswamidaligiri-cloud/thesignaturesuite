/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'cdn.sanity.io'},
      {protocol: 'https', hostname: 'images.unsplash.com'},
      {protocol: 'https', hostname: 'images.pexels.com'},
    ],
  },
  // Allow the emergent preview origin to fetch _next/* static resources in dev
  allowedDevOrigins: [
    'serviced-suites-dev.preview.emergentagent.com',
    'serviced-suites-dev.cluster-3.preview.emergentcf.cloud',
  ],
}

export default nextConfig
