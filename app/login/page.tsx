'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://api.lumeglobalcore.com/api/v1/credits?email=" + email, {
        headers: { 'Authorization': "Bearer ALE_MASTER_KEY_2026" }
      });
      if (response.ok) {
        localStorage.setItem('lume_user_mail', email);
        localStorage.setItem('lume_session_token', 'VALID');
        router.push('/dashboard');
      } else {
        alert("Acceso denegado");
      }
    } catch (error) {
      router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <form onSubmit={handleLogin} className="max-w-sm w-full space-y-4">
        <h1 className="text-2xl font-black uppercase italic text-center">LUME ACCESS</h1>
        <input 
          type="email" 
          required 
          placeholder="EMAIL" 
          className="w-full border border-black p-4 rounded-xl"
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit" className="w-full bg-black text-white p-4 rounded-xl font-bold uppercase">
          {loading ? "..." : "INGRESAR"}
        </button>
      </form>
    </main>
  );
}
