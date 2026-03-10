import React from 'react';
import { Shield, Globe, Activity } from 'lucide-react';

export default function LumeLanding() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      
      {/* Logo Central */}
      <div style={{ border: '1px solid #333', padding: '40px', borderRadius: '2px', textAlign: 'center', backgroundColor: '#050505' }}>
        <h1 style={{ letterSpacing: '12px', fontSize: '2.5rem', margin: '0 0 10px 0', fontWeight: '300' }}>LUME</h1>
        <p style={{ letterSpacing: '4px', color: '#666', fontSize: '0.7rem', textTransform: 'uppercase' }}>Global Real Estate AI</p>
      </div>

      {/* Indicadores de Estado */}
      <div style={{ display: 'flex', gap: '30px', marginTop: '50px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Activity size={14} color="#00ff00" />
          <span style={{ fontSize: '0.65rem', color: '#888', letterSpacing: '1px' }}>CORE: ACTIVE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Shield size={14} color="#00ff00" />
          <span style={{ fontSize: '0.65rem', color: '#888', letterSpacing: '1px' }}>AEGIS: SECURE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Globe size={14} color="#00ff00" />
          <span style={{ fontSize: '0.65rem', color: '#888', letterSpacing: '1px' }}>NODE: LONDON</span>
        </div>
      </div>

      {/* Footer Ejecutivo */}
      <div style={{ position: 'absolute', bottom: '30px', fontSize: '0.6rem', color: '#333', letterSpacing: '2px' }}>
        PROPIEDAD DE LUME REAL ESTATE LLC © 2026
      </div>
    </div>
  );
}
