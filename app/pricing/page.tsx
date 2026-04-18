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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/geo-handshake`, {
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
    router.push(session ? '/checkout' : '/register');
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black flex flex-col justify-between p-8 md:p-20 overflow-x-hidden uppercase tracking-[0.2em]">
      
      <nav className="flex justify-between items-center w-full shrink-0">
        <div className="text-[12px] font-[300] tracking-[0.5em] italic font-serif">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.back()}
          className="text-[10px] font-[300] tracking-[0.2em] border border-black px-8 py-3 transition-none font-serif"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-6xl mx-auto w-full py-12 text-center flex-grow flex flex-col justify-center">
        <h1 className="text-5xl md:text-8xl font-[300] tracking-[0.1em] leading-none mb-20 font-serif">
          PLANES.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-black">
          {planes.map((plan) => (
            <div 
              key={plan.nombre}
              onClick={() => handlePlanSelection(plan.nombre)}
              className="border-r border-b border-black p-12 flex flex-col items-center justify-between cursor-pointer transition-none bg-white hover:bg-black hover:text-white group"
            >
              <div className="space-y-8">
                <h2 className="text-[11px] font-[400] tracking-[0.5em] font-serif">
                  {plan.nombre}
                </h2>
                <div className="text-6xl font-[300] tracking-tighter font-serif">
                  ${plan.precio}<span className="text-[10px] ml-2 tracking-widest font-sans font-bold uppercase">USD</span>
                </div>
                <p className="text-[10px] font-[300] leading-relaxed tracking-[0.2em] font-serif opacity-50 group-hover:opacity-100">
                  {plan.desc}
                </p>
              </div>
              
              <div className="mt-16 text-[9px] font-[400] tracking-[0.4em] border-b border-black/20 group-hover:border-white pb-2 font-serif">
                SELECCIONAR
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP M.I.C. RECTIFICADO V5.1 */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-none flex items-center justify-center p-6 z-50">
          <div className="bg-white p-16 max-w-sm w-full rounded-none text-center space-y-12 border border-black shadow-none animate-none">
            <h3 className="text-[11px] font-[400] tracking-[0.6em] font-serif uppercase">SENSOR M.I.C.</h3>
            <p className="text-[12px] font-[300] text-black leading-loose tracking-[0.1em] font-serif uppercase">
              Región detectada: <span className="font-bold font-sans">{userRegion}</span>.<br/><br/>
              Cargo final ajustado según normativa impositiva local en NODO SAN PABLO.
            </p>
            <button 
              onClick={proceedToCheckout}
              className="w-full bg-black text-white p-6 rounded-none text-[10px] font-[300] tracking-[0.5em] transition-none font-serif"
            >
              CONFIRMAR PROTOCOLO
            </button>
          </div>
        </div>
      )}

      <footer className="flex flex-col items-center space-y-12 pt-20 shrink-0">
        <div className="flex flex-wrap justify-center gap-14 text-[10px] font-[300] tracking-[0.3em] font-serif">
          <Link href="/terms" className="underline underline-offset-[12px] decoration-[1px]">TÉRMINOS</Link>
          <Link href="/privacy" className="transition-none">PRIVACIDAD</Link>
          <Link href="/refund" className="transition-none">REEMBOLSO</Link>
        </div>
        <div className="text-[9px] font-[300] tracking-[0.6em] text-black/20 italic text-center pb-8 font-serif uppercase">
          LUME GLOBAL CORE // © 2026 // NODO_SAN_PABLO_01
        </div>
      </footer>
    </main>
  );
}
