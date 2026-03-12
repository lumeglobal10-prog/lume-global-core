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

  // Apuntamos a los nombres reales que aparecen en tu repositorio
  const imgBefore = "/obra.jpg.jpg"; 
  const imgAfter = "/render.jpg.jpg";

  return (
    <div 
      className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl touch-none select-none bg-neutral-800 border border-white/10"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: RENDER (FONDO) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${imgAfter}')` }}
      />

      {/* CAPA ANTES: OBRA (MÁSCARA DINÁMICA) */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ width: `${sliderPos}%`, borderRight: '2px solid white' }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('${imgBefore}')`,
            // Aseguramos que la imagen de arriba no se mueva al desplazar el slider
            width: '100vw',
            maxWidth: '1024px', // Este valor debe ser igual al max-w del contenedor padre
            height: '100%',
            backgroundSize: 'cover'
          }}
        />
      </div>

      {/* MANIJA DEL SLIDER 🌍 */}
      <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `calc(${sliderPos}% - 20px)` }}>
        <div className="flex h-full items-center justify-center">
            <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-black/10">
                <span className="text-xl select-none">🌍</span>
            </div>
        </div>
      </div>
    </div>
  );
}
