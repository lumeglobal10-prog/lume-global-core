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

  // 🖼️ ASSETS SEGÚN BLUEPRINT LUME
  const imgBefore = "/obra.jpg"; 
  const imgAfter = "/render.jpg";

  return (
    <div 
      ref={containerRef}
      // 📐 RECTIFICACIÓN: BORDES RECTOS (rounded-none), SIN SOMBRAS (shadow-none)
      className="relative w-full aspect-video overflow-hidden rounded-none shadow-none touch-none select-none bg-[#FFFFFF] border border-black cursor-col-resize group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: RENDER (FONDO) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url('${imgAfter}')` }}
      />

      {/* CAPA ANTES: OBRA (RECORTE) */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ width: `${sliderPos}%`, borderRight: '1px solid #000000' }}
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

      {/* CONTROLADOR DE PRECISIÓN: ESTÉTICA RECTA LUME */}
      <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `calc(${sliderPos}% - 1px)` }}>
        <div className="flex h-full items-center justify-center">
            {/* MANIJA RECTA Y NEGRA */}
            <div className="w-[2px] h-full bg-black shadow-none transition-transform"></div>
        </div>
      </div>

      {/* ETIQUETAS DE ESTADO: MAYÚSCULAS MANDATORIAS Y BORDES RECTOS */}
      <div className="absolute bottom-6 left-6 z-30 px-6 py-2 bg-black text-white rounded-none border-none">
          <span className="text-[9px] font-black tracking-[0.5em] uppercase">ORIGINAL</span>
      </div>
      <div className="absolute bottom-6 right-6 z-30 px-6 py-2 bg-white text-black border border-black rounded-none">
          <span className="text-[9px] font-black tracking-[0.5em] uppercase">LUME_RENDER</span>
      </div>
    </div>
  );
}
