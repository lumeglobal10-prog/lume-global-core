'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

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

  const planes = [
    { nombre: 'CORE', precio: '49', limits: '1X 8K, 2X 4K, 7X HD/SD' },
    { nombre: 'ADVANCE', precio: '99', limits: '3X 8K, 7X 4K, 20X HD/SD' },
    { nombre: 'PROFESIONAL', precio: '199', limits: '8X 8K, 22X 4K, 50X HD/SD' },
    { nombre: 'BUSINESS', precio: '499', limits: '25X 8K, 75X 4K, 150X HD/SD' }
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
    <main className="h-screen w-full bg-[#FFFFFF] text-black flex flex-col justify-between p-8 md:p-12 overflow-hidden uppercase tracking-[0.2em] zero-scroll">
      
      {/* 🏛️ HEADER: ISOTIPO MAESTRO / VOLVER */}
      <nav className="flex justify-between items-center w-full shrink-0 border-b border-black pb-8">
        <div className="flex items-center">
          <Image 
            src="/LUME_UNIVERSAL_LOGO.png" 
            alt="LUME" 
            width={110} 
            height={36} 
            priority
            className="object-contain"
          />
        </div>
        <button 
          onClick={() => router.back()}
          className="text-black text-[11px] font-[300] tracking-[0.3em] cursor-pointer font-serif border-b border-black/20 pb-1 uppercase"
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
                <div className="text-5xl font-[300] tracking-tighter font-serif uppercase">
                  ${plan.precio}<span className="text-[10px] ml-2 tracking-widest font-sans font-bold uppercase">USD</span>
                </div>
                <p className="text-[9px] font-[300] leading-relaxed tracking-[0.2em] font-serif opacity-50 group-hover:opacity-100 uppercase">
                  {plan.limits}
                </p>
              </div>
              
              <div className="mt-10">
                <span className="text-[9px] font-[400] tracking-[0.4em] border border-black group-hover:border-white px-6 py-3 rounded-[50px] font-serif uppercase">
                  SELECCIONAR
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🏛️ POP-UP RECTIFICADO (ESTÉTICA REDONDEADA) */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-none flex items-center justify-center p-6 z-[100]">
          <div className="bg-white p-12 max-w-md w-full rounded-[20px] text-center space-y-10 border border-black shadow-none uppercase">
            <div className="flex justify-center">
              <Image 
                src="/LUME_UNIVERSAL_LOGO.png" 
                alt="LUME" 
                width={100} 
                height={32} 
                className="object-contain"
              />
            </div>
            <h3 className="text-[12px] font-[400] tracking-[0.6em] font-serif">SENSOR M.I.C.</h3>
            
            <div className="space-y-6">
              <p className="text-[11px] font-[300] leading-loose tracking-[0.1em] font-serif">
                REGIÓN DETECTADA: <span className="font-bold font-sans">{userRegion}</span>
              </p>
              <div className="border-t border-b border-black/10 py-4">
                <p className="text-[9px] tracking-[0.4em] mb-2 text-black/40">LÍMITES DE PLAN:</p>
                <p className="text-[11px] font-[400] tracking-[0.3em]">{selectedDetails}</p>
              </div>
              <p className="text-[9px] font-[300] text-black/60 tracking-[0.2em] font-serif italic">
                CARGO FINAL AJUSTADO SEGÚN NORMATIVA LOCAL EN NODO SAN PABLO.
              </p>
            </div>

            <button 
              onClick={proceedToCheckout}
              className="w-full bg-black text-white p-5 rounded-[50px] text-[10px] font-[300] tracking-[0.5em] transition-none font-serif uppercase"
            >
              CONFIRMAR PROTOCOLO
            </button>
          </div>
        </div>
      )}

      {/* 🏛️ FOOTER UNIFICADO V5.2.5 */}
      <footer className="w-full flex flex-col items-center gap-10 shrink-0 border-t border-black pt-10 pb-6 bg-white">
        <div className="flex justify-center gap-14 text-[10px] font-[300] tracking-[0.3em] font-serif text-black/40 uppercase">
          <Link href="/terms/" className="hover:text-black transition-none">TÉRMINOS</Link>
          <Link href="/privacy/" className="hover:text-black transition-none">PRIVACIDAD</Link>
          <Link href="/refund/" className="hover:text-black transition-none">REEMBOLSO</Link>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <Image 
            src="/LUME_UNIVERSAL_LOGO.png" 
            alt="LUME" 
            width={70} 
            height={23} 
            className="opacity-20 grayscale"
          />
          <p className="text-[9px] font-[300] text-[#333] opacity-40 tracking-[0.6em] italic font-serif uppercase text-center">
            LUME GLOBAL CORE // NODO_SAN_PABLO_01
          </p>
        </div>
      </footer>
    </main>
  );
}
