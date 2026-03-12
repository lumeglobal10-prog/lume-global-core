'use client';
import React, { useState, useCallback } from 'react';

export default function HeroSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  }, []);

  // Referencias a los archivos físicos en /public
  const imgBefore = "/obra.jpg"; 
  const imgAfter = "/render.jpg";

  return (
    <div 
      className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl touch-none select-none bg-neutral-100"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: RENDER FINAL (FONDO) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgAfter})` }}
      />

      {/* CAPA ANTES: LA OBRA (MÁSCARA) */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ width: `${sliderPos}%`, borderRight: '1px solid rgba(255,255,255,0.5)' }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${imgBefore})`,
            width: `${100 * (100 / (sliderPos || 1))}%`,
            height: '100%'
          }}
        />
      </div>

      {/* MANIJA DEL SLIDER 🌍 */}
      <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `calc(${sliderPos}% - 20px)` }}>
        <div className="flex h-full items-center justify-center">
            <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border border-neutral-300">
                <span className="text-xl select-none">🌍</span>
            </div>
        </div>
      </div>
    </div>
  );
}
