const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  fallback: true,
  target: "server",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};

module.exports = {
  ...nextConfig,
  trailingSlash: false,
};
