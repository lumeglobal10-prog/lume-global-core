/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 ACTIVACIÓN DE SALIDA ESTÁTICA MANDATORIA (LGC V5.2.5)
  // Generación del directorio /out para volcado en Nginx (Búnker San Pablo)
  output: 'export',

  // 🛡️ RESTRICCIÓN DE OPTIMIZACIÓN: DELEGADA AL KERNEL AION
  // Requerido para 'output: export' y para el uso de LUME_UNIVERSAL_LOGO.jpg
  images: {
    unoptimized: true,
  },

  // DETERMINISMO TÉCNICO
  reactStrictMode: true,
  swcMinify: true,

  // COMPATIBILIDAD DE RUTAS (SPA PROTOCOL)
  trailingSlash: true,

  // 🌐 RE-DIRECCIONAMIENTO DE CANALES (NODO SAN PABLO)
  // Separación de tráfico: API (Puerto 8000) vs RENDER (Puerto 8001) vía Nginx
  env: {
    NEXT_PUBLIC_API_URL: '/api/v1',
    NEXT_PUBLIC_RENDER_URL: '/api/v1/render', // Canal AION específico
  },
};

export default nextConfig;
