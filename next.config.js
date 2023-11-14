/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  dest: "public",
  skipWaiting: true,
  registar: true,
});
const nextConfig = {};
module.exports = nextConfig;
