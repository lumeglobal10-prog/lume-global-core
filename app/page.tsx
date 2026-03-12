import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = "L U M E";

  return (
    <main className="flex flex-col min-h-screen bg-white text-black font-sans overflow-x-hidden">
      
      {/* HEADER */}
      <nav className="w-full p-6 md:p-8 flex justify-between items-center shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
          Sign In
        </button>
      </nav>

      {/* CUERPO CENTRAL */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 py-2 md:py-4">
        
        <div className="text-center mb-6 md:mb-8 shrink-0">
          <p className="text-2xl md:text-4xl font-extralight tracking-tight text-neutral-400 leading-none uppercase">Precision</p>
          <h1 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-tight mt-1">Engineering.</h1>
        </div>
        
        {/* Contenedor reducido un 30% (max-w-3xl) para que no sea invasivo en PC */}
        <div className="w-full max-w-3xl mx-auto px-4 flex items-center justify-center">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full p-8 mt-auto border-t border-neutral-100 flex flex-col items-center gap-4 shrink-0">
        <p className="max-w-2xl text-[7px] md:text-[9px] font-mono text-neutral-400 text-center leading-relaxed tracking-[0.15em] uppercase">
          LUMEGLOBALCORE.COM ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE.
        </p>
        <div className="flex gap-8 font-mono text-[10px] text-neutral-300 uppercase pb-2">
          <a href="#" className="hover:text-black transition-colors underline underline-offset-4">[ Términos ]</a>
          <a href="#" className="hover:text-black transition-colors underline underline-offset-4">[ Privacidad ]</a>
        </div>
      </footer>

    </main>
  );
}
