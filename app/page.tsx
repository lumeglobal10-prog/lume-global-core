'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden">
      
      {/* NAVBAR ORIGINAL DE ESTA MAÑANA */}
      <nav className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <span className="text-2xl font-black tracking-tighter italic uppercase">LUME</span>
          <span className="ml-1 text-xl">🌎</span>
        </div>
        <button 
          onClick={() => router.push('/login')}
          className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-8 py-2 rounded-xl hover:bg-black hover:text-white transition-all shadow-sm active:scale-95"
        >
          ACCESO
        </button>
      </nav>

      {/* CUERPO CENTRAL ORIGINAL - MINIMALISMO EQUILIBRADO */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic leading-tight mb-8 uppercase">
          LUME GLOBAL CORE
        </h1>
        
        <p className="text-[10px] md:text-[11px] font-medium tracking-[0.4em] text-neutral-400 uppercase italic mb-12 max-w-lg leading-relaxed">
          Optimización Visual de Activos Mediante Kernel Propietario
        </p>

        <div className="h-[1px] w-24 bg-neutral-200 mb-16"></div>

        <button 
          onClick={() => router.push('/pricing')}
          className="bg-black text-white px-12 py-5 rounded-2xl text-[12px] font-black uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all shadow-xl active:scale-95"
        >
          INICIAR PROCESAMIENTO
        </button>
      </div>

      {/* FOOTER LEGAL UNIFICADO (TEXTO NEGRO) */}
      <footer className="flex flex-col items-center space-y-8 pt-20">
        <div className="flex flex-wrap justify-center gap-10 text-black">
          <Link href="/terms" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-1 underline-offset-4">
            TÉRMINOS
          </Link>
          <Link href="/privacy" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-1 underline-offset-4">
            PRIVACIDAD
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <Link href="/refund" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-1 underline-offset-4 text-black">
            POLÍTICA DE REEMBOLSO
          </Link>
          <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-300 uppercase italic text-center mt-4">
            LUME GLOBAL CORE 🌎 // 2026
          </div>
        </div>
      </footer>
    </main>
  );
}
