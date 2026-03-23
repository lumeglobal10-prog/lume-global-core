'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const [userMail, setUserMail] = useState('');
  const [credits, setCredits] = useState('...');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const token = localStorage.getItem('lume_session_token');
    const mail = localStorage.getItem('lume_user_mail');

    if (!token) {
      router.push('/login');
      return;
    }
    
    if (mail) setUserMail(mail);

    // Consulta de créditos al Kernel
    fetch(`https://api.lumeglobalcore.com/api/v1/credits?email=${mail}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => setCredits(data.remaining || '0'))
    .catch(() => setCredits('0'));
  }, [router]);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col p-8 md:p-20 overflow-x-hidden">
      {/* Header Ejecutivo */}
      <nav className="flex justify-between items-center w-full mb-20">
        <div className="text-xl font-black tracking-tighter italic uppercase">LUME GLOBAL CORE 🌎</div>
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 hidden md:block">
            Socio: {userMail}
          </span>
          <button 
            onClick={() => { localStorage.clear(); router.push('/login'); }}
            className="text-[9px] font-black tracking-[0.3em] uppercase border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all"
          >
            Desconexión
          </button>
        </div>
      </nav>

      {/* Grid de Control */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
        
        {/* Módulo de Estado */}
        <div className="col-span-1 md:col-span-2 space-y-8">
          <div className="border-l-4 border-black pl-8 py-4">
            <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-neutral-400 mb-2">Estado del Ecosistema</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic uppercase leading-none">
              Operativo <span className="text-[20px] not-italic ml-2 text-green-500">●</span>
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
              <p className="text-[9px] font-black tracking-widest text-neutral-400 uppercase mb-4">Créditos Disponibles</p>
              <p className="text-4xl font-bold tracking-tighter">{credits}</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
              <p className="text-[9px] font-black tracking-widest text-neutral-400 uppercase mb-4">Plan Activo</p>
              <p className="text-4xl font-bold tracking-tighter italic uppercase">Global</p>
            </div>
          </div>
        </div>

        {/* Acciones Rápidas */}
        <div className="bg-black text-white p-10 rounded-[40px] flex flex-col justify-between shadow-2xl">
          <div>
            <h3 className="text-[11px] font-black tracking-[0.5em] uppercase mb-10 italic">Terminal de Control</h3>
            <div className="space-y-4">
              <Link href="/create" className="flex items-center justify-between group cursor-pointer border-b border-neutral-800 pb-4">
                <span className="text-lg font-bold tracking-tighter uppercase group-hover:translate-x-2 transition-transform">Nueva Generación AI</span>
                <span>→</span>
              </Link>
              <Link href="/history" className="flex items-center justify-between group cursor-pointer border-b border-neutral-800 pb-4">
                <span className="text-lg font-bold tracking-tighter uppercase group-hover:translate-x-2 transition-transform">Archivo de Activos</span>
                <span>→</span>
              </Link>
              <Link href="/billing" className="flex items-center justify-between group cursor-pointer border-b border-neutral-800 pb-4">
                <span className="text-lg font-bold tracking-tighter uppercase group-hover:translate-x-2 transition-transform">Hub de Facturación</span>
                <span>→</span>
              </Link>
            </div>
          </div>
          <div className="mt-20">
            <p className="text-[8px] font-bold tracking-[0.4em] text-neutral-500 uppercase leading-relaxed">
              Sistema Sentinel v4.0.1<br/>Protección de datos activa
            </p>
          </div>
        </div>

      </div>

      {/* Footer Minimalista */}
      <footer className="mt-20 pt-10 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8 text-[9px] font-black tracking-widest text-neutral-400 uppercase">
          <Link href="/support" className="hover:text-black">Soporte Técnico</Link>
          <Link href="/api-docs" className="hover:text-black">Documentación API</Link>
        </div>
        <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-300 uppercase italic">
          LUME GLOBAL CORE // 2026
        </div>
      </footer>
    </main>
  );
}
