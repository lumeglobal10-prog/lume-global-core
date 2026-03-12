import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "L U M E";

  return (
    <main className="flex flex-col h-screen bg-white text-black font-sans overflow-hidden">
      <nav className="w-full p-6 flex justify-between items-center shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase">Sign In</button>
      </nav>

      <section className="flex-grow flex flex-col items-center justify-center px-4 min-h-0">
        <div className="text-center mb-6 shrink-0">
          <h2 className="text-2xl md:text-4xl font-extralight text-neutral-400">Precision</h2>
          <h1 className="text-3xl md:text-6xl font-black uppercase">Engineering.</h1>
        </div>
        <div className="w-full max-w-5xl max-h-[60vh] flex items-center">
          <HeroSlider />
        </div>
      </section>

      <footer className="w-full p-6 bg-white border-t border-neutral-50 flex flex-col items-center gap-2 shrink-0">
        <p className="text-[7px] md:text-[9px] font-mono text-neutral-400 text-center uppercase">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE.
        </p>
      </footer>
    </main>
  );
}
