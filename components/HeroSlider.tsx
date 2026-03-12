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

  // --- NUEVOS ASSETS: COCINA DE ALTA FIDELIDAD ---
  
  // CAPA ANTES: Obra bruta, cemento expuesto, sucia, sin muebles (The Raw)
  const imgBefore = "https://images.unsplash.com/photo-1622396636133-ba43f812bc35?q=80&w=2070&auto=format&fit=crop";

  // CAPA DESPUÉS: El MISMO ángulo, terminada, lujo, mobiliario premium (The Core)
  const imgAfter = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop";

  return (
    <div 
      className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden rounded-[16px] shadow-2xl touch-none select-none bg-neutral-200 border border-neutral-200"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA FONDO: RENDER FINAL (Siempre atrás) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgAfter})` }}
      />

      {/* CAPA FRENTE: OBRA (Se recorta con clipPath) */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{ 
          backgroundImage: `url(${imgBefore})`,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)` 
        }}
      />

      {/* DIVISOR Y NODO CENTRAL 🌍 */}
      <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `${sliderPos}%` }}>
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border border-neutral-100 cursor-ew-resize">
          <span className="text-xl">🌍</span>
        </div>
      </div>
    </div>
  );
}
