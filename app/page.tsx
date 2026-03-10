import React, { useState } from 'react';
import { Eye, ChevronRight, Globe } from 'lucide-react';

export default function LumePure() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : (e as React.MouseEvent).clientX - rect.left;
    setSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000', minHeight: '100vh', fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column' }}>
      
      {/* 1. NAVEGACIÓN: SIMPLICIDAD Y EFICIENCIA */}
      <nav style={{ padding: '40px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ letterSpacing: '12px', fontSize: '1.4rem', fontWeight: '800', margin: 0 }}>LUME</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.3 }}>
            <Globe size={14} />
            <span style={{ fontSize: '0.6rem', letterSpacing: '2px', fontWeight: '600' }}>LGC: LONDON_NODE</span>
          </div>
          <button style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '12px 28px', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1px', cursor: 'pointer' }}>
            ACCESO SUSCRIPTORES
          </button>
        </div>
      </nav>

      {/* 2. COMPONENTE CENTRAL: EL TESTIGO DE CALIDAD (SLIDER 8K) */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 20px 80px 20px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '200', letterSpacing: '-2px', marginBottom: '10px' }}>Precisión Visual de Grado Forense.</h2>
          <p style={{ color: '#999', letterSpacing: '4px', fontSize: '0.65rem', textTransform: 'uppercase' }}>Potencia IA servida por Lume Global Core</p>
        </div>

        {/* SLIDER INTERACTIVO */}
        <div 
          style={{ position: 'relative', width: '100%', maxWidth: '1050px', height: '580px', backgroundColor: '#fdfdfd', overflow: 'hidden', cursor: 'col-resize', boxShadow: '0 30px 80px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* IMAGEN DESPUÉS (Optimización 8K) */}
          <div style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop")', 
            backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%', position: 'absolute' 
          }} />
          
          {/* IMAGEN ANTES (Raw / Sin Procesar) */}
          <div style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop&sat=-100&blur=50")', 
            backgroundSize: 'cover', backgroundPosition: 'center', width: `${sliderPos}%`, height: '100%', position: 'absolute', zIndex: 2, borderRight: '2px solid #fff'
          }} />

          {/* CONTROLADOR MINIMALISTA */}
          <div style={{ position: 'absolute', left: `${sliderPos}%`, top: '50%', transform: 'translate(-50%, -50%)', zIndex: 3, backgroundColor: '#fff', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 20px rgba(0,0,0,0.15)' }}>
            <Eye size={18} />
          </div>
        </div>

        <button style={{ marginTop: '60px', backgroundColor: 'transparent', border: '1px solid #000', color: '#000', padding: '16px 40px', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
          SOLICITAR AUDITORÍA <ChevronRight size={16} />
        </button>
      </main>

      {/* 3. BLINDAJE LEGAL Y CONVERSION */}
      <footer style={{ padding: '50px 60px', borderTop: '1px solid #f5f5f5', display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', color: '#bbb', letterSpacing: '1px' }}>
        <div>
          Lume es un producto operado por <span style={{ color: '#000', fontWeight: '700' }}>Lume Global Core.</span>
        </div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <span>TÉRMINOS DE SERVICIO</span>
          <span>POLÍTICA DE PRIVACIDAD</span>
          <span>POLÍTICA DE REEMBOLSO</span>
        </div>
        <div style={{ fontWeight: '600', color: '#888' }}>
          LUME REAL ESTATE LLC © 2026
        </div>
      </footer>
    </div>
  );
}
