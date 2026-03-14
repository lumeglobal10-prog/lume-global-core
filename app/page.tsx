import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20">
      
      {/* NAVEGACIÓN SUPERIOR: LOGO Y LOGIN */}
      <nav className="flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter italic uppercase">
          LUME 🌎
        </div>
        <Link href="/login">
          <button className="text-[10px] font-black tracking-[0.3em] uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
            LOG IN →
          </button>
        </Link>
      </nav>

      {/* CONTENIDO CENTRAL */}
      <div className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-none">
          LUME<br />GLOBAL<br />CORE.
        </h1>
        
        <div className="h-2 w-32 bg-black"></div>
        
        <p className="max-w-md text-[10px] md:text-[12px] font-mono uppercase tracking-[0.4em] leading-loose text-neutral-500">
          Infraestructura de alto rendimiento para la optimización autónoma de activos inmobiliarios.
        </p>

        <div className="pt-12">
          <Link href="/pricing">
            <button className="bg-black text-white px-12 py-5 text-[12px] font-black uppercase tracking-[0.5em] hover:bg-neutral-800 transition-all shadow-2xl active:scale-95">
              ENTER DASHBOARD
            </button>
          </Link>
        </div>
      </div>

      {/* FOOTER UNIFICADO LUME CORE */}
      <footer className="flex flex-col items-center space-y-6">
        <div className="flex space-x-8">
          <Link href="/terms" className="text-[9px] font-black tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="text-[9px] font-black tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
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
