import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "lumeglobalcore.com";

  return (
    <main className="fixed inset-0 flex flex-col bg-white text-black font-sans overflow-hidden">
      
      {/* HEADER COMPACTO */}
      <nav className="w-full p-6 flex justify-between items-center z-50">
        <div className="text-sm font-black tracking-[0.3em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform">
          Sign In
        </button>
      </nav>

      {/* CONTENIDO CENTRAL AJUSTADO */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 gap-6">
        <div className="text-center">
          <h2 className="text-3xl font-extralight tracking-tight text-neutral-400 leading-none">Precision</h2>
          <h1 className="text-4xl font-black tracking-tighter uppercase leading-tight">Engineering.</h1>
        </div>
        
        <div className="w-full max-w-sm md:max-w-4xl">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER FIJO ABAJO */}
      <footer className="w-full p-6 bg-white border-t border-neutral-50 flex flex-col items-center gap-2">
        <p className="text-[7px] md:text-[9px] font-mono text-neutral-400 text-center leading-loose tracking-[0.1em] uppercase">
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
