/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  generateBuildId: async () => "ai-saas-academy",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
