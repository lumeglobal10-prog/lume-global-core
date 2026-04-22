import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

// 🖋️ CONFIGURACIÓN TIPOGRÁFICA LUME GLOBAL CORE V5.2.5
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ["400"] 
});

const playfair = Playfair_Display({
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ["300", "400"]
});

// 🌐 META-DATOS DE SOBERANÍA DIGITAL (LGC-2026) - NODO SAN PABLO
export const metadata = {
  title: "LUME GLOBAL CORE | AI PRECISION ENGINEERING",
  description: "INFRAESTRUCTURA DE INTELIGENCIA ARTIFICIAL PARA EL REAL ESTATE DE ULTRA-LUJO. RENDERS DE ALTA PRECISIÓN Y AUTOMATIZACIÓN INMOBILIARIA.",
  keywords: ["REAL ESTATE AI", "LUME GLOBAL CORE", "VIRTUAL STAGING", "INMOBILIARIA TECH", "ARQUITECTURA IA"],
  authors: [{ name: "JORGE ALEJANDRO DELLARIA" }],
  openGraph: {
    title: "LUME GLOBAL CORE",
    description: "SISTEMAS DE RENDERIZADO DE PRECISIÓN PARA ACTIVOS INMOBILIARIOS.",
    url: "https://lumeglobalcore.com",
    siteName: "LUME GLOBAL CORE",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/LUME_UNIVERSAL_LOGO.png",
        width: 1200,
        height: 630,
        alt: "LUME GLOBAL CORE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUME GLOBAL CORE",
    description: "INFRAESTRUCTURA DE IA DE PRECISIÓN.",
    images: ["/LUME_UNIVERSAL_LOGO.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 📐 REQUERIMIENTO 2: VIEWPORT "ZERO-SCROLL" / ELIMINACIÓN DE SCROLL GLOBAL
    <html lang="es" className={`${inter.variable} ${playfair.variable} zero-scroll`}>
      <body className="bg-[#FFFFFF] text-black antialiased font-serif selection:bg-black selection:text-white uppercase tracking-[0.2em] min-h-screen overflow-hidden">
        
        {/* 🛡️ PROTOCOLO DE PURGA ALFA: ANULACIÓN DE PERSISTENCIA ZOMBIE */}
        <script dangerouslySetInnerHTML={{ __html: `
          if (typeof window !== 'undefined') {
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(regs => {
                for(let reg of regs) reg.unregister();
              });
            }
            if ('caches' in window) {
              caches.keys().then(names => {
                for (let name of names) caches.delete(name);
              });
            }
          }
        `}} />

        {/* ENVOLTORIO DE PROTECCIÓN DE DISEÑO RECTO 100VH */}
        <div className="flex flex-col h-screen w-full overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
