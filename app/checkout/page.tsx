'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState({ nombre: 'CORE', precio: '49' });
  const [loading, setLoading] = useState(false);
  const [userMail, setUserMail] = useState('');

  // 🌐 DIRECCIONAMIENTO NODO SAN PABLO: RUTA RELATIVA PARA TÚNEL SSL
  const API_BASE = "/api/v1";
  
  const LUME_HEADERS = {
    'Content-Type': 'application/json',
    'X-Lume-Node': 'SAN_PABLO_01'
  };

  useEffect(() => {
    const planName = localStorage.getItem('lume_selected_plan') || 'CORE';
    const mail = localStorage.getItem('lume_user_mail') || '';
    setUserMail(mail);

    const precios: Record<string, string> = {
      'CORE': '49',
      'ADVANCE': '99',
      'PROFESIONAL': '199',
      'BUSINESS': '499'
    };
    
    setSelectedPlan({
      nombre: planName,
      precio: precios[planName] || '49'
    });
  }, []);

  const handlePayment = async () => {
    setLoading(true);
    const token = localStorage.getItem('lume_session_token');
    
    try {
      // ENDPOINT RECTIFICADO: VALIDACIÓN BINARIA (LUME 20/30)
      const response = await fetch(`${API_BASE}/payments/checkout`, {
        method: 'POST',
        headers: {
          ...LUME_HEADERS,
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
          email: userMail, 
          plan: selectedPlan.nombre,
          amount: selectedPlan.precio,
          gateway: 'PADDLE'
        }),
      });

      if (response.ok) {
        alert("PROTOCOLO DE PAGO INICIADO: SESIÓN REGISTRADA EN NODO SAN PABLO.");
        router.push('/dashboard/');
      } else {
        alert("ERROR: EL MÓDULO DE PAGOS (LUME 20/30) RECHAZÓ LA TRANSACCIÓN.");
      }
    } catch (error) {
      console.error("LGC_CORE: FALLO DE CONEXIÓN CON PASARELA.");
      router.push('/dashboard/');
    } finally {
      setLoading(false);
    }
  };

  return (
    // 📐 REQUERIMIENTO 2: VIEWPORT "ZERO-SCROLL" (100VH)
    <main className="h-screen w-full bg-[#FFFFFF] text-black flex flex-col justify-between p-8 md:p-12 overflow-hidden uppercase tracking-[0.2em] zero-scroll">
      
      {/* 🏛️ REQUERIMIENTO 2: ISOTIPO MAESTRO IZQUIERDA / ACCIÓN DERECHA */}
      <nav className="flex justify-between items-center w-full shrink-0 border-b border-black pb-8">
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
          className="text-black text-[11px] font-[300] tracking-[0.3em] transition-none font-serif border-none bg-none p-0 cursor-pointer uppercase"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-xl mx-auto w-full flex flex-col items-center py-6 flex-grow justify-center">
        <h1 className="text-4xl md:text-6xl font-[300] tracking-[0.1em] leading-tight text-center uppercase mb-12 font-serif">
          PASARELA DE PAGOS.
        </h1>
        
        {/* CONTENEDOR TÉCNICO RECTO */}
        <div className="w-full border border-black p-12 rounded-none mb-12 space-y-12 bg-white shadow-none">
          <div className="flex justify-between items-center border-b border-black/10 pb-8">
            <span className="text-[11px] font-[300] tracking-[0.5em] font-serif uppercase">PLAN</span>
            <span className="text-2xl font-[400] font-serif uppercase">{selectedPlan.nombre}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-[300] tracking-[0.5em] font-serif uppercase">TOTAL</span>
            <span className="text-5xl font-[300] tracking-tighter font-serif uppercase">
              ${selectedPlan.precio} <span className="text-[12px] font-sans font-bold">USD</span>
            </span>
          </div>
        </div>

        <div className="w-full space-y-10">
          <div className="space-y-6">
            <label className="text-[10px] font-[300] tracking-[0.5em] block text-center font-serif uppercase">
              MÉTODO DE PROCESAMIENTO
            </label>
            
            <div className="relative">
              <select 
                className="w-full bg-white border border-black p-6 rounded-none text-[10px] font-[400] tracking-[0.4em] focus:outline-none appearance-none cursor-pointer transition-none uppercase font-serif"
              >
                <option value="paddle">PADDLE // GLOBAL GATEWAY (ACTIVO)</option>
                <option value="crypto" disabled>CRYPTO // ENCRYPTED (IDLE)</option>
              </select>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-[10px]">▼</div>
            </div>
          </div>

          <button 
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-black text-white p-8 rounded-none text-[11px] font-[300] tracking-[0.6em] transition-none flex justify-center items-center disabled:opacity-30 font-serif uppercase"
          >
            {loading ? (
              <div className="w-5 h-5 border border-white border-t-transparent animate-spin"></div>
            ) : "EJECUTAR PAGO"}
          </button>
        </div>
      </div>

      {/* FOOTER CON CONTRASTE OPERATIVO #333 E ISOTIPO REDUCIDO */}
      <footer className="flex flex-col items-center space-y-10 pt-12 shrink-0 border-t border-black bg-white">
        <div className="flex flex-wrap justify-center gap-14 text-[10px] font-[300] tracking-[0.3em] font-serif text-[#333] uppercase">
          <Link href="/terms/" className="transition-none hover:text-black">TÉRMINOS</Link>
          <Link href="/privacy/" className="transition-none hover:text-black">PRIVACIDAD</Link>
          <Link href="/refund/" className="transition-none hover:text-black">REEMBOLSO</Link>
        </div>
        <div className="flex flex-col items-center gap-4 pb-4">
          <Image 
            src="/LUME_UNIVERSAL_LOGO.png" 
            alt="LUME" 
            width={80} 
            height={26} 
            className="opacity-40 grayscale"
          />
          <p className="text-[9px] font-[300] tracking-[0.6em] text-[#333] opacity-40 italic uppercase font-serif text-center">
            LUME GLOBAL CORE // 2026 // NODO_SAN_PABLO_01
          </p>
        </div>
      </footer>
    </main>
  );
}
