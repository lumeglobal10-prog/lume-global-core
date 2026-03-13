import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = "L U M E";

  return (
    <main className="flex flex-col h-screen w-full bg-white text-black font-sans overflow-hidden">
      
      {/* HEADER */}
      <nav className="w-full p-6 md:p-8 flex justify-between items-center shrink-0 z-50">
        <div className="text-sm font-black tracking-[0.4em] uppercase">
          {siteName}
        </div>
        {/* Bypass temporal para acceso directo al Dashboard */}
        <Link href="/dashboard">
          <button className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
            Sign In
          </button>
        </Link>
      </nav>

      {/* ÁREA CENTRAL */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 min-h-0">
        <div className="text-center mb-4 md:mb-6 shrink-0">
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight">
            Absolute Precision.
          </h1>
        </div>
        
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center justify-center">
          <HeroSlider />
          <Link href="/pricing" className="mt-8 group flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase border-b border-black pb-1 group-hover:px-4 transition-all">
              Ver Planes de Suscripción
            </span>
            <span className="text-lg animate-bounce mt-2">↓</span>
          </Link>
        </div>
      </section>

      {/* FOOTER: Nombres corregidos para auditoría de Paddle */}
      <footer className="w-full p-6 mt-auto border-t border-neutral-100 flex flex-col items-center gap-2 shrink-0 bg-white z-50">
        <p className="max-w-2xl text-[8px] md:text-[9px] font-mono text-neutral-700 text-center leading-relaxed tracking-[0.15em] uppercase">
          LUMEGLOBALCORE.COM ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE.
        </p>
        <div className="flex gap-8 font-mono text-[9px] text-neutral-500 uppercase pb-2">
          <Link href="/terms" className="hover:text-black transition-colors underline underline-offset-4">
            [ Términos y Condiciones ]
          </Link>
          <Link href="/privacy" className="hover:text-black transition-colors underline underline-offset-4">
            [ Privacidad ]
          </Link>
        </div>
      </footer>

    </main>
  );
}
