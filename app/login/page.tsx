'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 🌐 ESPECIFICACIONES SINCRO: TÚNEL NGINX (DIRECTIVA LGC V5.8)
  const API_BASE = "https://lumeglobalcore.com/api";
  const LUME_HEADERS = {
    'Content-Type': 'application/json',
    'X-Lume-Node': 'SAN_PABLO_01'
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/v1/auth/login`, {
        method: 'POST',
        headers: LUME_HEADERS,
        body: JSON.stringify({ 
          email: email.toLowerCase(), 
          password: password 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Persistencia de sesión soberana
        localStorage.setItem('lume_session_token', data.access_token);
        localStorage.setItem('lume_user_mail', email.toLowerCase());
        router.push('/dashboard');
      } else {
        alert("ACCESO DENEGADO: Credenciales no válidas en el Nodo San Pablo.");
      }
    } catch (error) {
      console.error("LGC_AUTH_ERROR: Fallo de conexión con el Gateway.");
      alert("ERROR CRÍTICO: El servidor no responde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen w-full bg-white text-black font-sans flex flex-col justify-between p-6 md:p-10 overflow-hidden">
      
      {/* NAVEGACIÓN COMPACTA */}
      <nav className="flex justify-between items-center w-full shrink-0">
        <div className="text-[10px] font-black tracking-[0.5em] uppercase italic">
          LUME
        </div>
        <button 
          onClick={() => router.back()}
          className="text-[9px] font-bold uppercase tracking-[0.2em] underline underline-offset-8 decoration-1 transition-all active:scale-95"
        >
          ← VOLVER
        </button>
      </nav>

      {/* BLOQUE CENTRAL: KARADA DECO */}
      <div className="max-w-md mx-auto w-full flex flex-col items-center justify-center flex-grow py-4">
        <h1 className="text-4xl md:text-5xl font-serif font-light italic text-center lowercase first-letter:uppercase mb-12">
          Acceso de suscriptores.
        </h1>
        
        <form onSubmit={handleLogin} className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-[8px] font-bold tracking-[0.3em] uppercase text-neutral-400 italic ml-2">
              Email
            </label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="USUARIO@LUMEGLOBALCORE.COM"
              className="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-black/20 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[8px] font-bold tracking-[0.3em] uppercase text-neutral-400 italic ml-2">
              Clave
            </label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-black/20 transition-all"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white p-5 rounded-3xl text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-neutral-800 transition-all shadow-xl active:scale-95 mt-4 flex justify-center items-center"
          >
            {loading ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "INGRESAR"}
          </button>
          
          <div className="text-center pt-4">
            <Link href="/pricing" className="text-[8px] font-bold tracking-[0.2em] uppercase text-neutral-300 hover:text-black transition-colors">
              ¿No tiene una suscripción activa? Ver planes
            </Link>
          </div>
        </form>
      </div>

      {/* FOOTER */}
      <footer className="w-full flex flex-col items-center gap-6 shrink-0 pb-4">
        <div className="flex flex-wrap justify-center gap-10 font-sans text-[8px] text-neutral-300 uppercase">
          <Link href="/terms" className="hover:text-black underline underline-offset-8 decoration-1 transition-all">
            Términos
          </Link>
          <Link href="/privacy" className="hover:text-black underline underline-offset-8 decoration-1 transition-all">
            Privacidad
          </Link>
          <Link href="/refund" className="hover:text-black underline underline-offset-8 decoration-1 transition-all">
            Reembolso
          </Link>
        </div>
        <div className="text-[8px] font-bold tracking-[0.5em] text-neutral-200 uppercase italic">
          LUME GLOBAL CORE 🌎 // 2026 // NODO_SAN_PABLO_01
        </div>
      </footer>
    </main>
  );
}
