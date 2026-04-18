'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TermsPage() {
  const router = useRouter();
  const siteName = "LUME 🌎";

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black flex flex-col justify-between overflow-x-hidden uppercase tracking-[0.2em]">
      
      {/* NAVEGACIÓN: ESTÉTICA RECTA V5.1 */}
      <nav className="w-full p-8 flex justify-between items-center shrink-0 z-50 border-b border-black">
        <div className="text-[11px] font-[300] tracking-[0.5em] italic font-serif">{siteName}</div>
        <button 
          onClick={() => router.back()} 
          className="bg-black text-white px-10 py-4 text-[10px] font-[300] tracking-[0.4em] transition-none rounded-none font-serif"
        >
          ← VOLVER
        </button>
      </nav>

      <section className="flex-grow flex flex-col items-center py-20 px-6">
        <article className="max-w-4xl w-full">
          {/* TÍTULO: PLAYFAIR DISPLAY 300 / LUJO MINIMALISTA */}
          <h1 className="text-4xl md:text-6xl font-[300] tracking-[0.1em] leading-tight mb-4 text-center uppercase font-serif">
            TÉRMINOS Y CONDICIONES.
          </h1>
          <p className="text-[11px] font-[300] text-black/30 tracking-[0.6em] text-center mb-24 italic font-serif">
            VERSIÓN: LGC-2026-ALPHA-V10 // NODO SAN PABLO
          </p>

          <div className="space-y-24 text-[11px] font-[300] leading-loose tracking-[0.15em] font-serif">
            <section className="border-l border-black pl-10">
              <h2 className="text-[13px] font-[400] tracking-[0.5em] mb-8">
                1. NATURALEZA TÉCNICA DEL ECOSISTEMA
              </h2>
              <p className="text-black">
                LUME GLOBAL CORE ES UNA PLATAFORMA DE OPTIMIZACIÓN VISUAL. EL PROCESAMIENTO DE IMÁGENES SE REALIZA EXCLUSIVAMENTE A TRAVÉS DE ALGORITMOS INFORMÁTICOS Y CÁLCULOS MATEMÁTICOS EJECUTADOS EN NUESTRO KERNEL PROPIETARIO. EL SUSCRIPTOR ENTIENDE QUE LOS RESULTADOS SON PRODUCTO DE PROCESAMIENTOS TÉCNICOS Y NO DE GENERACIÓN CREATIVA ALEATORIA.
              </p>
            </section>
            
            <section className="border-l border-black pl-10">
              <h2 className="text-[13px] font-[400] tracking-[0.5em] mb-8">
                2. PRINCIPIO DE IGUALDAD OPERATIVA
              </h2>
              <p className="text-black">
                EL ECOSISTEMA SE RIGE POR LA IGUALDAD OPERATIVA. LA PRIORIDAD EN LA COLA DE PROCESAMIENTO SE DETERMINA ESTRICTAMENTE POR EL ORDEN DE LLEGADA AL SERVIDOR. EL PLAN DE SUSCRIPCIÓN DEFINE LA CAPACIDAD DE VOLUMEN, PERO NO OTORGA PRIORIDAD DE TIEMPO NI SALTOS EN LA COLA SOBRE OTROS SUSCRIPTORES.
              </p>
            </section>

            <section className="border-l border-black pl-10">
              <h2 className="text-[13px] font-[400] tracking-[0.5em] mb-8">
                3. REGLAS DEL SISTEMA (ESCUDO_PREDICTIVO)
              </h2>
              <p className="text-black">
                EL ACCESO AL KERNEL ESTÁ SUJETO A LAS REGLAS DE ESCUDO_PREDICTIVO. CUALQUIER INTENTO DE VULNERAR LA COLA DE PROCESAMIENTO O REALIZAR INGENIERÍA INVERSA SOBRE EL MÓDULO M-07 RESULTARÁ EN LA SUSPENSIÓN INMEDIATA DE LA SUSCRIPCIÓN SIN DERECHO A RECLAMO BAJO LA AUTORIDAD DE ALE.
              </p>
            </section>

            <div className="pt-24 text-center">
              <p className="text-[9px] font-[300] tracking-[0.5em] text-black/30 italic">
                LUME GLOBAL CORE ES UNA MARCA COMERCIAL OPERADA POR JORGE ALEJANDRO DELLARIA (LUME.GLOBAL).
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* FOOTER: ESTÉTICA RECTA LUME V5.1 */}
      <footer className="w-full p-12 border-t border-black flex flex-col items-center gap-10 bg-white">
        <div className="flex flex-wrap justify-center gap-14 text-[10px] font-[300] tracking-[0.3em] font-serif">
          <Link href="/terms" className="text-black underline underline-offset-[12px] decoration-[1px]">
            TÉRMINOS
          </Link>
          <Link href="/privacy" className="text-black/40 transition-none">
            PRIVACIDAD
          </Link>
          <Link href="/refund" className="text-black/40 transition-none">
            REEMBOLSO
          </Link>
        </div>
        <p className="text-[9px] font-[300] text-black/10 tracking-[0.6em] italic uppercase font-serif">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE 🌎
        </p>
      </footer>
    </main>
  );
}
