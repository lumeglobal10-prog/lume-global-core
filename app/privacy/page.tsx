'use client';
import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans p-8 md:p-16 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <Link href="/" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:underline underline-offset-4">
          ← Back to Home
        </Link>
        
        <header className="mt-12 mb-16">
          <p className="text-xl font-extralight tracking-widest text-neutral-400 uppercase">Data Protection</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Política de Privacidad.</h1>
        </header>

        <article className="space-y-10 text-sm leading-relaxed text-neutral-800 font-light">
          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-4">Tratamiento</h2>
            <p>Recolección mínima de datos bajo estándares RGPD (UE), LFPDPPP (MX), Ley 25.326 (AR) y similares.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-4">Alojamiento y Transferencia</h2>
            <p>Los datos son procesados en nodos de alta seguridad con cifrado de grado militar. Al utilizar el sistema, el usuario consiente la transferencia internacional de datos necesaria para la prestación del servicio técnico y financiero.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-4">Tratamiento de Activos Visuales</h2>
            <p>Las imágenes subidas por el suscriptor son procesadas de manera efímera mediante algoritmos matemáticos. Lume no crea bases de datos con las imágenes de los clientes ni las utiliza para alimentar procesos de aprendizaje profundo, respetando la privacidad absoluta de la cartera de activos de cada inmobiliaria.</p>
          </section>

          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-4">Responsabilidad del Contenido</h2>
            <p>El suscriptor es el único responsable de asegurar que las imágenes procesadas cumplan con las normativas locales de publicidad y privacidad de su jurisdicción específica.</p>
          </section>
        </article>

        <footer className="mt-20 pt-8 border-t border-neutral-100 italic text-neutral-400 text-[10px] uppercase tracking-widest">
          LUME DATA SECURITY // ABSOLUTE PRIVACY PROTOCOL
        </footer>
      </div>
    </main>
  );
}
