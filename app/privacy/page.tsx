'use client';
import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans p-8 md:p-16 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <Link href="/" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:underline underline-offset-4">← Back to Home</Link>
        <header className="mt-12 mb-16">
          <p className="text-xl font-extralight tracking-widest text-neutral-400 uppercase">Data Protection</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Política de Privacidad.</h1>
        </header>
        <article className="space-y-10 text-sm leading-relaxed text-neutral-800 font-light">
          <section>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black mb-4">Tratamiento</h2>
            <p>Recolección mínima de datos bajo estándares internacionales.</p>
          </section>
        </article>
      </div>
    </main>
  );
}
