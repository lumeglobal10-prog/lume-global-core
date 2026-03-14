'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function PrivacyContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const backPath = from === 'checkout' ? '/checkout' : '/';

  return (
    <div className="max-w-3xl mx-auto w-full">
      <nav className="flex justify-between items-center w-full mb-12">
        <div className="text-xl font-black tracking-tighter italic">
          LUME 🌎
        </div>
        <Link href={backPath}>
          <button className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
            ← VOLVER
          </button>
        </Link>
      </nav>
      
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-12 italic">Privacidad de Datos.</h1>
      
      <div className="space-y-10 text-[11px] leading-relaxed font-mono uppercase tracking-wider text-neutral-800">
        <section>
          <h2 className="font-black text-black mb-4">[ 01. TRATAMIENTO DE DATOS ]</h2>
          <p>Recolectamos únicamente los datos mínimos necesarios para la gestión de la suscripción.</p>
        </section>
        <section>
          <h2 className="font-black text-black mb-4">[ 02. ACTIVOS VISUALES ]</h2>
          <p>Las imágenes son procesadas de manera efímera mediante algoritmos propietarios.</p>
        </section>
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans p-8 md:p-20 flex flex-col justify-between">
      <Suspense fallback={<div className="text-[10px] font-mono uppercase tracking-widest">Cargando Protocolo...</div>}>
        <PrivacyContent />
      </Suspense>
      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="text-[10px] font-mono tracking-[0.5em] text-neutral-400 uppercase">
          LUME GLOBAL CORE 🌎 // 2026
        </div>
      </footer>
    </main>
  );
}
