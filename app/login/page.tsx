'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://api.lumeglobalcore.com/api/v1/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer ALE_MASTER_KEY_2026"
        },
        body: JSON.stringify({ email: email.toLowerCase(), password: password }),
      });

      if (response.ok) {
        localStorage.setItem('lume_user_mail', email.toLowerCase());
        localStorage.setItem('lume_session_token', 'ACTIVE_2026');
        router.push('/dashboard');
      } else {
        alert("Acceso denegado.");
      }
    } catch (error) {
      router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white p-8 flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-4xl font-black italic uppercase text-center">Acceso Lume</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="EMAIL" 
            className="w-full border border-black p-4 rounded-xl"
          />
          <input 
            type="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="PASSWORD" 
            className="w-full border border-black p-4 rounded-xl"
          />
          <button type="submit" className="w-full bg-black text-white p-4 rounded-xl font-bold uppercase">
            {loading ? "Cargando..." : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
