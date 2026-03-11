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

  const imgUrl = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop";

  return (
    <div 
      className="relative w-full aspect-[3/4] md:aspect-video overflow-hidden rounded-[16px] shadow-2xl touch-none select-none bg-neutral-200"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS (COLOR) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />

      {/* CAPA ANTES (GRIS) - MÉTODO DE RECORTES SEGURO */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{ 
          backgroundImage: `url(${imgUrl})`,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)` 
        }}
      />

      {/* DIVISOR Y LOGO */}
      <div className="absolute inset-y-0 z-10" style={{ left: `${sliderPos}%` }}>
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-lg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-2xl flex items-center justify-center border border-neutral-100">
          <span className="text-lg">🌍</span>
        </div>
      </div>
    </div>
  );
}
