'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RefundPage() {
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
            POLÍTICA DE REEMBOLSO.
          </h1>
          <p className="text-[11px] font-[300] text-black/30 tracking-[0.6em] text-center mb-24 italic font-serif">
            REFERENCIA: LGC-REFUND-V10 // NODO SAN PABLO
          </p>

          <div className="space-y-24 text-[11px] font-[300] leading-loose tracking-[0.15em] font-serif">
            <section className="border-l border-black pl-10">
              <h2 className="text-[13px] font-[400] tracking-[0.5em] mb-8">
                1. DERECHO DE DESISTIMIENTO
              </h2>
              <p className="text-black">
                EL SUSCRIPTOR TIENE DERECHO A SOLICITAR UN REEMBOLSO DENTRO DE LOS 14 DÍAS POSTERIORES A LA CONTRATACIÓN INICIAL, SIEMPRE Y CUANDO NO HAYA HECHO USO DE LOS SERVICIOS DE PROCESAMIENTO DEL KERNEL DENTRO DE LA CUOTA DE SUSCRIPCIÓN EN CURSO. 
              </p>
            </section>
            
            <section className="border-l border-black pl-10">
              <h2 className="text-[13px] font-[400] tracking-[0.5em] mb-8">
                2. EJECUCIÓN DEL SERVICIO
              </h2>
              <p className="text-black">
                EL SUSCRIPTOR ACEPTA QUE, AL PROCESAR UN ACTIVO (IMAGEN) MEDIANTE NUESTROS ALGORITMOS MATEMÁTICOS, EL SERVICIO SE CONSIDERA EJECUTADO. EN ESTE CASO, EL DERECHO DE DESISTIMIENTO CADUCA INMEDIATAMENTE DEBIDO A LA NATURALEZA INSTANTÁNEA DEL CONSUMO DE RECURSOS INFORMÁTICOS Y LA CAPACIDAD DE INFRAESTRUCTURA ASIGNADA EN EL NODO SAN PABLO.
              </p>
            </section>

            <section className="border-l border-black pl-10">
              <h2 className="text-[13px] font-[400] tracking-[0.5em] mb-8">
                3. PROCESO DE SOLICITUD
              </h2>
              <p className="text-black">
                LAS SUSCRIPCIONES PUEDEN CANCELARSE EN CUALQUIER MOMENTO PARA EVITAR RENOVACIONES FUTURAS. PARA SOLICITAR EL REEMBOLSO DE UNA SUSCRIPCIÓN NO UTILIZADA, EL USUARIO DEBERÁ ENVIAR UNA NOTIFICACIÓN VÍA CORREO ELECTRÓNICO A REEMBOLSO@LUMEGLOBALCORE.COM CON COPIA A LA PLATAFORMA DE PAGOS BAJO LA AUTORIDAD DE ALE.
              </p>
            </section>

            <div className="pt-24 text-center">
              <p className="text-[9px] font-[300] tracking-[0.5em] text-black/30 italic font-serif">
                LUME GLOBAL CORE ES UNA MARCA COMERCIAL OPERADA POR JORGE ALEJANDRO DELLARIA (LUME.GLOBAL).
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* FOOTER: ESTÉTICA RECTA LUME V5.1 */}
      <footer className="w-full p-12 border-t border-black flex flex-col items-center gap-10 bg-white">
        <div className="flex flex-wrap justify-center gap-14 text-[10px] font-[300] tracking-[0.3em] font-serif">
          <Link href="/terms" className="text-black/40 transition-none">
            TÉRMINOS
          </Link>
          <Link href="/privacy" className="text-black/40 transition-none">
            PRIVACIDAD
          </Link>
          <Link href="/refund" className="text-black underline underline-offset-[12px] decoration-[1px]">
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
