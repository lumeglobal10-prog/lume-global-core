'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [status, setStatus] = useState<'OFFLINE' | 'ONLINE'>('OFFLINE');
  const [credits, setCredits] = useState('0 / 0');

  // 🌐 PROTOCOLO DE CONEXIÓN: NODO SAN PABLO
  const API_BASE = "/api/v1";

  useEffect(() => {
    const sync = async () => {
      const token = localStorage.getItem('lume_session_token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        // RECTIFICACIÓN: MÉTODO POST MANDATORIO SEGÚN PROTOCOLO KERNEL ALPHA
        const res = await fetch(`${API_BASE}/auth/validate`, {
          method: 'POST',
          headers: { 
            'Authorization': `Bearer ${token}`,
            'X-Lume-Node': 'SAN_PABLO_01',
            'Content-Type': 'application/json'
          }
        });

        if (res.ok) {
          const data = await res.json();
          setStatus('ONLINE');
          // Sincronización de cuota de renderizado desde el Búnker
          if (data.credits) setCredits(data.credits);
        } else {
          // Token inválido o expirado
          localStorage.clear();
          router.push('/login');
        }
      } catch (e) {
        console.error("LGC_CORE: FALLO DE SINCRONIZACIÓN CON KERNEL.");
      }
    };

    sync();
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    document.cookie = "lume_session_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.href = '/login/';
  };

  return (
    <main className="bg-[#FCFAFA] text-black min-h-screen p-6 md:p-10 flex flex-col uppercase tracking-widest">
      {/* NAVEGACIÓN: LOGO INMUTABLE */}
      <nav className="flex justify-between items-center mb-16 shrink-0">
        <div className="text-[10px] font-black italic tracking-[0.5em]">LUME 🌎</div>
        <div 
          onClick={handleLogout} 
          className="text-[9px] font-bold opacity-30 cursor-pointer hover:opacity-100 transition-opacity"
        >
          SALIR ×
        </div>
      </nav>

      <div className="max-w-4xl mx-auto w-full space-y-12 flex-grow">
        <h1 className="text-4xl md:text-5xl font-serif font-light italic text-center lowercase first-letter:uppercase tracking-normal normal-case">
          Panel de renderizado.
        </h1>

        {/* INDICADOR DE ESTADO (LED) */}
        <div className="flex justify-center">
          <div className="border border-black/5 bg-white px-8 py-4 rounded-full flex items-center gap-6 shadow-sm">
            <div 
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                status === 'ONLINE' 
                ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]' 
                : 'bg-red-500 animate-pulse'
              }`}
            ></div>
            <div className="h-4 w-[1px] bg-black/10"></div>
            <span className="text-lg font-serif italic normal-case tracking-normal">
              {credits}
            </span>
          </div>
        </div>

        {/* SELECTORES DE CALIDAD Y ESTÉTICA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 p-6 rounded-3xl border border-black/5 space-y-3">
            <span className="text-[7px] font-black opacity-30">CALIDAD_CORE</span>
            <div className="flex gap-2">
              <button className="flex-1 py-3 bg-black text-white rounded-xl text-[9px] font-bold">SOCIAL</button>
              <button className="flex-1 py-3 bg-white border border-black/5 rounded-xl text-[9px] font-bold opacity-30 cursor-not-allowed">2K</button>
              <button className="flex-1 py-3 bg-white border border-black/5 rounded-xl text-[9px] font-bold opacity-30 cursor-not-allowed">4K</button>
            </div>
          </div>
          <div className="bg-neutral-50 p-6 rounded-3xl border border-black/5 space-y-3">
            <span className="text-[7px] font-black opacity-30">M.I.C. ESTÉTICA</span>
            <div className="text-[11px] font-serif italic normal-case tracking-normal py-2 border-b border-black/5">
              MEDITERRÁNEO ▼
            </div>
          </div>
        </div>

        {/* DROPZONE DE ACTIVOS */}
        <div className="border-2 border-dashed border-black/5 rounded-[40px] p-20 flex flex-col items-center gap-6 bg-white/50 cursor-pointer transition-all hover:bg-white hover:border-black/20">
          <div className="text-3xl opacity-20">✨</div>
          <p className="font-serif italic text-2xl normal-case tracking-normal">Carga de Activos</p>
          <button className="px-8 py-3 bg-black text-white text-[9px] font-bold rounded-full shadow-lg active:scale-95 transition-all">
            ABRIR CÁMARA
          </button>
        </div>
      </div>

      <footer className="mt-12 text-center">
        <p className="text-[8px] font-black tracking-[0.4em] text-neutral-200 italic">
          LUME GLOBAL CORE // NODO_SAN_PABLO_01
        </p>
      </footer>
    </main>
  );
}
