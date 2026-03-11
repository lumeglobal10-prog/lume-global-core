import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Lume Global Core | Precision Engineering",
  description: "Infraestructura de IA para Real Estate de Ultra-Lujo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${roboto.variable}`}>
      <body className="bg-white text-black antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
