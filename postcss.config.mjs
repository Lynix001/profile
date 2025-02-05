/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  eslint: {
    ignoreDuringBuilds: true, // This disables ESLint during builds
  },
};

export default config;
