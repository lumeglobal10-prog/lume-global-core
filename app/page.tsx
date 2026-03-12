import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "lumeglobalcore.com";

  return (
    <main className="flex flex-col h-screen bg-white text-black font-sans overflow-hidden">
      
      {/* HEADER */}
      <nav className="w-full p-6 flex justify-between items-center shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
          Sign In
        </button>
      </nav>

      {/* CORE: Se ajusta al espacio disponible */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 min-h-0">
        <div className="text-center mb-6 shrink-0">
          <h2 className="text-2xl md:text-4xl font-extralight tracking-tight text-neutral-400 leading-none">Precision</h2>
          <h1 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-tight">Engineering.</h1>
        </div>
        
        <div className="w-full max-w-sm md:max-w-4xl max-h-[60vh] flex items-center">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER: Siempre visible al final */}
      <footer className="w-full p-6 bg-white border-t border-neutral-50 flex flex-col items-center gap-2 shrink-0">
        <p className="text-[7px] md:text-[9px] font-mono text-neutral-400 text-center tracking-[0.1em] uppercase">
          {siteName} ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE.
        </p>
        <div className="flex gap-6 font-mono text-[8px] text-neutral-300 uppercase">
          <a href="#">[ Términos ]</a>
          <a href="#">[ Privacidad ]</a>
        </div>
      </footer>

    </main>
  );
}
