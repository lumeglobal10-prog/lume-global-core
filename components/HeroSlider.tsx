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

  // ASSETS SINCRONIZADOS: Cocina en Obra vs Cocina de Lujo
  // Estas imágenes son del mismo set fotográfico.
  const imgBefore = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"; 
  const imgAfter = "https://images.unsplash.com/photo-1556911223-e20036323f9b?q=80&w=2070&auto=format&fit=crop";

  return (
    <div 
      className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden rounded-[16px] shadow-2xl touch-none select-none bg-neutral-900 border border-white/5"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: EL RENDER FINAL (FONDO) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgAfter})` }}
      />

      {/* CAPA ANTES: LA OBRA (MÁSCARA DINÁMICA) */}
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

      {/* DIVISOR LUME CON MAPAMUNDI 🌍 */}
      <div className="absolute inset-y-0 z-20 pointer-events-none flex items-center justify-center" style={{ left: `${sliderPos}%` }}>
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
        <div className="w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border border-neutral-200">
          <span className="text-xl">🌍</span>
        </div>
      </div>

      {/* ETIQUETAS DE ESTADO */}
      <div className="absolute bottom-6 left-6 z-30 font-mono text-[7px] tracking-[0.4em] text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded uppercase">
        Materia Prima
      </div>
      <div className="absolute bottom-6 right-6 z-30 font-mono text-[7px] tracking-[0.4em] text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded uppercase">
        Lume Core
      </div>
    </div>
  );
}
