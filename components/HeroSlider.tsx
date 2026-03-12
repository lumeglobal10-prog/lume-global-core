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

  // Nota: Next.js busca automáticamente en la carpeta /public
  const imgBefore = "/obra.jpg"; 
  const imgAfter = "/render.jpg";

  return (
    <div 
      className="relative w-full aspect-[4/3] md:aspect-video overflow-hidden rounded-xl shadow-2xl touch-none select-none bg-neutral-800"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: RENDER FINAL (FONDO) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgAfter})` }}
      />

      {/* CAPA ANTES: OBRA (MÁSCARA) */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${imgBefore})`,
            width: `${100 * (100 / (sliderPos || 1))}%`,
            minWidth: '100vw'
          }}
        />
      </div>

      {/* CONTROL DESLIZANTE 🌍 */}
      <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `${sliderPos}%` }}>
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border border-neutral-200">
          <span className="text-xl">🌍</span>
        </div>
      </div>

      {/* ETIQUETAS */}
      <div className="absolute bottom-4 left-4 z-30 font-mono text-[8px] tracking-widest text-white bg-black/50 px-2 py-1 rounded uppercase">
        Materia Prima
      </div>
      <div className="absolute bottom-4 right-4 z-30 font-mono text-[8px] tracking-widest text-white bg-black/50 px-2 py-1 rounded uppercase">
        Lume Core
      </div>
    </div>
  );
}
