'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PricingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [userRegion, setUserRegion] = useState('GLOBAL');
  const router = useRouter();

  useEffect(() => {
    const detectRegion = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setUserRegion(data.country_name || 'GLOBAL');
      } catch (e) {
        setUserRegion('GLOBAL');
      }
    };
    detectRegion();
  }, []);

  const planes = [
    { nombre: 'CORE', precio: '49', desc: 'ACCESO A 10 RENDERS DE ALTA PRECISIÓN.' },
    { nombre: 'ADVANCE', precio: '99', desc: 'ACCESO A 30 RENDERS DE ALTA PRECISIÓN.' },
    { nombre: 'PROFESIONAL', precio: '199', desc: 'ACCESO A 80 RENDERS DE ALTA PRECISIÓN.' },
    { nombre: 'BUSINESS', precio: '499', desc: 'ACCESO A 250 RENDERS DE ALTA PRECISIÓN.' }
  ];

  const handlePlanSelection = (plan: string) => {
    localStorage.setItem('lume_selected_plan', plan);
    localStorage.setItem('lume_user_region', userRegion);
    setShowPopup(true);
  };

  const proceedToCheckout = () => {
    const session = localStorage.getItem('lume_session_token');
    if (session) {
      router.push('/checkout');
    } else {
      router.push('/register');
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden">
      
      <nav className="flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter italic uppercase">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.back()}
          className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 rounded-xl active:scale-95 transition-all"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-6xl mx-auto w-full py-12 text-center">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4 italic uppercase leading-none">Planes</h1>
        <div className="h-[1px] w-24 bg-black mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {planes.map((plan) => (
            <div 
              key={plan.nombre}
              onClick={() => handlePlanSelection(plan.nombre)}
              className="group border border-black p-8 rounded-2xl flex flex-col items-center justify-between cursor-pointer hover:bg-black hover:text-white transition-all duration-300 active:scale-95"
            >
              <div>
                <h2 className="text-[11px] font-black tracking-[0.4em] mb-4 uppercase">{plan.nombre}</h2>
                <div className="text-5xl font-black italic mb-2 tracking-tighter">
                  ${plan.precio}<span className="text-[12px] font-normal not-italic uppercase tracking-widest text-neutral-400 group-hover:text-neutral-500">/mo</span>
                </div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] leading-relaxed mt-8 border-t border-neutral-100 group-hover:border-neutral-800 pt-6">
                  {plan.desc}
                </p>
              </div>
              
              <div className="mt-12 text-[10px] font-bold tracking-[0.3em] uppercase border-b-2 border-black group-hover:border-white pb-1">
                SELECCIONAR
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white p-10 max-w-sm w-full border border-black rounded-2xl text-center space-y-8 animate-in fade-in zoom-in duration-300">
            <h3 className="text-[11px] font-bold tracking-[0.5em] uppercase italic">VERIFICACIÓN REGIONAL</h3>
            <p className="text-[10px] font-medium uppercase tracking-[0.1em] leading-relaxed text-neutral-600">
              ACCESO DETECTADO DESDE: <span className="text-black font-bold">{userRegion}</span>.<br/><br/>
              LOS PRECIOS SE EXPRESAN EN <span className="text-black font-bold">USD</span>. EL MONTO FINAL SE AJUSTARÁ SEGÚN IMPUESTOS LOCALES EN LA PASARELA.
            </p>
            <button 
              onClick={proceedToCheckout}
              className="w-full bg-black text-white p-4 rounded-xl text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all active:scale-95"
            >
              CONFIRMAR PROTOCOLO
            </button>
          </div>
        </div>
      )}

      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="flex flex-wrap justify-center gap-8 font-sans text-neutral-500">
          <Link href="/terms" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-2">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-2">
            Privacidad
          </Link>
          <Link href="/refund" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-2">
            Política de Reembolso
          </Link>
        </div>
        <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase italic text-center">
          LUME GLOBAL CORE 🌎 // 2026
        </div>
      </footer>
    </main>
  );
}
