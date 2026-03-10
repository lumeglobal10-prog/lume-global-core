import React, { useState } from 'react';
import { ChevronRight, Eye, X, ShieldCheck, Lock, Building2, Mail, User } from 'lucide-react';

export default function LumePureEcosystem() {
  const [view, setView] = useState('home'); // home | login | register | terms | privacy
  const [sliderPos, setSliderPos] = useState(50);
  
  // Estados de Registro
  const [regData, setRegData] = useState({ agency: '', name: '', email: '', pass1: '', pass2: '' });
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (regData.pass1 !== regData.pass2) {
      setError('LAS CONTRASEÑAS NO COINCIDEN. REINICIANDO SECUENCIA.');
      setRegData({...regData, pass1: '', pass2: ''});
      return;
    }
    setError('');
    console.log("Inyectando suscriptor a LGC...", regData);
  };

  const Overlay = ({ title, children, close }: any) => (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#fff', zIndex: 100, padding: '80px 60px', overflowY: 'auto' }}>
      <button onClick={close} style={{ position: 'absolute', top: '40px', right: '60px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}>
        <X size={30} strokeWidth={1} />
      </button>
      <h2 style={{ letterSpacing: '10px', fontSize: '1.5rem', fontWeight: '200', marginBottom: '60px', textAlign: 'center' }}>{title}</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '2', color: '#444', fontSize: '0.9rem' }}>{children}</div>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#fff', color: '#000', minHeight: '100vh', fontFamily: '"Inter", sans-serif', display: 'flex', flexDirection: 'column' }}>
      
      {/* NAVEGACIÓN SOPHISTICATED */}
      <nav style={{ padding: '30px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f2f2f2' }}>
        <div style={{ letterSpacing: '12px', fontSize: '1.2rem', fontWeight: '800', cursor: 'pointer' }} onClick={() => setView('home')}>LUME</div>
        <button 
          onClick={() => setView('login')}
          style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '10px 35px', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '3px', cursor: 'pointer' }}
        >
          SIGN IN
        </button>
      </nav>

      {/* VISTA PRINCIPAL (HOME) */}
      {view === 'home' && (
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '3.2rem', fontWeight: '200', letterSpacing: '-2px', lineHeight: '1' }}>The Standard of <br/><span style={{fontWeight: '600'}}>Visual Authority.</span></h2>
          </div>

          {/* SLIDER 8K FIX */}
          <div 
            style={{ position: 'relative', width: '100%', maxWidth: '1000px', height: '550px', backgroundColor: '#eee', overflow: 'hidden', cursor: 'col-resize', boxShadow: '0 50px 100px rgba(0,0,0,0.05)' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setSliderPos(((e.clientX - rect.left) / rect.width) * 100);
            }}
          >
            <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=100&w=1600")', backgroundSize: 'cover', width: '100%', height: '100%', position: 'absolute' }} />
            <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=40&w=1600&sat=-100")', backgroundSize: 'cover', width: `${sliderPos}%`, height: '100%', position: 'absolute', zIndex: 2, borderRight: '1px solid #fff' }} />
            <div style={{ position: 'absolute', left: `${sliderPos}%`, top: '50%', transform: 'translate(-50%, -50%)', zIndex: 3, backgroundColor: '#fff', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}>
              <Eye size={18} />
            </div>
          </div>
        </main>
      )}

      {/* VISTA LOGIN / REGISTER */}
      {(view === 'login' || view === 'register') && (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
          <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
            <h3 style={{ letterSpacing: '5px', fontSize: '0.8rem', marginBottom: '40px' }}>{view === 'login' ? 'IDENTITY VERIFICATION' : 'NEW SUBSCRIPTION'}</h3>
            
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {view === 'register' && (
                <>
                  <input type="text" placeholder="INMOBILIARIA" required style={{ padding: '15px', border: '1px solid #eee', fontSize: '0.8rem' }} value={regData.agency} onChange={e => setRegData({...regData, agency: e.target.value})} />
                  <input type="text" placeholder="NOMBRE TITULAR" required style={{ padding: '15px', border: '1px solid #eee', fontSize: '0.8rem' }} value={regData.name} onChange={e => setRegData({...regData, name: e.target.value})} />
                </>
              )}
              <input type="email" placeholder="EMAIL" required style={{ padding: '15px', border: '1px solid #eee', fontSize: '0.8rem' }} />
              <input type="password" placeholder="PASSWORD" required style={{ padding: '15px', border: '1px solid #eee', fontSize: '0.8rem' }} value={regData.pass1} onChange={e => setRegData({...regData, pass1: e.target.value})} />
              {view === 'register' && (
                <input type="password" placeholder="RE-ENTER PASSWORD" required style={{ padding: '15px', border: '1px solid #eee', fontSize: '0.8rem' }} value={regData.pass2} onChange={e => setRegData({...regData, pass2: e.target.value})} />
              )}
              
              {error && <p style={{ color: 'red', fontSize: '0.6rem', letterSpacing: '1px' }}>{error}</p>}
              
              <button type="submit" style={{ backgroundColor: '#000', color: '#fff', padding: '18px', border: 'none', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '2px', marginTop: '10px' }}>
                {view === 'login' ? 'ENTER SYSTEM' : 'CREATE ACCOUNT'}
              </button>
            </form>

            <p style={{ marginTop: '30px', fontSize: '0.7rem', color: '#888' }}>
              {view === 'login' ? "¿No tienes cuenta?" : "¿Ya eres suscriptor?"} 
              <span onClick={() => setView(view === 'login' ? 'register' : 'login')} style={{ color: '#000', fontWeight: '700', cursor: 'pointer', marginLeft: '10px' }}>
                {view === 'login' ? "SUSCRIBIRSE" : "INGRESAR"}
              </span>
            </p>
          </div>
        </div>
      )}

      {/* FOOTER & OVERLAYS */}
      <footer style={{ padding: '40px 60px', borderTop: '1px solid #f2f2f2', display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#bbb' }}>
        <div>OPERADO POR <span style={{color: '#000'}}>LUME GLOBAL CORE</span></div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <span onClick={() => setView('terms')} style={{ cursor: 'pointer' }}>TÉRMINOS</span>
          <span onClick={() => setView('privacy')} style={{ cursor: 'pointer' }}>PRIVACIDAD</span>
        </div>
      </footer>

      {view === 'terms' && <Overlay title="TERMS OF SERVICE" close={() => setView('home')}>[Insertar texto legal de Lume Global Core aquí]</Overlay>}
      {view === 'privacy' && <Overlay title="PRIVACY POLICY" close={() => setView('home')}>[Datos protegidos por el escudo Aegis]</Overlay>}
    </div>
  );
}
