// Path: /Users/selim/CascadeProjects/seo-automation-platform/frontend/next.config.js

module.exports = {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:5000/api/:path*', // Proxy to backend
        },
      ];
    },
  };