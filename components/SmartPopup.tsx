'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface PopupProps {
  trigger: string; 
  onClose: () => void;
  planDetails?: string; 
}

export default function SmartPopup({ trigger, onClose, planDetails }: PopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lastSeen = localStorage.getItem(`lume_popup_${trigger}`);
    const now = Date.now();
    
    // LITERALIDAD: Persistencia de 24hs.
    if (lastSeen && now - parseInt(lastSeen) < 86400000) return;

    setIsVisible(true);
  }, [trigger]);

  const closeHandler = () => {
    localStorage.setItem(`lume_popup_${trigger}`, Date.now().toString());
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-none zero-scroll">
      <div className="bg-[#FFFFFF] border border-black p-16 max-w-md w-full mx-4 text-center rounded-none shadow-none">
        
        {/* 🏛️ RECTIFICACIÓN V5.2.5: INTEGRACIÓN ISOTIPO MAESTRO */}
        <div className="flex justify-center mb-10">
          <Image 
            src="/LUME_UNIVERSAL_LOGO.jpg" 
            alt="LUME" 
            width={120} 
            height={40} 
            priority
            className="object-contain"
          />
        </div>

        <h3 className="text-black text-[14px] font-[400] tracking-[0.6em] uppercase mb-12 font-serif">
          SENSOR M.I.C.
        </h3>
        
        <div className="text-black text-[12px] font-[300] leading-loose mb-14 tracking-[0.2em] uppercase font-serif">
          <p className="mb-8">
            LOS VALORES SE EXPRESAN EN <span className="underline decoration-1 underline-offset-8">USD (DÓLARES ESTADOUNIDENSES)</span>.
          </p>
          
          {planDetails && (
            <div className="border-t border-b border-black/10 py-6 mb-8 bg-neutral-50">
              <p className="text-[10px] tracking-[0.4em] mb-2 text-black/40">LÍMITES DE PLAN:</p>
              <p className="text-[13px] font-[400] tracking-[0.3em]">{planDetails}</p>
            </div>
          )}

          <p>
            REGIÓN DETECTADA: CARGO FINAL AJUSTADO SEGÚN NORMATIVA IMPOSITIVA LOCAL EN NODO SAN PABLO.
          </p>
        </div>

        <button 
          onClick={closeHandler}
          className="w-full py-6 bg-black text-white text-[11px] font-[300] uppercase tracking-[0.5em] transition-none rounded-none font-serif hover:bg-black"
        >
          CONFIRMAR PROTOCOLO
        </button>
      </div>
    </div>
  );
}
