'use client';
import React, { useState, useEffect } from 'react';

interface PopupProps {
  trigger: string; // ID del trigger enviado desde el servidor
  onClose: () => void;
}

export default function SmartPopup({ trigger, onClose }: PopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [geoData, setGeoData] = useState('');

  useEffect(() => {
    // 1. Verificar persistencia local (24hs)
    const lastSeen = localStorage.getItem(`lume_popup_${trigger}`);
    const now = Date.now();
    
    if (lastSeen && now - parseInt(lastSeen) < 86400000) return;

    // 2. Detectar Geo desde la cabecera (inyectada por el middleware)
    // En una app real, esto se puede pasar via props o fetch inicial
    setIsVisible(true);
  }, [trigger]);

  const closeHandler = () => {
    localStorage.setItem(`lume_popup_${trigger}`, Date.now().toString());
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-2xl max-w-sm w-full shadow-2xl mx-4">
        <h3 className="text-white text-[11px] font-bold tracking-[0.3em] uppercase mb-4">Aviso de Sistema</h3>
        <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
          Los valores se expresan en <span className="text-white font-medium">USD (Dólares Estadounidenses)</span>. 
          Dependiendo de su ubicación, pueden aplicar impuestos locales adicionales.
        </p>
        <button 
          onClick={closeHandler}
          className="w-full py-3 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all rounded"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
