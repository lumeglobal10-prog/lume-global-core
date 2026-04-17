'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TermsPage() {
  const router = useRouter();
  const siteName = "LUME 🌎";

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black font-sans flex flex-col justify-between overflow-x-hidden uppercase tracking-[0.2em]">
      
      {/* NAVEGACIÓN: ESTÉTICA RECTA MANDATORIA */}
      <nav className="w-full p-8 flex justify-between items-center shrink-0 z-50 border-b border-black">
        <div className="text-sm font-black tracking-[0.5em] italic">{siteName}</div>
        <button 
          onClick={() => router.back()} 
          className="bg-black text-white px-10 py-4 text-[10px] font-black tracking-[0.4em] transition-colors hover:bg-neutral-900 rounded-none"
        >
          ← VOLVER
        </button>
      </nav>

      <section className="flex-grow flex flex-col items-center py-20 px-6">
        <article className="max-w-4xl w-full">
          {/* TÍTULO: MAYÚSCULAS MANDATORIAS Y ESTÉTICA RECTA */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-4 text-center uppercase">
            TÉRMINOS Y CONDICIONES.
          </h1>
          <p className="text-[10px] font-black text-black/20 tracking-[0.6em] text-center mb-24 italic">
            VERSIÓN: LGC-2026-ALPHA-V10 // NODO SAN PABLO
          </p>

          <div className="space-y-20 text-[11px] font-bold leading-relaxed tracking-[0.15em]">
            <section className="border-l-4 border-black pl-8">
              <h2 className="text-[12px] font-black tracking-[0.5em] mb-6">
                1. NATURALEZA TÉCNICA DEL ECOSISTEMA
              </h2>
              <p className="text-black leading-loose">
                LUME GLOBAL CORE ES UNA PLATAFORMA DE OPTIMIZACIÓN VISUAL. EL PROCESAMIENTO DE IMÁGENES SE REALIZA EXCLUSIVAMENTE A TRAVÉS DE ALGORITMOS INFORMÁTICOS Y CÁLCULOS MATEMÁTICOS EJECUTADOS EN NUESTRO KERNEL PROPIETARIO. EL SUSCRIPTOR ENTIENDE QUE LOS RESULTADOS SON PRODUCTO DE PROCESAMIENTOS TÉCNICOS Y NO DE GENERACIÓN CREATIVA ALEATORIA.
              </p>
            </section>
            
            <section className="border-l-4 border-black pl-8">
              <h2 className="text-[12px] font-black tracking-[0.5em] mb-6">
                2. PRINCIPIO DE IGUALDAD OPERATIVA
              </h2>
              <p className="text-black leading-loose">
                EL ECOSISTEMA SE RIGE POR LA IGUALDAD OPERATIVA. LA PRIORIDAD EN LA COLA DE PROCESAMIENTO SE DETERMINA ESTRICTAMENTE POR EL ORDEN DE LLEGADA AL SERVIDOR. EL PLAN DE SUSCRIPCIÓN DEFINE LA CAPACIDAD DE VOLUMEN, PERO NO OTORGA PRIORIDAD DE TIEMPO NI SALTOS EN LA COLA SOBRE OTROS SUSCRIPTORES.
              </p>
            </section>

            <section className="border-l-4 border-black pl-8">
              <h2 className="text-[12px] font-black tracking-[0.5em] mb-6">
                3. REGLAS DEL SISTEMA (SENTINEL)
              </h2>
              <p className="text-black leading-loose">
                EL ACCESO AL KERNEL ESTÁ SUJETO A LAS REGLAS DE SENTINEL. CUALQUIER INTENTO DE VULNERAR LA COLA DE PROCESAMIENTO O REALIZAR INGENIERÍA INVERSA SOBRE EL MÓDULO M-07 RESULTARÁ EN LA SUSPENSIÓN INMEDIATA DE LA SUSCRIPCIÓN SIN DERECHO A RECLAMO BAJO LA AUTORIDAD DE ALE.
              </p>
            </section>

            <div className="pt-20 text-center">
              <p className="text-[9px] font-black tracking-[0.5em] text-black/30 italic">
                LUME GLOBAL CORE ES UNA MARCA COMERCIAL OPERADA POR JORGE ALEJANDRO DELLARIA (LUME.GLOBAL).
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* FOOTER: ESTÉTICA RECTA LUME */}
      <footer className="w-full p-10 border-t border-black flex flex-col items-center gap-8 bg-white">
        <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black tracking-[0.3em]">
          <Link href="/terms" className="text-black underline decoration-2 underline-offset-8">
            TÉRMINOS
          </Link>
          <Link href="/privacy" className="text-black/40 hover:text-black transition-colors">
            PRIVACIDAD
          </Link>
          <Link href="/refund" className="text-black/40 hover:text-black transition-colors">
            REEMBOLSO
          </Link>
        </div>
        <p className="text-[9px] font-black text-black/10 tracking-[0.6em] italic uppercase">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE 🌎
        </p>
      </footer>
    </main>
  );
}
