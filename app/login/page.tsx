'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  // 🌐 DIRECCIONAMIENTO NODO SAN PABLO: VARIABLE DE ENTORNO MANDATORIA
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-Lume-Node': 'SAN_PABLO_01' 
        },
        body: JSON.stringify({
          email: formData.email.toLowerCase(),
          password: formData.password
        }),
      });

      if (res.ok) {
        const data = await res.json();
        
        // PERSISTENCIA UNIFICADA
        localStorage.setItem('lume_session_token', data.access_token);
        localStorage.setItem('lume_user_mail', formData.email.toLowerCase());
        
        // SINCRONIZACIÓN CON MIDDLEWARE
        document.cookie = `lume_session_token=${data.access_token}; path=/; samesite=strict;`;

        // CONSULTA DE ACTIVOS POST-LOGIN (REQUERIMIENTO III)
        await fetch(`${API_BASE}/subscriber/assets`, {
          headers: { 'Authorization': `Bearer ${data.access_token}` }
        });

        router.push('/dashboard');
      } else {
        alert('ACCESO DENEGADO: ERROR EN BÚNKER SAN PABLO');
      }
    } catch (error) {
      alert('FALLO DE CONEXIÓN: VERIFICAR GATEWAY NGINX');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black flex flex-col items-center justify-center p-10 uppercase tracking-[0.2em]">
      
      {/* TÍTULO: PLAYFAIR DISPLAY 300 / LUJO MINIMALISTA */}
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
            className="w-full border border-black p-5 text-[11px] outline-none transition-none rounded-none font-sans"
          />
        </div>

        <div className="space-y-4">
          <input 
            type="password" 
            required
            placeholder="CREDENCIAL"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full border border-black p-5 text-[11px] outline-none transition-none rounded-none font-sans"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-black text-white py-6 rounded-none text-[11px] font-[300] tracking-[0.5em] transition-none hover:bg-black disabled:opacity-30 font-serif"
        >
          {loading ? "SINCRONIZANDO..." : "INGRESAR"}
        </button>
      </form>

      {/* FOOTER DE LOGIN: ESTÉTICA RECTA V5.1 */}
      <div className="mt-24 text-[9px] font-[300] text-black/20 tracking-[0.4em] italic font-serif uppercase">
        LUME GLOBAL CORE // NODO_SAN_PABLO_01
      </div>
    </main>
  );
}
