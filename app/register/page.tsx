'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  // 🌐 ESPECIFICACIONES DE CONEXIÓN (Nodo Londres :8000)
  const API_BASE = "http://165.22.114.116:8000";
  const AUTH_TOKEN = "Bearer LUME_SVR_2026_ALPHA";

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("ERROR: Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/v1/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': AUTH_TOKEN
        },
        body: JSON.stringify({ 
          email: formData.email.toLowerCase(), 
          password: formData.password 
        }),
      });

      if (response.ok) {
        alert("Suscripción Iniciada: Usuario registrado en el Nodo Londres.");
        router.push('/login');
      } else {
        alert("ERROR: El email ya se encuentra registrado o el Nodo rechazó la petición.");
      }
    } catch (error) {
      alert("ERROR CRÍTICO: No se pudo establecer conexión con el Nodo Londres.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden">
      <nav className="flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter italic uppercase">LUME 🌎</div>
        <button onClick={() => router.back()} className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 rounded-xl active:scale-95 transition-all">← VOLVER</button>
      </nav>

      <div className="max-w-md mx-auto w-full flex flex-col items-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 italic text-center leading-tight uppercase">Nuevo Suscriptor</h1>
        <div className="h-[1px] w-20 bg-black mb-16"></div>
        
        <form onSubmit={handleRegister} className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-[9px] font-black tracking-[0.2em] uppercase text-neutral-400 italic">Email de Suscripción</label>
            <input 
              type="email" required value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="EMAIL@EJEMPLO.COM"
              className="w-full bg-white border border-black p-4 rounded-2xl text-[11px] font-sans uppercase tracking-widest focus:outline-none focus:bg-neutral-50 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black tracking-[0.2em] uppercase text-neutral-400 italic">Crear Contraseña</label>
            <input 
              type="password" required value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="MÍNIMO 8 CARACTERES"
              className="w-full bg-white border border-black p-4 rounded-2xl text-[11px] font-sans uppercase tracking-widest focus:outline-none focus:bg-neutral-50 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black tracking-[0.2em] uppercase text-neutral-400 italic">Confirmar Contraseña</label>
            <input 
              type="password" required value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              placeholder="REPITA SU CONTRASEÑA"
              className="w-full bg-white border border-black p-4 rounded-2xl text-[11px] font-sans uppercase tracking-widest focus:outline-none focus:bg-neutral-50 transition-colors"
            />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-black text-white p-5 rounded-2xl text-[12px] font-black uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all shadow-xl active:scale-95 mt-4 flex justify-center items-center">
            {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "CREAR CUENTA"}
          </button>
          
          <div className="text-center pt-4">
            <Link href="/login" className="text-[9px] font-bold tracking-[0.2em] uppercase hover:underline underline-offset-8">¿Ya tiene una suscripción? Inicie Sesión</Link>
          </div>
        </form>
      </div>

      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="flex flex-wrap justify-center gap-8 font-sans text-neutral-500">
          <Link href="/terms" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-2">Términos</Link>
          <Link href="/privacy" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-2">Privacidad</Link>
          <Link href="/refund" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:text-black underline underline-offset-4 decoration-2">Reembolso</Link>
        </div>
        <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase italic text-center">LUME GLOBAL CORE 🌎 // 2026</div>
      </footer>
    </main>
  );
              }
  
