'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PricingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [userRegion, setUserRegion] = useState('GLOBAL');
  const router = useRouter();

  // 🏛️ SENSOR M.I.C. (INMERSIÓN CULTURAL): DETECCIÓN DE SOBERANÍA REGIONAL
  useEffect(() => {
    const detectRegion = async () => {
      try {
        // PRIORIDAD: DETECCIÓN VÍA NODO SAN PABLO
        const response = await fetch('/api/v1/auth/geo-handshake', {
          headers: { 'X-Lume-Node': 'SAN_PABLO_01' }
        });
        const data = await response.json();
        setUserRegion(data.country || 'GLOBAL');
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
    // PROTOCOLO DE DERIVACIÓN: USUARIOS ACTIVOS A CHECKOUT, PROSPECTOS A REGISTRO
    router.push(session ? '/checkout' : '/register');
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden uppercase tracking-widest">
      
      {/* NAVEGACIÓN COMPACTA */}
      <nav className="flex justify-between items-center w-full shrink-0">
        <div className="text-[10px] font-black tracking-[0.5em] italic">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.back()}
          className="text-[9px] font-bold tracking-[0.2em] border border-black px-6 py-2 rounded-full active:scale-95 transition-all hover:bg-black hover:text-white"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-6xl mx-auto w-full py-12 text-center flex-grow flex flex-col justify-center">
        {/* TÍTULO ESTILO KARADA DECO */}
        <h1 className="text-6xl md:text-8xl font-serif font-light italic lowercase first-letter:uppercase leading-none mb-4 normal-case tracking-normal">
          Planes.
        </h1>
        <div className="h-[1px] w-20 bg-black/10 mx-auto mb-20"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {planes.map((plan) => (
            <div 
              key={plan.nombre}
              onClick={() => handlePlanSelection(plan.nombre)}
              className="group border border-black/5 p-10 rounded-[40px] flex flex-col items-center justify-between cursor-pointer hover:bg-neutral-50 transition-all duration-500 active:scale-95 bg-white shadow-sm"
            >
              <div className="space-y-6">
                <h2 className="text-[9px] font-black tracking-[0.4em] text-neutral-300 group-hover:text-black transition-colors italic">
                  {plan.nombre}
                </h2>
                <div className="text-5xl font-serif font-light italic tracking-tighter normal-case">
                  ${plan.precio}<span className="text-[10px] font-sans not-italic font-bold tracking-widest text-neutral-200 ml-1 uppercase">USD</span>
                </div>
                <p className="text-[9px] font-bold tracking-[0.2em] leading-loose text-neutral-400 group-hover:text-black transition-colors px-4">
                  {plan.desc}
                </p>
              </div>
              
              <div className="mt-12 text-[8px] font-black tracking-[0.4em] border-b border-black/10 group-hover:border-black pb-1 transition-all">
                SELECCIONAR
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP DE VERIFICACIÓN M.I.C. */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/5 backdrop-blur-md flex items-center justify-center p-6 z-50 animate-in fade-in duration-300">
          <div className="bg-white p-12 max-w-sm w-full rounded-[48px] text-center space-y-10 shadow-2xl border border-black/5">
            <h3 className="text-[9px] font-black tracking-[0.6em] italic text-neutral-300">SENSOR M.I.C.</h3>
            <p className="text-[11px] font-serif italic text-neutral-500 leading-relaxed px-2 normal-case tracking-normal">
              Región detectada: <span className="text-black font-sans font-bold not-italic uppercase tracking-widest">{userRegion}</span>.<br/><br/>
              Precios expresados en <span className="text-black font-sans font-bold not-italic text-[10px] uppercase">USD</span>.<br/> El cargo final se ajustará según impuestos locales en el nodo de pago.
            </p>
            <button 
              onClick={proceedToCheckout}
              className="w-full bg-black text-white p-5 rounded-3xl text-[9px] font-bold tracking-[0.4em] hover:bg-neutral-800 transition-all active:scale-95 shadow-xl"
            >
              CONFIRMAR PROTOCOLO
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="flex flex-col items-center space-y-10 pt-20 shrink-0">
        <div className="flex flex-wrap justify-center gap-10">
          <Link href="/terms" className="text-[8px] font-black tracking-[0.2em] hover:text-black underline underline-offset-8 decoration-1">
            TÉRMINOS
          </Link>
          <Link href="/privacy" className="text-[8px] font-black tracking-[0.2em] hover:text-black underline underline-offset-8 decoration-1">
            PRIVACIDAD
          </Link>
          <Link href="/refund" className="text-[8px] font-black tracking-[0.2em] hover:text-black underline underline-offset-8 decoration-1">
            REEMBOLSO
          </Link>
        </div>
        <div className="text-[8px] font-black tracking-[0.5em] text-neutral-200 italic text-center pb-8">
          LUME GLOBAL CORE 🌎 // 2026 // NODO_SAN_PABLO_01
        </div>
      </footer>
    </main>
  );
}
