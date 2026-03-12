'use client';
import React, { useState, useCallback, useRef, useEffect } from 'react';

export default function HeroSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent | any) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  }, []);

  const imgBefore = "/obra.jpg.jpg"; 
  const imgAfter = "/render.jpg.jpg";

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-lg shadow-xl touch-none select-none bg-neutral-100 border border-neutral-200"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* CAPA DESPUÉS: RENDER (FONDO) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${imgAfter}')` }}
      />

      {/* CAPA ANTES: OBRA (RECORTE) */}
      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ width: `${sliderPos}%`, borderRight: '1px solid white' }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('${imgBefore}')`,
            width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw',
            height: '100%'
          }}
        />
      </div>

      {/* MANIJA 🌍 */}
      <div className="absolute inset-y-0 z-20 pointer-events-none" style={{ left: `calc(${sliderPos}% - 16px)` }}>
        <div className="flex h-full items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border border-neutral-300">
                <span className="text-lg">🌍</span>
            </div>
        </div>
      </div>
    </div>
  );
      }
