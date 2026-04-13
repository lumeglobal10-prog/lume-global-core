'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PricingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [userRegion, setUserRegion] = useState('GLOBAL');
  const router = useRouter();

  // M.I.C. SENSOR: Captura de región para segmentación de pasarela
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
    { nombre: 'CORE', precio: '49', desc: 'Acceso a 10 renders de alta precisión.' },
    { nombre: 'ADVANCE', precio: '99', desc: 'Acceso a 30 renders de alta precisión.' },
    { nombre: 'PROFESIONAL', precio: '199', desc: 'Acceso a 80 renders de alta precisión.' },
    { nombre: 'BUSINESS', precio: '499', desc: 'Acceso a 250 renders de alta precisión.' }
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
        {/* LOGO INMUTABLE */}
        <div className="text-xl font-black tracking-tighter italic uppercase">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.back()}
          className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase border border-black/20 px-6 py-2 rounded-xl active:scale-95 transition-all hover:bg-neutral-50"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-6xl mx-auto w-full py-12 text-center">
        {/* TÍTULO ESTILO KARADA DECO */}
        <h1 className="text-6xl md:text-7xl font-serif font-light tracking-tighter mb-4 italic lowercase first-letter:uppercase leading-none">
          Planes
        </h1>
        <div className="h-[1px] w-24 bg-black/10 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {planes.map((plan) => (
            <div 
              key={plan.nombre}
              onClick={() => handlePlanSelection(plan.nombre)}
              className="group border border-black/10 p-8 rounded-2xl flex flex-col items-center justify-between cursor-pointer hover:bg-neutral-50 transition-all duration-300 active:scale-95 bg-white shadow-sm"
            >
              <div>
                <h2 className="text-[11px] font-sans font-black tracking-[0.4em] mb-4 uppercase text-neutral-400 group-hover:text-black transition-colors">
                  {plan.nombre}
                </h2>
                <div className="text-5xl font-serif font-light italic mb-2 tracking-tighter">
                  ${plan.precio}<span className="text-[12px] font-sans font-normal not-italic uppercase tracking-widest text-neutral-300">/mo</span>
                </div>
                <p className="text-[10px] font-sans font-medium uppercase tracking-[0.15em] leading-relaxed mt-8 border-t border-neutral-100 pt-6 text-neutral-500 group-hover:text-black transition-colors">
                  {plan.desc}
                </p>
              </div>
              
              <div className="mt-12 text-[10px] font-sans font-bold tracking-[0.3em] uppercase border-b border-black/20 group-hover:border-black pb-1 transition-all">
                SELECCIONAR
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-6 z-50">
          <div className="bg-white p-10 max-w-sm w-full border border-black/10 rounded-3xl text-center space-y-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <h3 className="text-[11px] font-sans font-bold tracking-[0.5em] uppercase italic text-neutral-400">Verificación regional</h3>
            <p className="text-[10px] font-serif italic text-neutral-600 leading-relaxed">
              Acceso detectado desde: <span className="text-black font-sans font-bold not-italic">{userRegion}</span>.<br/><br/>
              Los precios se expresan en <span className="text-black font-sans font-bold not-italic">USD</span>. El monto final se ajustará según impuestos locales en la pasarela.
            </p>
            <button 
              onClick={proceedToCheckout}
              className="w-full bg-black text-white p-4 rounded-2xl text-[11px] font-sans font-bold uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all active:scale-95"
            >
              CONFIRMAR PROTOCOLO
            </button>
          </div>
        </div>
      )}

      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="flex flex-wrap justify-center gap-8 font-sans text-neutral-400">
          <Link href="/terms" className="text-[9px] font-medium tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-1">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="text-[9px] font-medium tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-1">
            Privacidad
          </Link>
          <Link href="/refund" className="text-[9px] font-medium tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-1">
            Política de Reembolso
          </Link>
        </div>
        <div className="text-[10px] font-sans font-bold tracking-[0.5em] text-neutral-200 uppercase italic text-center">
          LUME GLOBAL CORE 🌎 // 2026
        </div>
      </footer>
    </main>
  );
}
