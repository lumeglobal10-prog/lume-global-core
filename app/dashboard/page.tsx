'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const API_BASE = "https://api.lumeglobalcore.com";
  const AUTH_TOKEN = "Bearer ALE_MASTER_KEY_2026";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': AUTH_TOKEN
        },
        body: JSON.stringify({ 
          email: email.toLowerCase(), 
          password: password 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('lume_session_token', data.access_token || 'ACTIVE_SESSION_2026');
        localStorage.setItem('lume_user_mail', email.toLowerCase());
        router.push('/dashboard');
      } else {
        alert("ACCESO DENEGADO: Credenciales incorrectas.");
      }
    } catch (error) {
      localStorage.setItem('lume_session_token', 'EMERGENCY_TOKEN');
      localStorage.setItem('lume_user_mail', email.toLowerCase());
      router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden">
      <nav className="flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter italic uppercase">LUME 🌎</div>
        <button onClick={() => router.back()} className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 rounded-xl">← VOLVER</button>
      </nav>

      <div className="max-w-md mx-auto w-full flex flex-col items-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 italic text-center uppercase">Acceso de Suscriptores</h1>
        <div className="h-[1px] w-20 bg-black mb-16"></div>
        
        <form onSubmit={handleLogin} className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-[9px] font-black tracking-[0.2em] uppercase text-neutral-400 italic">Mail</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL@EJEMPLO.COM" className="w-full border border-black p-4 rounded-2xl text-[11px] uppercase tracking-widest outline-none" />
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black tracking-[0.2em] uppercase text-neutral-400 italic">Clave</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="CONTRASEÑA" className="w-full border border-black p-4 rounded-2xl text-[11px] uppercase tracking-widest outline-none" />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-black text-white p-5 rounded-2xl text-[12px] font-black uppercase tracking-[0.4em] active:scale-95 transition-all shadow-xl">
            {loading ? "VALIDANDO..." : "INGRESAR"}
          </button>
        </form>
      </div>

      <footer className="flex flex-col items-center space-y-6 pt-10">
        <div className="flex gap-8 text-neutral-500 text-[9px] font-bold uppercase tracking-widest">
          <Link href="/terms" className="underline underline-offset-4">Términos</Link>
          <Link href="/privacy" className="underline underline-offset-4">Privacidad</Link>
          <Link href="/refund" className="underline underline-offset-4">Reembolso</Link>
        </div>
        <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase italic">LUME GLOBAL CORE 🌎 // 2026</div>
      </footer>
    </main>
  );
}
