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
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden uppercase tracking-widest">
      
      <nav className="flex justify-between items-center w-full shrink-0">
        <div className="text-[10px] font-black tracking-[0.5em] italic">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.back()}
          className="text-[9px] font-bold tracking-[0.2em] border border-black px-6 py-2 rounded-full active:scale-95 transition-all hover:bg-black hover:text-white"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-md mx-auto w-full flex flex-col items-center py-12 flex-grow justify-center">
        <h1 className="text-4xl md:text-5xl font-serif font-light italic text-center lowercase first-letter:uppercase mb-12 normal-case tracking-normal">
          Pasarela de pagos.
        </h1>
        
        <div className="w-full border border-black/5 p-8 rounded-[32px] mb-8 space-y-6 bg-neutral-50/50">
          <div className="flex justify-between items-end">
            <span className="text-[8px] font-black tracking-[0.3em] text-neutral-400 italic">PLAN SELECCIONADO</span>
            <span className="text-xl font-serif italic normal-case tracking-normal">{selectedPlan.nombre}</span>
          </div>
          <div className="flex justify-between items-end border-t border-black/5 pt-6">
            <span className="text-[8px] font-black tracking-[0.3em] text-neutral-400 italic">TOTAL A PAGAR</span>
            <span className="text-4xl font-serif font-light italic tracking-tighter normal-case">
              ${selectedPlan.precio} <span className="text-[10px] font-sans not-italic font-bold text-neutral-300 uppercase">USD</span>
            </span>
          </div>
        </div>

        <div className="w-full space-y-10">
          <div className="space-y-4 text-center">
            <label className="text-[8px] font-black tracking-[0.4em] text-black/30 italic">
              MÉTODO DE PROCESAMIENTO
            </label>
            
            <div className="relative">
              <select 
                className="w-full bg-white border border-black/5 p-5 rounded-2xl text-[10px] font-bold tracking-widest focus:outline-none appearance-none cursor-pointer hover:bg-neutral-50 transition-colors shadow-sm uppercase"
              >
                <option value="paddle">PADDLE // GLOBAL GATEWAY (ACTIVO)</option>
                <option value="crypto" disabled>CRYPTO // ENCRYPTED (IDLE)</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[8px] opacity-20">▼</div>
            </div>
          </div>

          <button 
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-black text-white p-6 rounded-3xl text-[10px] font-bold tracking-[0.5em] shadow-xl active:scale-95 flex justify-center items-center disabled:opacity-50"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : "EJECUTAR PAGO"}
          </button>
        </div>
      </div>

      <footer className="flex flex-col items-center space-y-8 pt-20 shrink-0">
        <div className="flex flex-wrap justify-center gap-10 text-neutral-300">
          <Link href="/terms" className="text-[8px] font-black tracking-[0.2em] hover:text-black underline underline-offset-8 decoration-1">
            TÉRMINOS
          </Link>
          <Link href="/privacy" className="text-[8px] font-black tracking-[0.2em] hover:text-black underline underline-offset-8 decoration-1">
            PRIVACIDAD
          </Link>
          <Link href="/refund" className="text-[8px] font-black tracking-[0.2em] hover:text-black underline underline-offset-8 decoration-1">
            REEMBOLSO
          </Link>
        </div>
        <div className="text-[8px] font-black tracking-[0.5em] text-neutral-200 italic">
          LUME GLOBAL CORE 🌎 // 2026 // NODO_SAN_PABLO_01
        </div>
      </footer>
    </main>
  );
}
