import React from 'react';
import { Shield, Globe, Activity, ChevronRight, Zap, Target, BarChart3 } from 'lucide-react';

export default function LumeLanding() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 20px' }}>
      
      {/* Cabecera / Status */}
      <div style={{ display: 'flex', gap: '25px', marginBottom: '80px', opacity: 0.6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Activity size={12} color="#00ff00" />
          <span style={{ fontSize: '0.6rem', letterSpacing: '1px' }}>CORE: ACTIVE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Shield size={12} color="#00ff00" />
          <span style={{ fontSize: '0.6rem', letterSpacing: '1px' }}>AEGIS: SECURE</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Globe size={12} color="#00ff00" />
          <span style={{ fontSize: '0.6rem', letterSpacing: '1px' }}>NODE: LONDON</span>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '100px' }}>
        <h1 style={{ letterSpacing: '15px', fontSize: '3.5rem', margin: '0', fontWeight: '200', color: '#fff' }}>LUME</h1>
        <p style={{ letterSpacing: '5px', color: '#888', fontSize: '0.8rem', marginTop: '10px', textTransform: 'uppercase' }}>Intelligence for Global Real Estate</p>
        
        <div style={{ height: '1px', width: '60px', backgroundColor: '#333', margin: '40px auto' }}></div>
        
        <h2 style={{ fontSize: '1.4rem', fontWeight: '300', lineHeight: '1.6', color: '#ccc', letterSpacing: '1px' }}>
          Transformamos activos inmobiliarios mediante <span style={{ color: '#fff' }}>redes neuronales</span> y renderizado correctivo de alta precisión.
        </h2>

        {/* Botón Principal */}
        <button style={{ marginTop: '50px', backgroundColor: '#fff', color: '#000', border: 'none', padding: '15px 40px', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '2px' }}>
          SOLICITAR ACCESO <ChevronRight size={16} />
        </button>
      </div>

      {/* Grid de Servicios */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', maxWidth: '1000px', width: '100%' }}>
        <div style={{ border: '1px solid #111', padding: '30px', backgroundColor: '#050505' }}>
          <Zap size={20} color="#888" style={{ marginBottom: '15px' }} />
          <h3 style={{ fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '10px' }}>R.I.M. ENGINE</h3>
          <p style={{ fontSize: '0.75rem', color: '#666', lineHeight: '1.5' }}>Identidad regional y estilos decorativos automatizados para cada activo.</p>
        </div>
        <div style={{ border: '1px solid #111', padding: '30px', backgroundColor: '#050505' }}>
          <Target size={20} color="#888" style={{ marginBottom: '15px' }} />
          <h3 style={{ fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '10px' }}>STALKER V1.0</h3>
          <p style={{ fontSize: '0.75rem', color: '#666', lineHeight: '1.5' }}>Prospección autónoma de inventario con deficiencias visuales.</p>
        </div>
        <div style={{ border: '1px solid #111', padding: '30px', backgroundColor: '#050505' }}>
          <BarChart3 size={20} color="#888" style={{ marginBottom: '15px' }} />
          <h3 style={{ fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '10px' }}>ANALÍTICA CORE</h3>
          <p style={{ fontSize: '0.75rem', color: '#666', lineHeight: '1.5' }}>Monitoreo en tiempo real de conversiones y estados de suscripción.</p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: '100px', paddingBottom: '40px', textAlign: 'center' }}>
        <p style={{ fontSize: '0.6rem', color: '#222', letterSpacing: '3px' }}>
          LUME REAL ESTATE LLC | WYOMING USA © 2026
        </p>
      </footer>
    </div>
  );
}
