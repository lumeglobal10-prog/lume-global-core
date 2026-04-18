import "./globals.css";
import { Inter } from "next/font/google";

// 🖋️ CONFIGURACIÓN TIPOGRÁFICA LUME GLOBAL CORE: ELIMINACIÓN DE SERIF
const sans = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ["400", "900"] 
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
    <html lang="es" className={`${sans.variable} scroll-none`}>
      {/* 📐 RECTIFICACIÓN: SELECCIÓN ABSOLUTA Y MAYÚSCULAS MANDATORIAS */}
      <body className="bg-[#FFFFFF] text-black antialiased font-sans selection:bg-black selection:text-white uppercase tracking-[0.2em] min-h-screen">
        {/* ENVOLTORIO DE PROTECCIÓN DE DISEÑO RECTO - OVERFLOW OCULTO PARA MANTENER ESTRUCTURA */}
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
