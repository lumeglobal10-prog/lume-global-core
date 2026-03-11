import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lume Global Core | Precision Engineering",
  description: "Infraestructura de IA para Real Estate de Ultra-Lujo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
