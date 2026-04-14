'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState({ nombre: 'CORE', precio: '49' });
  const [loading, setLoading] = useState(false);
  const [userMail, setUserMail] = useState('');

  // 🌐 ESPECIFICACIONES SINCRO: TÚNEL NGINX (DIRECTIVA LGC V5.8)
  const API_BASE = "https://lumeglobalcore.com/api";
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
    try {
      // Endpoint rectificado según Módulo de Pagos (Lume 20/30)
      const response = await fetch(`${API_BASE}/v1/payments/checkout`, {
        method: 'POST',
        headers: LUME_HEADERS,
        body: JSON.stringify({ 
          email: userMail, 
          plan: selectedPlan.nombre,
          amount: selectedPlan.precio,
          gateway: 'PADDLE'
        }),
      });

      if (response.ok) {
        alert("PROTOCOLO DE PAGO INICIADO: Sesión registrada en el Nodo San Pablo.");
        router.push('/dashboard');
      } else {
        alert("ERROR: El Módulo de Pagos (Lume 20/30) rechazó la solicitud.");
      }
    } catch (error) {
      console.warn("Fallo de Conexión: Operando en Modo Emergencia Administrativa");
      router.push('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden">
      
      <nav className="flex justify-between items-center w-full shrink-0">
        <div className="text-[10px] font-black tracking-[0.5em] uppercase italic">
          LUME
        </div>
        <button 
          onClick={() => router.back()}
          className="text-[9px] font-bold tracking-[0.2em] uppercase border border-black px-6 py-2 rounded-full active:scale-95 transition-all hover:bg-black hover:text-white"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-md mx-auto w-full flex flex-col items-center py-12 flex-grow justify-center">
        {/* TÍTULO ESTILO KARADA DECO */}
        <h1 className="text-4xl md:text-5xl font-serif font-light italic text-center lowercase first-letter:uppercase mb-12">
          Pasarela de pagos.
        </h1>
        
        <div className="w-full border border-black/5 p-8 rounded-[32px] mb-8 space-y-6 bg-neutral-50/50">
          <div className="flex justify-between items-end">
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-neutral-400 italic">Plan seleccionado</span>
            <span className="text-xl font-serif italic">{selectedPlan.nombre}</span>
          </div>
          <div className="flex justify-between items-end border-t border-black/5 pt-6">
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-neutral-400 italic">Total a pagar</span>
            <span className="text-4xl font-serif font-light italic tracking-tighter">${selectedPlan.precio} <span className="text-[10px] font-sans not-italic font-bold text-neutral-300">USD</span></span>
          </div>
        </div>

        <div className="w-full space-y-10">
          <div className="space-y-4 text-center">
            <label className="text-[8px] font-bold tracking-[0.4em] uppercase text-black/30 italic">
              Método de procesamiento
            </label>
            
            <div className="relative">
              <select 
                className="w-full bg-white border border-black/5 p-5 rounded-2xl text-[10px] font-bold uppercase tracking-widest focus:outline-none appearance-none cursor-pointer hover:bg-neutral-50 transition-colors shadow-sm"
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
            className="w-full bg-black text-white p-6 rounded-3xl text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-neutral-800 transition-all shadow-xl active:scale-95 flex justify-center items-center"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : "EJECUTAR PAGO"}
          </button>
        </div>
      </div>

      <footer className="flex flex-col items-center space-y-8 pt-20 shrink-0">
        <div className="flex flex-wrap justify-center gap-10 font-sans text-neutral-300">
          <Link href="/terms" className="text-[8px] font-bold tracking-[0.2em] uppercase hover:text-black underline underline-offset-8 decoration-1 transition-all">
            Términos
          </Link>
          <Link href="/privacy" className="text-[8px] font-bold tracking-[0.2em] uppercase hover:text-black underline underline-offset-8 decoration-1 transition-all">
            Privacidad
          </Link>
          <Link href="/refund" className="text-[8px] font-bold tracking-[0.2em] uppercase hover:text-black underline underline-offset-8 decoration-1 transition-all">
            Reembolso
          </Link>
        </div>
        <div className="text-[8px] font-bold tracking-[0.5em] text-neutral-200 uppercase italic">
          LUME GLOBAL CORE 🌎 // 2026 // NODO_SAN_PABLO_01
        </div>
      </footer>
    </main>
  );
}
