import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "L U M E";

  return (
    <main className="flex flex-col h-screen bg-white text-black font-sans overflow-hidden">
      
      {/* HEADER */}
      <nav className="w-full p-6 md:p-8 flex justify-between items-center shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
          Sign In
        </button>
      </nav>

      {/* CORE OPERATIVO */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 md:px-12 min-h-0">
        <div className="text-center mb-8 shrink-0">
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-neutral-400 leading-none">Precision</h2>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-tight mt-1">Engineering.</h1>
        </div>
        
        <div className="w-full max-w-5xl max-h-[55vh] flex items-center">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER SENTINEL */}
      <footer className="w-full p-6 md:p-8 bg-white border-t border-neutral-50 flex flex-col items-center gap-3 shrink-0">
        <p className="max-w-2xl text-[7px] md:text-[9px] font-mono text-neutral-400 text-center leading-relaxed tracking-[0.15em] uppercase">
          LUMEGLOBALCORE.COM ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE.
        </p>
        <div className="flex gap-8 font-mono text-[9px] text-neutral-300 uppercase">
          <a href="#" className="hover:text-black transition-colors">[ Términos ]</a>
          <a href="#" className="hover:text-black transition-colors">[ Privacidad ]</a>
        </div>
      </footer>

    </main>
  );
}
