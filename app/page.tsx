import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = "LUME GLOBAL CORE";

  return (
    <main className="flex flex-col min-h-screen bg-white text-black font-sans">
      
      {/* HEADER */}
      <nav className="w-full p-6 flex justify-between items-center shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase">Sign In</button>
      </nav>

      {/* SECCIÓN PRINCIPAL */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 py-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-extralight text-neutral-400">Precision</h2>
          <h1 className="text-3xl md:text-6xl font-black uppercase">Engineering.</h1>
        </div>
        
        {/* El contenedor del slider tiene un tamaño controlado */}
        <div className="w-full max-w-4xl mx-auto">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER - Ahora se empuja al final y permite scroll si es necesario */}
      <footer className="w-full p-8 mt-auto border-t border-neutral-100 flex flex-col items-center gap-2">
        <p className="text-[8px] md:text-[10px] font-mono text-neutral-400 text-center uppercase tracking-widest">
          LUMEGLOBALCORE.COM // © 2026 LUME GLOBAL CORE.
        </p>
      </footer>
    </main>
  );
}
