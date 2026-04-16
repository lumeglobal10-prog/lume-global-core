'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre_empresa: '',
    numero_telefono: '',
    email: '',
    password: ''
  });

  // 🌐 ESPECIFICACIONES DE CONEXIÓN: NODO SAN PABLO
  const API_BASE = "/api/v1";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-Lume-Node': 'SAN_PABLO_01' 
        },
        body: JSON.stringify({
          ...formData,
          email: formData.email.toLowerCase()
        }),
      });

      if (res.ok) {
        alert('REGISTRO EXITOSO EN NODO SAN PABLO');
        router.push('/login');
      } else {
        alert('ERROR: DATOS RECHAZADOS POR KERNEL ALPHA');
      }
    } catch (error) {
      alert('FALLO CRÍTICO DE CONEXIÓN');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col items-center justify-center p-8 md:p-20 uppercase tracking-widest">
      <nav className="absolute top-10 left-10 right-10 flex justify-between items-center">
        <div className="text-[10px] font-black italic tracking-[0.5em]">LUME 🌎</div>
        <button 
          onClick={() => router.back()} 
          className="text-[9px] font-bold border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-md w-full space-y-10 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-light italic text-center lowercase first-letter:uppercase normal-case tracking-normal">
          Nuevo suscriptor.
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[8px] font-bold text-neutral-400 italic ml-2">NOMBRE DE EMPRESA</label>
            <input 
              type="text" required 
              onChange={(e) => setFormData({...formData, nombre_empresa: e.target.value})}
              placeholder="RAZÓN SOCIAL" 
              className="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold outline-none focus:border-black/20 shadow-sm uppercase"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[8px] font-bold text-neutral-400 italic ml-2">WHATSAPP (INT.)</label>
            <input 
              type="tel" required 
              onChange={(e) => setFormData({...formData, numero_telefono: e.target.value})}
              placeholder="+54911..." 
              className="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold outline-none focus:border-black/20 shadow-sm uppercase"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[8px] font-bold text-neutral-400 italic ml-2">EMAIL DE SUSCRIPCIÓN</label>
            <input 
              type="email" required 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="USUARIO@LUMEGLOBALCORE.COM" 
              className="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold outline-none focus:border-black/20 shadow-sm uppercase"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[8px] font-bold text-neutral-400 italic ml-2">CREAR CONTRASEÑA</label>
            <input 
              type="password" required 
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="••••••••" 
              className="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold outline-none focus:border-black/20 shadow-sm uppercase"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-black text-white p-5 rounded-3xl text-[10px] font-bold tracking-[0.5em] shadow-xl active:scale-95 transition-all mt-4 disabled:opacity-50"
          >
            {loading ? "PROCESANDO..." : "REGISTRAR"}
          </button>
        </form>
      </div>
    </main>
  );
}
