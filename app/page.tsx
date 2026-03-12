import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = "LUME GLOBAL CORE";

  return (
    // 'h-screen' fija el alto total a la ventana y 'overflow-hidden' evita el scroll.
    <main className="flex flex-col h-screen bg-white text-black font-sans overflow-hidden">
      
      {/* HEADER: Reducimos un poco el padding vertical */}
      <nav className="w-full px-6 py-4 md:px-8 md:py-6 flex justify-between items-center shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
          Sign In
        </button>
      </nav>

      {/* CUERPO CENTRAL: Usamos flex-grow para que ocupe el resto, pero con min-h-0 para evitar desbordes */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 min-h-0">
        
        {/* TEXTOS: Ajustamos tamaños y márgenes para ganar espacio vertical en PC */}
        <div className="text-center mb-4 md:mb-6 shrink-0">
          <p className="text-2xl md:text-4xl font-extralight tracking-tight text-neutral-400 opacity-80 leading-none">Precision</p>
          <h1 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-tight mt-1">Engineering.</h1>
        </div>
        
        {/* CONTENEDOR SLIDER: Limitamos el ancho máximo y el alto máximo relativo a la pantalla */}
        <div className="w-full max-w-4xl mx-auto px-2 max-h-[50vh] md:max-h-[55vh]">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER: Compacto para asegurar visibilidad sin scroll */}
      <footer className="w-full p-4 md:p-6 bg-white border-t border-neutral-50 flex flex-col items-center gap-2 shrink-0">
        <p className="max-w-2xl text-[7px] md:text-[9px] font-mono text-neutral-400 text-center leading-relaxed tracking-[0.15em] uppercase">
          LUMEGLOBALCORE.COM ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE.
        </p>
        <div className="flex gap-8 font-mono text-[9px] text-neutral-300 uppercase">
          <a href="#" className="hover:text-black transition-colors underline underline-offset-4">[ Términos ]</a>
          <a href="#" className="hover:text-black transition-colors underline underline-offset-4">[ Privacidad ]</a>
        </div>
      </footer>

    </main>
  );
}
