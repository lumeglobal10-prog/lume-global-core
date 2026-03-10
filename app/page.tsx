import React, { useState } from 'react';
import { ChevronRight, Eye, ShieldCheck, Globe } from 'lucide-react';

export default function LumePureMain() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e 
      ? e.touches[0].clientX - rect.left 
      : (e as React.MouseEvent).clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#000', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', display: 'flex', flexDirection: 'column' }}>
      
      {/* NAVEGACIÓN DE ALTA GAMA */}
      <nav style={{ padding: '40px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ letterSpacing: '8px', fontSize: '1.4rem', fontWeight: '700' }}>LUME</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.5 }}>
            <Globe size={14} color="#000" />
            <span style={{ fontSize: '0.65rem', letterSpacing: '2px' }}>NODE: LONDON LGC</span>
          </div>
          <button style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '12px 30px', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '1px', cursor: 'pointer', borderRadius: '2px' }}>
            ACCESO SUSCRIPTORES
          </button>
        </div>
      </nav>

      {/* CUERPO CENTRAL: TESTIGO DE CALIDAD */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: '900px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '200', letterSpacing: '-2px', marginBottom: '20px', lineHeight: 1.1 }}>
            La imagen es el activo. <br/> <span style={{fontWeight: '500'}}>Lume es la precisión.</span>
          </h2>
          <p style={{ color: '#888', letterSpacing: '3px', fontSize: '0.7rem', textTransform: 'uppercase' }}>IA de Grado Forense para Real Estate Global</p>
        </div>

        {/* CONTENEDOR SLIDER 8K (S.I.D. OPTIMIZED) */}
        <div 
          style={{ position: 'relative', width: '100%', maxWidth: '1100px', height: '600px', backgroundColor: '#f9f9f9', overflow: 'hidden', cursor: 'col-resize', boxShadow: '0 40px 100px rgba(0,0,0,0.08)' }}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* Capa DESPUÉS (Full Qualiy) */}
          <div style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop")', 
            backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%', position: 'absolute' 
          }} />
          
          {/* Capa ANTES (Desaturada/Original) */}
          <div style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&sat=-100")', 
            backgroundSize: 'cover', backgroundPosition: 'center', width: `${sliderPos}%`, height: '100%', position: 'absolute', zIndex: 2, borderRight: '2px solid #fff'
          }} />

          {/* Icono de Interacción */}
          <div style={{ position: 'absolute', left: `${sliderPos}%`, top: '50%', transform: 'translate(-50%, -50%)', zIndex: 3, backgroundColor: '#fff', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 30px rgba(0,0,0,0.3)' }}>
            <Eye size={20} color="#000" />
          </div>
        </div>

        {/* CONVERSION & TRUST */}
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '30px', letterSpacing: '1px' }}>Certificado por el protocolo Aegis de Lume Global.</p>
          <button style={{ backgroundColor: '#fff', color: '#000', border: '2px solid #000', padding: '15px 45px', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '2px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            SOLICITAR AUDITORÍA VISUAL <ChevronRight size={18} />
          </button>
        </div>
      </main>

      {/* FOOTER: BLINDAJE LEGAL LGC */}
      <footer style={{ backgroundColor: '#fafafa', padding: '60px', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem', color: '#999', letterSpacing: '1px' }}>
          <div>
            Lume es un producto operado por <span style={{ color: '#000', fontWeight: '700' }}>Lume Global Core.</span>
          </div>
          <div style={{ display: 'flex', gap: '30px' }}>
            <span style={{ cursor: 'pointer' }}>TÉRMINOS</span>
            <span style={{ cursor: 'pointer' }}>PRIVACIDAD</span>
            <span style={{ cursor: 'pointer' }}>REEMBOLSOS</span>
          </div>
          <div style={{ fontWeight: '600', color: '#000' }}>LUME REAL ESTATE LLC | 2026</div>
        </div>
      </footer>
    </div>
  );
}
