'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const [isSystemOnline, setIsSystemOnline] = useState(false); // Default offline hasta validar
  const [uploading, setUploading] = useState(false);

  // PROTOCOLO DE ESCUCHA SEGURO (CON MANEJO DE ERRORES)
  useEffect(() => {
    let socket: WebSocket | null = null;

    try {
      socket = new WebSocket('ws://165.22.114.116:5000/ws/emergency');

      socket.onopen = () => setIsSystemOnline(true);
      
      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.priority === 'CRITICAL') setIsSystemOnline(false);
        } catch (e) { console.error("Error en heartbeat"); }
      };

      socket.onerror = () => setIsSystemOnline(false);
      socket.onclose = () => setIsSystemOnline(false);

    } catch (error) {
      setIsSystemOnline(false);
    }

    return () => {
      if (socket) socket.close();
    };
  }, []);

  const handleUpload = () => {
    if (!isSystemOnline) return;
    setUploading(true);
    setTimeout(() => setUploading(false), 3000);
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden">
      
      {/* NAVEGACIÓN SUPERIOR */}
      <nav className="flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter italic uppercase">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.push('/')}
          className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 rounded-xl hover:bg-black hover:text-white transition-all"
        >
          SALIR →
        </button>
      </nav>

      {/* CONTENIDO CENTRAL */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 italic text-center leading-tight">
          Panel de Renderizado
        </h1>
        <div className="h-[1px] w-20 bg-black mb-12"></div>

        {/* ESTADO DEL SISTEMA / CRÉDITOS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-black p-6 rounded-2xl flex flex-col items-center justify-center space-y-2">
            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 italic text-center">Estado del Kernel</span>
            <span className={`text-[11px] font-bold uppercase tracking-widest ${isSystemOnline ? 'text-green-500' : 'text-red-500'}`}>
              {isSystemOnline ? '● ONLINE (LONDRES)' : '● CONNECTING / OFFLINE'}
            </span>
          </div>
          <div className="border border-black p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 text-center">
            <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400 italic">Renders Disponibles</span>
            <span className="text-2xl font-black italic tracking-tighter">-- / --</span>
          </div>
        </div>

        {/* ZONA DE CARGA (UPLOAD) */}
        <div 
          onClick={handleUpload}
          className={`w-full h-80 border-2 border-dashed border-black rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all ${!isSystemOnline ? 'opacity-40 cursor-not-allowed bg-neutral-50' : 'hover:bg-neutral-50 active:scale-[0.98]'}`}
        >
          {uploading ? (
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] animate-pulse">Procesando...</span>
            </div>
          ) : (
            <>
              <span className="text-4xl mb-6">{isSystemOnline ? '+' : '×'}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-center px-8">
                {isSystemOnline ? 'Arrastre su imagen para optimizar' : 'Esperando conexión con el núcleo'}
              </span>
            </>
          )}
        </div>
      </div>

      {/* FOOTER UNIFICADO */}
      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="flex space-x-8">
          <Link href="/terms" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Privacidad
          </Link>
        </div>
        <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase italic text-center">
          LUME GLOBAL CORE 🌎 // 2026
        </div>
      </footer>
    </main>
  );
}
