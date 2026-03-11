"use client";
import React, { useState } from 'react';

export default function HeroSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      className="relative w-full h-[70vh] overflow-hidden cursor-ew-resize select-none bg-white rounded-xl shadow-2xl border border-zinc-100"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA BASE: OBRA (B&W) */}
      <div className="absolute inset-0 grayscale contrast-125 brightness-75">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=2000" 
          alt="Obra" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* CAPA SUPERIOR: RENDER LUJO (COLOR) */}
      <div 
        className="absolute inset-0 border-r border-white/20 transition-all duration-75"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000" 
          alt="Lujo" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* LÍNEA Y LOGO DEL MUNDO 🌎 */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white/50 z-20 flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-xl border border-zinc-200 pointer-events-auto">
          🌎
        </div>
      </div>
    </div>
  );
}
