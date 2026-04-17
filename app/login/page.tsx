'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  // 🌐 ESPECIFICACIONES DE CONEXIÓN: NODO SAN PABLO
  const API_BASE = "/api/v1";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // LITERALIDAD TÉCNICA: RUTA SEGÚN BACKEND V5.0
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

        // CONSULTA INMEDIATA DE ACTIVOS TRAS LOGIN (REQ 2)
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
    <main className="min-h-screen bg-[#FFFFFF] text-black font-sans flex flex-col items-center justify-center p-10 uppercase tracking-[0.2em]">
      {/* TÍTULO: MAYÚSCULAS MANDATORIAS Y ESTÉTICA RECTA */}
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-16 text-center uppercase">
        ACCESO DE SUSCRIPTORES.
      </h1>

      <form onSubmit={handleLogin} className="w-full max-w-xs space-y-10">
        <div className="space-y-4">
          <input 
            type="email" 
            required
            placeholder="EMAIL DE SUSCRIPCIÓN"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full border border-black p-5 text-[10px] font-black outline-none focus:bg-neutral-50 rounded-none uppercase placeholder-uppercase transition-colors"
          />
        </div>

        <div className="space-y-4">
          <input 
            type="password" 
            required
            placeholder="CREDENCIAL"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full border border-black p-5 text-[10px] font-black outline-none focus:bg-neutral-50 rounded-none uppercase placeholder-uppercase transition-colors"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-black text-white py-6 rounded-none text-[10px] font-black tracking-[0.6em] transition-all hover:bg-neutral-900 disabled:opacity-50"
        >
          {loading ? "SINCRONIZANDO..." : "INGRESAR"}
        </button>
      </form>

      {/* FOOTER DE LOGIN: ESTÉTICA RECTA */}
      <div className="mt-20 text-[8px] font-black text-black/20 tracking-[0.4em] italic">
        LUME GLOBAL CORE // NODO_SAN_PABLO_01
      </div>
    </main>
  );
}
