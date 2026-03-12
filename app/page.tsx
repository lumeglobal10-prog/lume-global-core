import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = "L U M E";

  return (
    // Quitamos 'h-screen' para evitar que se corte el contenido. 
    // 'min-h-screen' asegura que el fondo cubra todo pero permita scroll si es necesario.
    <main className="flex flex-col min-h-screen bg-white text-black font-sans">
      
      {/* HEADER */}
      <nav className="w-full p-6 md:p-8 flex justify-between items-center shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
          Sign In
        </button>
      </nav>

      {/* CUERPO CENTRAL */}
      <section className="flex-grow flex flex-col items-center justify-start px-4 pt-2 md:pt-8 pb-12">
        
        {/* TEXTOS: Subidos con menos margen superior y más espacio respecto al slider (mb-12) */}
        <div className="text-center mb-12 md:mb-16 shrink-0">
          <p className="text-xl md:text-3xl font-extralight tracking-tight text-neutral-400 leading-none uppercase">Precision</p>
          <h1 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-tight mt-1">Engineering.</h1>
        </div>
        
        {/* CONTENEDOR SLIDER: Ajustamos el tamaño para que sea armónico en PC */}
        <div className="w-full max-w-2xl lg:max-w-3xl mx-auto px-4 flex items-center justify-center">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER: Oscurecido y garantizado al final */}
      <footer className="w-full p-8 mt-auto border-t border-neutral-200 flex flex-col items-center gap-4 shrink-0 bg-white">
        {/* Texto más oscuro (text-neutral-600) para que se lea bien */}
        <p className="max-w-2xl text-[8px] md:text-[10px] font-mono text-neutral-600 text-center leading-relaxed tracking-[0.15em] uppercase">
          LUMEGLOBALCORE.COM ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE.
        </p>
        <div className="flex gap-8 font-mono text-[10px] text-neutral-500 uppercase">
          <a href="#" className="hover:text-black transition-colors underline underline-offset-4">[ Términos ]</a>
          <a href="#" className="hover:text-black transition-colors underline underline-offset-4">[ Privacidad ]</a>
        </div>
      </footer>

    </main>
  );
}
