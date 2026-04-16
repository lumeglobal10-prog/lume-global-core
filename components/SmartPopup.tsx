'use client';
import React, { useState, useEffect } from 'react';

interface PopupProps {
  trigger: string; // ID del trigger enviado desde el servidor
  onClose: () => void;
}

export default function SmartPopup({ trigger, onClose }: PopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. VERIFICAR PERSISTENCIA LOCAL (24HS)
    const lastSeen = localStorage.getItem(`lume_popup_${trigger}`);
    const now = Date.now();
    
    // LITERALIDAD: Si fue visto en las últimas 24hs, no se activa el trigger.
    if (lastSeen && now - parseInt(lastSeen) < 86400000) return;

    // 2. ACTIVACIÓN DE INTERFAZ
    setIsVisible(true);
  }, [trigger]);

  const closeHandler = () => {
    localStorage.setItem(`lume_popup_${trigger}`, Date.now().toString());
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/5 backdrop-blur-md animate-in fade-in duration-500">
      <div className="bg-white border border-black/5 p-10 rounded-[32px] max-w-sm w-full shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] mx-4 text-center">
        {/* CABECERA ESTILO LUME */}
        <h3 className="text-black text-[10px] font-black tracking-[0.4em] uppercase mb-6 italic">
          AVISO DE SISTEMA
        </h3>
        
        {/* CUERPO DE TEXTO: ESTILO KARADA DECO (SERIF PARA ÉNFASIS) */}
        <p className="text-neutral-500 text-[11px] font-medium leading-relaxed mb-8 tracking-[0.1em] uppercase">
          Los valores se expresan en <span className="text-black font-bold font-serif italic normal-case tracking-normal text-sm">USD (Dólares Estadounidenses)</span>. 
          <br /><br />
          Dependiendo de su ubicación, pueden aplicar impuestos locales adicionales según la normativa del Nodo San Pablo.
        </p>

        {/* BOTÓN DE CIERRE MINIMALISTA */}
        <button 
          onClick={closeHandler}
          className="w-full py-4 bg-black text-white text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-800 transition-all rounded-2xl shadow-lg active:scale-95"
        >
          ENTENDIDO
        </button>
      </div>
    </div>
  );
}
