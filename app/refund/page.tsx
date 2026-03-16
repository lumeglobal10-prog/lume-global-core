'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RefundPage() {
  const router = useRouter();
  const siteName = "LUME 🌎";

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between overflow-x-hidden">
      
      {/* NAVEGACIÓN: LOGO IZQUIERDA Y VOLVER DERECHA */}
      <nav className="w-full p-6 md:p-8 flex justify-between items-center shrink-0 z-50">
        <div className="text-sm font-black tracking-[0.4em] uppercase italic">
          {siteName}
        </div>
        <button 
          onClick={() => router.back()}
          className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all"
        >
          ← VOLVER
        </button>
      </nav>

      {/* CONTENIDO LEGAL: ESTÉTICA "ABSOLUTE PRECISION" */}
      <section className="flex-grow flex flex-col items-center py-12 px-6 md:py-20">
        <article className="max-w-3xl w-full">
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight mb-2 text-center">
            Política de Reembolso
          </h1>
          <p className="text-[10px] font-mono text-neutral-400 tracking-[0.2em] uppercase text-center mb-16">
            <strong>Referencia:</strong> LGC-REFUND-001
          </p>

          <div className="space-y-12 text-sm md:text-base leading-relaxed text-neutral-800">
            <section>
              <h2 className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 text-black italic">
                1. Naturaleza del Servicio Digital
              </h2>
              <p>
                Lume Global Core ofrece servicios de procesamiento digital mediante algoritmos matemáticos en tiempo real. Debido a la activación inmediata de recursos del Kernel y al consumo de potencia de procesamiento, todas las ventas de suscripciones y créditos se consideran finales.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 text-black italic">
                2. Ausencia de Reembolsos
              </h2>
              <p>
                No se realizarán reembolsos monetarios una vez que el suscriptor haya iniciado el procesamiento de al menos un (1) activo o transcurrido 24 horas desde la contratación del plan.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 text-black italic">
                3. Excepciones Técnicas
              </h2>
              <p>
                Si el sistema SENTINEL detecta un error de cálculo matemático que impida la entrega del activo, el crédito será restituido automáticamente a la cuenta del suscriptor. No se realizarán devoluciones de dinero por demoras en la cola de procesamiento, ya que la prioridad se rige estrictamente por el orden de llegada.
              </p>
            </section>

            <hr className="border-neutral-100 my-12" />

            <section className="text-center pb-12">
              <p className="text-[10px] font-bold tracking-widest text-neutral-500 italic uppercase">
                Lume Global Core es una marca comercial operada por Jorge Alejandro Dellaria.
              </p>
            </section>
          </div>
        </article>
      </section>

      {/* FOOTER UNIFICADO LGC */}
      <footer className="w-full p-6 border-t border-neutral-100 flex flex-col items-center gap-2 shrink-0 bg-white">
        <p className="max-w-2xl text-[8px] md:text-[9px] font-mono text-neutral-700 text-center leading-relaxed tracking-[0.15em] uppercase">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE 🌎
        </p>
        <div className="flex flex-wrap justify-center gap-8 font-mono text-[9px] text-neutral-500 uppercase pb-2">
          <Link href="/terms" className="hover:text-black underline underline-offset-4 decoration-2">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="hover:text-black underline underline-offset-4 decoration-2">
            Privacidad
          </Link>
          <Link href="/refund" className="text-black underline underline-offset-4 decoration-2">
            Política de Reembolso
          </Link>
        </div>
      </footer>
    </main>
  );
}
