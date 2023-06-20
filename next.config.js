const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'https://api.hangang.msub.kr/',
      },
    ];
  },
};
module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
        },
      },
    ],
    // 추가 플러그인 작성
  ],
  nextConfig,
);

module.exports = nextConfig;
