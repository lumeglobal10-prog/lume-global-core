'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  
  const [mounted, setMounted] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isSystemOnline, setIsSystemOnline] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [userMail, setUserMail] = useState('');
  const [credits, setCredits] = useState({ used: 0, total: 0 });
  
  // CONFIGURACIÓN DE DIRECTIVA V7.0
  const [selectedQuality, setSelectedQuality] = useState('SOCIAL');
  const [micStyle, setMicStyle] = useState('Mediterráneo');
  const [renderResult, setRenderResult] = useState<{thumbnail: string, downloadUrl: string} | null>(null);

  // 🌐 PARÁMETROS TÉCNICOS VALIDADOS (LGC V5.8)
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
      
      // Handshake de integridad con Gateway Nginx
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
    } catch (e) { console.warn("LGC_SYNC_ERROR"); }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !isSystemOnline) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('quality', selectedQuality);
    formData.append('style', micStyle);
    formData.append('user_mail', userMail);

    try {
      const response = await fetch(`${API_BASE}/v1/render/create`, {
        method: 'POST',
        headers: { 'X-Lume-Node': 'SAN_PABLO_01' },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        // Sincronización con Base de Datos para entrega de resultados
        setRenderResult({
          thumbnail: data.thumbnail_url,
          downloadUrl: data.download_url
        });
        fetchCredits(userMail);
      }
    } catch (error) {
      alert("FALLO_INGESTA_CORE");
    } finally {
      setUploading(false);
    }
  };

  if (!mounted || !isLogged) return <div className="min-h-screen bg-white" />;

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col p-6 md:p-10">
      
      {/* HEADER MINIMALISTA */}
      <nav className="flex justify-between items-center w-full mb-16">
        <div className="text-[10px] font-black tracking-[0.5em] uppercase italic">LUME</div>
        <button onClick={() => { localStorage.clear(); router.push('/'); }} className="text-[9px] font-bold uppercase tracking-widest opacity-30 hover:opacity-100 transition-opacity">
          SALIR ×
        </button>
      </nav>

      <div className="max-w-4xl mx-auto w-full space-y-12">
        
        {/* TÍTULO KARADA DECO */}
        <h1 className="text-4xl md:text-5xl font-serif font-light italic text-center lowercase first-letter:uppercase">
          Panel de renderizado.
        </h1>

        {/* WIDGET SUPERIOR: ESTADO Y SALDO */}
        <div className="flex justify-center">
          <div className="border border-black/5 bg-neutral-50/50 px-8 py-4 rounded-full flex items-center gap-6 shadow-sm">
            <div className={`w-2 h-2 rounded-full ${isSystemOnline ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-red-500 animate-pulse'}`}></div>
            <div className="h-4 w-[1px] bg-black/10"></div>
            <span className="text-lg font-serif italic tracking-tighter">
              {credits.used} / {credits.total} <span className="text-[8px] font-sans not-italic font-bold uppercase tracking-widest opacity-30 ml-2">Saldo Renders</span>
            </span>
          </div>
        </div>

        {/* SELECTORES DE INGESTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BOTONES DE CALIDAD */}
          <div className="space-y-3">
            <span className="text-[7px] font-bold uppercase tracking-[0.3em] opacity-30 ml-4">Calidad</span>
            <div className="flex bg-neutral-50 p-1 rounded-2xl border border-black/5">
              {['SOCIAL', '2K', '4K', '8K'].map((q) => (
                <button
                  key={q}
                  onClick={() => setSelectedQuality(q)}
                  className={`flex-1 py-3 rounded-xl text-[9px] font-bold tracking-widest transition-all ${selectedQuality === q ? 'bg-black text-white shadow-lg' : 'text-black/40 hover:text-black'}`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* SELECTOR M.I.C. */}
          <div className="space-y-3">
            <span className="text-[7px] font-bold uppercase tracking-[0.3em] opacity-30 ml-4">Estética M.I.C.</span>
            <select 
              value={micStyle} 
              onChange={(e) => setMicStyle(e.target.value)}
              className="w-full bg-neutral-50 border border-black/5 p-4 rounded-2xl font-serif italic text-sm focus:outline-none appearance-none cursor-pointer"
            >
              <option>Mediterráneo</option>
              <option>Industrial</option>
              <option>Nórdico</option>
              <option>Minimalista</option>
            </select>
          </div>
        </div>

        {/* ZONA DE CAPTURA UNIFICADA */}
        <div 
          onClick={() => isSystemOnline && !uploading && fileInputRef.current?.click()}
          className={`group border-2 border-dashed border-black/5 hover:border-black/20 bg-neutral-50/30 rounded-[40px] p-20 transition-all cursor-pointer flex flex-col items-center gap-6 ${!isSystemOnline ? 'opacity-20' : ''}`}
        >
          <div className="text-3xl opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all">✨</div>
          <div className="text-center">
            <p className="font-serif italic text-2xl mb-2">Carga de Activos</p>
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-30">Galería & Cámara</p>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); cameraInputRef.current?.click(); }}
            className="mt-4 px-8 py-2 border border-black text-[9px] font-bold uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all"
          >
            Abrir Cámara
          </button>
        </div>

        {/* VISUALIZADOR DE RESULTADOS */}
        {renderResult && (
          <div className="pt-10 border-t border-black/5 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="w-full max-w-sm aspect-video rounded-3xl overflow-hidden shadow-2xl border border-black/5">
              <img src={renderResult.thumbnail} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <a 
              href={renderResult.downloadUrl}
              download
              className="bg-black text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Descargar Render {selectedQuality}
            </a>
          </div>
        )}

        {uploading && (
          <div className="flex flex-col items-center gap-4">
            <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            <span className="text-[8px] font-bold uppercase tracking-[0.4em] animate-pulse">Procesando en San Pablo...</span>
          </div>
        )}

      </div>

      <input type="file" ref={fileInputRef} onChange={handleUpload} className="hidden" accept="image/*" />
      <input type="file" ref={cameraInputRef} onChange={handleUpload} className="hidden" accept="image/*" capture="environment" />

      <footer className="mt-auto py-10 flex flex-col items-center opacity-20">
        <p className="text-[7px] font-bold tracking-[0.5em] uppercase italic">LUME GLOBAL CORE 🌎 2026</p>
      </footer>
    </main>
  );
}
