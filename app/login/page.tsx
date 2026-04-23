'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  // 🌐 RECTIFICACIÓN V5.2.5: USO DE RUTA RELATIVA PARA TÚNEL SSL (NGINX)
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
    // 📐 REQUERIMIENTO 2: VIEWPORT "ZERO-SCROLL" (100VH)
    <main className="h-screen w-full bg-[#FFFFFF] text-black flex flex-col items-center justify-between p-10 uppercase tracking-[0.2em] zero-scroll overflow-hidden">
      
      {/* 🏛️ HEADER: LOGO IZQUIERDA / VOLVER DERECHA */}
      <nav className="w-full flex justify-between items-center shrink-0">
        <div className="flex items-center">
          <Image 
            src="/LUME_UNIVERSAL_LOGO.png" 
            alt="LUME" 
            width={110} 
            height={36} 
            priority
            className="object-contain"
          />
        </div>
        <Link href="/">
          <span className="text-black text-[11px] font-[300] tracking-[0.3em] cursor-pointer font-serif border-b border-black/20 pb-1">
            ← VOLVER
          </span>
        </Link>
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
              className="w-full border border-black p-5 text-[11px] outline-none transition-none rounded-[15px] font-sans placeholder-uppercase"
            />
          </div>

          <div className="space-y-4">
            <input 
              type="password" 
              required
              placeholder="CREDENCIAL"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full border border-black p-5 text-[11px] outline-none transition-none rounded-[15px] font-sans placeholder-uppercase"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-black text-white py-6 rounded-[50px] text-[11px] font-[300] tracking-[0.5em] transition-none disabled:opacity-30 font-serif uppercase"
          >
            {loading ? "SINCRONIZANDO..." : "INGRESAR"}
          </button>
        </form>
      </div>

      {/* 🏛️ FOOTER: NAVEGACIÓN LEGAL Y FRASE DE SISTEMA */}
      <footer className="w-full flex flex-col items-center gap-10 shrink-0">
        <div className="flex justify-center gap-14 text-[10px] font-[300] tracking-[0.3em] font-serif text-black/40 uppercase">
          <Link href="/terms/" className="hover:text-black transition-none">TÉRMINOS</Link>
          <Link href="/privacy/" className="hover:text-black transition-none">PRIVACIDAD</Link>
          <Link href="/refund/" className="hover:text-black transition-none">REEMBOLSO</Link>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <Image 
            src="/LUME_UNIVERSAL_LOGO.png" 
            alt="LUME" 
            width={70} 
            height={23} 
            className="opacity-20 grayscale"
          />
          <p className="text-[9px] font-[300] text-[#333] opacity-40 tracking-[0.4em] italic font-serif uppercase text-center pb-4">
            LUME GLOBAL CORE // NODO_SAN_PABLO_01
          </p>
        </div>
      </footer>
    </main>
  );
}
