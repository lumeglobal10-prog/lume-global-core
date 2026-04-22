'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SmartPopup({ trigger, onClose, planDetails }: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lastSeen = localStorage.getItem(`lume_popup_${trigger}`);
    if (lastSeen && Date.now() - parseInt(lastSeen) < 86400000) return;
    setIsVisible(true);
  }, [trigger]);

  const closeHandler = () => {
    localStorage.setItem(`lume_popup_${trigger}`, Date.now().toString());
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 zero-scroll">
      <div className="bg-[#FFFFFF] border border-black p-16 max-w-md w-full mx-4 text-center rounded-none shadow-none">
        <div className="flex justify-center mb-10">
          <Image src="/LUME_UNIVERSAL_LOGO.png" alt="LUME" width={120} height={40} priority />
        </div>
        <h3 className="text-black text-[14px] font-[400] tracking-[0.6em] uppercase mb-12 font-serif">SENSOR M.I.C.</h3>
        <div className="text-black text-[12px] font-[300] leading-loose mb-14 tracking-[0.2em] uppercase font-serif">
          <p>LOS VALORES SE EXPRESAN EN USD (DÓLARES ESTADOUNIDENSES).</p>
          {planDetails && <div className="py-6 mb-8 border-y border-black/10 font-serif">{planDetails}</div>}
          <p>REGIÓN DETECTADA: NODO SAN PABLO.</p>
        </div>
        <button onClick={closeHandler} className="w-full py-6 bg-black text-white text-[11px] font-[300] uppercase tracking-[0.5em] rounded-none font-serif">CONFIRMAR PROTOCOLO</button>
      </div>
    </div>
  );
}
