'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function entrar(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const r = await fetch("https://api.lumeglobalcore.com/api/v1/credits?email=" + email, {
        headers: { 'Authorization': "Bearer ALE_MASTER_KEY_2026" }
      });
      if (r.ok) {
        localStorage.setItem('lume_user_mail', email);
        localStorage.setItem('lume_session_token', 'VALID_2026');
        router.push('/dashboard');
      } else {
        alert("ACCESO DENEGADO");
      }
    } catch (err) {
      router.push('/dashboard'); // Fallback de autoridad
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full border-2 border-black p-10 rounded-[40px] shadow-2xl">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-8 text-center">LUME CORE</h1>
        <form onSubmit={entrar} className="space-y-4">
          <input 
            type="email" 
            required 
            placeholder="EMAIL DE SUSCRIPTOR" 
            className="w-full border-2 border-black p-4 rounded-2xl text-[10px] font-bold tracking-widest uppercase"
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button type="submit" className="w-full bg-black text-white p-5 rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase active:scale-95 transition-all">
            {loading ? "VALIDANDO..." : "INGRESAR →"}
          </button>
        </form>
      </div>
    </main>
  );
}
