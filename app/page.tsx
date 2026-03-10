import React, { useState } from 'react';
import { Eye, X, ChevronRight } from 'lucide-react';

export default function LumePureFinal() {
  const [view, setView] = useState('home'); // home | login | register | terms | privacy
  const [sliderPos, setSliderPos] = useState(50);
  const [regData, setRegData] = useState({ agency: '', name: '', email: '', pass1: '', pass2: '' });
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (regData.pass1 !== regData.pass2) {
      setError('LAS CONTRASEÑAS NO COINCIDEN. REINICIANDO.');
      setRegData({...regData, pass1: '', pass2: ''});
      return;
    }
    setError('');
  };

  // Componente de Capa Superior (Para Términos, Privacidad y Login)
  const Overlay = ({ title, children, close }: any) => (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#fff', zIndex: 1000, padding: '60px', overflowY: 'auto' }}>
      <button onClick={close} style={{ position: 'absolute', top: '40px', right: '60px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', padding: '10px' }}>
        <X size={32} strokeWidth={1} />
      </button>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '40px' }}>
        <h2 style={{ letterSpacing: '8px', fontSize: '1.2rem', fontWeight: '300', marginBottom: '60px', textAlign: 'center', textTransform: 'uppercase' }}>{title}</h2>
        {children}
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#fff', color: '#000', minHeight: '100vh', fontFamily: '"Inter", sans-serif', display: 'flex', flexDirection: 'column' }}>
      
      {/* NAVEGACIÓN */}
      <nav style={{ padding: '40px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', zIndex: 100 }}>
        <div style={{ letterSpacing: '12px', fontSize: '1.3rem', fontWeight: '800', cursor: 'pointer' }} onClick={() => setView('home')}>LUME</div>
        <button 
          onClick={() => setView('login')}
          style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '12px 35px', fontSize: '0.7rem', fontWeight: '600', letterSpacing: '3px', cursor: 'pointer', borderRadius: '1px' }}
        >
          SIGN IN
        </button>
      </nav>

      {/* HOME: EL TESTIGO DE CALIDAD */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '200', letterSpacing: '-2px', lineHeight: '1.1' }}>Precision <br/><span style={{fontWeight: '600'}}>Engineering.</span></h2>
        </div>

        <div 
          style={{ position: 'relative', width: '100%', maxWidth: '1000px', height: '550px', backgroundColor: '#f9f9f9', overflow: 'hidden', cursor: 'col-resize', border: '1px solid #f0f0f0' }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setSliderPos(((e.clientX - rect.left) / rect.width) * 100);
          }}
        >
          {/* IMAGEN DESPUÉS (COLOR) */}
          <div style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop")', 
            backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%', position: 'absolute' 
          }} />
          {/* IMAGEN ANTES (B&N) */}
          <div style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop&sat=-100")', 
            backgroundSize: 'cover', backgroundPosition: 'center', width: `${sliderPos}%`, height: '100%', position: 'absolute', zIndex: 2, borderRight: '2px solid #fff' 
          }} />
          <div style={{ position: 'absolute', left: `${sliderPos}%`, top: '50%', transform: 'translate(-50%, -50%)', zIndex: 3, backgroundColor: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
            <Eye size={20} />
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ padding: '40px 60px', borderTop: '1px solid #f2f2f2', display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#aaa', letterSpacing: '1px' }}>
        <div>OPERADO POR <span style={{color: '#000', fontWeight: '700'}}>LUME GLOBAL CORE</span></div>
        <div style={{ display: 'flex', gap: '40px' }}>
          <span onClick={() => setView('terms')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>TÉRMINOS</span>
          <span onClick={() => setView('privacy')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>PRIVACIDAD</span>
        </div>
        <div>LUME REAL ESTATE LLC | 2026</div>
      </footer>

      {/* CAPA DE LOGIN / REGISTRO */}
      {view === 'login' && (
        <Overlay title="Identity Verification" close={() => setView('home')}>
          <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="email" placeholder="EMAIL" style={{ padding: '18px', border: '1px solid #eee', fontSize: '0.8rem' }} />
              <input type="password" placeholder="PASSWORD" style={{ padding: '18px', border: '1px solid #eee', fontSize: '0.8rem' }} />
              <button style={{ backgroundColor: '#000', color: '#fff', padding: '20px', border: 'none', fontWeight: '700', letterSpacing: '2px', cursor: 'pointer' }}>ENTER SYSTEM</button>
              <p style={{ fontSize: '0.7rem', marginTop: '20px' }}>¿NO TIENES CUENTA? <span onClick={() => setView('register')} style={{fontWeight: '700', cursor: 'pointer', textDecoration: 'underline'}}>SUSCRIBIRSE</span></p>
            </div>
          </div>
        </Overlay>
      )}

      {view === 'register' && (
        <Overlay title="New Subscription" close={() => setView('home')}>
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="INMOBILIARIA" required style={{ padding: '18px', border: '1px solid #eee' }} value={regData.agency} onChange={e => setRegData({...regData, agency: e.target.value})} />
              <input type="text" placeholder="NOMBRE TITULAR" required style={{ padding: '18px', border: '1px solid #eee' }} value={regData.name} onChange={e => setRegData({...regData, name: e.target.value})} />
              <input type="email" placeholder="EMAIL" required style={{ padding: '18px', border: '1px solid #eee' }} />
              <input type="password" placeholder="PASSWORD" required style={{ padding: '18px', border: '1px solid #eee' }} value={regData.pass1} onChange={e => setRegData({...regData, pass1: e.target.value})} />
              <input type="password" placeholder="RE-ENTER PASSWORD" required style={{ padding: '18px', border: '1px solid #eee' }} value={regData.pass2} onChange={e => setRegData({...regData, pass2: e.target.value})} />
              {error && <p style={{ color: 'red', fontSize: '0.6rem', textAlign: 'center' }}>{error}</p>}
              <button type="submit" style={{ backgroundColor: '#000', color: '#fff', padding: '20px', border: 'none', fontWeight: '700', letterSpacing: '2px' }}>CREATE ACCOUNT</button>
            </form>
          </div>
        </Overlay>
      )}

      {/* CAPAS LEGALES */}
      {view === 'terms' && (
        <Overlay title="Terms of Service" close={() => setView('home')}>
          <p>Lume Global Core garantiza la integridad de los datos procesados...</p>
        </Overlay>
      )}
      {view === 'privacy' && (
        <Overlay title="Privacy Policy" close={() => setView('home')}>
          <p>Protección Aegis activada para todos los suscriptores...</p>
        </Overlay>
      )}
    </div>
  );
          }
        
