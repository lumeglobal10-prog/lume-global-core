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
  
  // CAPA ANTES: Tu foto de obra real (Materia Prima)
  const imgBefore = "https://github.com/lumeglobalcore/lume-global-core/blob/main/public/obra.jpg?raw=true";
  
  // CAPA DESPUÉS: Render final de lujo generado por IA para el mismo ángulo (Lume Core)
  const imgAfter = "https://github.com/lumeglobalcore/lume-global-core/blob/main/public/render.jpg?raw=true";

  return (
    <div 
      className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden rounded-[16px] shadow-2xl touch-none select-none bg-neutral-200 border border-neutral-100"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: EL RENDER FINAL (FONDO) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgAfter})` }}
      />

      {/* CAPA ANTES: LA OBRA (MÁSCARA DINÁMICA INDESTRUCTIBLE) */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ 
          width: `${sliderPos}%`,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)` // Mantenemos clipPath para robustez mobile
        }}
      />

      {/* NODO DE CONTROL: MAPAMUNDI 🌍 */}
      <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `${sliderPos}%` }}>
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border border-neutral-100">
          <span className="text-xl">🌍</span>
        </div>
      </div>

      {/* ETIQUETAS DE ESTADO */}
      <div className="absolute bottom-4 left-4 z-30 font-mono text-[7px] tracking-[0.3em] text-white bg-black/40 backdrop-blur-md px-2 py-1 rounded uppercase">
        Materia Prima
      </div>
      <div className="absolute bottom-4 right-4 z-30 font-mono text-[7px] tracking-[0.3em] text-white bg-black/40 backdrop-blur-md px-2 py-1 rounded uppercase">
        Lume Core
      </div>
    </div>
  );
}
