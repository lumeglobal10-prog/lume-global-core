import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = "L U M E";

  return (
    // min-h-screen permite que en móvil se extienda si es necesario, 
    // pero en PC intentaremos que todo encaje en el visor.
    <main className="flex flex-col min-h-screen bg-white text-black font-sans overflow-x-hidden">
      
      {/* HEADER: Reducido al mínimo necesario */}
      <nav className="w-full p-4 md:p-6 flex justify-between items-center shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
          Sign In
        </button>
      </nav>

      {/* CONTENIDO PRINCIPAL: Reparte el espacio proporcionalmente */}
      <section className="flex-grow flex flex-col items-center justify-center px-4">
        
        {/* TÍTULO: Ajustado para no ocupar demasiado alto */}
        <div className="text-center mb-4 md:mb-6 shrink-0">
          <p className="text-xl md:text-2xl font-extralight tracking-[0.2em] text-neutral-400 uppercase">Precision</p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none mt-1">Engineering.</h1>
        </div>
        
        {/* SLIDER: Limitamos su ancho máximo para controlar el alto automático (aspect-video) */}
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto flex items-center justify-center shadow-2xl rounded-xl overflow-hidden">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER: Texto oscurecido (neutral-700) para legibilidad */}
      <footer className="w-full p-6 mt-4 border-t border-neutral-100 flex flex-col items-center gap-2 shrink-0">
        <p className="max-w-2xl text-[8px] md:text-[9px] font-mono text-neutral-700 text-center leading-relaxed tracking-[0.15em] uppercase">
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
