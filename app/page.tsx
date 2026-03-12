import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = "L U M E";

  return (
    // 'h-screen' fija la altura al 100% de la ventana. 'overflow-hidden' quita el scroll.
    <main className="flex flex-col h-screen w-full bg-white text-black font-sans overflow-hidden">
      
      {/* HEADER: Más compacto */}
      <nav className="w-full p-4 md:p-6 flex justify-between items-center shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-5 py-2 text-[9px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
          Sign In
        </button>
      </nav>

      {/* CUERPO CENTRAL: Ajustado para que el slider no empuje el footer */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 min-h-0">
        
        {/* TEXTOS: Reducidos un 15% para ganar espacio */}
        <div className="text-center mb-4 md:mb-6 shrink-0">
          <p className="text-xl md:text-3xl font-extralight tracking-tight text-neutral-400 leading-none uppercase">Precision</p>
          <h1 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-tight mt-1">Engineering.</h1>
        </div>
        
        {/* CONTENEDOR SLIDER: Limitamos la altura máxima al 45% de la pantalla para asegurar que entre el footer */}
        <div className="w-full max-w-3xl mx-auto px-4 flex items-center justify-center max-h-[45vh] md:max-h-[50vh]">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER: Pegado abajo y bien visible */}
      <footer className="w-full p-6 mt-auto border-t border-neutral-100 flex flex-col items-center gap-2 shrink-0 bg-white">
        <p className="max-w-2xl text-[7px] md:text-[9px] font-mono text-neutral-400 text-center leading-relaxed tracking-[0.15em] uppercase">
          LUMEGLOBALCORE.COM ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE.
        </p>
        <div className="flex gap-8 font-mono text-[9px] text-neutral-300 uppercase pb-2">
          <a href="#" className="hover:text-black transition-colors underline underline-offset-4">[ Términos ]</a>
          <a href="#" className="hover:text-black transition-colors underline underline-offset-4">[ Privacidad ]</a>
        </div>
      </footer>

    </main>
  );
        }
