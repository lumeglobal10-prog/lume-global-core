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

  // 🌐 ESPECIFICACIONES NODO SAN PABLO (V6.5)
  const API_BASE = "http://35.247.239.43"; 
  const LUME_HEADERS = {
    'Content-Type': 'application/json',
    'X-Lume-Node': 'SAN_PABLO'
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
    } catch (e) { console.warn("LGC_SYNC_ERROR: Base Estéril."); }
  };

  useEffect(() => {
    const mail = localStorage.getItem('lume_user_mail') || '';
    setUserMail(mail);
    
    // Verificación de Handshake con Nodo San Pablo
    fetch(`${API_BASE}/api/v1/status`, { headers: LUME_HEADERS })
      .then(res => setIsSystemOnline(res.ok))
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
        headers: { 'X-Lume-Node': 'SAN_PABLO' }, // Aduana Sanitaria
        body: formData,
      });

      if (response.ok) {
        alert("ÉXITO: ACTIVO PROCESADO EN SAN PABLO.");
        fetchCredits(userMail);
      }
    } catch (error) {
      alert("ERROR CRÍTICO: Fallo de conexión con Nodo San Pablo.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-6 md:p-10 overflow-x-hidden">
      
      {/* NAVEGACIÓN: ESTILO UNIFICADO (SIN MARCOS) */}
      <nav className="flex justify-between items-center w-full shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase italic">LUME 🌎</div>
        <button 
          onClick={handleLogout}
          className="text-black hover:text-neutral-500 text-[9px] font-sans uppercase tracking-[0.2em] underline underline-offset-8 decoration-1 transition-all active:scale-95"
        >
          SALIR ×
        </button>
      </nav>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center flex-grow justify-center py-4 leading-none">
        {/* TÍTULO: ALINEADO A "ABSOLUTE PRECISION" */}
        <h1 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight uppercase italic text-center mb-10">
          Panel de Renderizado.
        </h1>
        
        <div className="w-full grid grid-cols-3 gap-3 mb-10">
          <div className="border border-black p-4 rounded-2xl flex flex-col items-center justify-center">
            <span className="text-[7px] font-black uppercase text-neutral-400 italic mb-1">Módulo API</span>
            <span className={`text-[9px] font-bold ${isSystemOnline ? 'text-green-500' : 'text-red-500 animate-pulse'}`}>
              {isSystemOnline ? '● OPERATIONAL' : '● OFFLINE'}
            </span>
          </div>
          <div className="border border-black p-4 rounded-2xl flex flex-col items-center justify-center bg-neutral-50">
            <span className="text-[7px] font-black uppercase text-black italic mb-1">Saldo de Renders</span>
            <span className="text-[11px] font-black tracking-tighter">{credits.used} / {credits.total}</span>
          </div>
          <div className="border border-black p-4 rounded-2xl flex flex-col items-center justify-center">
            <span className="text-[7px] font-black uppercase text-neutral-400 italic mb-1">Nodo</span>
            <span className="text-[8px] font-mono text-black tracking-tighter uppercase font-bold italic">SAN_PABLO_v6.2</span>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 mb-8">
          <button 
            onClick={() => isSystemOnline && !uploading && fileInputRef.current?.click()}
            className={`p-10 border-2 border-black rounded-[40px] flex flex-col items-center gap-2 transition-all ${!isSystemOnline ? 'opacity-30' : 'hover:bg-neutral-50 active:scale-95'}`}
          >
            <span className="text-3xl">📂</span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] mt-2">Galería</span>
          </button>

          <button 
            onClick={() => isSystemOnline && !uploading && cameraInputRef.current?.click()}
            className={`p-10 border-2 border-black rounded-[40px] flex flex-col items-center gap-2 transition-all ${!isSystemOnline ? 'opacity-30' : 'hover:bg-neutral-50 active:scale-95'}`}
          >
            <span className="text-3xl">📸</span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] mt-2">Cámara</span>
          </button>
        </div>

        <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept="image/*" />
        <input type="file" ref={cameraInputRef} onChange={handleFileSelect} className="hidden" accept="image/*" capture="environment" />
        
        <div className="min-h-[60px] flex items-center">
          {uploading && (
            <div className="flex flex-col items-center gap-3">
              <div className="animate-spin w-8 h-8 border-2 border-black border-t-transparent rounded-full"></div>
              <span className="text-[8px] font-black uppercase tracking-[0.5em] animate-pulse italic">Sincronizando con San Pablo...</span>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER: INTEGRACIÓN DE NAVEGACIÓN LEGAL */}
      <footer className="w-full p-6 mt-auto border-t border-neutral-100 flex flex-col items-center gap-4 shrink-0 bg-white">
        <p className="text-[8px] md:text-[9px] font-mono text-neutral-400 text-center tracking-[0.2em] uppercase italic">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE 🌎
        </p>
        <div className="flex flex-wrap justify-center gap-8 font-sans text-[9px] text-neutral-400 uppercase">
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
