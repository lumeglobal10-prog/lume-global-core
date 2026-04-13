import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";

// 🖋️ CONFIGURACIÓN TIPOGRÁFICA: ESTILO KARADA DECO
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

// 🌐 META-DATOS DE SOBERANÍA DIGITAL (LGC-2026)
export const metadata = {
  title: "LUME GLOBAL CORE | AI Precision Engineering",
  description: "Infraestructura de Inteligencia Artificial para el Real Estate de Ultra-Lujo. Renders de alta precisión y automatización inmobiliaria.",
  keywords: ["Real Estate AI", "Lume Global Core", "Virtual Staging", "Inmobiliaria Tech", "Arquitectura IA"],
  authors: [{ name: "Jorge Alejandro Dellaria" }],
  openGraph: {
    title: "LUME GLOBAL CORE",
    description: "Sistemas de renderizado de precisión para activos inmobiliarios.",
    url: "https://lumeglobalcore.com",
    siteName: "Lume Global Core",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUME GLOBAL CORE",
    description: "Infraestructura de IA de precisión.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <body className="bg-white text-black antialiased font-sans selection:bg-black selection:text-white">
        {/* El children hereda las variables CSS para usar font-serif y font-sans */}
        {children}
      </body>
    </html>
  );
}
