'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden">
      
      {/* NAVBAR ORIGINAL */}
      <nav className="flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter italic uppercase">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.push('/login')}
          className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-8 py-2 rounded-xl hover:bg-black hover:text-white transition-all shadow-sm active:scale-95"
        >
          ACCESO
        </button>
      </nav>

      {/* CUERPO CENTRAL ORIGINAL */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-7xl md:text-[140px] font-black tracking-tighter italic leading-[0.8] mb-8 uppercase italic animate-in fade-in zoom-in duration-700">
          LUME<br/>GLOBAL<br/>CORE
        </h1>
        
        <p className="text-[10px] md:text-[12px] font-black tracking-[0.5em] text-neutral-400 uppercase italic mb-12 max-w-lg leading-relaxed">
          Optimización Visual de Activos mediante Kernel Propietario
        </p>

        <div className="h-[1px] w-20 bg-black mb-16 opacity-20"></div>

        <button 
          onClick={() => router.push('/pricing')}
          className="bg-black text-white px-12 py-5 rounded-2xl text-[12px] font-black uppercase tracking-[0.5em] hover:bg-neutral-800 transition-all shadow-2xl active:scale-95"
        >
          INICIAR PROCESAMIENTO
        </button>
      </div>

      {/* FOOTER ORIGINAL CON ADICIÓN DE REEMBOLSO (NEGRO) */}
      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="flex flex-wrap justify-center gap-8 text-black">
          <Link href="/terms" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Términos
          </Link>
          <Link href="/privacy" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Privacidad
          </Link>
          <Link href="/refund" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Política de Reembolso
          </Link>
        </div>
        <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase italic text-center">
          LUME GLOBAL CORE 🌎 // 2026
        </div>
      </footer>
    </main>
  );
            }
