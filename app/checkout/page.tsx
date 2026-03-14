import Link from 'next/link';

export default function CheckoutPage() {
  const paymentMethods = [
    { id: 'paddle', name: 'PADDLE // GLOBAL GATEWAY', active: true },
    { id: 'stripe', name: 'STRIPE // DEFERRED', active: false },
    { id: 'bank', name: 'TRANSFERENCIA BANCARIA // PENDING', active: false },
    { id: 'crypto', name: 'CRYPTO PROTOCOL // ENCRYPTED', active: false },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20">
      
      {/* NAVEGACIÓN SUPERIOR: LOGO IZQUIERDA Y RETORNO DERECHA */}
      <nav className="flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter italic">
          LUME 🌎
        </div>
        <Link href="/">
          <button className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
            INICIO →
          </button>
        </Link>
      </nav>

      {/* CONTENIDO CENTRAL: HUB DE PAGOS */}
      <div className="max-w-md mx-auto w-full flex flex-col items-center py-12">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 italic">HUB DE PAGOS.</h1>
        <div className="h-1 w-20 bg-black mb-8"></div>
        
        <p className="text-[10px] font-mono tracking-widest text-neutral-500 mb-12 uppercase text-center leading-loose">
          SELECCIONE EL MÉTODO DE SUSCRIPCIÓN PARA ACTIVAR EL PROTOCOLO DE PROCESAMIENTO.
        </p>

        <div className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-[9px] font-black tracking-[0.2em] uppercase text-neutral-400 italic">
              Pasarela de Pago Global
            </label>
            <div className="relative">
              <select 
                className="w-full bg-white border border-black p-4 text-[11px] font-mono uppercase tracking-widest focus:outline-none appearance-none cursor-pointer hover:bg-neutral-50 transition-colors"
                defaultValue="paddle"
              >
                {paymentMethods.map((method) => (
                  <option key={method.id} value={method.id} disabled={!method.active}>
                    {method.name} {!method.active && " (INACTIVO)"}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[10px]">▼</div>
            </div>
          </div>

          <button className="w-full bg-black text-white p-5 text-[12px] font-black uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all shadow-xl active:scale-95">
            EJECUTAR PAGO
          </button>
        </div>
      </div>

      {/* FOOTER UNIFICADO LUME CORE CON LOGO CORRECTO */}
      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="flex space-x-8">
          <Link href="/terms?from=checkout" className="text-[9px] font-black tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Términos y Condiciones
          </Link>
          <Link href="/privacy?from=checkout" className="text-[9px] font-black tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Privacidad
          </Link>
        </div>
        <div className="text-[10px] font-mono tracking-[0.5em] text-neutral-400 uppercase">
          LUME GLOBAL CORE 🌎 // 2026
        </div>
      </footer>
    </main>
  );
                }
