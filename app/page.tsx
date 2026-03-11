import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "lumeglobalcore.com";

  return (
    <main className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      
      {/* HEADER */}
      <nav className="w-full p-8 flex justify-end items-center">
        <button className="bg-black text-white px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-800 transition-all">
          Sign In
        </button>
      </nav>

      {/* SECCIÓN CENTRAL (70% VIEWPORT) */}
      <section className="flex-grow flex items-center justify-center px-4 md:px-20 py-10">
        <div className="w-full max-w-6xl">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER SOBERANO - UNIFICACIÓN GLOBAL */}
      <footer className="w-full p-6 bg-white border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center text-[9px] font-mono text-zinc-400 uppercase tracking-widest gap-4">
        <div className="text-center md:text-left">
          {siteName} ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE. TODOS LOS DERECHOS RESERVADOS.
        </div>
        <div className="flex gap-8">
          <a href="/terms" className="hover:text-black transition-colors border-b border-transparent hover:border-black">[ TÉRMINOS ]</a>
          <a href="/privacy" className="hover:text-black transition-colors border-b border-transparent hover:border-black">[ PRIVACIDAD ]</a>
        </div>
      </footer>

    </main>
  );
}
