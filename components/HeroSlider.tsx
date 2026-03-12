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

  // ASSETS DE CONTRASTE: OBRA VS RENDER FINAL
  const imgBefore = "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"; // Obra/Construcción
  const imgAfter = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop";  // Render Final

  return (
    <div 
      className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden rounded-[16px] shadow-2xl touch-none select-none bg-neutral-100 border border-neutral-200"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: EL RENDER FINAL */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgAfter})` }}
      />

      {/* CAPA ANTES: LA OBRA (CON RECORTE) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${imgBefore})`,
            width: `${10000 / sliderPos}%` 
          }}
        />
      </div>

      {/* DIVISOR TÉCNICO Y NODO CENTRAL */}
      <div className="absolute inset-y-0 z-10" style={{ left: `${sliderPos}%` }}>
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white/80 shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-2xl flex items-center justify-center border border-neutral-100 cursor-ew-resize active:scale-110 transition-transform">
          <span className="text-xl">🌍</span>
        </div>
      </div>

      {/* INDICADORES DE FASE */}
      <div className="absolute bottom-4 left-4 z-20 font-mono text-[7px] tracking-[0.3em] text-white bg-black/40 backdrop-blur-md px-2 py-1 rounded">MATERIA PRIMA</div>
      <div className="absolute bottom-4 right-4 z-20 font-mono text-[7px] tracking-[0.3em] text-white bg-black/40 backdrop-blur-md px-2 py-1 rounded">LUME RENDER</div>
    </div>
  );
}
