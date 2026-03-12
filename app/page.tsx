import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "lumeglobalcore.com";

  return (
    <main className="min-h-screen flex flex-col bg-white text-black font-sans overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* HEADER SOBERANO */}
      <nav className="w-full p-6 md:p-10 flex justify-between items-center shrink-0">
        <div className="text-sm md:text-base font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all active:scale-95">
          Sign In
        </button>
      </nav>

      {/* CORE OPERATIVO */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 py-10 gap-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-neutral-400 leading-none">Precision</h2>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mt-2">Engineering.</h1>
        </div>
        
        <div className="w-full max-w-5xl">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER - VISIBLE EN TODAS LAS PLATAFORMAS */}
      <footer className="w-full p-8 bg-white border-t border-neutral-50 flex flex-col items-center gap-4 shrink-0">
        <p className="max-w-3xl text-[8px] md:text-[10px] font-mono text-neutral-400 text-center leading-relaxed tracking-[0.2em] uppercase">
          {siteName} ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE. TODOS LOS DERECHOS RESERVADOS.
        </p>
        <div className="flex gap-10 font-mono text-[9px] text-neutral-300 uppercase tracking-widest">
          <a href="#" className="hover:text-black transition-colors border-b border-transparent hover:border-black pb-1">[ Términos ]</a>
          <a href="#" className="hover:text-black transition-colors border-b border-transparent hover:border-black pb-1">[ Privacidad ]</a>
        </div>
      </footer>

    </main>
  );
}
