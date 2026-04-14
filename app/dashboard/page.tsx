'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  
  // ESTADOS DE SESIÓN Y MONTAJE
  const [mounted, setMounted] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [userMail, setUserMail] = useState('');

  // ESTADOS DE SISTEMA (DIRECTIVA V3.6)
  const [isSystemOnline, setIsSystemOnline] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [availableRenders, setAvailableRenders] = useState(0);
  
  // CONFIGURACIÓN DE INGESTA (LITERALIDAD KERNEL/M.I.C.)
  const [selectedQuality, setSelectedQuality] = useState('LGC_Q_SOC');
  const [selectedStyle, setSelectedStyle] = useState('minimalista');
  const [recentRenders, setRecentRenders] = useState([]);

  // CONSTANTES INMUTABLES (NGINX GATEWAY)
  const API_BASE = "https://lumeglobalcore.com/api";
  const DASHBOARD_TOKEN = "DASHBOARD_INTERNAL_SECURE_V7"; // Bypass Firewall Header

  useEffect(() => {
    setMounted(true);
    const token = localStorage.getItem('lume_session_token');
    const mail = localStorage.getItem('lume_user_mail') || '';
    
    if (!token) {
      router.push('/login');
    } else {
      setIsLogged(true);
      setUserMail(mail);
      
      // Handshake de Integridad (Status Check)
      fetch(`${API_BASE}/v1/auth/validate`, { 
        headers: { 'X-Lume-Node': 'SAN_PABLO_01', 'X-Lume-Internal-Auth': DASHBOARD_TOKEN } 
      })
      .then(res => setIsSystemOnline(res.ok))
      .catch(() => setIsSystemOnline(false));

      if (mail) fetchAccountStatus(mail);
    }
  }, [router]);

  const fetchAccountStatus = async (mail: string) => {
    try {
      const res = await fetch(`${API_BASE}/v1/account/status/${mail}`, {
        headers: { 'X-Lume-Internal-Auth': DASHBOARD_TOKEN }
      });
      if (res.ok) {
        const data = await res.json();
        setAvailableRenders(data.available_renders);
        fetchHistory(mail);
      }
    } catch (e) { console.warn("LGC_IGNORANCIA_TECNICA: Fallo en consulta de status."); }
  };

  const fetchHistory = async (mail: string) => {
    try {
      const res = await fetch(`${API_BASE}/v1/history/${mail}`, {
        headers: { 'X-Lume-Internal-Auth': DASHBOARD_TOKEN }
      });
      if (res.ok) {
        const data = await res.json();
        setRecentRenders(data);
      }
    } catch (e) { console.warn("LGC_DB_ERROR: Historial inaccesible."); }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !isSystemOnline) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('quality_mode', selectedQuality); // Literal Kernel
    
    // Inyección de Parámetros MIC (Literal)
    const render_params = JSON.stringify({
      style_id: selectedStyle,
      resolution: selectedQuality.replace('LGC_Q_', ''),
      engine_mode: "quality"
    });
    formData.append('render_params', render_params);
    formData.append('email', userMail);

    try {
      const response = await fetch(`${API_BASE}/v1/render/create`, {
        method: 'POST',
        headers: { 'X-Lume-Node': 'SAN_PABLO_01' },
        body: formData,
      });

      if (response.status === 402) {
        alert("LUME_INSUFFICIENT_CREDITS: Upgrade required.");
      } else if (response.ok) {
        alert("ÉXITO: Tarea enviada al Kernel.");
        fetchAccountStatus(userMail);
      }
    } catch (error) {
      alert("CONFLICTO TÉCNICO: Error en ingesta.");
    } finally {
      setUploading(false);
    }
  };

  if (!mounted || !isLogged) return <div className="bg-white h-screen" />;

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-black font-sans flex flex-col p-6 md:p-10">
      
      {/* NAVEGACIÓN */}
      <nav className="flex justify-between items-center w-full mb-12 shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase italic">LUME 🌎</div>
        <div className="flex items-center gap-6">
           <div className={`w-2.5 h-2.5 rounded-full ${isSystemOnline ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-red-600 animate-pulse'}`}></div>
           <button onClick={() => {localStorage.clear(); router.push('/');}} className="text-[9px] font-bold uppercase tracking-[0.2em] underline underline-offset-8">SALIR ×</button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">
        
        {/* HEADER KARADA */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-serif font-light italic lowercase first-letter:uppercase mb-2">Panel de renderizado.</h1>
          <div className="flex justify-center items-center gap-2">
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-300">Saldo:</span>
            <span className="text-xl font-serif italic text-black">{availableRenders} <span className="text-[9px] font-sans not-italic text-neutral-400">renders</span></span>
          </div>
        </div>

        {/* SELECTORES DE CONFIGURACIÓN (LITERALES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-black/5 p-6 rounded-[32px] shadow-sm">
             <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-4 block italic">Botones de Calidad</span>
             <div className="grid grid-cols-4 gap-2">
                {['Social', '2K', '4K', '8K'].map((q) => (
                  <button 
                    key={q}
                    onClick={() => setSelectedQuality(`LGC_Q_${q.toUpperCase()}`)}
                    className={`py-3 rounded-xl text-[10px] font-bold tracking-widest transition-all ${selectedQuality === `LGC_Q_${q.toUpperCase()}` ? 'bg-black text-white shadow-lg' : 'bg-neutral-50 text-neutral-400 border border-black/5 hover:border-black/20'}`}
                  >
                    {q}
                  </button>
                ))}
             </div>
          </div>

          <div className="bg-white border border-black/5 p-6 rounded-[32px] shadow-sm">
             <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-4 block italic">Estética M.I.C.</span>
             <select 
              value={selectedStyle} 
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="w-full bg-transparent font-serif italic text-xl focus:outline-none cursor-pointer capitalize"
             >
                {['mediterraneo', 'nordico', 'industrial', 'racionalista', 'colonial_moderno', 'minimalista'].map(s => (
                  <option key={s} value={s}>{s.replace('_', ' ')}</option>
                ))}
             </select>
          </div>
        </div>

        {/* ZONA DE CAPTURA UNIFICADA */}
        <div 
          onClick={() => isSystemOnline && !uploading && fileInputRef.current?.click()}
          className={`relative group border-2 border-dashed border-black/10 hover:border-black/30 bg-white rounded-[48px] p-20 transition-all cursor-pointer flex flex-col items-center justify-center gap-4 ${!isSystemOnline ? 'opacity-30' : ''}`}
        >
          <span className="text-4xl group-hover:scale-110 transition-transform">✨</span>
          <p className="font-serif italic text-2xl">Carga de activos</p>
          <div className="flex gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 underline underline-offset-4">Galería</span>
            <span onClick={(e) => {e.stopPropagation(); cameraInputRef.current?.click();}} className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 underline underline-offset-4 cursor-pointer hover:text-black">Cámara</span>
          </div>
          {uploading && (
            <div className="absolute inset-0 bg-white/90 backdrop-blur-md rounded-[48px] flex flex-col items-center justify-center z-30">
              <div className="w-10 h-10 border-2 border-black border-t-transparent rounded-full animate-spin mb-4"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] animate-pulse">Sincronizando...</span>
            </div>
          )}
        </div>

        {/* VISUALIZADOR DE RESULTADOS */}
        <div className="mt-8">
          <h2 className="font-serif text-2xl italic lowercase first-letter:uppercase border-b border-black/5 pb-2 mb-6">Renders recientes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-20">
            {recentRenders.map((render: any) => (
              <div key={render.asset_id} className="bg-white border border-black/5 rounded-[32px] overflow-hidden p-2 shadow-sm group">
                 <div className="aspect-square rounded-[26px] overflow-hidden bg-neutral-100 relative mb-4">
                    <img src={render.preview_url} alt="Lume Render" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <a 
                  href={render.final_asset_url} 
                  target="_blank" 
                  className="w-full block py-3 rounded-2xl bg-black text-white text-[9px] font-bold uppercase tracking-widest text-center hover:bg-neutral-800 transition-colors"
                 >
                  Descargar Render [{render.quality}]
                 </a>
              </div>
            ))}
          </div>
        </div>

      </div>

      <input type="file" ref={fileInputRef} onChange={handleUpload} className="hidden" accept="image/*" />
      <input type="file" ref={cameraInputRef} onChange={handleUpload} className="hidden" accept="image/*" capture="environment" />
      
      <footer className="w-full py-8 border-t border-black/5 flex justify-center mt-auto">
        <p className="text-[8px] font-bold text-neutral-300 tracking-[0.5em] uppercase italic">LUME GLOBAL CORE // NODO_SAN_PABLO_01</p>
      </footer>
    </main>
  );
}
