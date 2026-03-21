'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null); // Ref separada para cámara
  const [isSystemOnline, setIsSystemOnline] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [userMail, setUserMail] = useState('Alejodella@hotmail.com');
  const [credits, setCredits] = useState({ used: 0, total: 0 });

  // 🌐 CAMBIO ESTRATÉGICO: Preparado para SSL
  const API_BASE = "http://165.22.114.116:8000"; 
  const AUTH_TOKEN = "Bearer LUME_SVR_2026_ALPHA";

  const fetchCredits = async (mail: string) => {
    try {
      const response = await fetch(`${API_BASE}/api/v1/user/credits?email=${mail}`, {
        headers: { 'Authorization': AUTH_TOKEN }
      });
      if (response.ok) {
        const data = await response.json();
        setCredits({ used: data.used, total: data.total });
      }
    } catch (e) { console.warn("Sync error."); }
  };

  useEffect(() => {
    const mail = localStorage.getItem('lume_user_mail') || 'Alejodella@hotmail.com';
    setUserMail(mail);
    fetchCredits(mail);
    // Simulación de status hasta tener SSL
    setIsSystemOnline(true); 
  }, []);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_mail', userMail);
    formData.append('quality_flag', 'WEB_SOCIAL');

    try {
      const response = await fetch(`${API_BASE}/api/v1/upload`, {
        method: 'POST',
        headers: { 'Authorization': AUTH_TOKEN },
        body: formData,
      });
      if (response.ok) {
        alert("ÉXITO: ACTIVO ENVIADO.");
        fetchCredits(userMail);
      } else {
        alert("ERROR: Aduana Sanitaria rechazó el activo (Falta SSL en Londres).");
      }
    } catch (error) {
      alert("ERROR CRÍTICO: El navegador bloqueó la conexión insegura.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-4 md:p-10">
      <nav className="flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter italic uppercase">LUME 🌎</div>
        <button onClick={() => router.push('/')} className="text-[10px] border border-black px-6 py-2 rounded-xl">SALIR →</button>
      </nav>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center flex-grow justify-center py-2">
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 italic uppercase text-center text-black">Panel de Renderizado</h1>
        
        <div className="w-full grid grid-cols-3 gap-3 mb-8">
          <div className="border border-black p-3 rounded-xl flex flex-col items-center justify-center">
            <span className="text-[7px] font-black uppercase text-neutral-400 italic">API Status</span>
            <span className="text-[9px] font-bold text-green-500">● OPERATIONAL</span>
          </div>
          <div className="border border-black p-3 rounded-xl flex flex-col items-center justify-center bg-neutral-50">
            <span className="text-[7px] font-black uppercase italic text-black">Saldo Renders</span>
            <span className="text-[11px] font-black">{credits.used} / {credits.total}</span>
          </div>
          <div className="border border-black p-3 rounded-xl flex flex-col items-center justify-center">
            <span className="text-[7px] font-black uppercase text-neutral-400 italic">Security</span>
            <span className="text-[8px] font-mono text-neutral-500 italic">ALPHA_2026</span>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-4">
          {/* BOTÓN GALERÍA */}
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="p-6 border-2 border-black rounded-2xl flex flex-col items-center gap-2 hover:bg-neutral-50 active:scale-95 transition-all"
          >
            <span className="text-2xl">📂</span>
            <span className="text-[9px] font-black uppercase tracking-widest text-black">Galería</span>
          </button>

          {/* BOTÓN CÁMARA FORZADO */}
          <button 
            onClick={() => cameraInputRef.current?.click()}
            className="p-6 border-2 border-black rounded-2xl flex flex-col items-center gap-2 hover:bg-neutral-50 active:scale-95 transition-all"
          >
            <span className="text-2xl">📸</span>
            <span className="text-[9px] font-black uppercase tracking-widest text-black">Cámara</span>
          </button>
        </div>

        {/* INPUTS OCULTOS ESPECÍFICOS */}
        <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept="image/*" />
        <input type="file" ref={cameraInputRef} onChange={handleFileSelect} className="hidden" accept="image/*" capture="environment" />

        {uploading && (
          <div className="mt-8 flex flex-col items-center gap-2 text-black">
            <div className="animate-spin w-8 h-8 border-4 border-black border-t-transparent rounded-full"></div>
            <span className="text-[8px] font-black uppercase tracking-widest">Inyectando en Londres...</span>
          </div>
        )}
      </div>

      <footer className="text-[9px] font-bold tracking-[0.5em] text-neutral-300 uppercase italic text-center py-4">
        LUME GLOBAL CORE 🌎 // 2026
      </footer>
    </main>
  );
                                                                                                 }
