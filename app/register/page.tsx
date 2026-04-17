'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [promoActive, setPromoActive] = useState(false);
  const [llaveError, setLlaveError] = useState(false);
  
  const [formData, setFormData] = useState({
    nombre_empresa: '',
    numero_telefono: '',
    email: '',
    password: '',
    token_hash: ''
  });

  // 🌐 ESPECIFICACIONES DE CONEXIÓN: NODO SAN PABLO
  const API_BASE = "/api/v1";

  useEffect(() => {
    if (searchParams.get('promo')) setPromoActive(true);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLlaveError(false);

    try {
      const res = await fetch(`${API_BASE}/register`, {
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
        // POP-UP INFORMATIVO (REQ 4)
        console.log("PROSPECTO CAPTURADO: VALIDANDO IDENTIDAD CORPORATIVA");
        router.push('/login');
      } else if (res.status === 403) {
        setLlaveError(true);
      } else {
        alert('ERROR: RECHAZADO POR KERNEL ALPHA');
      }
    } catch (error) {
      alert('FALLO CRÍTICO DE CONEXIÓN');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black font-sans flex flex-col items-center justify-center p-8 md:p-20 uppercase tracking-[0.2em]">
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-8 border-b border-black">
        <div className="text-[10px] font-black italic tracking-[0.5em]">LUME 🌎</div>
        <button 
          onClick={() => router.back()} 
          className="text-[10px] font-black bg-black text-white px-8 py-3 rounded-none transition-all hover:bg-neutral-900"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-md w-full space-y-12 py-24">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-center uppercase">
          REGISTRO DE ENTIDAD.
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <input 
              type="text" required 
              onChange={(e) => setFormData({...formData, nombre_empresa: e.target.value})}
              placeholder="NOMBRE DE EMPRESA" 
              className="w-full bg-white border border-black p-5 text-[10px] font-black outline-none focus:bg-neutral-50 rounded-none uppercase placeholder-uppercase"
            />
          </div>

          <div className="space-y-3">
            <input 
              type="tel" required 
              onChange={(e) => setFormData({...formData, numero_telefono: e.target.value})}
              placeholder="NÚMERO DE TELÉFONO (E.164)" 
              className="w-full bg-white border border-black p-5 text-[10px] font-black outline-none focus:bg-neutral-50 rounded-none uppercase placeholder-uppercase"
            />
          </div>

          <div className="space-y-3">
            <input 
              type="email" required 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="EMAIL CORPORATIVO" 
              className="w-full bg-white border border-black p-5 text-[10px] font-black outline-none focus:bg-neutral-50 rounded-none uppercase placeholder-uppercase"
            />
          </div>

          <div className="space-y-3">
            <input 
              type="password" required 
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="CONTRASEÑA" 
              className="w-full bg-white border border-black p-5 text-[10px] font-black outline-none focus:bg-neutral-50 rounded-none uppercase placeholder-uppercase"
            />
          </div>

          {/* 🔑 LLAVE DE ACCESO (SIGILO) */}
          <div className="pt-4">
            <input 
              type="text"
              placeholder="token"
              style={{ opacity: promoActive ? 1.0 : 0.1 }}
              className={`w-full border p-5 text-[10px] font-black outline-none transition-all rounded-none ${llaveError ? 'border-red-600 text-red-600' : 'border-black'}`}
              onChange={(e) => setFormData({...formData, token_hash: e.target.value})}
            />
            {llaveError && <p className="text-[9px] font-black text-red-600 mt-2 tracking-widest text-center">LLAVE INVÁLIDA</p>}
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-black text-white p-6 rounded-none text-[10px] font-black tracking-[0.6em] transition-all hover:bg-neutral-900 disabled:opacity-50"
          >
            {loading ? "PROCESANDO..." : "EJECUTAR REGISTRO"}
          </button>
        </form>
      </div>

      {/* POP-UP INFORMATIVO (REQ 4) */}
      <div className="fixed bottom-10 right-10 bg-black text-white p-5 text-[8px] font-black tracking-[0.4em] uppercase animate-pulse">
        PROSPECTO CAPTURADO: VALIDANDO IDENTIDAD CORPORATIVA
      </div>
    </main>
  );
}
