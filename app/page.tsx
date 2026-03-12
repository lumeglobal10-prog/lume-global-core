import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "L U M E";

  return (
    <main className="fixed inset-0 flex flex-col bg-white text-black font-sans overflow-hidden">
      
      {/* HEADER TÉCNICO */}
      <nav className="w-full p-6 flex justify-between items-center z-50">
        <div className="text-lg font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
          Sign In
        </button>
      </nav>

      {/* NÚCLEO CENTRAL */}
      <section className="flex-grow flex flex-col items-center justify-center px-6 gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-extralight tracking-tight text-neutral-400 leading-none">Precision</h2>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight mt-1">Engineering.</h1>
        </div>
        
        <div className="w-full max-w-sm md:max-w-4xl">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER SENTINEL (LITERALIDAD ABSOLUTA) */}
      <footer className="w-full p-8 bg-white border-t border-neutral-50 flex flex-col items-center gap-3">
        <p className="max-w-xs md:max-w-2xl text-[8px] md:text-[10px] font-mono text-neutral-400 text-center leading-relaxed tracking-[0.15em] uppercase">
          LUMEGLOBALCORE.COM ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE. TODOS LOS DERECHOS RESERVADOS.
        </p>
        <div className="flex gap-8 font-mono text-[9px] text-neutral-300 uppercase tracking-widest">
          <a href="#" className="hover:text-black transition-colors">[ Términos ]</a>
          <a href="#" className="hover:text-black transition-colors">[ Privacidad ]</a>
        </div>
      </footer>

    </main>
  );
}
