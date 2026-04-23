'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [showTokenInput, setShowTokenInput] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  
  const [formData, setFormData] = useState({
    nombre_empresa: '',
    numero_telefono: '+',
    email: '',
    password: '',
    one_time_promo_token: '' // 🏛️ REQUERIMIENTO 3: NOMENCLATURA RECTIFICADA
  });

  const API_BASE = "/api/v1";

  // 🏛️ REQUERIMIENTO 3: VALIDACIÓN DE EMAIL DUPLICADO
  const checkEmail = async (email: string) => {
    if (email.length < 5) return;
    try {
      const res = await fetch(`${API_BASE}/auth/check-email?email=${email.toLowerCase()}`, {
        headers: { 'X-Lume-Node': 'SAN_PABLO_01' }
      });
      if (res.status === 409) setEmailExists(true);
      else setEmailExists(false);
    } catch (e) {
      console.warn("LGC: FALLO DE VALIDACIÓN DE IDENTIDAD");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (emailExists) return;
    
    // VALIDACIÓN FORZOSA E.164 (REQ 3)
    if (!formData.numero_telefono.startsWith('+') || formData.numero_telefono.length < 8) {
      alert("ERROR: FORMATO DE TELÉFONO INVÁLIDO (E.164 REQUERIDO)");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-Lume-Node': 'SAN_PABLO_01' 
        },
        body: JSON.stringify({
          ...formData,
          email: formData.email.toLowerCase(),
        }),
      });

      if (res.ok) {
        alert("PROSPECTO CAPTURADO: VALIDANDO IDENTIDAD CORPORATIVA");
        router.push('/login/');
      } else {
        alert('ERROR: RECHAZADO POR KERNEL ALPHA');
      }
    } catch (error) {
      alert('FALLO CRÍTICO DE CONEXIÓN NODO SAN PABLO');
    } finally {
      setLoading(false);
    }
  };

  return (
    // 📐 REQUERIMIENTO 2: VIEWPORT "ZERO-SCROLL" (100VH)
    <main className="h-screen w-full bg-[#FFFFFF] text-black flex flex-col items-center justify-between p-10 uppercase tracking-[0.2em] zero-scroll overflow-hidden">
      
      {/* 🏛️ HEADER: ISOTIPO MAESTRO / VOLVER */}
      <nav className="w-full flex justify-between items-center shrink-0 z-50">
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
        <button 
          onClick={() => router.back()} 
          className="text-black text-[11px] font-[300] tracking-[0.3em] cursor-pointer font-serif border-b border-black/20 pb-1 uppercase bg-transparent"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-md w-full flex flex-col justify-center flex-grow">
        <h1 className="text-4xl md:text-5xl font-[300] tracking-[0.1em] leading-tight text-center mb-12 font-serif uppercase">
          REGISTRO DE ENTIDAD.
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" required placeholder="NOMBRE DE EMPRESA" 
            className="w-full bg-white border border-black p-5 text-[11px] outline-none rounded-[15px] font-sans placeholder-uppercase"
            onChange={(e) => setFormData({...formData, nombre_empresa: e.target.value})}
          />

          <input 
            type="tel" required value={formData.numero_telefono}
            placeholder="NÚMERO DE TELÉFONO (+E.164)" 
            className="w-full bg-white border border-black p-5 text-[11px] outline-none rounded-[15px] font-sans placeholder-uppercase"
            onChange={(e) => setFormData({...formData, numero_telefono: e.target.value})}
          />

          <div>
            <input 
              type="email" required placeholder="EMAIL CORPORATIVO" 
              className={`w-full bg-white border p-5 text-[11px] outline-none rounded-[15px] font-sans placeholder-uppercase ${emailExists ? 'border-red-600' : 'border-black'}`}
              onBlur={(e) => checkEmail(e.target.value)}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {emailExists && <p className="text-[9px] text-red-600 mt-2 tracking-[0.2em] font-serif uppercase">EL EMAIL YA EXISTE EN LA BASE DE DATOS</p>}
          </div>

          <input 
            type="password" required placeholder="CONTRASEÑA" 
            className="w-full bg-white border border-black p-5 text-[11px] outline-none rounded-[15px] font-sans placeholder-uppercase"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />

          <div className="flex flex-col items-center pt-4">
            {!showTokenInput ? (
              <span 
                onClick={() => setShowTokenInput(true)}
                className="text-[10px] font-[300] tracking-[0.5em] font-serif mb-6 cursor-pointer uppercase border-b border-black/10"
              >
                TOKEN
              </span>
            ) : (
              <input 
                type="text" 
                placeholder="INGRESAR TOKEN DE ACCESO"
                className="w-full border border-black p-5 text-[11px] outline-none rounded-[15px] font-sans mb-6 placeholder-uppercase"
                onChange={(e) => setFormData({...formData, one_time_promo_token: e.target.value})}
              />
            )}
            
            <button 
              type="submit" 
              disabled={loading || emailExists}
              className="w-full bg-black text-white p-6 rounded-[50px] text-[11px] font-[300] tracking-[0.5em] transition-none disabled:opacity-30 font-serif uppercase"
            >
              {loading ? "PROCESANDO..." : "EJECUTAR REGISTRO"}
            </button>
          </div>
        </form>
      </div>

      {/* 🏛️ FOOTER UNIFICADO V5.2.5 */}
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
