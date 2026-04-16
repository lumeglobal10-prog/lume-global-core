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

  // 🖼️ RECTIFICACIÓN DE ASSETS: RUTAS SEGÚN BLUEPRINT (PUBLIC/ASSETS)
  const imgBefore = "/obra.jpg"; 
  const imgAfter = "/render.jpg";

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-[32px] shadow-2xl touch-none select-none bg-neutral-100 border border-black/5 cursor-col-resize group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: RENDER (FONDO) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[0.2] transition-all duration-700"
        style={{ backgroundImage: `url('${imgAfter}')` }}
      />

      {/* CAPA ANTES: OBRA (RECORTE) */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ width: `${sliderPos}%`, borderRight: '1px solid rgba(255,255,255,0.5)' }}
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

      {/* CONTROLADOR DE PRECISIÓN LUME */}
      <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `calc(${sliderPos}% - 20px)` }}>
        <div className="flex h-full items-center justify-center">
            <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(0,0,0,0.15)] flex items-center justify-center border border-black/5 transition-transform group-hover:scale-110">
                <span className="text-xl">🌎</span>
            </div>
        </div>
      </div>

      {/* ETIQUETAS DE ESTADO (M.I.C. OPTIONAL) */}
      <div className="absolute bottom-6 left-6 z-30 px-4 py-1.5 bg-black/20 backdrop-blur-md rounded-full border border-white/10">
          <span className="text-[8px] font-black text-white tracking-[0.3em] uppercase">ORIGINAL</span>
      </div>
      <div className="absolute bottom-6 right-6 z-30 px-4 py-1.5 bg-black/20 backdrop-blur-md rounded-full border border-white/10">
          <span className="text-[8px] font-black text-white tracking-[0.3em] uppercase italic">LUME_RENDER</span>
      </div>
    </div>
  );
}
