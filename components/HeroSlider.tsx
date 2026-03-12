'use client';
import React, { useState, useCallback } from 'react';

// INSTRUCCIÓN: Pegar aquí el código Base64 generado en resolución 1920x1080 (Calidad 60%)
const OBRA_DATA = "PEGA_AQUI_LA_CADENA_OBRA";
const RENDER_DATA = "PEGA_AQUI_LA_CADENA_RENDER";

export default function HeroSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  }, []);

  return (
    <div 
      className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl touch-none select-none bg-neutral-900 border border-white/10"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: RENDER (FONDO) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${RENDER_DATA})` }}
      />

      {/* CAPA ANTES: OBRA (RECORTADA) */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ width: `${sliderPos}%`, borderRight: '2px solid white' }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${OBRA_DATA})`,
            width: `${100 * (100 / (sliderPos || 1))}%`,
            height: '100%'
          }}
        />
      </div>

      {/* MANIJA DEL SLIDER 🌍 */}
      <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `calc(${sliderPos}% - 20px)` }}>
        <div className="flex h-full items-center justify-center">
            <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-black/10">
                <span className="text-xl">🌍</span>
            </div>
        </div>
      </div>
    </div>
  );
}
