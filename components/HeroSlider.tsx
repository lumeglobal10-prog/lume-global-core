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

  // --- ASSETS SINCRONIZADOS (MISMA GEOMETRÍA, DISTINTA FASE) ---
  const imgBefore = "https://raw.githubusercontent.com/Lume-Global/assets/main/kitchen_construction_raw.jpg";
  const imgAfter = "https://raw.githubusercontent.com/Lume-Global/assets/main/kitchen_luxury_final.jpg";

  // FIX DE EMERGENCIA: Si las URLs fallan, usamos placeholders de alta precisión para testear la lógica
  const beforePlaceholder = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"; 
  const afterPlaceholder = "https://images.unsplash.com/photo-1556911223-e20036323f9b?q=80&w=2070&auto=format&fit=crop";

  return (
    <div 
      className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden rounded-[16px] shadow-2xl touch-none select-none bg-neutral-200 border border-neutral-100"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: EL LUJO (FONDO) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgAfter}), url(${afterPlaceholder})` }}
      />

      {/* CAPA ANTES: LA OBRA (MÁSCARA DINÁMICA) */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${imgBefore}), url(${beforePlaceholder})`,
            width: `${100 * (100 / (sliderPos || 1))}%`, // Compensa el estiramiento del contenedor
            minWidth: '100vw'
          }}
        />
      </div>

      {/* NODO DE CONTROL: MAPAMUNDI 🌍 */}
      <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `${sliderPos}%` }}>
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border border-neutral-100">
          <span className="text-xl">🌍</span>
        </div>
      </div>
    </div>
  );
}
