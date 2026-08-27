/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/project",
        permanent: true
      },
      {
        source: "/th/portfolio",
        destination: "/th/project",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
