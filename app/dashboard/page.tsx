'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [status, setStatus] = useState<'OFFLINE' | 'ONLINE'>('OFFLINE');

  // 🌐 ALINEACIÓN MANDATORIA: NODO SAN PABLO
  const API_BASE = "/api/v1";
  const SESSION_KEY = "lume_session_token";

  useEffect(() => {
    const sync = async () => {
      const token = localStorage.getItem(SESSION_KEY);
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        // RECTIFICACIÓN SEGÚN BLUEPRINT KERNEL: /auth/check
        const res = await fetch(`${API_BASE}/auth/check`, {
          method: 'POST',
          headers: { 
            'Authorization': `Bearer ${token}`,
            'X-Lume-Node': 'SAN_PABLO_01',
            'Content-Type': 'application/json'
          }
        });

        if (res.ok) {
          setStatus('ONLINE');
        } else {
          localStorage.removeItem(SESSION_KEY);
          router.push('/login');
        }
      } catch (e) {
        console.error("LGC_CORE: FALLO DE CONEXIÓN CON KERNEL.");
      }
    };

    sync();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    document.cookie = `${SESSION_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    window.location.href = '/login/';
  };

  return (
    <main className="bg-[#FCFAFA] text-black min-h-screen p-6 md:p-10 flex flex-col uppercase tracking-widest">
      <nav className="flex justify-between items-center mb-16 shrink-0">
        <div className="text-[10px] font-black italic tracking-[0.5em]">LUME 🌎</div>
        <div onClick={handleLogout} className="text-[9px] font-bold opacity-30 cursor-pointer hover:opacity-100 transition-opacity">
          SALIR ×
        </div>
      </nav>

      <div className="max-w-4xl mx-auto w-full space-y-12 flex-grow">
        <h1 className="text-4xl md:text-5xl font-serif font-light italic text-center lowercase first-letter:uppercase tracking-normal normal-case">
          Panel de renderizado.
        </h1>

        <div className="flex justify-center">
          <div className="border border-black/5 bg-white px-8 py-4 rounded-full flex items-center gap-6 shadow-sm">
            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              status === 'ONLINE' ? 'bg-green-500 shadow-[0_0_12px_#22c55e]' : 'bg-red-500 animate-pulse'
            }`}></div>
            <div className="h-4 w-[1px] bg-black/10"></div>
            <span className="text-lg font-serif italic normal-case tracking-normal">ACTIVO</span>
          </div>
        </div>

        <div className="border-2 border-dashed border-black/5 rounded-[40px] p-20 flex flex-col items-center gap-6 bg-white/50 cursor-pointer transition-all hover:bg-white hover:border-black/20">
          <p className="font-serif italic text-2xl normal-case tracking-normal">Carga de Activos</p>
          <button className="px-8 py-3 bg-black text-white text-[9px] font-bold rounded-full shadow-lg">CARGAR</button>
        </div>
      </div>
    </main>
  );
}
