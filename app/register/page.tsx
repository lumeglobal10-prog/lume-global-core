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
    numero_telefono: '+',
    email: '',
    password: '',
    token_hash: ''
  });

  // 🌐 DIRECCIONAMIENTO NODO SAN PABLO
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

  useEffect(() => {
    const promo = searchParams.get('promo');
    if (promo) {
      setPromoActive(true);
      setFormData(prev => ({ ...prev, token_hash: promo }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // VALIDACIÓN FORZOSA E.164
    if (!formData.numero_telefono.startsWith('+') || formData.numero_telefono.length < 8) {
      alert("ERROR: FORMATO DE TELÉFONO INVÁLIDO (E.164 REQUERIDO)");
      return;
    }

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
        alert("PROSPECTO CAPTURADO: VALIDANDO IDENTIDAD CORPORATIVA");
        router.push('/login');
      } else if (res.status === 403) {
        setLlaveError(true);
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
    <main className="min-h-screen bg-[#FFFFFF] text-black flex flex-col items-center justify-center p-8 uppercase tracking-[0.2em]">
      {/* NAVEGACIÓN V5.1 */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-10 border-b border-black">
        <div className="text-[12px] font-[300] italic tracking-[0.5em] font-serif">LUME 🌎</div>
        <button 
          onClick={() => router.back()} 
          className="text-[10px] font-[300] bg-black text-white px-10 py-4 transition-none font-serif"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-md w-full py-32">
        <h1 className="text-4xl md:text-5xl font-[300] tracking-[0.1em] leading-tight text-center mb-16 font-serif">
          REGISTRO DE ENTIDAD.
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            type="text" required 
            placeholder="NOMBRE DE EMPRESA" 
            className="w-full bg-white border border-black p-5 text-[11px] outline-none transition-none font-sans"
            onChange={(e) => setFormData({...formData, nombre_empresa: e.target.value})}
          />

          <input 
            type="tel" required 
            value={formData.numero_telefono}
            placeholder="NÚMERO DE TELÉFONO (+E.164)" 
            className="w-full bg-white border border-black p-5 text-[11px] outline-none transition-none font-sans"
            onChange={(e) => setFormData({...formData, numero_telefono: e.target.value})}
          />

          <input 
            type="email" required 
            placeholder="EMAIL CORPORATIVO" 
            className="w-full bg-white border border-black p-5 text-[11px] outline-none transition-none font-sans"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />

          <input 
            type="password" required 
            placeholder="CONTRASEÑA" 
            className="w-full bg-white border border-black p-5 text-[11px] outline-none transition-none font-sans"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />

          <div className="pt-4">
            <input 
              type="text"
              placeholder="token"
              value={formData.token_hash}
              style={{ opacity: promoActive ? 1.0 : 0.1 }}
              className={`w-full border p-5 text-[11px] outline-none transition-none font-sans ${llaveError ? 'border-red-600 text-red-600' : 'border-black'}`}
              onChange={(e) => setFormData({...formData, token_hash: e.target.value})}
            />
            {llaveError && <p className="text-[9px] font-[300] text-red-600 mt-2 tracking-[0.3em] text-center font-serif">LLAVE_EXPIRADA</p>}
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-black text-white p-6 text-[11px] font-[300] tracking-[0.5em] transition-none disabled:opacity-30 font-serif"
          >
            {loading ? "PROCESANDO..." : "EJECUTAR REGISTRO"}
          </button>
        </form>
      </div>

      {/* FOOTER LEGAL INMUTABLE */}
      <footer className="absolute bottom-0 w-full p-10 flex justify-center gap-12 text-[9px] font-[300] tracking-[0.3em] font-serif opacity-40">
        <Link href="/terms">TÉRMINOS</Link>
        <Link href="/privacy">PRIVACIDAD</Link>
        <Link href="/refund">REEMBOLSO</Link>
      </footer>
    </main>
  );
}
