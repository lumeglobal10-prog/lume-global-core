import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = "L U M E";

  return (
    // Mantenemos h-screen y overflow-hidden para asegurar que NADA se salga de la pantalla
    <main className="flex flex-col h-screen w-full bg-white text-black font-sans overflow-hidden">
      
      {/* HEADER */}
      <nav className="w-full p-6 flex justify-between items-center shrink-0 z-50">
        <div className="text-sm font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
          Sign In
        </button>
      </nav>

      {/* ÁREA DE CONTENIDO DINÁMICO */}
      <section className="relative flex-grow flex flex-col items-center justify-center px-4 overflow-hidden">
        
        {/* TEXTOS: Ahora usamos posicionamiento absoluto en relación al área central */}
        <div className="absolute top-[5%] md:top-[10%] text-center z-40">
          <p className="text-xl md:text-3xl font-extralight tracking-tight text-neutral-400 leading-none uppercase">Precision</p>
          <h1 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-tight mt-1">Engineering.</h1>
        </div>
        
        {/* CONTENEDOR SLIDER: Ocupa el espacio central sin empujar al footer */}
        <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 mt-16 md:mt-20">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER: Forzado al borde inferior con colores más oscuros */}
      <footer className="w-full p-4 md:p-6 border-t border-neutral-100 flex flex-col items-center gap-2 shrink-0 bg-white z-50">
        <p className="max-w-2xl text-[8px] md:text-[9px] font-mono text-neutral-700 text-center leading-relaxed tracking-[0.15em] uppercase">
          LUMEGLOBALCORE.COM ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE.
        </p>
        <div className="flex gap-8 font-mono text-[9px] text-neutral-500 uppercase pb-2">
          <a href="#" className="hover:text-black transition-colors underline underline-offset-4">[ Términos ]</a>
          <a href="#" className="hover:text-black transition-colors underline underline-offset-4">[ Privacidad ]</a>
        </div>
      </footer>

    </main>
  );
}
