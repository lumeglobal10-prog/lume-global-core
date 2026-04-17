import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";

// 🖋️ CONFIGURACIÓN TIPOGRÁFICA LUME GLOBAL CORE
const sans = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  weight: ["300", "400", "700", "900"] 
});

const serif = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"]
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
  },
  twitter: {
    card: "summary_large_image",
    title: "LUME GLOBAL CORE",
    description: "INFRAESTRUCTURA DE IA DE PRECISIÓN.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      {/* 📐 RECTIFICACIÓN: SELECCIÓN ABSOLUTA Y MAYÚSCULAS MANDATORIAS */}
      <body className="bg-[#FFFFFF] text-black antialiased font-sans selection:bg-black selection:text-white uppercase tracking-[0.2em] min-h-screen">
        {/* ENVOLTORIO DE PROTECCIÓN DE DISEÑO RECTO */}
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
