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
    confirmPassword: '',
    nombre_empresa: '',
    numero_telefono: ''
  });

  // 🌐 ESPECIFICACIONES SINCRO: TÚNEL NGINX (DIRECTIVA LGC V5.8)
  const API_BASE = "https://lumeglobalcore.com/api";
  const LUME_HEADERS = {
    'Content-Type': 'application/json',
    'X-Lume-Node': 'SAN_PABLO_01'
  };

  // Lógica de Validación: Botón bloqueado si faltan campos mandatorios o formato de teléfono
  const isFormValid = 
    formData.email && 
    formData.password && 
    formData.confirmPassword === formData.password &&
    formData.nombre_empresa && 
    formData.numero_telefono.startsWith('+');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("ERROR: Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);

    try {
      // 📡 INYECCIÓN DE DATOS EN EL MÓDULO 09 (API CORE V5.2)
      const response = await fetch(`${API_BASE}/v1/auth/register`, {
        method: 'POST',
        headers: LUME_HEADERS,
        body: JSON.stringify({ 
          email: formData.email.toLowerCase(), 
          password: formData.password,
          nombre_empresa: formData.nombre_empresa,
          numero_telefono: formData.numero_telefono
        }),
      });

      if (response.ok) {
        alert("Suscripción Iniciada: Usuario registrado en el Nodo San Pablo.");
        router.push('/login');
      } else {
        alert("ERROR: El email ya se encuentra registrado o el Nodo rechazó la petición.");
      }
    } catch (error) {
      alert("ERROR CRÍTICO: No se pudo establecer conexión con el Nodo San Pablo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden uppercase">
      
      <nav className="flex justify-between items-center w-full shrink-0">
        <div className="text-[10px] font-black tracking-[0.5em] italic">
          LUME
        </div>
        <button 
          onClick={() => router.back()} 
          className="text-[9px] font-bold tracking-[0.2em] border border-black px-6 py-2 rounded-full active:scale-95 transition-all hover:bg-black hover:text-white"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-md mx-auto w-full flex flex-col items-center py-12 flex-grow justify-center">
        <h1 className="text-4xl md:text-5xl font-serif font-light italic text-center lowercase first-letter:uppercase mb-12 normal-case">
          Nuevo suscriptor.
        </h1>
        
        <form onSubmit={handleRegister} className="w-full space-y-6">
          {/* IDENTIDAD EMPRESARIAL */}
          <div className="space-y-2">
            <label className="text-[8px] font-bold tracking-[0.3em] text-neutral-400 italic ml-2">
              NOMBRE DE EMPRESA
            </label>
            <input 
              type="text" required value={formData.nombre_empresa}
              onChange={(e) => setFormData({...formData, nombre_empresa: e.target.value})}
              placeholder="RAZÓN SOCIAL"
              className="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold tracking-widest focus:outline-none focus:border-black/20 transition-all shadow-sm uppercase"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[8px] font-bold tracking-[0.3em] text-neutral-400 italic ml-2">
              WHATSAPP (INT.)
            </label>
            <input 
              type="tel" required value={formData.numero_telefono}
              onChange={(e) => setFormData({...formData, numero_telefono: e.target.value})}
              placeholder="+54911..."
              className="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold tracking-widest focus:outline-none focus:border-black/20 transition-all shadow-sm uppercase"
            />
          </div>

          {/* CREDENCIALES DE ACCESO */}
          <div className="space-y-2">
            <label className="text-[8px] font-bold tracking-[0.3em] text-neutral-400 italic ml-2">
              EMAIL DE SUSCRIPCIÓN
            </label>
            <input 
              type="email" required value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="USUARIO@LUMEGLOBALCORE.COM"
              className="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold tracking-widest focus:outline-none focus:border-black/20 transition-all shadow-sm uppercase"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[8px] font-bold tracking-[0.3em] text-neutral-400 italic ml-2">
              CREAR CONTRASEÑA
            </label>
            <input 
              type="password" required value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="MÍNIMO 8 CARACTERES"
              className="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold tracking-widest focus:outline-none focus:border-black/20 transition-all shadow-sm uppercase"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[8px] font-bold tracking-[0.3em] text-neutral-400 italic ml-2">
              CONFIRMAR CONTRASEÑA
            </label>
            <input 
              type="password" required value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              placeholder="REPITA SU CONTRASEÑA"
              className="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold tracking-widest focus:outline-none focus:border-black/20 transition-all shadow-sm uppercase"
            />
          </div>

          <button 
            type="submit"
            disabled={loading || !isFormValid}
            className={`w-full p-5 rounded-3xl text-[10px] font-bold tracking-[0.5em] transition-all shadow-xl active:scale-95 mt-4 flex justify-center items-center ${isFormValid ? 'bg-black text-white hover:bg-neutral-800' : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'}`}
          >
            {loading ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "REGISTRAR"}
          </button>
        </form>
      </div>

      <footer className="w-full flex flex-col items-center gap-6 shrink-0 pb-4">
        <div className="flex flex-wrap justify-center gap-10 font-sans text-[8px] text-neutral-300">
