'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function RefundPage() {
  const router = useRouter();

  return (
    // 📐 REQUERIMIENTO 2: VIEWPORT "ZERO-SCROLL" (100VH)
    <main className="h-screen w-full bg-[#FFFFFF] text-black flex flex-col justify-between overflow-hidden uppercase tracking-[0.2em] zero-scroll">
      
      {/* 🏛️ HEADER: ISOTIPO MAESTRO / VOLVER */}
      <nav className="w-full p-8 flex justify-between items-center shrink-0 z-50 border-b border-black">
        <div className="flex items-center">
          <Image 
            src="/LUME_UNIVERSAL_LOGO.png" 
            alt="LUME" 
            width={110} 
            height={36} 
            priority
            className="object-contain"
          />
        </div>
        <button 
          onClick={() => router.back()} 
          className="text-black text-[11px] font-[300] tracking-[0.3em] cursor-pointer font-serif border-b border-black/20 pb-1 uppercase bg-transparent"
        >
          ← VOLVER
        </button>
      </nav>

      <section className="flex-grow flex flex-col items-center py-10 px-6 overflow-y-auto custom-scrollbar">
        <article className="max-w-4xl w-full">
          <h1 className="text-4xl md:text-5xl font-[300] tracking-[0.1em] leading-tight mb-4 text-center uppercase font-serif">
            POLÍTICA DE REEMBOLSO.
          </h1>
          <p className="text-[11px] font-[300] text-black/30 tracking-[0.6em] text-center mb-12 italic font-serif uppercase">
            REFERENCIA: LGC-REFUND-V5.2.5 // NODO SAN PABLO
          </p>

          <div className="space-y-16 text-[11px] font-[300] leading-loose tracking-[0.15em] font-serif">
            <section className="border-l border-black pl-10">
              <h2 className="text-[13px] font-[400] tracking-[0.5em] mb-6">
                1. DERECHO DE DESISTIMIENTO
              </h2>
              <p className="text-black uppercase">
                EL SUSCRIPTOR TIENE DERECHO A SOLICITAR UN REEMBOLSO DENTRO DE LOS 14 DÍAS POSTERIORES A LA CONTRATACIÓN INICIAL, SIEMPRE Y CUANDO NO HAYA HECHO USO DE LOS SERVICIOS DE PROCESAMIENTO DEL KERNEL DENTRO DE LA CUOTA DE SUSCRIPCIÓN EN CURSO. 
              </p>
            </section>
            
            <section className="border-l border-black pl-10">
              <h2 className="text-[13px] font-[400] tracking-[0.5em] mb-6">
                2. EJECUCIÓN DEL SERVICIO
              </h2>
              <p className="text-black uppercase">
                EL SUSCRIPTOR ACEPTA QUE, AL PROCESAR UN ACTIVO (IMAGEN) MEDIANTE NUESTROS ALGORITMOS MATEMÁTICOS, EL SERVICIO SE CONSIDERA EJECUTADO. EN ESTE CASO, EL DERECHO DE DESISTIMIENTO CADUCA INMEDIATAMENTE DEBIDO A LA NATURALEZA INSTANTÁNEA DEL CONSUMO DE RECURSOS INFORMÁTICOS Y LA CAPACIDAD DE INFRAESTRUCTURA ASIGNADA EN EL NODO SAN PABLO.
              </p>
            </section>

            <section className="border-l border-black pl-10">
              <h2 className="text-[13px] font-[400] tracking-[0.5em] mb-6">
                3. PROCESO DE SOLICITUD
              </h2>
              <p className="text-black uppercase">
                LAS SUSCRIPCIONES PUEDEN CANCELARSE EN CUALQUIER MOMENTO PARA EVITAR RENOVACIONES FUTURAS. PARA SOLICITAR EL REEMBOLSO DE UNA SUSCRIPCIÓN NO UTILIZADA, EL USUARIO DEBERÁ ENVIAR UNA NOTIFICACIÓN VÍA CORREO ELECTRÓNICO A REEMBOLSO@LUMEGLOBALCORE.COM CON COPIA A LA PLATAFORMA DE PAGOS BAJO LA AUTORIDAD DE ALE.
              </p>
            </section>

            <div className="pt-12 text-center">
              <p className="text-[9px] font-[300] tracking-[0.5em] text-black/30 italic uppercase font-serif">
                LUME GLOBAL CORE ES UNA MARCA COMERCIAL OPERADA POR JORGE ALEJANDRO DELLARIA (LUME.GLOBAL).
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* 🏛️ FOOTER UNIFICADO V5.2.5 */}
      <footer className="w-full p-10 border-t border-black flex flex-col items-center gap-10 shrink-0 bg-white">
        <div className="flex flex-wrap justify-center gap-14 text-[10px] font-[300] tracking-[0.3em] font-serif uppercase">
          <Link href="/terms/" className="text-black/40 transition-none hover:text-black">
            TÉRMINOS
          </Link>
          <Link href="/privacy/" className="text-black/40 transition-none hover:text-black">
            PRIVACIDAD
          </Link>
          <Link href="/refund/" className="text-black hover:text-black transition-none">
            REEMBOLSO
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image 
            src="/LUME_UNIVERSAL_LOGO.png" 
            alt="LUME" 
            width={70} 
            height={23} 
            className="opacity-20 grayscale"
          />
          <p className="text-[9px] font-[300] text-[#333] opacity-40 tracking-[0.6em] italic uppercase font-serif text-center pb-4">
            LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE
          </p>
        </div>
      </footer>
    </main>
  );
}
