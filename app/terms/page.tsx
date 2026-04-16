'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TermsPage() {
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
            Términos y condiciones de uso.
          </h1>
          <p className="text-[9px] font-black text-neutral-400 tracking-[0.5em] text-center mb-16 italic">
            VERSIÓN: LGC-2026-ALPHA-V2 // NODO SAN PABLO
          </p>

          <div className="space-y-12 text-sm md:text-base leading-relaxed text-neutral-800">
            <section>
              <h2 className="text-[10px] font-black tracking-[0.4em] mb-4 text-black italic border-l-2 border-black pl-4">
                1. NATURALEZA TÉCNICA DEL ECOSISTEMA
              </h2>
              <p className="font-serif font-light text-xl italic text-neutral-700 leading-snug normal-case">
                Lume Global Core es una plataforma de optimización visual. El procesamiento de imágenes se realiza exclusivamente a través de algoritmos informáticos y cálculos matemáticos ejecutados en nuestro Kernel propietario. El suscriptor entiende que los resultados son producto de procesamientos técnicos y no de generación creativa aleatoria.
              </p>
            </section>
            
            <section>
              <h2 className="text-[10px] font-black tracking-[0.4em] mb-4 text-black italic border-l-2 border-black pl-4">
                2. PRINCIPIO DE IGUALDAD OPERATIVA
              </h2>
              <p className="font-serif font-light text-xl italic text-neutral-700 leading-snug normal-case">
                El ecosistema se rige por la Igualdad Operativa. La prioridad en la cola de procesamiento se determina estrictamente por el orden de llegada al servidor. El Plan de Suscripción define la capacidad de volumen, pero no otorga prioridad de tiempo ni saltos en la cola sobre otros suscriptores.
              </p>
            </section>

            <section>
              <h2 className="text-[10px] font-black tracking-[0.4em] mb-4 text-black italic border-l-2 border-black pl-4">
                3. REGLAS DEL SISTEMA (SENTINEL)
              </h2>
              <p className="font-serif font-light text-xl italic text-neutral-700 leading-snug normal-case">
                El acceso al Kernel está sujeto a las reglas de SENTINEL. Cualquier intento de vulnerar la cola de procesamiento o realizar ingeniería inversa sobre el Módulo M-07 resultará en la suspensión inmediata de la suscripción sin derecho a reclamo bajo la autoridad de ALE.
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
          <Link href="/terms" className="text-black underline underline-offset-8 decoration-1 transition-all font-bold">
            TÉRMINOS
          </Link>
          <Link href="/privacy" className="hover:text-black underline underline-offset-8 decoration-1 transition-all">
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
