'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PricingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [userRegion, setUserRegion] = useState('GLOBAL');
  const [selectedDetails, setSelectedDetails] = useState('');
  const router = useRouter();

  const API_BASE = "/api/v1";

  useEffect(() => {
    const detectRegion = async () => {
      try {
        const response = await fetch(`${API_BASE}/auth/geo-handshake`, {
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

  // 🏛️ REQUERIMIENTO 5: LÍMITES POR CALIDAD SEGÚN BLUEPRINT
  const planes = [
    { nombre: 'CORE', precio: '49', limits: '1x8K, 2x4K, 7xHD/SD' },
    { nombre: 'ADVANCE', precio: '99', limits: '3x8K, 7x4K, 20xHD/SD' },
    { nombre: 'PROFESIONAL', precio: '199', limits: '8x8K, 22x4K, 50xHD/SD' },
    { nombre: 'BUSINESS', precio: '499', limits: '25x8K, 75x4K, 150xHD/SD' }
  ];

  const handlePlanSelection = (nombre: string, limits: string) => {
    localStorage.setItem('lume_selected_plan', nombre);
    setSelectedDetails(limits);
    setShowPopup(true);
  };

  const proceedToCheckout = () => {
    const session = localStorage.getItem('lume_session_token');
    router.push(session ? '/checkout/' : '/register/');
  };

  return (
    // 📐 REQUERIMIENTO 2: VIEWPORT "ZERO-SCROLL" (100VH)
    <main className="h-screen w-full bg-[#FFFFFF] text-black flex flex-col justify-between p-8 md:p-12 overflow-hidden uppercase tracking-[0.2em] zero-scroll">
      
      {/* 🏛️ REQUERIMIENTO 2: LOGO IZQUIERDA / PALABRA DE ACCIÓN DERECHA */}
      <nav className="flex justify-between items-center w-full shrink-0 border-b border-black pb-8">
        <div className="text-[12px] font-[300] tracking-[0.5em] italic font-serif">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.back()}
          className="text-black text-[11px] font-[300] tracking-[0.3em] transition-none font-serif border-none bg-none p-0 cursor-pointer"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-7xl mx-auto w-full py-6 text-center flex-grow flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-[300] tracking-[0.1em] leading-none mb-12 font-serif uppercase">
          PLANES.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-black">
          {planes.map((plan) => (
            <div 
              key={plan.nombre}
              onClick={() => handlePlanSelection(plan.nombre, plan.limits)}
              className="border-r border-b border-black p-10 flex flex-col items-center justify-between cursor-pointer transition-none bg-white hover:bg-black hover:text-white group h-full"
            >
              <div className="space-y-6">
                <h2 className="text-[11px] font-[400] tracking-[0.5em] font-serif uppercase">
                  {plan.nombre}
                </h2>
                <div className="text-5xl font-[300] tracking-tighter font-serif">
                  ${plan.precio}<span className="text-[10px] ml-2 tracking-widest font-sans font-bold uppercase">USD</span>
                </div>
                <p className="text-[9px] font-[300] leading-relaxed tracking-[0.2em] font-serif opacity-50 group-hover:opacity-100 uppercase">
                  {plan.limits}
                </p>
              </div>
              
              <div className="mt-10 text-[9px] font-[400] tracking-[0.4em] border-b border-black/20 group-hover:border-white pb-2 font-serif uppercase">
                SELECCIONAR
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🏛️ REQUERIMIENTO 5: POP-UP RECTIFICADO (SENSOR M.I.C.) */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-none flex items-center justify-center p-6 z-[100] zero-scroll">
          <div className="bg-white p-16 max-w-md w-full rounded-none text-center space-y-12 border border-black shadow-none animate-none">
            <h3 className="text-[14px] font-[400] tracking-[0.6em] font-serif uppercase">SENSOR M.I.C.</h3>
            
            <div className="space-y-8">
              <p className="text-[12px] font-[300] text-black leading-loose tracking-[0.1em] font-serif uppercase">
                REGIÓN DETECTADA: <span className="font-bold font-sans">{userRegion}</span>
              </p>
              <div className="border-t border-b border-black/10 py-6">
                <p className="text-[10px] tracking-[0.4em] mb-2 text-black/40 uppercase">LÍMITES DE PLAN:</p>
                <p className="text-[13px] font-[400] tracking-[0.3em] uppercase">{selectedDetails}</p>
              </div>
              <p className="text-[10px] font-[300] text-black/60 tracking-[0.2em] font-serif uppercase">
                CARGO FINAL AJUSTADO SEGÚN NORMATIVA IMPOSITIVA LOCAL EN NODO SAN PABLO.
              </p>
            </div>

            <button 
              onClick={proceedToCheckout}
              className="w-full bg-black text-white p-6 rounded-none text-[11px] font-[300] tracking-[0.5em] transition-none font-serif uppercase"
            >
              CONFIRMAR PROTOCOLO
            </button>
          </div>
        </div>
      )}

      <footer className="flex flex-col items-center space-y-10 pt-12 shrink-0 border-t border-black bg-white">
        <div className="flex flex-wrap justify-center gap-14 text-[10px] font-[300] tracking-[0.3em] font-serif uppercase">
          <Link href="/terms/" className="underline underline-offset-[12px] decoration-[1px]">TÉRMINOS</Link>
          <Link href="/privacy/" className="transition-none hover:text-black">PRIVACIDAD</Link>
          <Link href="/refund/" className="transition-none hover:text-black">REEMBOLSO</Link>
        </div>
        <div className="text-[9px] font-[300] tracking-[0.6em] text-[#333] opacity-40 italic text-center pb-4 font-serif uppercase">
          LUME GLOBAL CORE // © 2026 // NODO_SAN_PABLO_01
        </div>
      </footer>
    </main>
  );
}
