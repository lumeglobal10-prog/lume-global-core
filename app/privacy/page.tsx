'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PrivacyPage() {
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
            Políticas de Privacidad
          </h1>
          <p className="text-[10px] font-mono text-neutral-400 tracking-[0.2em] uppercase text-center mb-16">
            <strong>Compromiso:</strong> Soberanía del Dato
          </p>

          <div className="space-y-12 text-sm md:text-base leading-relaxed text-neutral-800">
            <section>
              <h2 className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 text-black italic">
                1. Tratamiento de Activos
              </h2>
              <p>
                Lume Global Core procesa las imágenes suministradas únicamente con el fin de ejecutar los cálculos matemáticos de optimización. Los activos se gestionan en entornos aislados para garantizar que la información no sea filtrada ni utilizada para fines ajenos al procesamiento solicitado.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 text-black italic">
                2. Confidencialidad y Seguridad
              </h2>
              <p>
                No compartimos datos técnicos, identidades ni historiales de consumo con terceros. La seguridad del nodo de procesamiento es innegociable. La información del suscriptor es tratada bajo protocolos de cifrado de punta desde la subida hasta la entrega final del activo.
              </p>
            </section>

            <section>
              <h2 className="text-[11px] font-black tracking-[0.3em] uppercase mb-4 text-black italic">
                3. Registro Operativo
              </h2>
              <p>
                El sistema registra IPs y logs de actividad únicamente para fines de seguridad, auditoría forense interna y prevención de morosidad, cumpliendo con las normativas internacionales de protección de datos aplicables a servicios globales.
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
          <Link href="/privacy" className="text-black underline underline-offset-4 decoration-2">
            Privacidad
          </Link>
          <Link href="/refund" className="hover:text-black underline underline-offset-4 decoration-2">
            Política de Reembolso
          </Link>
        </div>
      </footer>
    </main>
  );
}
