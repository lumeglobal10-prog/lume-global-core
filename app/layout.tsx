import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });

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
    icon: "/favicon.ico", // Asegurate de subir el favicon a la carpeta public
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${roboto.variable} scroll-smooth`}>
      <body className="bg-white text-black antialiased font-sans selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
