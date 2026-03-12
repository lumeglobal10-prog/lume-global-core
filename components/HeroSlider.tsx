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

  return (
    <div 
      className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl touch-none select-none bg-white"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: BLANCO TOTAL */}
      <div className="absolute inset-0 bg-white" />

      {/* CAPA ANTES: BLANCO TOTAL CON BORDE DE SEPARACIÓN */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden bg-white"
        style={{ 
          width: `${sliderPos}%`, 
          borderRight: '1px solid rgba(0,0,0,0.1)' 
        }}
      />

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
