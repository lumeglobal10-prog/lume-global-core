/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 ACTIVACIÓN DE SALIDA ESTÁTICA MANDATORIA (LGC V5.8.1)
  // Permite la generación del directorio /out para volcado en Nginx
  output: 'export',

  // 🛡️ RESTRICCIÓN DE OPTIMIZACIÓN: DELEGADA AL KERNEL
  // Next.js Image Optimization no es compatible con 'output: export'
  images: {
    unoptimized: true,
  },

  // DETERMINISMO TÉCNICO
  reactStrictMode: true,
  swcMinify: true,

  // COMPATIBILIDAD DE RUTAS (SPA PROTOCOL)
  // Asegura que /login se exporte como /login/index.html
  trailingSlash: true,
};

export default nextConfig;
