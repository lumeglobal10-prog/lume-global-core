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
  const [userMail, setUserMail] = useState('Alejodella@hotmail.com');
  const [credits, setCredits] = useState({ used: 0, total: 0 });

  // 🏛️ ESPECIFICACIONES KERNEL v3.1 (NODO LONDRES)
  const API_BASE = "https://api.lumeglobalcore.com"; 
  const WS_URL = "wss://api.lumeglobalcore.com/heartbeat"; 
  const AUTH_HEADER = "Bearer ALE_MASTER_KEY_2026";

  const fetchCredits = async (mail: string) => {
    try {
      const response = await fetch(`${API_BASE}/api/v1/user/credits?email=${mail}`, {
        headers: { 'Authorization': AUTH_HEADER }
      });
      if (response.ok) {
        const data = await response.json();
        setCredits({ used: data.credits || 0, total: data.total || 311 });
      }
    } catch (e) { console.warn("LGC_SYNC_ERROR: Fallo en lectura de créditos."); }
  };

  useEffect(() => {
    const mail = localStorage.getItem('lume_user_mail') || 'Alejodella@hotmail.com';
    setUserMail(mail);
    fetchCredits(mail);

    // 📡 HEARTBEAT v3.1 (FastAPI WebSocket)
    let socket: WebSocket | null = null;
    const connectWS = () => {
      try {
        socket = new WebSocket(WS_URL);
        socket.onopen = () => setIsSystemOnline(true);
        socket.onclose = () => {
          setIsSystemOnline(false);
          setTimeout(connectWS, 3000); // Reconexión automática
        };
        socket.onerror = () => setIsSystemOnline(false);
      } catch (e) { setIsSystemOnline(false); }
    };
    connectWS();
    return () => socket?.close();
  }, []);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !isSystemOnline) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_mail', userMail);
    formData.append('quality_flag', 'WEB_SOCIAL');

    try {
      const response = await fetch(`${API_BASE}/api/v1/upload`, {
        method: 'POST',
        headers: { 'Authorization': AUTH_HEADER },
        body: formData,
      });

      if (response.ok) {
        alert("ÉXITO: ACTIVO INYECTADO EN KERNEL v3.1.");
        fetchCredits(userMail);
      } else {
        alert("ERROR: El Kernel rechazó el activo. Revise logs de Londres.");
      }
    } catch (error) {
      alert("ERROR CRÍTICO: Fallo de comunicación SSL con el Nodo.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-4 md:p-10 overflow-hidden">
      <nav className="flex justify-between items-center w-full shrink-0">
        <div className="text-xl font-black tracking-tighter italic uppercase">LUME 🌎</div>
        <button onClick={() => router.push('/')} className="text-[10px] font-bold tracking-[0.2em] uppercase border border-black px-6 py-2 rounded-xl active:scale-95 transition-all">SALIR →</button>
      </nav>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center flex-grow justify-center py-2">
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 italic uppercase text-center">Panel de Renderizado</h1>
        
        <div className="w-full grid grid-cols-3 gap-3 mb-8">
          <div className="border border-black p-3 rounded-xl flex flex-col items-center justify-center">
            <span className="text-[7px] font-black uppercase text-neutral-400 italic">Módulo API</span>
            <span className={`text-[9px] font-bold ${isSystemOnline ? 'text-green-500' : 'text-red-500 animate-pulse'}`}>
              {isSystemOnline ? '● OPERATIONAL' : '● OFFLINE'}
            </span>
          </div>
          <div className="border border-black p-3 rounded-xl flex flex-col items-center justify-center bg-neutral-50 shadow-inner">
            <span className="text-[7px] font-black uppercase text-black italic">Saldo de Renders</span>
            <span className="text-[11px] font-black tracking-tighter">{credits.used} / {credits.total}</span>
          </div>
          <div className="border border-black p-3 rounded-xl flex flex-col items-center justify-center">
            <span className="text-[7px] font-black uppercase text-neutral-400 italic">Kernel Version</span>
            <span className="text-[8px] font-mono text-black font-bold uppercase tracking-tighter italic">LGC_v3.1_PRO</span>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 mb-6">
          <button 
            onClick={() => isSystemOnline && !uploading && fileInputRef.current?.click()}
            className={`p-6 border-2 border-black rounded-2xl flex flex-col items-center gap-2 transition-all ${!isSystemOnline ? 'opacity-30 cursor-not-allowed' : 'hover:bg-neutral-50 active:scale-95'}`}
          >
            <span className="text-2xl">📂</span>
            <span className="text-[9px] font-black uppercase tracking-widest">Galería</span>
          </button>

          <button 
            onClick={() => isSystemOnline && !uploading && cameraInputRef.current?.click()}
            className={`p-6 border-2 border-black rounded-2xl flex flex-col items-center gap-2 transition-all ${!isSystemOnline ? 'opacity-30 cursor-not-allowed' : 'hover:bg-neutral-50 active:scale-95'}`}
          >
            <span className="text-2xl">📸</span>
            <span className="text-[9px] font-black uppercase tracking-widest">Cámara</span>
          </button>
        </div>

        <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept="image/*" />
        <input type="file" ref={cameraInputRef} onChange={handleFileSelect} className="hidden" accept="image/*" capture="environment" />
        
        <div className="w-full text-center shrink-0 min-h-[40px] flex items-center justify-center mt-4">
           {uploading && (
            <div className="flex flex-col items-center gap-2">
              <div className="animate-spin w-8 h-8 border-4 border-black border-t-transparent rounded-full"></div>
              <span className="text-[8px] font-black uppercase tracking-widest animate-pulse italic">Inyectando Activo en Kernel v3.1...</span>
            </div>
           )}
        </div>
      </div>

      <footer className="text-[9px] font-bold tracking-[0.5em] text-neutral-300 uppercase italic text-center py-6 shrink-0 border-t border-neutral-50 w-full">
        LUME GLOBAL CORE 🌎 // 2026
      </footer>
    </main>
  );
}
