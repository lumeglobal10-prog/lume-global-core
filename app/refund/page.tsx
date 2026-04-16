'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RefundPage() {
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
            Política de reembolso.
          </h1>
          <p className="text-[9px] font-black text-neutral-400 tracking-[0.5em] text-center mb-16 italic">
            REFERENCIA: LGC-REFUND-V3 // NODO SAN PABLO
          </p>

          <div className="space-y-12 text-sm md:text-base leading-relaxed text-neutral-800">
            <section>
              <h2 className="text-[10px] font-black tracking-[0.4em] mb-4 text-black italic border-l-2 border-black pl-4">
                1. DERECHO DE DESISTIMIENTO
              </h2>
              <p className="font-serif font-light text-xl italic text-neutral-700 leading-snug normal-case">
                El suscriptor tiene derecho a solicitar un reembolso dentro de los 14 días posteriores a la contratación inicial, siempre y cuando no haya hecho uso de los servicios de procesamiento del Kernel dentro de la cuota de suscripción en curso. 
              </p>
            </section>
            
            <section>
              <h2 className="text-[10px] font-black tracking-[0.4em] mb-4 text-black italic border-l-2 border-black pl-4">
                2. EJECUCIÓN DEL SERVICIO
              </h2>
              <p className="font-serif font-light text-xl italic text-neutral-700 leading-snug normal-case">
                El suscriptor acepta que, al procesar un activo (imagen) mediante nuestros algoritmos matemáticos, el servicio se considera ejecutado. En este caso, el derecho de desistimiento caduca inmediatamente debido a la naturaleza instantánea del consumo de recursos informáticos y la capacidad de infraestructura asignada en el Nodo San Pablo.
              </p>
            </section>

            <section>
              <h2 className="text-[10px] font-black tracking-[0.4em] mb-4 text-black italic border-l-2 border-black pl-4">
                3. PROCESO DE SOLICITUD
              </h2>
              <p className="font-serif font-light text-xl italic text-neutral-700 leading-snug normal-case">
                Las suscripciones pueden cancelarse en cualquier momento para evitar renovaciones futuras. Para solicitar el reembolso de una suscripción no utilizada, el usuario deberá enviar una notificación vía correo electrónico a reembolso@lumeglobalcore.com con copia a la plataforma de pagos bajo la autoridad de ALE.
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
          <Link href="/privacy" className="hover:text-black underline underline-offset-8 decoration-1 transition-all">
            PRIVACIDAD
          </Link>
          <Link href="/refund" className="text-black underline underline-offset-8 decoration-1 transition-all font-bold">
            REEMBOLSO
          </Link>
        </div>
      </footer>
    </main>
  );
}
