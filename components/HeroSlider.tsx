'use client';
import React, { useState, useCallback, useRef } from 'react';

export default function HeroSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent | any) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  }, []);

  // 🖼️ ASSETS SEGÚN BLUEPRINT LUME: NOMENCLATURA INMUTABLE
  const imgBefore = "/obra.jpg"; 
  const imgAfter = "/render.jpg";

  return (
    <div 
      ref={containerRef}
      // 📐 RECTIFICACIÓN V5.2: VIEWPORT ADAPTIVE / CERO SOMBRAS / CERO CURVAS
      className="relative w-full aspect-video overflow-hidden rounded-none shadow-none touch-none select-none bg-[#FFFFFF] border border-black cursor-col-resize"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: RENDER (FONDO) - TRANSITION: NONE MANDATORIO */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-none"
        style={{ backgroundImage: `url('${imgAfter}')` }}
      />

      {/* CAPA ANTES: OBRA (RECORTE) */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('${imgBefore}')`,
            width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw',
            height: '100%'
          }}
        />
      </div>

      {/* CONTROLADOR DE PRECISIÓN: ESTÉTICA RECTA LUME (HANDSHAKE VISUAL) */}
      <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `${sliderPos}%` }}>
        <div className="flex h-full items-center justify-center">
            <div className="w-[1px] h-full bg-black shadow-none opacity-50"></div>
        </div>
      </div>

      {/* 🏛️ REQUERIMIENTO 6: POLÍTICA DE BRANDING (MARCA DE AGUA - MODO PROMO) */}
      <div className="absolute bottom-6 right-6 z-40 pointer-events-none opacity-20">
        <span className="text-[10px] font-[400] tracking-[0.8em] uppercase font-serif text-black">
          LUME 🌎
        </span>
      </div>

      {/* ETIQUETAS DE ESTADO: MAYÚSCULAS MANDATORIAS Y PLAYFAIR DISPLAY 300 */}
      <div className="absolute top-6 left-6 z-30 px-6 py-2 bg-black text-white rounded-none border-none">
          <span className="text-[9px] font-[300] tracking-[0.5em] uppercase font-serif">ORIGINAL</span>
      </div>
      <div className="absolute top-6 right-6 z-30 px-6 py-2 bg-white text-black border border-black rounded-none">
          <span className="text-[9px] font-[300] tracking-[0.5em] uppercase font-serif">LUME_CORE_ENGINE</span>
      </div>
    </div>
  );
}
