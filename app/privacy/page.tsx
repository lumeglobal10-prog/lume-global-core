'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PrivacyPage() {
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
            POLÍTICAS DE PRIVACIDAD.
          </h1>
          <p className="text-[10px] font-black text-black/20 tracking-[0.6em] text-center mb-24 italic">
            COMPROMISO: SOBERANÍA DEL DATO // NODO SAN PABLO
          </p>

          <div className="space-y-20 text-[11px] font-bold leading-relaxed tracking-[0.15em]">
            <section className="border-l-4 border-black pl-8">
              <h2 className="text-[12px] font-black tracking-[0.5em] mb-6">
                1. TRATAMIENTO DE ACTIVOS
              </h2>
              <p className="text-black leading-loose">
                LUME GLOBAL CORE PROCESA LAS IMÁGENES SUMINISTRADAS ÚNICAMENTE CON EL FIN DE EJECUTAR LOS CÁLCULOS MATEMÁTICOS DE OPTIMIZACIÓN. LOS ACTIVOS SE GESTIONAN EN ENTORNOS AISLADOS DENTRO DE LA INFRAESTRUCTURA DEL NODO SAN PABLO PARA GARANTIZAR LA SEGURIDAD ABSOLUTA DE LA INFORMACIÓN.
              </p>
            </section>
            
            <section className="border-l-4 border-black pl-8">
              <h2 className="text-[12px] font-black tracking-[0.5em] mb-6">
                2. CONFIDENCIALIDAD Y SEGURIDAD
              </h2>
              <p className="text-black leading-loose">
                NO COMPARTIMOS DATOS TÉCNICOS NI HISTORIALES DE CONSUMO CON TERCEROS. LA INFORMACIÓN DEL SUSCRIPTOR ES TRATADA BAJO PROTOCOLOS DE CIFRADO DESDE LA SUBIDA HASTA LA ENTREGA FINAL DEL ACTIVO, BAJO LA SUPERVISIÓN DIRECTA DEL MÓDULO DE SEGURIDAD ADUANA_SANITARIA.
              </p>
            </section>

            <section className="border-l-4 border-black pl-8">
              <h2 className="text-[12px] font-black tracking-[0.5em] mb-6">
                3. REGISTRO OPERATIVO
              </h2>
              <p className="text-black leading-loose">
                EL SISTEMA REGISTRA IPS Y LOGS DE ACTIVIDAD ÚNICAMENTE PARA FINES DE SEGURIDAD Y PREVENCIÓN DE FRAUDE. ESTOS DATOS SON INMUTABLES Y SE ALMACENAN EN EL BÚNKER SAN PABLO CUMPLIENDO CON LAS NORMATIVAS INTERNACIONALES DE PROTECCIÓN DE DATOS.
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
          <Link href="/privacy" className="text-black underline decoration-2 underline-offset-8">
            PRIVACIDAD
          </Link>
          <Link href="/refund" className="text-black/40 hover:text-black transition-colors">
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
