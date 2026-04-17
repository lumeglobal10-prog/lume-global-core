'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [status, setStatus] = useState<'OFFLINE' | 'ONLINE'>('OFFLINE');
  const [rendersRestantes, setRendersRestantes] = useState(0);

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
        // 🛡️ RECTIFICACIÓN SEGÚN BLUEPRINT KERNEL: /auth/check
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
          
          // 💰 CONSULTA SALDO INMEDIATA (REQ 2)
          const assetRes = await fetch(`${API_BASE}/subscriber/assets`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const assetData = await assetRes.json();
          if (assetData.promo_por_renders) setRendersRestantes(assetData.promo_por_renders);
          
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
    <main className="bg-[#FFFFFF] text-black min-h-screen flex flex-col uppercase tracking-[0.2em]">
      
      {/* 💳 BANNER DE CORTESÍA (REQ 4) */}
      {rendersRestantes > 0 && (
        <div className="w-full bg-black text-white text-[10px] py-3 text-center font-black tracking-[0.5em]">
          CORTESÍA ACTIVA: {rendersRestantes} RENDERS RESTANTES
        </div>
      )}

      <nav className="flex justify-between items-center p-8 border-b border-black shrink-0">
        <div className="text-[10px] font-black italic tracking-[0.5em]">LUME 🌎</div>
        <div onClick={handleLogout} className="text-[10px] font-black cursor-pointer hover:opacity-50 transition-opacity">
          SALIR ×
        </div>
      </nav>

      <div className="max-w-6xl mx-auto w-full p-10 md:p-20 space-y-20 flex-grow flex flex-col justify-center">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none uppercase">
            PANEL DE RENDERIZADO.
          </h1>
          <div className="flex justify-center items-center gap-4">
            <div className={`w-3 h-3 rounded-none ${
              status === 'ONLINE' ? 'bg-green-500' : 'bg-red-500 animate-pulse'
            }`}></div>
            <span className="text-[10px] font-black tracking-[0.4em]">ESTADO: {status}</span>
          </div>
        </div>

        {/* 📐 ÁREA DE CARGA: ESTÉTICA RECTA LUME */}
        <div className="border border-black bg-white p-24 flex flex-col items-center gap-10 rounded-none transition-colors hover:bg-neutral-50 cursor-pointer">
          <div className="text-center space-y-2">
            <p className="text-[12px] font-black tracking-[0.6em]">CARGA DE ACTIVOS</p>
            <p className="text-[9px] text-black/30 font-bold tracking-[0.3em]">FORMATOS ADMITIDOS: JPG, PNG (MAX 25MB)</p>
          </div>
          <button className="px-16 py-5 bg-black text-white text-[10px] font-black tracking-[0.5em] rounded-none hover:bg-neutral-900 transition-all">
            SUBIR ARCHIVO
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-black p-8 text-center space-y-4">
            <p className="text-[8px] font-black text-black/40 tracking-[0.4em]">PROCESADOS</p>
            <p className="text-3xl font-black">0</p>
          </div>
          <div className="border border-black p-8 text-center space-y-4">
            <p className="text-[8px] font-black text-black/40 tracking-[0.4em]">PENDIENTES</p>
            <p className="text-3xl font-black">0</p>
          </div>
          <div className="border border-black p-8 text-center space-y-4">
            <p className="text-[8px] font-black text-black/40 tracking-[0.4em]">CRÉDITOS</p>
            <p className="text-3xl font-black">{rendersRestantes}</p>
          </div>
        </div>
      </div>

      <footer className="p-8 border-t border-black text-center">
        <p className="text-[8px] font-black text-black/20 tracking-[0.5em]">LUME GLOBAL CORE // KERNEL_ALPHA_V10</p>
      </footer>
    </main>
  );
}
