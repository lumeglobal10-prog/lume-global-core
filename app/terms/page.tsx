'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TermsPage() {
  const router = useRouter();
  const siteName = "LUME 🌎";

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between overflow-x-hidden">
      <nav className="w-full p-6 md:p-8 flex justify-between items-center shrink-0 z-50">
        <div className="text-sm font-black tracking-[0.4em] uppercase italic">{siteName}</div>
        <button onClick={() => router.back()} className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">← VOLVER</button>
      </nav>

      <section className="flex-grow flex flex-col items-center py-12 px-6 md:py-20">
        <article className="max-w-3xl w-full">
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight mb-2 text-center">Términos y Condiciones de Uso</h1>
          <p className="text-[10px] font-mono text-neutral-400 tracking-[0.2em] uppercase text-center mb-16">Versión: LGC-2026-ALPHA-V2</p>

          <div className="space-y-12 text-sm md:text-base leading-relaxed text-neutral-800">
            <section>
              <h2 className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 text-black italic">1. Naturaleza Técnica del Ecosistema</h2>
              <p>Lume Global Core es una plataforma de optimización visual. El procesamiento de imágenes se realiza exclusivamente a través de algoritmos informáticos y cálculos matemáticos ejecutados en nuestro Kernel propietario. El suscriptor entiende que los resultados son producto de procesamientos técnicos y no de generación creativa aleatoria.</p>
            </section>
            <section>
              <h2 className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 text-black italic">2. Principio de Igualdad Operativa</h2>
              <p>El ecosistema se rige por la Igualdad Operativa. La prioridad en la cola de procesamiento se determina estrictamente por el orden de llegada al servidor. El Plan de Suscripción define la capacidad de volumen, pero no otorga prioridad de tiempo ni saltos en la cola sobre otros suscriptores.</p>
            </section>
            <section>
              <h2 className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 text-black italic">3. Reglas del Sistema (SENTINEL)</h2>
              <p>El acceso al Kernel está sujeto a las reglas de SENTINEL. Cualquier intento de vulnerar la cola de procesamiento resultará en la suspensión inmediata de la suscripción sin derecho a reclamo.</p>
            </section>
            <hr className="border-neutral-100 my-12" />
            <section className="text-center pb-12">
              <p className="text-[10px] font-bold tracking-widest text-neutral-500 italic uppercase">Lume Global Core es una marca comercial operada por Jorge Alejandro Dellaria (LUME.GLOBAL).</p>
            </section>
          </div>
        </article>
      </section>

      <footer className="w-full p-6 border-t border-neutral-100 flex flex-col items-center gap-2 bg-white">
        <p className="text-[8px] md:text-[9px] font-mono text-neutral-700 tracking-[0.15em] uppercase">LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE 🌎</p>
        <div className="flex gap-8 font-mono text-[9px] text-neutral-500 uppercase pb-2">
          <Link href="/terms" className="text-black underline underline-offset-4 decoration-2">Términos</Link>
          <Link href="/privacy" className="hover:text-black underline underline-offset-4 decoration-2">Privacidad</Link>
          <Link href="/refund" className="hover:text-black underline underline-offset-4 decoration-2">Reembolso</Link>
        </div>
      </footer>
    </main>
  );
}
