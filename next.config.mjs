/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 ACTIVACIÓN DE SALIDA ESTÁTICA MANDATORIA (LGC V5.8.1)
  // Generación del directorio /out para volcado en Nginx (Búnker San Pablo)
  output: 'export',

  // 🛡️ RESTRICCIÓN DE OPTIMIZACIÓN: DELEGADA AL KERNEL
  images: {
    unoptimized: true,
  },

  // DETERMINISMO TÉCNICO
  reactStrictMode: true,
  swcMinify: true,

  // COMPATIBILIDAD DE RUTAS (SPA PROTOCOL)
  trailingSlash: true,

  // 🌐 RECTIFICACIÓN DE RED: ELIMINACIÓN DE LOCALHOST
  // Se eliminan referencias a puertos locales para delegar el tráfico al túnel SSL del Gateway.
  env: {
    NEXT_PUBLIC_API_URL: '/api/v1',
  },
};

export default nextConfig;
