'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RefundPage() {
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
            POLÍTICA DE REEMBOLSO.
          </h1>
          <p className="text-[10px] font-black text-black/20 tracking-[0.6em] text-center mb-24 italic">
            REFERENCIA: LGC-REFUND-V10 // NODO SAN PABLO
          </p>

          <div className="space-y-20 text-[11px] font-bold leading-relaxed tracking-[0.15em]">
            <section className="border-l-4 border-black pl-8">
              <h2 className="text-[12px] font-black tracking-[0.5em] mb-6">
                1. DERECHO DE DESISTIMIENTO
              </h2>
              <p className="text-black leading-loose">
                EL SUSCRIPTOR TIENE DERECHO A SOLICITAR UN REEMBOLSO DENTRO DE LOS 14 DÍAS POSTERIORES A LA CONTRATACIÓN INICIAL, SIEMPRE Y CUANDO NO HAYA HECHO USO DE LOS SERVICIOS DE PROCESAMIENTO DEL KERNEL DENTRO DE LA CUOTA DE SUSCRIPCIÓN EN CURSO. 
              </p>
            </section>
            
            <section className="border-l-4 border-black pl-8">
              <h2 className="text-[12px] font-black tracking-[0.5em] mb-6">
                2. EJECUCIÓN DEL SERVICIO
              </h2>
              <p className="text-black leading-loose">
                EL SUSCRIPTOR ACEPTA QUE, AL PROCESAR UN ACTIVO (IMAGEN) MEDIANTE NUESTROS ALGORITMOS MATEMÁTICOS, EL SERVICIO SE CONSIDERA EJECUTADO. EN ESTE CASO, EL DERECHO DE DESISTIMIENTO CADUCA INMEDIATAMENTE DEBIDO A LA NATURALEZA INSTANTÁNEA DEL CONSUMO DE RECURSOS INFORMÁTICOS Y LA CAPACIDAD DE INFRAESTRUCTURA ASIGNADA EN EL NODO SAN PABLO.
              </p>
            </section>

            <section className="border-l-4 border-black pl-8">
              <h2 className="text-[12px] font-black tracking-[0.5em] mb-6">
                3. PROCESO DE SOLICITUD
              </h2>
              <p className="text-black leading-loose">
                LAS SUSCRIPCIONES PUEDEN CANCELARSE EN CUALQUIER MOMENTO PARA EVITAR RENOVACIONES FUTURAS. PARA SOLICITAR EL REEMBOLSO DE UNA SUSCRIPCIÓN NO UTILIZADA, EL USUARIO DEBERÁ ENVIAR UNA NOTIFICACIÓN VÍA CORREO ELECTRÓNICO A REEMBOLSO@LUMEGLOBALCORE.COM CON COPIA A LA PLATAFORMA DE PAGOS BAJO LA AUTORIDAD DE ALE.
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
          <Link href="/terms" className="text-black/40 hover:text-black transition-colors">
            TÉRMINOS
          </Link>
          <Link href="/privacy" className="text-black/40 hover:text-black transition-colors">
            PRIVACIDAD
          </Link>
          <Link href="/refund" className="text-black underline decoration-2 underline-offset-8">
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
