'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const siteName = "LUME 🌎";

  // 🌐 RECTIFICACIÓN: USO DE RUTA RELATIVA PARA TÚNEL SSL (NGINX)
  const API_BASE = "/api/v1";

  useEffect(() => {
    const session = localStorage.getItem('lume_session_token');
    if (session) setIsLogged(true);

    // PROTOCOLO DE SALUD DE NODO: VALIDACIÓN BINARIA
    fetch(`${API_BASE}/health`, {
      headers: { 
        'X-Lume-Node': 'SAN_PABLO_01', 
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
    // 📐 REQUERIMIENTO 2: VIEWPORT "ZERO-SCROLL" (100VH)
    <main className="flex flex-col h-screen w-full bg-[#FFFFFF] text-black overflow-hidden uppercase tracking-[0.2em] zero-scroll">
      
      {/* 🏛️ REQUERIMIENTO 2: LOGO ARRIBA A LA IZQUIERDA / PALABRAS DE ACCIÓN A LA DERECHA */}
      <nav className="w-full p-8 flex justify-between items-center shrink-0 z-50 border-b border-black">
        <div className="text-[12px] font-[300] tracking-[0.5em] italic font-serif">
          {siteName}
        </div>
        
        <div className="flex gap-12 items-center">
          {isLogged && (
            <button 
              onClick={handleLogout}
              className="text-black text-[11px] font-[300] tracking-[0.3em] transition-none font-serif border-none bg-none p-0 cursor-pointer"
            >
              SALIR ×
            </button>
          )}
          <Link href={isLogged ? "/dashboard/" : "/login/"}>
            <span className="text-black text-[11px] font-[300] tracking-[0.3em] transition-none cursor-pointer font-serif border-none bg-none p-0">
              {isLogged ? "DASHBOARD" : "LOG IN"}
            </span>
          </Link>
        </div>
      </nav>

      <section className="flex-grow flex flex-col items-center justify-center px-4 min-h-0">
        <div className="text-center mb-12 shrink-0">
          {/* TÍTULO EN MAYÚSCULAS MANDATORIAS */}
          <h1 className="text-4xl md:text-7xl font-[300] tracking-[0.1em] leading-tight text-black uppercase font-serif">
            ABSOLUTE PRECISION.
          </h1>
          <div className="h-[1px] w-24 bg-black mx-auto mt-8 opacity-20"></div>
          <p className="text-[11px] font-[300] tracking-[0.6em] text-black/30 mt-8 font-serif uppercase">
            LUME GLOBAL CORE // AI INFRASTRUCTURE
          </p>
        </div>
        
        <div className="w-full max-w-md md:max-w-xl lg:max-w-4xl mx-auto flex flex-col items-center justify-center">
          <HeroSlider />
          
          <Link href="/pricing/" className="mt-12">
            <span className="text-[11px] font-[300] tracking-[0.5em] bg-black text-white px-12 py-6 transition-none hover:bg-black font-serif inline-block">
              VER PLANES DE SUSCRIPCIÓN
            </span>
          </Link>
        </div>
      </section>

      {/* FOOTER: CONTRASTE OPERATIVO (#333) */}
      <footer className="w-full p-10 mt-auto border-t border-black flex flex-col items-center gap-8 shrink-0 bg-[#FFFFFF] z-50">
        <div className="flex flex-wrap justify-center gap-14 text-[10px] font-[300] tracking-[0.3em] text-[#333] font-serif uppercase">
          <Link href="/terms/" className="transition-none hover:text-black">TÉRMINOS Y CONDICIONES</Link>
          <Link href="/privacy/" className="transition-none hover:text-black">PRIVACIDAD</Link>
          <Link href="/refund/" className="transition-none hover:text-black">POLÍTICA DE REEMBOLSO</Link>
        </div>
        <p className="text-[9px] font-[300] text-[#333] opacity-40 tracking-[0.6em] italic uppercase font-serif">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE 🌎
        </p>
      </footer>
    </main>
  );
}
