'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function PrivacyContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const backPath = from === 'checkout' ? '/checkout' : '/';

  return (
    <div className="max-w-4xl mx-auto w-full">
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
      
      <h1 className="text-4xl font-extralight tracking-tight mb-12">Privacidad de Datos.</h1>
      
      <div className="space-y-12 text-[10px] md:text-[11px] leading-relaxed font-mono uppercase tracking-wider text-neutral-700">
        <section>
          <h2 className="font-black text-black mb-4 tracking-[0.2em] text-sm leading-none">[ 01. RECOLECCIÓN MÍNIMA ]</h2>
          <p>En cumplimiento con las normativas globales de protección de datos (GDPR/Ley 25.326), Lume Global Core solo solicita la información estrictamente necesaria para la creación de la cuenta y la gestión de la suscripción. No comercializamos ni cedemos bases de datos a terceros.</p>
        </section>

        <section>
          <h2 className="font-black text-black mb-4 tracking-[0.2em] text-sm leading-none">[ 02. PROCESAMIENTO DE IMÁGENES ]</h2>
          <p>Los activos visuales cargados al sistema son procesados de forma efímera. Nuestros algoritmos actúan sobre la imagen para su optimización y, una vez generado el resultado final para el suscriptor, el sistema no conserva copias persistentes en servidores de acceso público.</p>
        </section>

        <section>
          <h2 className="font-black text-black mb-4 tracking-[0.2em] text-sm leading-none">[ 03. SEGURIDAD Y ENCRIPTACIÓN ]</h2>
          <p>Utilizamos protocolos de seguridad de transporte de datos (SSL/TLS) y encriptación en reposo para asegurar que la interacción entre el suscriptor y el Kernel de Lume sea privada e inviolable.</p>
        </section>

        <section>
          <h2 className="font-black text-black mb-4 tracking-[0.2em] text-sm leading-none">[ 04. DERECHOS DEL USUARIO ]</h2>
          <p>El suscriptor mantiene en todo momento el derecho de acceso, rectificación y supresión de sus datos personales. Estas solicitudes pueden gestionarse de forma autónoma desde el panel de control del usuario.</p>
        </section>
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans p-8 md:p-20 flex flex-col justify-between overflow-x-hidden">
      <Suspense fallback={<div className="font-mono text-[10px] uppercase tracking-widest animate-pulse text-neutral-400">Accediendo a Bóveda de Datos...</div>}>
        <PrivacyContent />
      </Suspense>
      <footer className="w-full mt-20 pt-8 border-t border-neutral-100 flex flex-col items-center">
        <div className="text-[10px] font-mono tracking-[0.5em] text-neutral-400 uppercase italic leading-none">
          LUME GLOBAL CORE 🌎 // SEGURIDAD CERTIFICADA 2026
        </div>
      </footer>
    </main>
  );
        }
