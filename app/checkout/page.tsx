'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState({ nombre: 'CORE', precio: '49' });
  const [loading, setLoading] = useState(false);
  const [userMail, setUserMail] = useState('');

  // 🌐 RECTIFICACIÓN: PUNTERO RELATIVO AL GATEWAY NGINX (PROTOCOLO LGC V5.8)
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
      // ENDPOINT RECTIFICADO: VALIDACIÓN BINARIA (PAGO / VARIABLE_ID)
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
        router.push('/dashboard');
      } else {
        alert("ERROR: EL MÓDULO DE PAGOS (LUME 20/30) RECHAZÓ LA TRANSACCIÓN.");
      }
    } catch (error) {
      console.error("LGC_CORE: FALLO DE CONEXIÓN CON PASARELA. MODO EMERGENCIA.");
      router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden uppercase tracking-[0.2em]">
      
      {/* 📐 RECTIFICACIÓN: NAVEGACIÓN RECTA */}
      <nav className="flex justify-between items-center w-full shrink-0 border-b border-black pb-8">
        <div className="text-[10px] font-black tracking-[0.5em] italic">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.back()}
          className="text-[10px] font-black tracking-[0.3em] bg-black text-white px-8 py-3 rounded-none transition-all hover:bg-neutral-900"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-xl mx-auto w-full flex flex-col items-center py-24 flex-grow justify-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-center uppercase mb-20">
          PASARELA DE PAGOS.
        </h1>
        
        {/* 📐 CONTENEDOR RECTO: SIN SOMBRAS, SIN CURVAS */}
        <div className="w-full border border-black p-10 rounded-none mb-12 space-y-10 bg-white">
          <div className="flex justify-between items-center border-b border-black/10 pb-6">
            <span className="text-[10px] font-black tracking-[0.5em]">PLAN</span>
            <span className="text-2xl font-black">{selectedPlan.nombre}</span>
          </div>
          <div className="flex justify-between items-center pt-4">
            <span className="text-[10px] font-black tracking-[0.5em]">TOTAL</span>
            <span className="text-5xl font-black tracking-tighter">
              ${selectedPlan.precio} <span className="text-[12px]">USD</span>
            </span>
          </div>
        </div>

        <div className="w-full space-y-12">
          <div className="space-y-4">
            <label className="text-[10px] font-black tracking-[0.5em] block text-center">
              MÉTODO DE PROCESAMIENTO
            </label>
            
            <div className="relative">
              <select 
                className="w-full bg-white border border-black p-5 rounded-none text-[10px] font-black tracking-[0.4em] focus:outline-none appearance-none cursor-pointer hover:bg-neutral-50 transition-colors uppercase"
              >
                <option value="paddle">PADDLE // GLOBAL GATEWAY (ACTIVO)</option>
                <option value="crypto" disabled>CRYPTO // ENCRYPTED (IDLE)</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[10px]">▼</div>
            </div>
          </div>

          <button 
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-black text-white p-7 rounded-none text-[11px] font-black tracking-[0.6em] transition-all hover:bg-neutral-900 flex justify-center items-center disabled:opacity-50"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-none animate-spin"></div>
            ) : "EJECUTAR PAGO"}
          </button>
        </div>
      </div>

      {/* 📐 FOOTER RECTO LUME */}
      <footer className="flex flex-col items-center space-y-10 pt-20 shrink-0 border-t border-black">
        <div className="flex flex-wrap justify-center gap-12 text-black font-black">
          <Link href="/terms" className="text-[10px] tracking-[0.3em] hover:opacity-50 transition-all">TÉRMINOS</Link>
          <Link href="/privacy" className="text-[10px] tracking-[0.3em] hover:opacity-50 transition-all">PRIVACIDAD</Link>
          <Link href="/refund" className="text-[10px] tracking-[0.3em] hover:opacity-50 transition-all">REEMBOLSO</Link>
        </div>
        <div className="text-[9px] font-black tracking-[0.6em] text-black/10 italic uppercase">
          LUME GLOBAL CORE 🌎 // 2026 // NODO_SAN_PABLO_01
        </div>
      </footer>
    </main>
  );
}
