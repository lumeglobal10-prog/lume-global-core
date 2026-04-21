'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [status, setStatus] = useState<'OFFLINE' | 'ONLINE'>('OFFLINE');
  
  // 🏛️ REQUERIMIENTO 4: DESGLOSE POR CALIDAD (SISTEMA 20/30)
  const [quotas, setQuotas] = useState({
    quota_8k_fixed: 0,
    quota_4k_fixed: 0,
    quota_hd_fixed: 0,
    quota_sd_fixed: 0
  });

  // 🏛️ RECTIFICACIÓN: JERARQUÍA DE RESOLUCIÓN POR PLAN
  const [maxResAllowed, setMaxResAllowed] = useState('SD');

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
          
          const assetRes = await fetch(`${API_BASE}/subscriber/assets`, {
            headers: { 
              'Authorization': `Bearer ${token}`,
              'X-Lume-Node': 'SAN_PABLO_01'
            }
          });
          const assetData = await assetRes.json();
          
          // 🏛️ REQUERIMIENTO 4: MAPEO DE VARIABLES FIJAS
          setQuotas({
            quota_8k_fixed: assetData.quota_8k_fixed || 0,
            quota_4k_fixed: assetData.quota_4k_fixed || 0,
            quota_hd_fixed: assetData.quota_hd_fixed || 0,
            quota_sd_fixed: assetData.quota_sd_fixed || 0
          });

          // 🏛️ RECTIFICACIÓN: ASIGNACIÓN DE TECHO TÉCNICO
          setMaxResAllowed(assetData.max_res_allowed || 'SD');
          
        } else {
          localStorage.removeItem(SESSION_KEY);
          router.push('/login/');
        }
      } catch (e) {
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

  // 🏛️ LÓGICA DE BLOQUEO BINARIO (CUOTA + JERARQUÍA)
  const canRender = (resolution: string, value: number) => {
    const hierarchy: Record<string, number> = { 'SD': 1, 'HD': 2, '4K': 3, '8K': 4 };
    const userLevel = hierarchy[maxResAllowed] || 1;
    const targetLevel = hierarchy[resolution] || 1;

    return value > 0 && targetLevel <= userLevel;
  };

  const totalCredits = Object.values(quotas).reduce((a, b) => a + b, 0);

  return (
    <main className="h-screen w-full bg-[#FFFFFF] text-black flex flex-col uppercase tracking-[0.2em] zero-scroll overflow-hidden">
      
      <div className="w-full bg-black text-white text-[11px] py-4 text-center font-[300] tracking-[0.5em] font-serif uppercase">
        NODO SAN PABLO: {status} // CRÉDITOS TOTALES: {totalCredits}
      </div>

      <nav className="flex justify-between items-center p-8 border-b border-black shrink-0">
        <div className="text-[12px] font-[300] italic tracking-[0.5em] font-serif">LUME 🌎</div>
        <div onClick={handleLogout} className="text-[11px] font-[300] cursor-pointer transition-none font-serif hover:opacity-50">
          SALIR ×
        </div>
      </nav>

      <div className="max-w-6xl mx-auto w-full px-10 py-6 space-y-12 flex-grow flex flex-col justify-center">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-[300] tracking-[0.1em] leading-tight uppercase font-serif">
            PANEL DE RENDERIZADO.
          </h1>
          <p className="text-[10px] font-[300] tracking-[0.4em] opacity-40 font-serif">SISTEMA 20/30 // CORE_V5.2</p>
        </div>

        <div className={`border border-black p-16 flex flex-col items-center gap-8 rounded-none transition-none ${totalCredits > 0 ? 'bg-white' : 'bg-neutral-100 opacity-50'}`}>
          <div className="text-center space-y-4">
            <p className="text-[14px] font-[400] tracking-[0.6em] font-serif uppercase">CARGA DE ACTIVOS</p>
            <p className="text-[9px] text-black/30 font-[300] tracking-[0.3em] font-serif uppercase">JPG, PNG (MAX 25MB)</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: '8K', val: quotas.quota_8k_fixed },
              { label: '4K', val: quotas.quota_4k_fixed },
              { label: 'HD', val: quotas.quota_hd_fixed },
              { label: 'SD', val: quotas.quota_sd_fixed }
            ].map((q) => (
              <button 
                key={q.label}
                disabled={!canRender(q.label, q.val)}
                className={`px-8 py-3 border text-[10px] font-[300] tracking-[0.4em] transition-none font-serif ${
                  canRender(q.label, q.val) 
                  ? 'border-black bg-white hover:bg-black hover:text-white' 
                  : 'border-neutral-200 text-neutral-300 cursor-not-allowed opacity-30'
                }`}
              >
                {q.label} ({q.val})
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-black">
          <div className="border-r border-b border-black p-8 text-center space-y-2">
            <p className="text-[9px] font-[300] text-black/40 tracking-[0.4em] font-serif uppercase">8K_FIXED</p>
            <p className="text-3xl font-[300] font-serif">{quotas.quota_8k_fixed}</p>
          </div>
          <div className="border-r border-b border-black p-8 text-center space-y-2">
            <p className="text-[9px] font-[300] text-black/40 tracking-[0.4em] font-serif uppercase">4K_FIXED</p>
            <p className="text-3xl font-[300] font-serif">{quotas.quota_4k_fixed}</p>
          </div>
          <div className="border-r border-b border-black p-8 text-center space-y-2">
            <p className="text-[9px] font-[300] text-black/40 tracking-[0.4em] font-serif uppercase">HD_FIXED</p>
            <p className="text-3xl font-[300] font-serif">{quotas.quota_hd_fixed}</p>
          </div>
          <div className="border-r border-b border-black p-8 text-center space-y-2">
            <p className="text-[9px] font-[300] text-black/40 tracking-[0.4em] font-serif uppercase">SD_FIXED</p>
            <p className="text-3xl font-[300] font-serif">{quotas.quota_sd_fixed}</p>
          </div>
        </div>
      </div>

      <footer className="p-8 border-t border-black text-center bg-[#FFFFFF] shrink-0">
        <p className="text-[9px] font-[300] text-[#333] opacity-40 tracking-[0.5em] font-serif italic uppercase">
          LUME GLOBAL CORE // KERNEL_SAN_PABLO // /DASHBOARD_V5.2
        </p>
      </footer>
    </main>
  );
}
