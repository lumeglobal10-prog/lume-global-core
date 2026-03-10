'use client';

import React, { useState } from 'react';
import { Eye, ChevronRight, Globe } from 'lucide-react';

export default function LumePure() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    setSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000', minHeight: '100vh', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column' }}>
      
      {/* NAVEGACIÓN - LUME PURE */}
      <nav style={{ padding: '30px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0f0f0' }}>
        <h1 style={{ letterSpacing: '10px', fontSize: '1.2rem', fontWeight: '800', margin: 0 }}>LUME</h1>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.3 }}>
            <Globe size={14} />
            <span style={{ fontSize: '0.6rem', letterSpacing: '1px' }}>LGC: LONDON</span>
          </div>
          <button style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '10px 20px', fontSize: '0.7rem', fontWeight: '700', cursor: 'pointer' }}>
            ACCESO SUSCRIPTORES
          </button>
        </div>
      </nav>

      {/* TESTIGO DE CALIDAD */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '200', letterSpacing: '-1px', margin: '0 0 10px 0' }}>Resultados, no promesas.</h2>
          <p style={{ color: '#999', letterSpacing: '3px', fontSize: '0.6rem', textTransform: 'uppercase' }}>Precisión Visual de Grado Forense</p>
        </div>

        <div 
          style={{ position: 'relative', width: '100%', maxWidth: '1000px', height: '500px', backgroundColor: '#f5f5f5', overflow: 'hidden', cursor: 'col-resize', border: '1px solid #eee' }}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%', position: 'absolute' }} />
          <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop&sat=-100")', backgroundSize: 'cover', backgroundPosition: 'center', width: `${sliderPos}%`, height: '100%', position: 'absolute', zIndex: 2, borderRight: '2px solid #fff' }} />
          <div style={{ position: 'absolute', left: `${sliderPos}%`, top: '50%', transform: 'translate(-50%, -50%)', zIndex: 3, backgroundColor: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
            <Eye size={18} />
          </div>
        </div>

        <button style={{ marginTop: '50px', backgroundColor: 'transparent', border: '1px solid #000', color: '#000', padding: '14px 35px', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '2px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          SOLICITAR AUDITORÍA <ChevronRight size={14} />
        </button>
      </main>

      {/* FOOTER LEGAL */}
      <footer style={{ padding: '40px 50px', borderTop: '1px solid #f5f5f5', display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', color: '#bbb' }}>
        <div>Lume es un producto operado por <span style={{ color: '#000', fontWeight: '700' }}>Lume Global Core.</span></div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>TÉRMINOS</span>
          <span>PRIVACIDAD</span>
        </div>
        <div style={{ fontWeight: '600' }}>LUME REAL ESTATE LLC © 2026</div>
      </footer>
    </div>
  );
}
