/** @type {import('next').NextConfig} */
const nextConfig = {
  // src 루트에서 app 디렉토리 찾기
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  // src 디렉토리 구조 설정
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": require("path").resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
