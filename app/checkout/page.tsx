'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// NOTA TÉCNICA: Se asume la configuración de fuentes Serif (Cormorant) y Sans (Inter) en el Layout global.

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState({ nombre: 'CORE', precio: '49' });
  const [loading, setLoading] = useState(false);
  const [userMail, setUserMail] = useState('');

  // 🌐 ESPECIFICACIONES NODO SAN PABLO (V6.5) - PUERTO RECTIFICADO 8081
  const API_BASE = "https://lumeglobalcore.com:8081";
  const LUME_HEADERS = {
    'Content-Type': 'application/json',
    'X-Lume-Node': 'SAN_PABLO',
    'X-Environment': 'PRODUCTION'
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
      const response = await fetch(`${API_BASE}/api/v1/payments/init`, {
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
        alert("PROTOCOLO DE PAGO INICIADO: Transacción registrada en el Nodo San Pablo.");
        router.push('/dashboard');
      } else {
        alert("ERROR: El Módulo de Pagos rechazó la solicitud.");
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
      
      <nav className="flex justify-between items-center w-full">
        {/* LOGO: INMUTABLE POR DIRECTIVA ALE */}
        <div className="text-xl font-black tracking-tighter italic uppercase">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.back()}
          className="text-[10px] font-medium tracking-[0.3em] uppercase border border-black px-6 py-2 rounded-xl active:scale-95 transition-all hover:bg-black hover:text-white"
        >
          ← VOLVER
        </button>
      </nav>

      <div className="max-w-md mx-auto w-full flex flex-col items-center py-12">
        {/* TÍTULO: TIPOGRAFÍA SERIF (ESTILO KARADA) */}
        <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-4 italic text-center lowercase first-letter:uppercase">
          Pasarela de pagos
        </h1>
        <div className="h-[1px] w-20 bg-black/20 mb-12"></div>
        
        <div className="w-full border border-black/10 p-8 rounded-2xl mb-8 space-y-4 bg-neutral-50/30 backdrop-blur-sm">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-neutral-400 italic">Plan Seleccionado</span>
            <span className="text-lg font-serif italic font-medium">{selectedPlan.nombre}</span>
          </div>
          <div className="flex justify-between items-end border-t border-neutral-100 pt-4">
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-neutral-400 italic">Total a Pagar</span>
            <span className="text-3xl font-serif font-light italic tracking-tighter">${selectedPlan.precio} USD</span>
          </div>
        </div>

        <div className="w-full space-y-8">
          <div className="space-y-4">
            <label className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-black italic leading-relaxed block text-center">
              Seleccione el método de procesamiento
            </label>
            
            <div className="relative">
              <select 
                className="w-full bg-white border border-black/20 p-5 rounded-2xl text-[11px] font-sans font-medium uppercase tracking-widest focus:outline-none appearance-none cursor-pointer hover:bg-neutral-50 transition-colors"
              >
                <option value="paddle">PADDLE // GLOBAL GATEWAY (ACTIVO)</option>
                <option value="crypto" disabled>CRYPTO // ENCRYPTED (PRÓXIMAMENTE)</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[10px]">▼</div>
            </div>
          </div>

          <button 
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-black text-white p-6 rounded-2xl text-[12px] font-sans font-bold uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all shadow-lg active:scale-95 flex justify-center items-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : "EJECUTAR PAGO"}
          </button>
        </div>
      </div>

      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="flex flex-wrap justify-center gap-8 font-sans text-neutral-400">
          <Link href="/terms" className="text-[9px] font-medium tracking-[0.2em] uppercase hover:text-black underline underline-offset-4 decoration-1 transition-all">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="text-[9px] font-medium tracking-[0.2em] uppercase hover:text-black underline underline-offset-4 decoration-1 transition-all">
            Privacidad
          </Link>
          <Link href="/refund" className="text-[9px] font-medium tracking-[0.2em] uppercase hover:text-black underline underline-offset-4 decoration-1 transition-all">
            Política de Reembolso
          </Link>
        </div>
        <div className="text-[10px] font-sans font-bold tracking-[0.4em] text-neutral-300 uppercase italic text-center">
          LUME GLOBAL CORE 🌎 // 2026
        </div>
      </footer>
    </main>
  );
}
