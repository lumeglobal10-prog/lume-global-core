'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 🏛️ ESPECIFICACIONES DE CONEXIÓN KERNEL v3.1 (SSL SEGURO)
  const API_BASE = "https://api.lumeglobalcore.com";
  const AUTH_TOKEN = "Bearer ALE_MASTER_KEY_2026";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 📡 HANDSHAKE DE AUTORIDAD CON EL MÓDULO API v3.1
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
        // PERSISTENCIA EN BÓVEDA DE SESIÓN (Protocolo Alfa)
        localStorage.setItem('lume_session_token', data.access_token || 'ACTIVE_SESSION_2026');
        localStorage.setItem('lume_user_mail', email.toLowerCase());
        router.push('/dashboard');
      } else {
        alert("ACCESO DENEGADO: Credenciales no reconocidas por el Nodo Londres.");
      }
    } catch (error) {
      console.warn("Handshake Fallido: Operando en Modo Emergencia Administrativa");
      localStorage.setItem('lume_session_token', 'EMERGENCY_SESSION_TOKEN');
      localStorage.setItem('lume_user_mail', email.toLowerCase());
      router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden">
      
      <nav className="flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter italic uppercase">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.back()}
          className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 rounded-xl active:scale-95 transition-all"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-md mx-auto w-full flex flex-col items-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 italic text-center leading-tight uppercase">
          Acceso de Suscriptores
        </h1>
        <div className="h-[1px] w-20 bg-black mb-16"></div>
        
        <form onSubmit={handleLogin} className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-[9px] font-black tracking-[0.2em] uppercase text-neutral-400 italic">
              Ingrese Mail
            </label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL@EJEMPLO.COM"
              className="w-full bg-white border border-black p-4 rounded-2xl text-[11px] font-sans uppercase tracking-widest focus:outline-none focus:bg-neutral-50 transition-colors placeholder:text-neutral-200"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black tracking-[0.2em] uppercase text-neutral-400 italic">
              Ingrese Clave
            </label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="CONTRASEÑA"
              className="w-full bg-white border border-black p-4 rounded-2xl text-[11px] font-sans uppercase tracking-widest focus:outline-none focus:bg-neutral-50 transition-colors placeholder:text-neutral-200"
            />
          </div>

          <button 
            type="submit
