'use client';

import { useRouter } from 'next/navigation';

export default function TermsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-black font-sans p-8 md:p-20 flex flex-col justify-between overflow-x-hidden">
      <div className="max-w-4xl mx-auto w-full">
        {/* NAVEGACIÓN SUPERIOR: LOGO Y RETORNO UNIVERSAL */}
        <nav className="flex justify-between items-center w-full mb-16">
          <div className="text-sm font-black tracking-[0.4em] uppercase italic text-black">
            LUME 🌎
          </div>
          <button 
            onClick={() => router.back()}
            className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-all"
          >
            ← VOLVER
          </button>
        </nav>
        
        <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-16">Términos y Condiciones.</h1>
        
        <div className="space-y-12 text-[11px] md:text-[13px] leading-relaxed tracking-wide text-neutral-800">
          <section>
            <h2 className="font-bold text-black mb-4 tracking-[0.1em] uppercase">[ 01. SERVICIOS Y ALCANCE ]</h2>
            <p>Lume Global Core opera como una plataforma de optimización visual automatizada. Al acceder a nuestros servicios, el suscriptor declara ser mayor de edad y poseer la autoridad legal para vincularse a estos términos. El uso del software está sujeto a la disponibilidad técnica y a las actualizaciones periódicas del sistema.</p>
          </section>

          <section>
            <h2 className="font-bold text-black mb-4 tracking-[0.1em] uppercase">[ 02. PROPIEDAD INTELECTUAL Y USO ]</h2>
            <p>Todos los algoritmos, interfaces y marcas registradas son propiedad exclusiva de Lume Global Core. Se concede una licencia de uso no exclusiva y revocable para el procesamiento de activos inmobiliarios. Queda estrictamente prohibida la ingeniería inversa o el uso del sistema para fines ilícitos.</p>
          </section>

          <section>
            <h2 className="font-bold text-black mb-4 tracking-[0.1em] uppercase">[ 03. PRINCIPIO DE IGUALDAD OPERATIVA ]</h2>
            <p>Lume Global Core garantiza que todos los suscriptores son tratados bajo el principio de igualdad técnica. El kernel de procesamiento no asigna prioridades basadas en el costo del plan de suscripción. La única jerarquía de ejecución es cronológica (First-in, First-out), asegurando que la potencia de infraestructura llegue a cada usuario de manera justa y determinística.</p>
          </section>

          <section>
            <h2 className="font-bold text-black mb-4 tracking-[0.1em] uppercase">[ 04. GESTIÓN FINANCIERA ]</h2>
            <p>Los pagos se procesan a través de entidades externas autorizadas. Lume Global Core no almacena datos sensibles de tarjetas. Los precios están sujetos a impuestos locales según la jurisdicción del suscriptor, tal como se informa en el protocolo de suscripción.</p>
          </section>

          <section>
            <h2 className="font-bold text-black mb-4 tracking-[0.1em] uppercase">[ 05. LIMITACIÓN DE RESPONSABILIDAD ]</h2>
            <p>Lume Global Core no será responsable por pérdidas indirectas, lucro cesante o daños resultantes del uso o la imposibilidad de uso del sistema. El suscriptor es el único responsable de la veracidad y legalidad de las imágenes cargadas al sistema.</p>
          </section>
        </div>
      </div>

      <footer className="w-full mt-20 pt-8 border-t border-neutral-100 flex flex-col items-center">
        <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase italic">
          LUME GLOBAL CORE 🌎 // © 2026
        </div>
      </footer>
    </main>
  );
}
