'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PrivacyPage() {
  const router = useRouter();
  const siteName = "LUME 🌎";

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between overflow-x-hidden uppercase tracking-widest">
      
      {/* NAVEGACIÓN: LOGO INMUTABLE */}
      <nav className="w-full p-6 md:p-8 flex justify-between items-center shrink-0 z-50">
        <div className="text-sm font-black tracking-[0.4em] italic">{siteName}</div>
        <button 
          onClick={() => router.back()} 
          className="bg-black text-white px-8 py-3 text-[9px] font-bold tracking-[0.3em] active:scale-95 transition-all hover:bg-neutral-800 rounded-full"
        >
          ← VOLVER
        </button>
      </nav>

      <section className="flex-grow flex flex-col items-center py-12 px-6 md:py-20">
        <article className="max-w-3xl w-full">
          {/* TÍTULO ESTILO KARADA DECO (SERIF) */}
          <h1 className="text-3xl md:text-5xl font-serif font-light tracking-tight leading-tight mb-2 text-center italic lowercase first-letter:uppercase normal-case">
            Políticas de privacidad.
          </h1>
          <p className="text-[9px] font-black text-neutral-400 tracking-[0.5em] text-center mb-16 italic">
            COMPROMISO: SOBERANÍA DEL DATO // NODO SAN PABLO
          </p>

          <div className="space-y-12 text-sm md:text-base leading-relaxed text-neutral-800">
            <section>
              <h2 className="text-[10px] font-black tracking-[0.4em] mb-4 text-black italic border-l-2 border-black pl-4">
                1. TRATAMIENTO DE ACTIVOS
              </h2>
              <p className="font-serif font-light text-xl italic text-neutral-700 leading-snug normal-case">
                Lume Global Core procesa las imágenes suministradas únicamente con el fin de ejecutar los cálculos matemáticos de optimización. Los activos se gestionan en entornos aislados dentro de la infraestructura del Nodo San Pablo para garantizar la seguridad absoluta de la información.
              </p>
            </section>
            
            <section>
              <h2 className="text-[10px] font-black tracking-[0.4em] mb-4 text-black italic border-l-2 border-black pl-4">
                2. CONFIDENCIALIDAD Y SEGURIDAD
              </h2>
              <p className="font-serif font-light text-xl italic text-neutral-700 leading-snug normal-case">
                No compartimos datos técnicos ni historiales de consumo con terceros. La información del suscriptor es tratada bajo protocolos de cifrado desde la subida hasta la entrega final del activo, bajo la supervisión directa del Módulo de Seguridad ADUANA_SANITARIA.
              </p>
            </section>

            <section>
              <h2 className="text-[10px] font-black tracking-[0.4em] mb-4 text-black italic border-l-2 border-black pl-4">
                3. REGISTRO OPERATIVO
              </h2>
              <p className="font-serif font-light text-xl italic text-neutral-700 leading-snug normal-case">
                El sistema registra IPs y logs de actividad únicamente para fines de seguridad y prevención de fraude. Estos datos son inmutables y se almacenan en el Búnker San Pablo cumpliendo con las normativas internacionales de protección de datos.
              </p>
            </section>

            <hr className="border-neutral-100 my-12" />
            
            <section className="text-center pb-12">
              <p className="text-[9px] font-black tracking-[0.3em] text-neutral-400 italic">
                LUME GLOBAL CORE ES UNA MARCA COMERCIAL OPERADA POR JORGE ALEJANDRO DELLARIA (LUME.GLOBAL).
              </p>
            </section>
          </div>
        </article>
      </section>

      <footer className="w-full p-6 border-t border-neutral-100 flex flex-col items-center gap-2 bg-white">
        <p className="text-[8px] md:text-[9px] font-bold text-neutral-700 tracking-[0.4em] italic">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE 🌎
        </p>
        <div className="flex gap-8 text-[9px] text-neutral-300 pb-2">
          <Link href="/terms" className="hover:text-black underline underline-offset-8 decoration-1 transition-all">
            TÉRMINOS
          </Link>
          <Link href="/privacy" className="text-black underline underline-offset-8 decoration-1 transition-all font-bold">
            PRIVACIDAD
          </Link>
          <Link href="/refund" className="hover:text-black underline underline-offset-8 decoration-1 transition-all">
            REEMBOLSO
          </Link>
        </div>
      </footer>
    </main>
  );
}
