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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mail = localStorage.getItem('lume_user_mail');
      if (mail) setUserMail(mail);
    }

    let socket: WebSocket | null = null;
    try {
      socket = new WebSocket('ws://165.22.114.116:5000/ws/emergency');
      socket.onopen = () => setIsSystemOnline(true);
      socket.onerror = () => setIsSystemOnline(false);
      socket.onclose = () => setIsSystemOnline(false);
    } catch (e) { setIsSystemOnline(false); }

    return () => { if (socket) socket.close(); };
  }, []);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && isSystemOnline) {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('user_mail', userMail);

      try {
        const response = await fetch('http://165.22.114.116:5000/api/v1/render', { method: 'POST', body: formData });
        if (response.ok) alert("ACTIVO ENVIADO A LONDRES.");
        else alert("ERROR EN KERNEL.");
      } catch (error) { alert("ERROR DE RED."); } finally { setUploading(false); }
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden">
      <nav className="flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter italic uppercase">LUME 🌎</div>
        <button onClick={() => { localStorage.removeItem('lume_session_token'); router.push('/'); }} className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 rounded-xl hover:bg-black hover:text-white transition-all">SALIR →</button>
      </nav>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 italic text-center">Panel</h1>
        <p className="text-[9px] font-black tracking-widest text-neutral-400 uppercase mb-8 italic">ID: {userMail}</p>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-black p-6 rounded-2xl flex flex-col items-center justify-center">
            <span className="text-[9px] font-black uppercase text-neutral-400 italic">Kernel</span>
            <span className={`text-[11px] font-bold ${isSystemOnline ? 'text-green-500' : 'text-red-500 animate-pulse'}`}>{isSystemOnline ? '● ONLINE' : '● CONNECTING'}</span>
          </div>
          <div className="border border-black p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <span className="text-[9px] font-black uppercase text-neutral-400 italic">Créditos</span>
            <span className="text-xl font-black italic tracking-tighter">-- / --</span>
          </div>
        </div>

        <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept="image/*" />
        <div onClick={() => isSystemOnline && !uploading && fileInputRef.current?.click()} className={`w-full h-80 border-2 border-dashed border-black rounded-3xl flex flex-col items-center justify-center cursor-pointer ${!isSystemOnline ? 'opacity-40 cursor-not-allowed' : 'hover:bg-neutral-50'}`}>
          {uploading ? <div className="animate-spin w-10 h-10 border-4 border-black border-t-transparent rounded-full"></div> : <span className="text-[10px] font-bold uppercase tracking-[0.4em]">{isSystemOnline ? '+ SUBIR ACTIVO' : 'CONECTANDO...'}</span>}
        </div>
      </div>

      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="flex flex-wrap justify-center gap-8 text-black">
          <Link href="/terms" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">Términos</Link>
          <Link href="/privacy" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">Privacidad</Link>
          <Link href="/refund" className="text-[9px] font-bold tracking-[0.3em] uppercase text-red-500 hover:underline decoration-2 underline-offset-4">Política de Reembolso</Link>
        </div>
        <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase italic text-center">LUME GLOBAL CORE 🌎 // 2026</div>
      </footer>
    </main>
  );
}
