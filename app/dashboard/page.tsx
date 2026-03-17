'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSystemOnline, setIsSystemOnline] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [userMail, setUserMail] = useState('USUARIO_LUME');
  const [quality, setQuality] = useState('STANDARD');

  useEffect(() => {
    const mail = typeof window !== 'undefined' ? localStorage.getItem('lume_user_mail') : null;
    if (mail) setUserMail(mail);

    let socket: WebSocket | null = null;
    try {
      socket = new WebSocket('ws://165.22.114.116:5000/ws/emergency');
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
      formData.append('quality', quality); // Inyección de calidad al Kernel

      try {
        await fetch('http://165.22.114.116:5000/api/v1/render', {
          method: 'POST',
          body: formData,
        });
        alert(`ACTIVO ENVIADO A LONDRES EN CALIDAD ${quality}.`);
      } catch (error) {
        alert("ERROR DE CONEXIÓN.");
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-4 md:p-10 overflow-hidden">
      <nav className="flex justify-between items-center w-full shrink-0">
        <div className="text-xl font-black tracking-tighter italic uppercase">LUME 🌎</div>
        <button onClick={() => router.push('/')} className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 rounded-xl active:scale-95 transition-all">SALIR →</button>
      </nav>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center py-4 flex-grow justify-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-1 italic text-center uppercase">Panel de Renderizado</h1>
        <p className="text-[8px] font-black tracking-widest text-neutral-400 uppercase mb-6 italic">ID: {userMail}</p>
        
        <div className="w-full grid grid-cols-2 gap-4 mb-6">
          <div className="border border-black p-4 rounded-2xl flex flex-col items-center justify-center">
            <span className="text-[8px] font-black uppercase text-neutral-400 italic">Kernel</span>
            <span className={`text-[10px] font-bold ${isSystemOnline ? 'text-green-500' : 'text-red-500 animate-pulse'}`}>
              {isSystemOnline ? '● ONLINE' : '● CONNECTING'}
            </span>
          </div>
          <div className="border border-black p-4 rounded-2xl flex flex-col items-center justify-center">
            <span className="text-[8px] font-black uppercase text-neutral-400 italic">Créditos</span>
            <span className="text-lg font-black italic">-- / --</span>
          </div>
        </div>

        {/* SELECTOR DE CALIDAD - INTEGRACIÓN MANDATORIA */}
        <div className="w-full mb-6 space-y-2">
          <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-center text-neutral-500 italic">Defina Calidad de Procesamiento</p>
          <div className="flex justify-center gap-4">
            {['STANDARD', 'ULTRA_HD'].map((q) => (
              <button
                key={q}
                onClick={() => setQuality(q)}
                className={`text-[9px] font-black tracking-[0.3em] px-6 py-3 rounded-xl border transition-all ${quality === q ? 'bg-black text-white border-black' : 'bg-white text-black border-neutral-200 hover:border-black'}`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept="image/*" />
        
        <div 
          onClick={() => isSystemOnline && !uploading && fileInputRef.current?.click()}
          className={`w-full h-48 md:h-64 border-2 border-dashed border-black rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all ${!isSystemOnline ? 'opacity-40 cursor-not-allowed' : 'hover:bg-neutral-50 active:scale-[0.99]'}`}
        >
          {uploading ? (
            <div className="animate-spin w-8 h-8 border-4 border-black border-t-transparent rounded-full"></div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">+</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">{isSystemOnline ? 'SUBIR ACTIVO' : 'CONECTANDO...'}</span>
            </div>
          )}
        </div>
      </div>

      <footer className="flex flex-col items-center space-y-4 pt-4 shrink-0 border-t border-neutral-50">
        <div className="flex flex-wrap justify-center gap-6 font-sans text-neutral-500">
          <Link href="/terms" className="text-[8px] font-bold tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-2">Términos</Link>
          <Link href="/privacy" className="text-[8px] font-bold tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-2">Privacidad</Link>
          <Link href="/refund" className="text-[8px] font-bold tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-2">Reembolso</Link>
        </div>
        <div className="text-[9px] font-bold tracking-[0.5em] text-neutral-400 uppercase italic text-center">
          LUME GLOBAL CORE 🌎 // 2026
        </div>
      </footer>
    </main>
  );
}
