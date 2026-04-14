'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  
  // ESTADOS DE MONTAJE Y SESIÓN
  const [mounted, setMounted] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  // ESTADOS DE SISTEMA Y DATOS
  const [isSystemOnline, setIsSystemOnline] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [userMail, setUserMail] = useState('');
  const [credits, setCredits] = useState({ used: 0, total: 0 });
  
  // ESTADOS DE CONFIGURACIÓN V6.9 (LITERALIDAD LUME)
  const [quality, setQuality] = useState('CORE');
  const [micStyle, setMicStyle] = useState('Nórdico');
  const [recentRenders, setRecentRenders] = useState([]);

  // 🌐 ESPECIFICACIONES SINCRO: TÚNEL NGINX (PUERTO 443)
  const API_BASE = "https://lumeglobalcore.com/api"; 
  const LUME_HEADERS = {
    'Content-Type': 'application/json',
    'X-Lume-Node': 'SAN_PABLO_01'
  };

  useEffect(() => {
    setMounted(true);
    const token = localStorage.getItem('lume_session_token');
    const mail = localStorage.getItem('lume_user_mail') || '';
    
    if (!token) {
      router.push('/login');
    } else {
      setIsLogged(true);
      setUserMail(mail);
      
      // Validación de integridad vía túnel Nginx
      fetch(`${API_BASE}/v1/auth/validate`, { headers: LUME_HEADERS })
        .then(res => setIsSystemOnline(res.ok))
        .catch(() => setIsSystemOnline(false));

      if (mail) fetchCredits(mail);
    }
  }, [router]);

  const fetchCredits = async (mail: string) => {
    try {
      const response = await fetch(`${API_BASE}/v1/payments/subscription-status?email=${mail}`, {
        headers: LUME_HEADERS
      });
      if (response.ok) {
        const data = await response.json();
        setCredits({ used: data.used || 0, total: data.total || 0 });
      }
    } catch (e) { console.warn("LGC_SYNC_ERROR: Comunicación restringida."); }
  };

  const handleLogout = () => {
    localStorage.removeItem('lume_session_token');
    localStorage.removeItem('lume_user_mail');
    router.push('/');
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !isSystemOnline) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('quality', quality);
    formData.append('style', micStyle);
    formData.append('user_mail', userMail);

    try {
      const response = await fetch(`${API_BASE}/v1/render/create`, {
        method: 'POST',
        headers: { 'X-Lume-Node': 'SAN_PABLO_01' },
        body: formData,
      });

      if (response.ok) {
        alert("ACTIVO EN COLA DE PROCESAMIENTO.");
        fetchCredits(userMail);
      }
    } catch (error) {
      alert("ERROR CRÍTICO: Fallo en volumen de ingesta.");
    } finally {
      setUploading(false);
    }
  };

  // Bloqueo de renderizado para evitar destellos de la Home
  if (!mounted || !isLogged) return <div className="min-h-screen bg-white" />;

  return (
    <main className="min-h-screen bg-[#FCFAFA] text-black font-sans flex flex-col p-6 md:p-10 overflow-x-hidden">
      
      {/* NAVEGACIÓN */}
      <nav className="flex justify-between items-center w-full mb-12 shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase italic">LUME 🌎</div>
        <button onClick={handleLogout} className="text-[9px] font-bold uppercase tracking-[0.2em] underline underline-offset-8 decoration-1 transition-all active:scale-95">
          SALIR ×
        </button>
      </nav>

      <div className="max-w-6xl mx-auto w-full flex flex-col gap-10 flex-grow">
        
        {/* TÍTULO ESTILO KARADA DECO */}
        <h1 className="text-4xl md:text-6xl font-serif font-light italic text-center lowercase first-letter:uppercase mb-4">
          Panel de renderizado.
        </h1>

        {/* 1. WIDGETS SUPERIORES CONSOLIDADOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-black/5 bg-white p-6 rounded-3xl shadow-sm flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Status & Saldo</span>
              <span className="text-xl font-serif italic">{credits.used} / {credits.total} <span className="text-[10px] font-sans not-italic font-bold text-neutral-300">renders</span></span>
            </div>
            {/* PUNTO LED DINÁMICO */}
            <div className={`w-3 h-3 rounded-full ${isSystemOnline ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-red-500 animate-pulse'}`}></div>
          </div>

          {/* 2. SELECTORES DE CONFIGURACIÓN */}
          <div className="border border-black/5 bg-white p-4 rounded-3xl shadow-sm">
            <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400 mb-2 block">Calidad Híbrida</span>
            <select value={quality} onChange={(e) => setQuality(e.target.value)} className="w-full bg-transparent font-serif italic text-lg focus:outline-none cursor-pointer">
              <option value="SATELLITE">Satellite (1080p)</option>
              <option value="CORE">Core (2K)</option>
              <option value="ADVANCE">Advance (4K)</option>
              <option value="ULTRA">Ultra (8K)</option>
            </select>
          </div>

          <div className="border border-black/5 bg-white p-4 rounded-3xl shadow-sm">
            <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400 mb-2 block">Estética M.I.C.</span>
            <select value={micStyle} onChange={(e) => setMicStyle(e.target.value)} className="w-full bg-transparent font-serif italic text-lg focus:outline-none cursor-pointer">
              <option value="Nórdico">Nórdico</option>
              <option value="Industrial">Industrial</option>
              <option value="Mediterráneo">Mediterráneo</option>
              <option value="Minimalista">Minimalista</option>
            </select>
          </div>
        </div>

        {/* 3. UNIFICACIÓN DE CAPTURA (ZONA DE ACCIÓN ÚNICA) */}
        <div 
          onClick={() => isSystemOnline && !uploading && fileInputRef.current?.click()}
          className={`relative group border-2 border-dashed border-black/10 hover:border-black/30 bg-white rounded-[40px] p-16 transition-all cursor-pointer flex flex-col items-center justify-center gap-4 ${!isSystemOnline ? 'opacity-40 grayscale' : ''}`}
        >
          <div className="text-4xl group-hover:scale-110 transition-transform">✨</div>
          <p className="font-serif italic text-2xl text-center">Subir activo para renderizar</p>
          <div className="flex gap-4 mt-2">
            <button className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-6 py-2 rounded-full">Galería</button>
            <button 
              onClick={(e) => {e.stopPropagation(); cameraInputRef.current?.click();}} 
              className="text-[10px] font-bold uppercase tracking-widest border border-black px-6 py-2 rounded-full"
            >
              Cámara
            </button>
          </div>
          {uploading && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-[40px] flex flex-col items-center justify-center z-20">
              <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin mb-4"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] animate-pulse">Sincronizando...</span>
            </div>
          )}
        </div>

        {/* 4. VISUALIZADOR DE RESULTADOS */}
        <div className="space-y-6">
          <div className="flex justify-between items-end border-b border-black/5 pb-2">
            <h2 className="font-serif text-2xl italic lowercase first-letter:uppercase">Renders recientes</h2>
            <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-400 italic">LGC Historical Archive</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12">
            {recentRenders.length === 0 ? (
              <p className="col-span-full text-center py-20 font-serif italic text-neutral-300">No hay activos procesados en la cola actual.</p>
            ) : (
              recentRenders.map((render: any) => (
                <div key={render.id} className="aspect-square bg-neutral-100 rounded-3xl overflow-hidden relative group">
                  <img src={render.thumbnail} alt="Render" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-black px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest">Descargar</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

      <input type="file" ref={fileInputRef} onChange={handleUpload} className="hidden" accept="image/*" />
      <input type="file" ref={cameraInputRef} onChange={handleUpload} className="hidden" accept="image/*" capture="environment" />

      <footer className="w-full py-8 border-t border-black/5 flex flex-col items-center gap-4 shrink-0 bg-[#FCFAFA]">
        <p className="text-[8px] font-bold text-neutral-300 tracking-[0.4em] uppercase italic">
          LUME GLOBAL CORE 🌎 // © 2026 // NODO_SAN_PABLO_01
        </p>
      </footer>
    </main>
  );
}
