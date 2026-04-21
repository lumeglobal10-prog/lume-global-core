'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  // 🌐 RECTIFICACIÓN V5.2: USO DE RUTA RELATIVA PARA TÚNEL SSL (NGINX)
  const API_BASE = "/api/v1";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🛡️ RECTIFICACIÓN DE ENDPOINT Y VARIABLE SEGÚN REQUERIMIENTO 1 (LOGIN)
      const res = await fetch(`${API_BASE}/auth/validate`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-Lume-Node': 'SAN_PABLO_01' 
        },
        body: JSON.stringify({
          email: formData.email.toLowerCase(),
          // 🏛️ REQUERIMIENTO 1: SUSTITUCIÓN MANDATORIA DE token_hash POR token_autoridad_ale
          token_autoridad_ale: formData.password 
        }),
      });

      if (res.ok) {
        const data = await res.json();
        
        // PERSISTENCIA UNIFICADA
        localStorage.setItem('lume_session_token', data.access_token);
        localStorage.setItem('lume_user_mail', formData.email.toLowerCase());
        
        // SINCRONIZACIÓN CON MIDDLEWARE
        document.cookie = `lume_session_token=${data.access_token}; path=/; samesite=strict;`;

        router.push('/dashboard/');
      } else {
        alert('ERROR: EL BÚNKER NO RECONOCE OTRA ETIQUETA O CREDENCIAL.');
      }
    } catch (error) {
      alert('FALLO DE CONEXIÓN: VERIFICAR GATEWAY NGINX / SSL');
    } finally {
      setLoading(false);
    }
  };

  return (
    // 📐 REQUERIMIENTO 2: VIEWPORT "ZERO-SCROLL" (100VH) / ESTILO RECTO
    <main className="h-screen w-full bg-[#FFFFFF] text-black flex flex-col items-center justify-center p-10 uppercase tracking-[0.2em] zero-scroll overflow-hidden">
      
      {/* 🏛️ REQUERIMIENTO 2: LOGO ARRIBA A LA IZQUIERDA */}
      <nav className="absolute top-0 left-0 w-full p-8 flex justify-start items-center shrink-0">
        <div className="text-[12px] font-[300] tracking-[0.5em] italic font-serif">
          LUME 🌎
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-grow w-full">
        <h1 className="text-4xl md:text-6xl font-[300] tracking-[0.1em] leading-tight mb-20 text-center uppercase font-serif">
          ACCESO DE SUSCRIPTORES.
        </h1>

        <form onSubmit={handleLogin} className="w-full max-w-xs space-y-8">
          <div className="space-y-4">
            <input 
              type="email" 
              required
              placeholder="EMAIL DE SUSCRIPCIÓN"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border border-black p-5 text-[11px] outline-none transition-none rounded-none font-sans placeholder-uppercase"
            />
          </div>

          <div className="space-y-4">
            <input 
              type="password" 
              required
              placeholder="CREDENCIAL"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full border border-black p-5 text-[11px] outline-none transition-none rounded-none font-sans placeholder-uppercase"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-black text-white py-6 rounded-none text-[11px] font-[300] tracking-[0.5em] transition-none disabled:opacity-30 font-serif uppercase"
          >
            {loading ? "SINCRONIZANDO..." : "INGRESAR"}
          </button>
        </form>
      </div>

      {/* FOOTER CON CONSTRANTE OPERATIVO #333 */}
      <div className="pb-10 text-[9px] font-[300] text-[#333] opacity-40 tracking-[0.4em] italic font-serif uppercase">
        LUME GLOBAL CORE // NODO_SAN_PABLO_01
      </div>
    </main>
  );
}
