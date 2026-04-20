'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [status, setStatus] = useState<'OFFLINE' | 'ONLINE'>('OFFLINE');
  const [rendersRestantes, setRendersRestantes] = useState(0);

  // 🌐 RECTIFICACIÓN V5.1: USO DE RUTA RELATIVA PARA TÚNEL SSL (NGINX)
  const API_BASE = "/api/v1";
  const SESSION_KEY = "lume_session_token";

  useEffect(() => {
    const sync = async () => {
      const token = localStorage.getItem(SESSION_KEY);
      if (!token) {
        router.push('/login/');
        return;
      }

      try {
        // 🛡️ VALIDACIÓN DE SESIÓN EN NODO SAN PABLO
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
          
          // 💰 CONSULTA DE ACTIVOS: LITERALIDAD NOMENCLATURA V5.1
          const assetRes = await fetch(`${API_BASE}/subscriber/assets`, {
            headers: { 
              'Authorization': `Bearer ${token}`,
              'X-Lume-Node': 'SAN_PABLO_01'
            }
          });
          const assetData = await assetRes.json();
          
          // MAPEO DE VARIABLES MANDATORIAS: promo_por_renders
          if (assetData.promo_por_renders !== undefined) {
            setRendersRestantes(assetData.promo_por_renders);
          }
          
        } else {
          localStorage.removeItem(SESSION_KEY);
          router.push('/login/');
        }
      } catch (e) {
        console.error("LGC_CORE: FALLO DE CONEXIÓN CON KERNEL SAN PABLO.");
        setStatus('OFFLINE');
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
      
      {/* 💳 BANNER DE CORTESÍA ACTIVA */}
      {rendersRestantes > 0 && (
        <div className="w-full bg-black text-white text-[11px] py-4 text-center font-[300] tracking-[0.5em] font-serif">
          CORTESÍA ACTIVA: {rendersRestantes} RENDERS RESTANTES
        </div>
      )}

      <nav className="flex justify-between items-center p-8 border-b border-black shrink-0">
        <div className="text-[12px] font-[300] italic tracking-[0.5em] font-serif">LUME 🌎</div>
        <div onClick={handleLogout} className="text-[10px] font-[300] cursor-pointer transition-none font-serif">
          SALIR ×
        </div>
      </nav>

      <div className="max-w-6xl mx-auto w-full p-10 md:p-20 space-y-20 flex-grow flex flex-col justify-center">
        
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-[300] tracking-[0.1em] leading-tight uppercase font-serif">
            PANEL DE RENDERIZADO.
          </h1>
          <div className="flex justify-center items-center gap-4">
            <div className={`w-2 h-2 rounded-none ${
              status === 'ONLINE' ? 'bg-black' : 'bg-red-600 animate-pulse'
            }`}></div>
            <span className="text-[10px] font-[300] tracking-[0.4em] font-serif">ESTADO: {status}</span>
          </div>
        </div>

        {/* 📐 ÁREA DE CARGA: BLOQUEO OPERATIVO POR CRÉDITOS */}
        <div className={`border border-black p-24 flex flex-col items-center gap-10 rounded-none transition-none ${rendersRestantes > 0 ? 'bg-white hover:bg-neutral-50 cursor-pointer' : 'bg-neutral-100 cursor-not-allowed'}`}>
          <div className="text-center space-y-4">
            <p className="text-[14px] font-[400] tracking-[0.6em] font-serif">CARGA DE ACTIVOS</p>
            <p className="text-[9px] text-black/30 font-[300] tracking-[0.3em] font-serif">FORMATOS ADMITIDOS: JPG, PNG (MAX 25MB)</p>
          </div>
          
          <button 
            disabled={rendersRestantes <= 0}
            className="px-16 py-6 bg-black text-white text-[10px] font-[300] tracking-[0.5em] transition-none disabled:opacity-20 font-serif"
          >
            {rendersRestantes > 0 ? "SUBIR ARCHIVO" : "SALDO INSUFICIENTE"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black">
          <div className="border-r border-b border-black p-10 text-center space-y-4">
            <p className="text-[9px] font-[300] text-black/40 tracking-[0.4em] font-serif uppercase">PROCESADOS</p>
            <p className="text-4xl font-[300] font-serif">0</p>
          </div>
          <div className="border-r border-b border-black p-10 text-center space-y-4">
            <p className="text-[9px] font-[300] text-black/40 tracking-[0.4em] font-serif uppercase">PENDIENTES</p>
            <p className="text-4xl font-[300] font-serif">0</p>
          </div>
          <div className="border-r border-b border-black p-10 text-center space-y-4">
            <p className="text-[9px] font-[300] text-black/40 tracking-[0.4em] font-serif uppercase">CRÉDITOS</p>
            <p className="text-4xl font-[300] font-serif">{rendersRestantes}</p>
          </div>
        </div>
      </div>

      <footer className="p-10 border-t border-black text-center bg-[#FFFFFF]">
        <p className="text-[9px] font-[300] text-black/20 tracking-[0.5em] font-serif italic uppercase">
          LUME GLOBAL CORE // KERNEL_ALPHA_V10 // /OPT/LUME/CORE/INTERFACE_DASHBOARD/
        </p>
      </footer>
    </main>
  );
}
