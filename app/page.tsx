'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const [isLogged, setIsLogged] = useState(false);
  const siteName = "LUME 🌎";

  // VERIFICACIÓN DE AUTORIDAD PARA BOTÓN DINÁMICO
  useEffect(() => {
    const session = localStorage.getItem('lume_session_token');
    if (session) setIsLogged(true);
  }, []);

  return (
    <main className="flex flex-col h-screen w-full bg-white text-black font-sans overflow-hidden">
      
      {/* NAVEGACIÓN: SOBERANÍA TÉCNICA */}
      <nav className="w-full p-6 md:p-8 flex justify-between items-center shrink-0 z-50">
        <div className="text-sm font-black tracking-[0.4em] uppercase italic">
          {siteName}
        </div>
        <Link href={isLogged ? "/dashboard" : "/login"}>
          <button className="bg-black text-white px-8 py-3 text-[10px] font-bold tracking-[0.3em] uppercase active:scale-95 transition-all shadow-lg hover:bg-neutral-800">
            {isLogged ? "IR AL PANEL →" : "LOG IN →"}
          </button>
        </Link>
      </nav>

      <section className="flex-grow flex flex-col items-center justify-center px-4 min-h-0">
        <div className="text-center mb-4 md:mb-6 shrink-0 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight uppercase italic">
            Absolute Precision.
          </h1>
          <p className="text-[9px] font-black tracking-[0.5em] text-neutral-400 mt-2 uppercase">Lume Global Core // AI Infrastructure</p>
        </div>
        
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center justify-center">
          <HeroSlider />
          
          <Link href="/pricing" className="mt-8 group flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase border-b border-black pb-1 transition-all group-hover:tracking-[0.6em]">
              Ver Planes de Suscripción
            </span>
            <span className="text-lg animate-bounce mt-2 text-neutral-300">↓</span>
          </Link>
        </div>
      </section>

      {/* FOOTER: BÚNKER LEGAL TRIPLE (LGC-2026) */}
      <footer className="w-full p-6 mt-auto border-t border-neutral-100 flex flex-col items-center gap-2 shrink-0 bg-white z-50">
        <p className="max-w-2xl text-[8px] md:text-[9px] font-mono text-neutral-400 text-center leading-relaxed tracking-[0.2em] uppercase italic">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE 🌎
        </p>
        <div className="flex flex-wrap justify-center gap-8 font-sans text-[9px] text-neutral-400 uppercase pb-2">
          <Link href="/terms" className="hover:text-black underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="hover:text-black underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">
            Privacidad
          </Link>
          <Link href="/refund" className="hover:text-black underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">
            Política de Reembolso
          </Link>
        </div>
      </footer>
    </main>
  );
}
