'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PrivacyPage() {
  const router = useRouter();
  const siteName = "LUME 🌎";

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between overflow-x-hidden">
      
      {/* NAVEGACIÓN: LOGO INMUTABLE */}
      <nav className="w-full p-6 md:p-8 flex justify-between items-center shrink-0 z-50">
        <div className="text-sm font-black tracking-[0.4em] uppercase italic">{siteName}</div>
        <button 
          onClick={() => router.back()} 
          className="bg-black text-white px-6 py-2 text-[10px] font-sans font-bold tracking-[0.2em] uppercase active:scale-95 transition-all hover:bg-neutral-800"
        >
          ← VOLVER
        </button>
      </nav>

      <section className="flex-grow flex flex-col items-center py-12 px-6 md:py-20">
        <article className="max-w-3xl w-full">
          {/* TÍTULO ESTILO KARADA DECO (SERIF) */}
          <h1 className="text-3xl md:text-5xl font-serif font-light tracking-tight leading-tight mb-2 text-center italic lowercase first-letter:uppercase">
            Políticas de privacidad
          </h1>
          <p className="text-[10px] font-sans font-medium text-neutral-400 tracking-[0.3em] uppercase text-center mb-16 italic">
            Compromiso: Soberanía del dato
          </p>

          <div className="space-y-12 text-sm md:text-base leading-relaxed text-neutral-800">
            <section>
              <h2 className="text-[11px] font-sans font-black tracking-[0.3em] uppercase mb-4 text-black italic">
                1. Tratamiento de Activos
              </h2>
              <p className="font-serif font-light text-lg italic text-neutral-700 leading-snug">
                Lume Global Core procesa las imágenes suministradas únicamente con el fin de ejecutar los cálculos matemáticos de optimización. Los activos se gestionan en entornos aislados para garantizar la seguridad de la información.
              </p>
            </section>
            
            <section>
              <h2 className="text-[11px] font-sans font-black tracking-[0.3em] uppercase mb-4 text-black italic">
                2. Confidencialidad y Seguridad
              </h2>
              <p className="font-serif font-light text-lg italic text-neutral-700 leading-snug">
                No compartimos datos técnicos ni historiales de consumo con terceros. La información del suscriptor es tratada bajo protocolos de cifrado desde la subida hasta la entrega final del activo.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] font-sans font-black tracking-[0.3em] uppercase mb-4 text-black italic">
                3. Registro Operativo
              </h2>
              <p className="font-serif font-light text-lg italic text-neutral-700 leading-snug">
                El sistema registra IPs y logs de actividad únicamente para fines de seguridad y prevención de fraude, cumpliendo con las normativas internacionales de protección de datos.
              </p>
            </section>

            <hr className="border-neutral-100 my-12" />
            
            <section className="text-center pb-12">
              <p className="text-[10px] font-sans font-bold tracking-[0.2em] text-neutral-400 italic uppercase">
                Lume Global Core es una marca comercial operada por Jorge Alejandro Dellaria (LUME.GLOBAL).
              </p>
            </section>
          </div>
        </article>
      </section>

      <footer className="w-full p-6 border-t border-neutral-100 flex flex-col items-center gap-2 bg-white">
        <p className="text-[8px] md:text-[9px] font-sans font-bold text-neutral-700 tracking-[0.3em] uppercase italic">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE 🌎
        </p>
        <div className="flex gap-8 font-sans text-[9px] text-neutral-300 uppercase pb-2">
          <Link href="/terms" className="hover:text-black underline underline-offset-4 decoration-1 transition-all">
            Términos
          </Link>
          <Link href="/privacy" className="text-black underline underline-offset-4 decoration-1 transition-all font-bold">
            Privacidad
          </Link>
          <Link href="/refund" className="hover:text-black underline underline-offset-4 decoration-1 transition-all">
            Reembolso
          </Link>
        </div>
      </footer>
    </main>
  );
}
