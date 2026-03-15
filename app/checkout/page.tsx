'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    const plan = localStorage.getItem('lume_selected_plan') || 'CORE';
    setSelectedPlan(plan);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden">
      <nav className="flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter italic uppercase">LUME 🌎</div>
        <button onClick={() => router.back()} className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 rounded-xl">← VOLVER</button>
      </nav>

      <div className="max-w-md mx-auto w-full py-12">
        <h1 className="text-4xl font-bold tracking-tighter mb-2 italic text-center uppercase">Checkout</h1>
        <p className="text-[9px] font-black tracking-widest text-neutral-400 uppercase mb-12 italic text-center">Suscripción: {selectedPlan}</p>
        
        <div className="border border-black p-8 rounded-3xl space-y-8 bg-neutral-50/50">
          <div className="flex justify-between items-end border-b border-black pb-4">
            <span className="text-[10px] font-black uppercase tracking-widest">Plan Seleccionado</span>
            <span className="text-lg font-black italic">{selectedPlan}</span>
          </div>
          
          <div className="space-y-4">
            <p className="text-[10px] font-medium uppercase tracking-tight leading-relaxed">
              Al proceder, usted acepta la activación inmediata del Kernel y nuestra política de no reembolso debido al consumo de recursos de procesamiento en tiempo real.
            </p>
            <button className="w-full bg-black text-white p-5 rounded-2xl text-[12px] font-black uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all">
              EJECUTAR PAGO
            </button>
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="flex flex-wrap justify-center gap-8 text-black">
          <Link href="/terms" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">Términos</Link>
          <Link href="/privacy" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">Privacidad</Link>
          <Link href="/refund" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">Política de Reembolso</Link>
        </div>
        <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase italic text-center">LUME GLOBAL CORE 🌎 // 2026</div>
      </footer>
    </main>
  );
}
