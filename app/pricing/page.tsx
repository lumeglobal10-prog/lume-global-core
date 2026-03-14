'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PricingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const planes = [
    { nombre: 'BASIC', precio: '29', desc: 'Ideal para agentes individuales.' },
    { nombre: 'ADVANCE', precio: '99', desc: 'Optimización de flujo para oficinas.' },
    { nombre: 'PRO', precio: '199', desc: 'Escalabilidad total y prioridad.' },
    { nombre: 'ULTRA', precio: '399', desc: 'Máxima potencia de infraestructura.' }
  ];

  const handlePlanSelection = () => {
    setShowPopup(true);
  };

  const proceedToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20">
      
      {/* NAVEGACIÓN SUPERIOR */}
      <nav className="flex justify-start">
        <Link href="/">
          <button className="text-[10px] font-black tracking-[0.3em] uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
            ← INICIO
          </button>
        </Link>
      </nav>

      {/* SECTOR DE PLANES */}
      <div className="max-w-5xl mx-auto w-full py-12 text-center">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">PLANES LUME CORE.</h1>
        <div className="h-1 w-24 bg-black mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {planes.map((plan) => (
            <div 
              key={plan.nombre}
              onClick={handlePlanSelection}
              className="group border border-black p-8 flex flex-col items-center justify-between cursor-pointer hover:bg-black hover:text-white transition-all duration-300 active:scale-95"
            >
              <div>
                <h2 className="text-[12px] font-black tracking-[0.4em] mb-4 uppercase">{plan.nombre}</h2>
                <div className="text-4xl font-black italic mb-2 tracking-tighter">
                  ${plan.precio}<span className="text-[12px] font-mono not-italic uppercase tracking-widest text-neutral-400 group-hover:text-neutral-500">/mo</span>
                </div>
                <p className="text-[9px] font-mono uppercase tracking-widest leading-relaxed mt-6">
                  {plan.desc}
                </p>
              </div>
              
              <div className="mt-12 text-[10px] font-black tracking-[0.3em] uppercase border-b-2 border-black group-hover:border-white pb-1">
                SELECCIONAR
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POP-UP INFORMATIVO */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white p-10 max-w-sm w-full border border-black text-center space-y-8 animate-in fade-in zoom-in duration-300">
            <h3 className="text-[12px] font-black tracking-[0.5em] uppercase italic">Aviso Legal</h3>
            <p className="text-[10px] font-mono uppercase tracking-[0.1em] leading-relaxed text-neutral-600">
              Los precios se expresan en <span className="text-black font-bold">Dólares Estadounidenses (USD)</span>. 
              Tenga en cuenta que el monto final puede variar según los impuestos locales y regulaciones fiscales de su región.
            </p>
            <button 
              onClick={proceedToCheckout}
              className="w-full bg-black text-white p-4 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all"
            >
              ACEPTAR Y CONTINUAR
            </button>
          </div>
        </div>
      )}

      {/* FOOTER UNIFICADO LUME CORE */}
      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="flex space-x-8">
          <Link href="/terms" className="text-[9px] font-black tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="text-[9px] font-black tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Privacidad
          </Link>
        </div>
        <div className="text-[10px] font-mono tracking-[0.5em] text-neutral-400 uppercase">
          LUME GLOBAL CORE // 2026
        </div>
      </footer>
    </main>
  );
}
