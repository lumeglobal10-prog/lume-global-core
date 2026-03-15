'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TermsPage() {
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
        <h1 className="text-4xl font-black italic tracking-tighter uppercase mb-2">Términos y Condiciones de Uso</h1>
        <p className="text-[10px] font-bold tracking-widest text-neutral-400 mb-12 uppercase"><strong>Versión:</strong> LGC-2026-ALPHA</p>

        <section className="mb-10">
          <h2 className="text-lg font-black italic uppercase tracking-tight mb-4 border-l-4 border-black pl-4">1. Naturaleza Técnica del Ecosistema</h2>
          <p className="text-[13px] leading-relaxed text-justify">Lume Global Core es una plataforma de optimización visual de activos inmobiliarios. El procesamiento de imágenes se realiza exclusivamente a través de algoritmos informáticos y cálculos matemáticos ejecutados en nuestro Kernel propietario. El suscriptor entiende que los resultados son producto de procesamientos técnicos y no de generación creativa aleatoria.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-black italic uppercase tracking-tight mb-4 border-l-4 border-black pl-4">2. Principio de Igualdad Operativa</h2>
          <p className="text-[13px] leading-relaxed text-justify">El ecosistema se rige por la Igualdad Operativa por Suscripción. Todos los suscriptores son iguales dentro del núcleo. La prioridad en la cola de procesamiento se determina estrictamente por el orden de llegada al servidor. El Plan de Suscripción define la capacidad de infraestructura y volumen de activos, pero no otorga prioridad de tiempo ni saltos en la cola sobre otros socios estratégicos.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-black italic uppercase tracking-tight mb-4 border-l-4 border-black pl-4">3. Reglas del Sistema (SENTINEL)</h2>
          <p className="text-[13px] leading-relaxed text-justify">El acceso al Kernel está sujeto a la Verdad Absoluta de las reglas de SENTINEL. Cualquier intento de vulnerar la cola de procesamiento o el uso indebido de los recursos del sistema resultará en la suspensión inmediata de la suscripción sin derecho a reclamo.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-black italic uppercase tracking-tight mb-4 border-l-4 border-black pl-4">4. Autoridad Técnica</h2>
          <p className="text-[13px] leading-relaxed text-justify">Lume Global Core mantiene la autoridad máxima sobre los algoritmos y la infraestructura. El suscriptor recibe una licencia de uso sobre los activos optimizados, pero la propiedad intelectual de la tecnología de cálculo pertenece íntegramente a Lume.</p>
        </section>
      </article>

      {/* FOOTER CON NUEVO BOTÓN DE REEMBOLSO */}
      <footer className="flex flex-col items-center space-y-6 pt-20 border-t border-neutral-100 mt-20">
        <div className="flex flex-wrap justify-center gap-8">
          <Link href="/terms" className="text-[9px] font-bold tracking-[0.3em] uppercase underline decoration-2 underline-offset-4">
            Términos
          </Link>
          <Link href="/privacy" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Privacidad
          </Link>
          <Link href="/refund" className="text-[9px] font-bold tracking-[0.3em] uppercase text-red-500 hover:underline decoration-2 underline-offset-4">
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
