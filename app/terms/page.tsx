'use client';
import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans p-8 md:p-16 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <Link href="/" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:underline underline-offset-4">← Back to Home</Link>
        <header className="mt-12 mb-16">
          <p className="text-xl font-extralight tracking-widest text-neutral-400 uppercase">Legal Framework</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Términos y Condiciones de Uso (Global).</h1>
        </header>
        <article className="space-y-10 text-sm leading-relaxed text-neutral-800 font-light">
          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-4">Servicios Globales</h2>
            <p>Lume Global Core proporciona infraestructura de automatización de imágenes, accesible globalmente. El usuario acepta la responsabilidad de cumplir con las leyes de su jurisdicción local.</p>
          </section>
          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-4">Ejecución Autónoma</h2>
            <p>El sistema opera mediante procesos algorítmicos sin intervención de inteligencia artificial.</p>
          </section>
        </article>
      </div>
    </main>
  );
}
