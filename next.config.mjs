/** @type {import('next').NextConfig} */
const isCapacitor = process.env.CAPACITOR === "true";

const nextConfig = {
  output: "export",
  // Relative asset paths are required for Capacitor's file:// loading.
  assetPrefix: isCapacitor ? "./" : undefined,
  // reactStrictMode: true,
  // // Disable automatic static optimization
  // experimental: {
  //   // In Next.js 15, you might need to use these options
  //   // to further control SSR behavior
  //   ppr: false,
  //   // serverActions: false,
  // },
};

export default nextConfig;
