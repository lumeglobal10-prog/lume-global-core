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
    <main className="flex flex-col h-screen w-full bg-[#FFFFFF] text-black font-sans overflow-hidden uppercase tracking-widest">
      
      {/* NAVEGACIÓN: ESTILO RECTO LUME */}
      <nav className="w-full p-8 flex justify-between items-center shrink-0 z-50 border-b border-black">
        <div className="text-sm font-black tracking-[0.5em] italic">
          {siteName}
        </div>
        
        <div className="flex gap-10 items-center">
          {isLogged && (
            <button 
              onClick={handleLogout}
              className="text-black text-[9px] font-black tracking-[0.3em] hover:opacity-50 transition-none"
            >
              SALIR ×
            </button>
          )}
          <Link href={isLogged ? "/dashboard" : "/login"}>
            <span className="text-black text-[9px] font-black tracking-[0.3em] border border-black px-6 py-2 hover:bg-black hover:text-white transition-none cursor-pointer">
              {isLogged ? "DASHBOARD" : "LOG IN"}
            </span>
          </Link>
        </div>
      </nav>

      <section className="flex-grow flex flex-col items-center justify-center px-4 min-h-0">
        <div className="text-center mb-12 shrink-0">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-black uppercase">
            ABSOLUTE PRECISION.
          </h1>
          <p className="text-[10px] font-black tracking-[0.6em] text-black/20 mt-4">
            LUME GLOBAL CORE // AI INFRASTRUCTURE
          </p>
        </div>
        
        <div className="w-full max-w-md md:max-w-xl lg:max-w-4xl mx-auto flex flex-col items-center justify-center">
          <HeroSlider />
          
          <Link href="/pricing" className="mt-12 flex flex-col items-center gap-4">
            <span className="text-[10px] font-black tracking-[0.5em] bg-black text-white px-8 py-4 transition-none hover:bg-black">
              VER PLANES DE SUSCRIPCIÓN
            </span>
          </Link>
        </div>
      </section>

      {/* FOOTER: ESTÉTICA RECTA Y MAYÚSCULAS */}
      <footer className="w-full p-8 mt-auto border-t border-black flex flex-col items-center gap-6 shrink-0 bg-[#FFFFFF] z-50">
        <div className="flex flex-wrap justify-center gap-12 text-[9px] font-black tracking-[0.3em] text-black">
          <Link href="/terms" className="hover:opacity-50 transition-none">TÉRMINOS Y CONDICIONES</Link>
          <Link href="/privacy" className="hover:opacity-50 transition-none">PRIVACIDAD</Link>
          <Link href="/refund" className="hover:opacity-50 transition-none">POLÍTICA DE REEMBOLSO</Link>
        </div>
        <p className="text-[8px] font-black text-black/10 tracking-[0.5em] italic uppercase">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE 🌎
        </p>
      </footer>
    </main>
  );
}
