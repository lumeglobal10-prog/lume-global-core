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

  // 🌐 ESPECIFICACIONES DE CONEXIÓN SOBERANA (GCP San Pablo - PUERTO RECTIFICADO 8081)
  const API_BASE = "https://lumeglobalcore.com:8081";
  const LUME_HEADERS = {
    'Content-Type': 'application/json',
    'X-Lume-Node': 'SAN_PABLO',
    'X-Environment': 'PRODUCTION'
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("ERROR: Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);

    try {
      // 📡 INYECCIÓN DE DATOS EN EL MÓDULO 09 (API CORE)
      const response = await fetch(`${API_BASE}/api/v1/auth/register`, {
        method: 'POST',
        headers: LUME_HEADERS,
        body: JSON.stringify({ 
          email: formData.email.toLowerCase(), 
          password: formData.password 
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
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden">
      
      <nav className="flex justify-between items-center w-full">
        {/* LOGO INMUTABLE */}
        <div className="text-xl font-black tracking-tighter italic uppercase">LUME 🌎</div>
        <button 
          onClick={() => router.back()} 
          className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase border border-black/20 px-6 py-2 rounded-xl active:scale-95 transition-all hover:bg-neutral-50"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-md mx-auto w-full flex flex-col items-center py-12">
        {/* TÍTULO ESTILO KARADA DECO (SERIF) */}
        <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tighter mb-4 italic text-center leading-tight lowercase first-letter:uppercase">
          Nuevo suscriptor
        </h1>
        <div className="h-[1px] w-20 bg-black/10 mb-16"></div>
        
        <form onSubmit={handleRegister} className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-[9px] font-sans font-black tracking-[0.2em] uppercase text-neutral-400 italic ml-1">
              Email de Suscripción
            </label>
            <input 
              type="email" required value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="EMAIL@EJEMPLO.COM"
              className="w-full bg-white border border-black/20 p-4 rounded-2xl text-[11px] font-sans font-medium uppercase tracking-widest focus:outline-none focus:bg-neutral-50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-sans font-black tracking-[0.2em] uppercase text-neutral-400 italic ml-1">
              Crear Contraseña
            </label>
            <input 
              type="password" required value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="MÍNIMO 8 CARACTERES"
              className="w-full bg-white border border-black/20 p-4 rounded-2xl text-[11px] font-sans font-medium uppercase tracking-widest focus:outline-none focus:bg-neutral-50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-sans font-black tracking-[0.2em] uppercase text-neutral-400 italic ml-1">
              Confirmar Contraseña
            </label>
            <input 
              type="password" required value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              placeholder="REPITA SU CONTRASEÑA"
              className="w-full bg-white border border-black
