'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function TermsContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const backPath = from === 'checkout' ? '/checkout' : '/';

  return (
    <div className="max-w-4xl mx-auto w-full">
      {/* NAVEGACIÓN SUPERIOR */}
      <nav className="flex justify-between items-center w-full mb-16">
        <div className="text-sm font-black tracking-[0.4em] uppercase italic text-black">
          LUME 🌎
        </div>
        <Link href={backPath}>
          <button className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
            ← VOLVER
          </button>
        </Link>
      </nav>
      
      <h1 className="text-4xl font-extralight tracking-tight mb-12">Términos y Condiciones.</h1>
      
      <div className="space-y-12 text-[10px] md:text-[11px] leading-relaxed font-mono uppercase tracking-wider text-neutral-700">
        <section>
          <h2 className="font-black text-black mb-4 tracking-[0.2em]">[ 01. SERVICIOS Y ALCANCE ]</h2>
          <p>Lume Global Core opera como una plataforma de optimización visual automatizada. Al acceder a nuestros servicios, el suscriptor declara ser mayor de edad y poseer la autoridad legal para vincularse a estos términos. El uso del software está sujeto a la disponibilidad técnica y a las actualizaciones periódicas del sistema.</p>
        </section>

        <section>
          <h2 className="font-black text-black mb-4 tracking-[0.2em]">[ 02. PROPIEDAD INTELECTUAL Y USO ]</h2>
          <p>Todos los algoritmos, interfaces y marcas registradas son propiedad exclusiva de Lume Global Core. Se concede una licencia de uso no exclusiva y revocable para el procesamiento de activos inmobiliarios. Queda estrictamente prohibida la ingeniería inversa o el uso del sistema para fines ilícitos.</p>
        </section>

        <section className="border-l-4 border-black pl-6 py-4 bg-neutral-50">
          <h2 className="font-black text-black mb-4 tracking-[0.2em]">[ 03. PRINCIPIO DE IGUALDAD OPERATIVA ]</h2>
          <p className="text-black font-bold">LUME GLOBAL CORE GARANTIZA QUE TODOS LOS SUSCRIPTORES SON TRATADOS BAJO EL PRINCIPIO DE IGUALDAD TÉCNICA. EL KERNEL DE PROCESAMIENTO NO ASIGNA PRIORIDADES BASADAS EN EL COSTO DEL PLAN DE SUSCRIPCIÓN. LA ÚNICA JERARQUÍA DE EJECUCIÓN ES CRONOLÓGICA (FIRST-IN, FIRST-OUT), ASEGURANDO QUE LA POTENCIA DE INFRAESTRUCTURA LLEGUE A CADA USUARIO DE MANERA JUSTA Y DETERMINÍSTICA.</p>
        </section>

        <section>
          <h2 className="font-black text-black mb-4 tracking-[0.2em]">[ 04. GESTIÓN FINANCIERA ]</h2>
          <p>Los pagos se procesan a través de entidades externas autorizadas. Lume Global Core no almacena datos sensibles de tarjetas. Los precios están sujetos a impuestos locales según la jurisdicción del suscriptor, tal como se informa en el protocolo de suscripción.</p>
        </section>

        <section>
          <h2 className="font-black text-black mb-4 tracking-[0.2em]">[ 05. LIMITACIÓN DE RESPONSABILIDAD ]</h2>
          <p>Lume Global Core no será responsable por pérdidas indirectas, lucro cesante o daños resultantes del uso o la imposibilidad de uso del sistema. El suscriptor es el único responsable de la veracidad y legalidad de las imágenes cargadas al sistema.</p>
        </section>
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans p-8 md:p-20 flex flex-col justify-between overflow-x-hidden">
      <Suspense fallback={<div className="font-mono text-[10px] uppercase tracking-widest animate-pulse">Cargando Protocolo Legal...</div>}>
        <TermsContent />
      </Suspense>
      <footer className="w-full mt-20 pt-8 border-t border-neutral-100 flex flex-col items-center">
        <div className="text-[10px] font-mono tracking-[0.5em] text-neutral-400 uppercase italic">
          LUME GLOBAL CORE 🌎 // © 2026
        </div>
      </footer>
    </main>
  );
}
