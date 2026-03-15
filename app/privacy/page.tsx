'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-black italic tracking-tighter uppercase mb-2">Políticas de Privacidad</h1>
        <p className="text-[10px] font-bold tracking-widest text-neutral-400 mb-12 uppercase"><strong>Compromiso:</strong> Soberanía del Dato</p>

        <section className="mb-10">
          <h2 className="text-lg font-black italic uppercase tracking-tight mb-4 border-l-4 border-black pl-4">1. Tratamiento de Activos</h2>
          <p className="text-[13px] leading-relaxed text-justify">Lume Global Core procesa las imágenes suministradas únicamente con el fin de ejecutar los cálculos matemáticos de optimización. Los activos se gestionan en entornos aislados para garantizar que la información no sea filtrada ni utilizada para fines ajenos al procesamiento solicitado.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-black italic uppercase tracking-tight mb-4 border-l-4 border-black pl-4">2. Confidencialidad y Seguridad</h2>
          <p className="text-[13px] leading-relaxed text-justify">No compartimos datos técnicos, identidades ni historiales de consumo con terceros. La seguridad del nodo de procesamiento es innegociable. La información del suscriptor es tratada bajo protocolos de cifrado de punta desde la subida hasta la entrega final del activo.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-black italic uppercase tracking-tight mb-4 border-l-4 border-black pl-4">3. Registro Operativo</h2>
          <p className="text-[13px] leading-relaxed text-justify">El sistema registra IPs y logs de actividad únicamente para fines de seguridad, auditoría forense interna y prevención de morosidad, cumpliendo con las normativas internacionales de protección de datos aplicables a servicios globales.</p>
        </section>
      </article>

      {/* FOOTER UNIFICADO */}
      <footer className="flex flex-col items-center space-y-6 pt-20 border-t border-neutral-100 mt-20">
        <div className="flex flex-wrap justify-center gap-8">
          <Link href="/terms" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Términos
          </Link>
          <Link href="/privacy" className="text-[9px] font-bold tracking-[0.3em] uppercase underline decoration-2 underline-offset-4">
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
