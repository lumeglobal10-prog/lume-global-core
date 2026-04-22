/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 ACTIVACIÓN DE SALIDA ESTÁTICA MANDATORIA
  output: 'export',

  // 🛡️ RESTRICCIÓN DE OPTIMIZACIÓN: DELEGADA AL KERNEL AION
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,

  // 🌐 RE-DIRECCIONAMIENTO DE CANALES (NODO SAN PABLO)
  env: {
    NEXT_PUBLIC_API_URL: '/api/v1',
    NEXT_PUBLIC_RENDER_URL: '/api/v1/render',
  },
};

export default nextConfig;
