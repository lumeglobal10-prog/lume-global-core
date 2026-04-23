'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPage() {
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
            POLÍTICAS DE PRIVACIDAD.
          </h1>
          <p className="text-[11px] font-[300] text-black/30 tracking-[0.6em] text-center mb-12 italic font-serif uppercase">
            COMPROMISO: SOBERANÍA DEL DATO // V5.2.5 // NODO SAN PABLO
          </p>

          <div className="space-y-16 text-[11px] font-[300] leading-loose tracking-[0.15em] font-serif">
            <section className="border-l border-black pl-10">
              <h2 className="text-[13px] font-[400] tracking-[0.5em] mb-6">
                1. TRATAMIENTO DE ACTIVOS
              </h2>
              <p className="text-black uppercase">
                LUME GLOBAL CORE PROCESA LAS IMÁGENES SUMINISTRADAS ÚNICAMENTE CON EL FIN DE EJECUTAR LOS CÁLCULOS MATEMÁTICOS DE OPTIMIZACIÓN. LOS ACTIVOS SE GESTIONAN EN ENTORNOS AISLADOS DENTRO DE LA INFRAESTRUCTURA DEL NODO SAN PABLO PARA GARANTIZAR LA SEGURIDAD ABSOLUTA DE LA INFORMACIÓN.
              </p>
            </section>
            
            <section className="border-l border-black pl-10">
              <h2 className="text-[13px] font-[400] tracking-[0.5em] mb-6">
                2. CONFIDENCIALIDAD Y SEGURIDAD
              </h2>
              <p className="text-black uppercase">
                NO COMPARTIMOS DATOS TÉCNICOS NI HISTORIALES DE CONSUMO CON TERCEROS. LA INFORMACIÓN DEL SUSCRIPTOR ES TRATADA BAJO PROTOCOLOS DE CIFRADO DESDE LA SUBIDA HASTA LA ENTREGA FINAL DEL ACTIVO, BAJO LA SUPERVISIÓN DIRECTA DEL MÓDULO DE SEGURIDAD ADUANA_SANITARIA.
              </p>
            </section>

            <section className="border-l border-black pl-10">
              <h2 className="text-[13px] font-[400] tracking-[0.5em] mb-6">
                3. REGISTRO OPERATIVO
              </h2>
              <p className="text-black uppercase">
                EL SISTEMA REGISTRA IPS Y LOGS DE ACTIVIDAD ÚNICAMENTE PARA FINES DE SEGURIDAD Y PREVENCIÓN DE FRAUDE. ESTOS DATOS SON INMUTABLES Y SE ALMACENAN EN EL BÚNKER SAN PABLO CUMPLIENDO CON LAS NORMATIVAS INTERNACIONALES DE PROTECCIÓN DE DATOS.
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
          <Link href="/privacy/" className="text-black hover:text-black transition-none">
            PRIVACIDAD
          </Link>
          <Link href="/refund/" className="text-black/40 transition-none hover:text-black">
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
