'use client';

import React, { useState, useCallback } from 'react';

export default function HeroSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX) - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  }, []);

  // Assets de alta fidelidad
  const imgAfter = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop";
  const imgBefore = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&sat=-100";

  return (
    <div 
      className="relative w-full overflow-hidden rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-neutral-200 select-none touch-none aspect-[4/5] md:aspect-video"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS (Render final) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgAfter})` }}
      />

      {/* CAPA ANTES (Materia Prima - Revelada por el Slider) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${imgBefore})`,
          width: `${sliderPos}%`,
        }}
      />

      {/* LÍNEA DIVISORA Y LOGO MAPAMUNDI */}
      <div 
        className="absolute inset-y-0 z-20 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Línea blanca física */}
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
        
        {/* Nodo de Control: Mapamundi */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.2)] flex items-center justify-center border border-neutral-100">
          <span className="text-xl">🌍</span>
        </div>
      </div>

      {/* ETIQUETAS TÉCNICAS */}
      <div className="absolute bottom-6 left-6 z-30 font-mono text-[8px] tracking-[0.3em] text-white uppercase bg-black/30 backdrop-blur-md px-3 py-1 rounded-full">
        Materia Prima
      </div>
      <div className="absolute bottom-6 right-6 z-30 font-mono text-[8px] tracking-[0.3em] text-white uppercase bg-black/30 backdrop-blur-md px-3 py-1 rounded-full">
        Lume Render
      </div>
    </div>
  );
                                       }
      
