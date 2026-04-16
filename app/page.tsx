'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const siteName = "LUME 🌎";

  // 🌐 RECTIFICACIÓN: PUNTERO RELATIVO AL GATEWAY NGINX (PROTOCOLO V5.8.1)
  // Se elimina el puerto 8081 absoluto para evitar fallos de resolución externa.
  const API_BASE = "/api/v1";

  useEffect(() => {
    const session = localStorage.getItem('lume_session_token');
    if (session) setIsLogged(true);

    // Handshake de integridad con el Nodo San Pablo
    fetch(`${API_BASE}/health`, {
      headers: { 
        'X-Lume-Node': 'SAN_PABLO', 
        'X-Environment': 'PRODUCTION' 
      }
    })
    .then(res => res.text())
    .then(status => {
      if(status !== "READY") console.warn("LGC_KERNEL: NODO EN MANTENIMIENTO.");
    })
    .catch(() => console.warn("LGC: MODO DESCONECTADO ACTIVADO."));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('lume_session_token');
    localStorage.removeItem('lume_user_mail');
    window.location.reload(); 
  };

  return (
    <main className="flex flex-col h-screen w-full bg-white text-black font-sans overflow-hidden uppercase">
      
      {/* NAVEGACIÓN: LOGO INMUTABLE */}
      <nav className="w-full p-6 md:p-8 flex justify-between items-center shrink-0 z-50">
        <div className="text-sm font-black tracking-[0.4em] italic">
          {siteName}
        </div>
        
        <div className="flex gap-8 items-center">
          {isLogged && (
            <button 
              onClick={handleLogout}
              className="text-black hover:text-neutral-500 text-[9px] font-bold tracking-[0.2em] underline underline-offset-8 decoration-1 transition-all active:scale-95"
            >
              SALIR ×
            </button>
          )}
          <Link href={isLogged ? "/dashboard" : "/login"}>
            <span className="text-black hover:text-neutral-500 text-[9px] font-bold tracking-[0.2em] underline underline-offset-8 decoration-1 transition-all cursor-pointer">
              {isLogged ? "PANEL →" : "LOG IN →"}
            </span>
          </Link>
        </div>
      </nav>

      <section className="flex-grow flex flex-col items-center justify-center px-4 min-h-0">
        <div className="text-center mb-4 md:mb-6 shrink-0 animate-in fade-in duration-1000">
          {/* TÍTULO: ESTILO KARADA DECO (SERIF) */}
          <h1 className="text-3xl md:text-5xl font-serif font-light tracking-tight leading-tight italic text-black lowercase first-letter:uppercase normal-case">
            Absolute precision.
          </h1>
          <p className="text-[9px] font-black tracking-[0.5em] text-neutral-300 mt-2">
            LUME GLOBAL CORE // AI INFRASTRUCTURE
          </p>
        </div>
        
        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto flex flex-col items-center justify-center">
          <HeroSlider />
          
          <Link href="/pricing" className="mt-8 group flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold tracking-[0.4em] border-b border-black/20 pb-1 transition-all group-hover:tracking-[0.6em] group-hover:border-black text-neutral-400 group-hover:text-black">
              VER PLANES DE SUSCRIPCIÓN
            </span>
            <span className="text-lg animate-bounce mt-2 text-neutral-200 group-hover:text-black transition-colors">↓</span>
          </Link>
        </div>
      </section>

      <footer className="w-full p-6 mt-auto border-t border-neutral-100 flex flex-col items-center gap-2 shrink-0 bg-white z-50">
        <p className="max-w-2xl text-[8px] md:text-[9px] font-medium text-neutral-300 text-center leading-relaxed tracking-[0.2em] italic">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE 🌎
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-[9px] text-neutral-300 pb-2">
          <Link href="/terms" className="hover:text-black underline underline-offset-4 decoration-1 transition-all">
            TÉRMINOS Y CONDICIONES
          </Link>
          <Link href="/privacy" className="hover:text-black underline underline-offset-4 decoration-1 transition-all">
            PRIVACIDAD
          </Link>
          <Link href="/refund" className="hover:text-black underline underline-offset-4 decoration-1 transition-all">
            POLÍTICA DE REEMBOLSO
          </Link>
        </div>
      </footer>
    </main>
  );
}
