'use client';
import React, { useState, useCallback } from 'react';

// Aquí pegaremos las cadenas de código en el Bloque 2
const OBRA_DATA = "URL_DE_OBRA_AQUI";
const RENDER_DATA = "URL_DE_RENDER_AQUI";

export default function HeroSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX) - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  }, []);

  return (
    <div 
      className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden rounded-[16px] shadow-2xl touch-none select-none bg-neutral-900 border border-white/5"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: RENDER (FONDO) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${RENDER_DATA})` }}
      />

      {/* CAPA ANTES: OBRA (VENTANA DESLIZANTE) */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${OBRA_DATA})`,
            width: `${100 * (100 / (sliderPos || 1))}%`,
            minWidth: '100vw'
          }}
        />
      </div>

      {/* DIVISOR Y LOGO MAPAMUNDI 🌍 */}
      <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `${sliderPos}%` }}>
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border border-neutral-200">
          <span className="text-xl">🌍</span>
        </div>
      </div>
    </div>
  );
}
