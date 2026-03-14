'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();

  const paymentMethods = [
    { id: 'paddle', name: 'PADDLE // GLOBAL GATEWAY', active: true },
    { id: 'stripe', name: 'STRIPE // DEFERRED', active: false },
    { id: 'bank', name: 'TRANSFERENCIA BANCARIA // PENDING', active: false },
    { id: 'crypto', name: 'CRYPTO PROTOCOL // ENCRYPTED', active: false },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden">
      
      {/* NAVEGACIÓN SUPERIOR: LOGO Y RETORNO */}
      <nav className="flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter italic uppercase">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.back()}
          className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-all"
        >
          ← VOLVER
        </button>
      </nav>

      {/* CONTENIDO CENTRAL */}
      <div className="max-w-md mx-auto w-full flex flex-col items-center py-12">
        {/* TÍTULO CORREGIDO */}
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 italic">
          Pasarela de Pagos
        </h1>
        <div className="h-[1px] w-20 bg-black mb-16"></div>
        
        <div className="w-full space-y-8">
          <div className="space-y-4">
            {/* FRASE DE PROTOCOLO REUBICADA */}
            <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-black italic leading-relaxed block text-center">
              Seleccione el método de procesamiento para activar el protocolo de suscripción
            </label>
            
            <div className="relative">
              <select 
                className="w-full bg-white border border-black p-5 rounded-2xl text-[11px] font-bold uppercase tracking-widest focus:outline-none appearance-none cursor-pointer hover:bg-neutral-50 transition-colors"
                defaultValue="paddle"
              >
                {paymentMethods.map((method) => (
                  <option key={method.id} value={method.id} disabled={!method.active}>
                    {method.name} {!method.active && " (INACTIVO)"}
                  </option>
                ))}
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[10px]">▼</div>
            </div>
          </div>

          <button className="w-full bg-black text-white p-6 rounded-2xl text-[12px] font-black uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all shadow-xl active:scale-95">
            EJECUTAR PAGO
          </button>
        </div>
      </div>

      {/* FOOTER UNIFICADO LUME CORE */}
      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="flex space-x-8">
          <Link href="/terms" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Privacidad
          </Link>
        </div>
        <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase italic text-center">
          LUME GLOBAL CORE 🌎 // 2026
        </div>
      </footer>
    </main>
  );
}
