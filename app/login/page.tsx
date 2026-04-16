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
      // LITERALIDAD TÉCNICA: Sincronización con el endpoint del Kernel Alpha
      const res = await fetch(`${API_BASE}/auth/login`, {
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
        
        // Persistencia de sesión
        localStorage.setItem('lume_session_token', data.access_token);
        localStorage.setItem('lume_user_mail', formData.email.toLowerCase());
        
        // Sincronización con Middleware (Cookie mandatoria)
        document.cookie = `lume_session_token=${data.access_token}; path=/; samesite=strict;`;

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
    <main className="min-h-screen bg-white text-black font-sans flex flex-col items-center justify-center p-10 uppercase tracking-widest">
      <h1 className="text-4xl md:text-5xl font-serif font-light italic text-center lowercase first-letter:uppercase mb-12 tracking-normal normal-case">
        Acceso de suscriptores.
      </h1>

      <form onSubmit={handleLogin} className="w-full max-w-xs space-y-8">
        <div className="space-y-2">
          <label className="text-[8px] font-black text-neutral-400 italic ml-2">
            EMAIL DE SUSCRIPCIÓN
          </label>
          <input 
            type="email" 
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full border-b border-black/10 py-3 text-[10px] font-bold outline-none focus:border-black transition-all bg-transparent uppercase"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[8px] font-black text-neutral-400 italic ml-2">
            CREDENCIAL
          </label>
          <input 
            type="password" 
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full border-b border-black/10 py-3 text-[10px] font-bold outline-none focus:border-black transition-all bg-transparent uppercase"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-black text-white py-5 rounded-3xl text-[9px] font-bold tracking-[0.5em] shadow-xl active:scale-95 transition-all disabled:opacity-50"
        >
          {loading ? "SINCRONIZANDO..." : "INGRESAR"}
        </button>
      </form>
    </main>
  );
}
