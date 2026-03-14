import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20">
      
      {/* NAVEGACIÓN SUPERIOR: RETORNO A INICIO */}
      <nav className="flex justify-start">
        <Link href="/">
          <button className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
            ← INICIO
          </button>
        </Link>
      </nav>

      {/* CONTENIDO CENTRAL: ACCESO AL SISTEMA */}
      <div className="max-w-md mx-auto w-full flex flex-col items-center py-12">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2 italic text-center">ACCESO AL CORE.</h1>
        <div className="h-1 w-20 bg-black mb-12"></div>
        
        <div className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-[9px] font-black tracking-[0.2em] uppercase text-neutral-400 italic">
              Identificación de Suscriptor
            </label>
            <input 
              type="email" 
              placeholder="EMAIL@EJEMPLO.COM"
              className="w-full bg-white border border-black p-4 text-[11px] font-mono uppercase tracking-widest focus:outline-none focus:bg-neutral-50 transition-colors placeholder:text-neutral-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black tracking-[0.2em] uppercase text-neutral-400 italic">
              Protocolo de Seguridad
            </label>
            <input 
              type="password" 
              placeholder="CONTRASEÑA"
              className="w-full bg-white border border-black p-4 text-[11px] font-mono uppercase tracking-widest focus:outline-none focus:bg-neutral-50 transition-colors placeholder:text-neutral-300"
            />
          </div>

          <button className="w-full bg-black text-white p-5 text-[12px] font-black uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all shadow-xl active:scale-95">
            INGRESAR
          </button>
          
          <div className="text-center">
            <Link href="/pricing" className="text-[9px] font-bold tracking-[0.2em] uppercase hover:underline underline-offset-4">
              ¿No tiene una suscripción activa? Ver planes
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER UNIFICADO LUME CORE */}
      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="flex space-x-8">
          <Link href="/terms" className="text-[9px] font-black tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="text-[9px] font-black tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Privacidad
          </Link>
        </div>
        <div className="text-[10px] font-mono tracking-[0.5em] text-neutral-400 uppercase">
          LUME GLOBAL CORE // 2026
        </div>
      </footer>
    </main>
  );
}
