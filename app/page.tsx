import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = "L U M E";

  return (
    <main className="flex flex-col h-screen w-full bg-white text-black font-sans overflow-hidden">
      
      {/* HEADER */}
      <nav className="w-full p-6 md:p-8 flex justify-between items-center shrink-0 z-50">
        <div className="text-sm font-black tracking-[0.4em] uppercase">
          {siteName}
        </div>
        {/* Botón de Logueo/Sign In */}
        <Link href="/login">
          <button className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
            Sign In
          </button>
        </Link>
      </nav>

      {/* ÁREA CENTRAL */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 min-h-0">
        
        <div className="text-center mb-4 md:mb-6 shrink-0">
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight lowercase">
            absolute precision.
          </h1>
        </div>
        
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center justify-center">
          <HeroSlider />
          
          {/* Botón de Planes/Suscripción debajo del slider */}
          <Link href="/pricing" className="mt-6 group flex items-center gap-2">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase border-b border-black pb-1 group-hover:pr-4 transition-all">
              Ver Planes de Suscripción
            </span>
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full p-6 mt-auto border-t border-neutral-100 flex flex-col items-center gap-2 shrink-0 bg-white">
        <p className="max-w-2xl text-[8px] md:text-[9px] font-mono text-neutral-700 text-center leading-relaxed tracking-[0.15em] uppercase">
          LUMEGLOBALCORE.COM ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE.
        </p>
        <div className="flex gap-8 font-mono text-[10px] text-neutral-600 uppercase pb-2">
          {/* Enlaces a Términos y Privacidad */}
          <Link href="/terms" className="hover:text-black transition-colors underline underline-offset-4 text-neutral-500">
            [ Términos ]
          </Link>
          <Link href="/privacy" className="hover:text-black transition-colors underline underline-offset-4 text-neutral-500">
            [ Privacidad ]
          </Link>
        </div>
      </footer>

    </main>
  );
}
