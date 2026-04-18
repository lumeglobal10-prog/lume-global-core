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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-none animate-none">
      {/* 📐 RECTIFICACIÓN: BORDES RECTOS, CERO SOMBRAS, FONDO BLANCO PURO */}
      <div className="bg-[#FFFFFF] border border-black p-10 max-w-sm w-full mx-4 text-center rounded-none shadow-none">
        
        {/* CABECERA ESTILO LUME: MAYÚSCULAS MANDATORIAS */}
        <h3 className="text-black text-[10px] font-black tracking-[0.5em] uppercase mb-8">
          AVISO DE SISTEMA
        </h3>
        
        {/* CUERPO DE TEXTO: ESTILO RECTO LUME */}
        <p className="text-black text-[10px] font-bold leading-relaxed mb-10 tracking-[0.2em] uppercase">
          LOS VALORES SE EXPRESAN EN <span className="underline decoration-1 underline-offset-4">USD (DÓLARES ESTADOUNIDENSES)</span>. 
          <br /><br />
          DEPENDIENDO DE SU UBICACIÓN, PUEDEN APLICAR IMPUESTOS LOCALES ADICIONALES SEGÚN LA NORMATIVA DEL NODO SAN PABLO.
        </p>

        {/* BOTÓN DE CIERRE: ESTÉTICA RECTA Y MAYÚSCULAS */}
        <button 
          onClick={closeHandler}
          className="w-full py-5 bg-black text-white text-[9px] font-black uppercase tracking-[0.5em] hover:bg-black transition-none rounded-none"
        >
          ENTENDIDO
        </button>
      </div>
      
      {/* POP-UP INFORMATIVO (REQUERIMIENTO 4) */}
      <div className="fixed bottom-6 right-6 bg-black text-white p-4 text-[8px] font-black tracking-[0.3em] uppercase">
        PROSPECTO CAPTURADO: VALIDANDO IDENTIDAD CORPORATIVA
      </div>
    </div>
  );
}
