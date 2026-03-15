'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RefundPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-black font-sans p-8 md:p-20 overflow-x-hidden">
      
      {/* NAVEGACIÓN SUPERIOR */}
      <nav className="flex justify-between items-center w-full mb-12">
        <div className="text-xl font-black tracking-tighter italic uppercase">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.back()}
          className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 rounded-xl hover:bg-black hover:text-white transition-all"
        >
          ← VOLVER
        </button>
      </nav>

      {/* CONTENIDO TÉCNICO INYECTADO (LITERAL) */}
      <article className="max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-4xl font-black italic tracking-tighter uppercase mb-2">Política de Reembolso</h1>
        <p className="text-[10px] font-bold tracking-widest text-neutral-400 mb-12 uppercase">Lume Global Core</p>

        <section className="mb-10">
          <p className="text-[10px] font-bold uppercase mb-8 italic text-neutral-500">
            <strong>Última actualización:</strong> 15 de marzo de 2026
          </p>
          
          <h3 className="text-lg font-black italic uppercase tracking-tight mb-4 border-l-4 border-black pl-4">1. Naturaleza del Servicio</h3>
          <p className="text-[13px] leading-relaxed text-justify mb-8">
            Lume Global Core ofrece servicios de procesamiento digital mediante algoritmos matemáticos en tiempo real. Debido a la activación inmediata de recursos del Kernel y al consumo de potencia de procesamiento, todas las ventas de suscripciones y créditos se consideran finales.
          </p>
          
          <h3 className="text-lg font-black italic uppercase tracking-tight mb-4 border-l-4 border-black pl-4">2. Ausencia de Reembolsos</h3>
          <p className="text-[13px] leading-relaxed text-justify mb-8">
            No se realizarán reembolsos monetarios una vez que el suscriptor haya iniciado el procesamiento de al menos un (1) activo o transcurrido 24 horas desde la contratación del plan.
          </p>
          
          <h3 className="text-lg font-black italic uppercase tracking-tight mb-4 border-l-4 border-black pl-4">3. Igualdad de Trato y Errores Técnicos</h3>
          <p className="text-[13px] leading-relaxed text-justify">
            Si el sistema SENTINEL detecta un error de cálculo matemático que impida la entrega del activo, el crédito será restituido automáticamente a la cuenta del suscriptor. No se realizarán devoluciones de dinero por demoras en la cola de procesamiento, ya que la prioridad se rige estrictamente por el orden de llegada.
          </p>
        </section>
      </article>

      {/* FOOTER UNIFICADO LEGAL */}
      <footer className="flex flex-col items-center space-y-6 pt-20 border-t border-neutral-100 mt-20">
        <div className="flex flex-wrap justify-center gap-8">
          <Link href="/terms" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Términos
          </Link>
          <Link href="/privacy" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Privacidad
          </Link>
          <Link href="/refund" className="text-[9px] font-bold tracking-[0.3em] uppercase underline text-red-500 decoration-2 underline-offset-4">
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
