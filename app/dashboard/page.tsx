'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSystemOnline, setIsSystemOnline] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [userMail, setUserMail] = useState('Alejodella@hotmail.com'); // Mail de testeo del pliego
  const [qualityFlag, setQualityFlag] = useState('WEB_SOCIAL');

  // 🌐 ESPECIFICACIONES TÉCNICAS (Nodo Londres :8000)
  const API_BASE = "http://165.22.114.116:8000";
  const AUTH_TOKEN = "Bearer LUME_SVR_2026_ALPHA";
  const WS_URL = "ws://165.22.114.116:8000/heartbeat";

  useEffect(() => {
    // 📡 HEARTBEAT: Sincronización con Módulo API
    let socket: WebSocket | null = null;
    try {
      socket = new WebSocket(WS_URL);
      socket.onopen = () => setIsSystemOnline(true);
      socket.onerror = () => setIsSystemOnline(false);
      socket.onclose = () => setIsSystemOnline(false);
    } catch (e) {
      setIsSystemOnline(false);
    }

    return () => socket?.close();
  }, []);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && isSystemOnline) {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('user_mail', userMail);
      formData.append('quality_flag', qualityFlag); // FLAG INNEGOCIABLE

      try {
        const response = await fetch(`${API_BASE}/api/v1/upload`, {
          method: 'POST',
          headers: {
            'Authorization': AUTH_TOKEN
          },
          body: formData,
        });

        if (response.ok) {
          alert(`ÉXITO: ACTIVO RECIBIDO EN LONDRES (${qualityFlag}).`);
        } else {
          alert("ERROR: Aduana Sanitaria rechazó el activo.");
        }
      } catch (error) {
        alert("ERROR CRÍTICO: Nodo Londres fuera de alcance.");
      } finally {
        setUploading(false);
      }
    }
  };

  const options = [
    { id: 'WEB_SOCIAL', label: 'WEB / SOCIAL', sub: 'OPTIMIZADO' },
    { id: 'HD_PRO', label: 'HD PRO', sub: 'FIDELIDAD' },
    { id: 'FORCE_8K', label: 'LUME 8K ULTRA', sub: 'TENSOR PWR' }
  ];

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-4 md:p-10 overflow-hidden">
      <nav className="flex justify-between items-center w-full shrink-0">
        <div className="text-xl font-black tracking-tighter italic uppercase">LUME 🌎</div>
        <button onClick={() => router.push('/')} className="text-[10px] font-bold tracking-[0.2em] uppercase border border-black px-6 py-2 rounded-xl active:scale-95 transition-all">SALIR →</button>
      </nav>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center flex-grow justify-center py-2">
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-1 italic uppercase">Panel de Renderizado</h1>
        <p className="text-[8px] font-black tracking-widest text-neutral-400 uppercase mb-4 italic">GATEWAY: NODO LONDRES // {userMail}</p>
        
        <div className="w-full grid grid-cols-2 gap-3 mb-6">
          <div className="border border-black p-3 rounded-xl flex flex-col items-center justify-center">
            <span className="text-[7px] font-black uppercase text-neutral-400 italic">Módulo API (Status)</span>
            <span className={`text-[9px] font-bold ${isSystemOnline ? 'text-green-500' : 'text-red-500 animate-pulse'}`}>
              {isSystemOnline ? '● OPERATIONAL (-20 NICE)' : '● CONNECTING...'}
            </span>
          </div>
          <div className="border border-black p-3 rounded-xl flex flex-col items-center justify-center">
            <span className="text-[7px] font-black uppercase text-neutral-400 italic">Auth Token</span>
            <span className="text-[8px] font-mono text-neutral-500 tracking-tighter uppercase">LUME_SVR_2026_ALPHA</span>
          </div>
        </div>

        <div className="w-full mb-6 text-center">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-neutral-500 italic mb-4">Seleccione Flag de Calidad</p>
          <div className="grid grid-cols-3 gap-2">
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setQualityFlag(opt.id)}
                className={`p-3 rounded-xl border flex flex-col items-center transition-all duration-300 ${qualityFlag === opt.id ? 'bg-black text-white border-black shadow-lg scale-105' : 'bg-white text-black border-neutral-100 hover:border-black'}`}
              >
                <span className="text-[9px] font-black tracking-tighter">{opt.label}</span>
                <span className={`text-[7px] mt-1 ${qualityFlag === opt.id ? 'text-neutral-400' : 'text-neutral-300'}`}>{opt.sub}</span>
              </button>
            ))}
          </div>
        </div>

        <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept="image/*" />
        
        <div 
          onClick={() => isSystemOnline && !uploading && fileInputRef.current?.click()}
          className={`w-full h-40 md:h-52 border-2 border-dashed border-black rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all ${!isSystemOnline ? 'opacity-30' : 'hover:bg-neutral-50 active:scale-[0.98]'}`}
        >
          {uploading ? (
            <div className="animate-spin w-8 h-8 border-4 border-black border-t-transparent rounded-full"></div>
          ) : (
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-bold">+</span>
              <span className="text-[9px] font-black uppercase tracking-[0.4em]">{isSystemOnline ? 'INYECTAR ACTIVOS' : 'ESPERANDO KERNEL'}</span>
            </div>
          )}
        </div>
      </div>

      <footer className="flex flex-col items-center space-y-4 pt-4 shrink-0 border-t border-neutral-50">
        <div className="flex flex-wrap justify-center gap-8 font-sans text-neutral-400">
          <Link href="/terms" className="text-[8px] font-bold tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-1">Términos</Link>
          <Link href="/privacy" className="text-[8px] font-bold tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-1">Privacidad</Link>
          <Link href="/refund" className="text-[8px] font-bold tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-1">Reembolso</Link>
        </div>
        <div className="text-[9px] font-bold tracking-[0.5em] text-neutral-300 uppercase italic text-center">
          LUME GLOBAL CORE 🌎 // 2026
        </div>
      </footer>
    </main>
  );
}
