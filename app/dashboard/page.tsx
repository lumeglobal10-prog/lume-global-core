'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [isSystemOnline, setIsSystemOnline] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [userMail, setUserMail] = useState('');
  const [credits, setCredits] = useState({ used: 0, total: 0 });

  // 🌐 ESPECIFICACIONES SOBERANAS: NODO SAN PABLO (PRODUCCIÓN RECTIFICADA 8081)
  const API_BASE = "https://lumeglobalcore.com:8081"; 
  const LUME_HEADERS = {
    'Content-Type': 'application/json',
    'X-Lume-Node': 'SAN_PABLO',
    'X-Environment': 'PRODUCTION'
  };

  const fetchCredits = async (mail: string) => {
    try {
      const response = await fetch(`${API_BASE}/api/v1/credits?email=${mail}`, {
        headers: LUME_HEADERS
      });
      if (response.ok) {
        const data = await response.json();
        setCredits({ used: data.used || 0, total: data.total || 0 });
      }
    } catch (e) { console.warn("LGC_SYNC_ERROR: Comunicación restringida."); }
  };

  useEffect(() => {
    const mail = localStorage.getItem('lume_user_mail') || '';
    setUserMail(mail);
    
    // Handshake con el Endpoint de Salud Rectificado
    fetch(`${API_BASE}/api/v1/health`, { headers: LUME_HEADERS })
      .then(res => res.text())
      .then(status => setIsSystemOnline(status === "READY"))
      .catch(() => setIsSystemOnline(false));

    if (mail) fetchCredits(mail);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('lume_session_token');
    localStorage.removeItem('lume_user_mail');
    router.push('/');
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !isSystemOnline) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_mail', userMail);

    try {
      const response = await fetch(`${API_BASE}/api/v1/upload`, {
        method: 'POST',
        headers: { 'X-Lume-Node': 'SAN_PABLO' }, 
        body: formData,
      });

      if (response.ok) {
        alert("ÉXITO: ACTIVO PROCESADO EN SAN PABLO.");
        fetchCredits(userMail);
      }
    } catch (error) {
      alert("ERROR CRÍTICO: Fallo de conexión con Gateway San Pablo.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-6 md:p-10 overflow-x-hidden">
      
      {/* NAVEGACIÓN: LOGO INMUTABLE */}
      <nav className="flex justify-between items-center w-full shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase italic">LUME 🌎</div>
        <button 
          onClick={handleLogout}
          className="text-black hover:text-neutral-500 text-[9px] font-sans font-bold uppercase tracking-[0.2em] underline underline-offset-8 decoration-1 transition-all active:scale-95"
        >
          SALIR ×
        </button>
      </nav>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center flex-grow justify-center py-4 leading-none">
        {/* TÍTULO: ESTILO KARADA DECO (SERIF) */}
        <h1 className="text-3xl md:text-5xl font-serif font-light tracking-tight leading-tight italic text-center mb-10 lowercase first-letter:uppercase">
          Panel de renderizado.
        </h1>
        
        <div className="w-full grid grid-cols-3 gap-3 mb-10">
          <div className="border border-black/10 p-4 rounded-2xl flex flex-col items-center justify-center bg-neutral-50/30">
            <span className="text-[7px] font-sans font-bold uppercase text-neutral-400 italic mb-1 tracking-widest">Módulo API</span>
            <span className={`text-[9px] font-sans font-black ${isSystemOnline ? 'text-green-600' : 'text-red-500 animate-pulse'}`}>
              {isSystemOnline ? '● READY' : '● OFFLINE'}
            </span>
          </div>
          <div className="border border-black p-4 rounded-2xl flex flex-col items-center justify-center bg-white shadow-sm">
            <span className="text-[7px] font-sans font-bold uppercase text-black italic mb-1 tracking-widest">Saldo de Renders</span>
            <span className="text-[11px] font-serif font-medium italic tracking-tighter">{credits.used} / {credits.total}</span>
          </div>
          <div className="border border-black/10 p-4 rounded-2xl flex flex-col items-center justify-center bg-neutral-50/30">
            <span className="text-[7px] font-sans font-bold uppercase text-neutral-400 italic mb-1 tracking-widest">Nodo</span>
            <span className="text-[8px] font-sans text-black tracking-tighter uppercase font-bold italic">SAN_PABLO_v6.5</span>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 mb-8">
          <button 
            onClick={() => isSystemOnline && !uploading && fileInputRef.current?.click()}
            className={`p-10 border border-black rounded-[40px] flex flex-col items-center gap-2 transition-all ${!isSystemOnline ? 'opacity-30' : 'hover:bg-neutral-50 active:scale-95 shadow-sm'}`}
          >
            <span className="text-3xl">📂</span>
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] mt-2">Galería</span>
          </button>

          <button 
            onClick={() => isSystemOnline && !uploading && cameraInputRef.current?.click()}
            className={`p-10 border border-black rounded-[40px] flex flex-col items-center gap-2 transition-all ${!isSystemOnline ? 'opacity-30' : 'hover:bg-neutral-50 active:scale-95 shadow-sm'}`}
          >
            <span className="text-3xl">📸</span>
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] mt-2">Cámara</span>
          </button>
        </div>

        <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept="image/*" />
        <input type="file" ref={cameraInputRef} onChange={handleFileSelect} className="hidden" accept="image/*" capture="environment" />
        
        <div className="min-h-[60px] flex items-center">
          {uploading && (
            <div className="flex flex-col items-center gap-3">
              <div className="animate-spin w-8 h-8 border-2 border-black border-t-transparent rounded-full"></div>
              <span className="text-[8px] font-serif italic tracking-[0.2em] animate-pulse">Sincronizando con San Pablo...</span>
            </div>
          )}
        </div>
      </div>

      <footer className="w-full p-6 mt-auto border-t border-neutral-100 flex flex-col items-center gap-4 shrink-0 bg-white">
        <p className="text-[8px] md:text-[9px] font-sans font-medium text-neutral-400 text-center tracking-[0.2em] uppercase italic">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE 🌎
        </p>
        <div className="flex flex-wrap justify-center gap-8 font-sans text-[9px] text-neutral-300 uppercase pb-2">
          <Link href="/terms" className="hover:text-black underline underline-offset-4 decoration-1 transition-all">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="hover:text-black underline underline-offset-4 decoration-1 transition-all">
            Privacidad
          </Link>
          <Link href="/refund" className="hover:text-black underline underline-offset-4 decoration-1 transition-all">
            Política de Reembolso
          </Link>
        </div>
      </footer>
    </main>
  );
}
