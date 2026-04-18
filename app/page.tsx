'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const siteName = "LUME 🌎";

  // 🌐 RECTIFICACIÓN: DIRECCIONAMIENTO DIRECTO AL PUERTO 8000 (NODO SAN PABLO)
  const API_BASE = "http://localhost:8000/api/v1";

  useEffect(() => {
    const session = localStorage.getItem('lume_session_token');
    if (session) setIsLogged(true);

    // PROTOCOLO DE SALUD DE NODO
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
    <main className="flex flex-col h-screen w-full bg-[#FFFFFF] text-black overflow-hidden uppercase tracking-widest">
      
      {/* NAVEGACIÓN: ESTILO RECTO LUME V5.1 */}
      <nav className="w-full p-8 flex justify-between items-center shrink-0 z-50 border-b border-black">
        <div className="text-[11px] font-[300] tracking-[0.5em] italic font-serif">
          {siteName}
        </div>
        
        <div className="flex gap-10 items-center">
          {isLogged && (
            <button 
              onClick={handleLogout}
              className="text-black text-[10px] font-[300] tracking-[0.3em] transition-none font-serif"
            >
              SALIR ×
            </button>
          )}
          <Link href={isLogged ? "/dashboard" : "/login"}>
            <span className="text-black text-[10px] font-[300] tracking-[0.3em] border border-black px-8 py-3 hover:bg-black hover:text-white transition-none cursor-pointer font-serif">
              {isLogged ? "DASHBOARD" : "LOG IN"}
            </span>
          </Link>
        </div>
      </nav>

      <section className="flex-grow flex flex-col items-center justify-center px-4 min-h-0">
        <div className="text-center mb-16 shrink-0">
          {/* TÍTULO: PLAYFAIR DISPLAY 300 / ELEGANCIA EXTREMA */}
          <h1 className="text-4xl md:text-7xl font-[300] tracking-[0.2em] leading-tight text-black uppercase font-serif">
            ABSOLUTE PRECISION.
          </h1>
          <p className="text-[11px] font-[300] tracking-[0.6em] text-black/30 mt-6 font-serif">
            LUME GLOBAL CORE // AI INFRASTRUCTURE
          </p>
        </div>
        
        <div className="w-full max-w-md md:max-w-xl lg:max-w-4xl mx-auto flex flex-col items-center justify-center">
          <HeroSlider />
          
          <Link href="/pricing" className="mt-14 flex flex-col items-center gap-4">
            <span className="text-[11px] font-[300] tracking-[0.5em] bg-black text-white px-10 py-5 transition-none hover:bg-black font-serif">
              VER PLANES DE SUSCRIPCIÓN
            </span>
          </Link>
        </div>
      </section>

      {/* FOOTER: ESTÉTICA RECTA, MAYÚSCULAS Y PESO 300 */}
      <footer className="w-full p-10 mt-auto border-t border-black flex flex-col items-center gap-8 shrink-0 bg-[#FFFFFF] z-50">
        <div className="flex flex-wrap justify-center gap-14 text-[10px] font-[300] tracking-[0.3em] text-black font-serif">
          <Link href="/terms" className="transition-none">TÉRMINOS Y CONDICIONES</Link>
          <Link href="/privacy" className="transition-none">PRIVACIDAD</Link>
          <Link href="/refund" className="transition-none">POLÍTICA DE REEMBOLSO</Link>
        </div>
        <p className="text-[9px] font-[300] text-black/20 tracking-[0.5em] italic uppercase font-serif">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE 🌎
        </p>
      </footer>
    </main>
  );
}
