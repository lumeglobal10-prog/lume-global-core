import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = "L U M E";

  return (
    /* Cambiamos h-screen por min-h-screen y eliminamos overflow-hidden 
       para que la página pueda estirarse si el contenido lo requiere */
    <main className="flex flex-col min-h-screen bg-white text-black font-sans">
      
      {/* HEADER */}
      <nav className="w-full p-6 flex justify-between items-center shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
          Sign In
        </button>
      </nav>

      {/* CUERPO CENTRAL */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 py-4">
        
        <div className="text-center mb-6 shrink-0">
          <p className="text-2xl md:text-4xl font-extralight tracking-tight text-neutral-400 leading-none">Precision</p>
          <h1 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-tight mt-1">Engineering.</h1>
        </div>
        
        {/* Ajustamos el contenedor para que sea más flexible. 
            En PC no superará el 50% de la altura de la pantalla para dejar espacio al footer. */}
        <div className="w-full max-w-4xl mx-auto px-2 lg:h-[50vh] flex items-center">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full p-8 mt-auto border-t border-neutral-100 flex flex-col items-center gap-4 shrink-0">
        <p className="max-w-2xl text-[7px] md:text-[10px] font-mono text-neutral-400 text-center leading-relaxed tracking-[0.15em] uppercase">
          LUMEGLOBALCORE.COM ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE.
        </p>
        <div className="flex gap-8 font-mono text-[10px] text-neutral-300 uppercase pb-4">
          <a href="#" className="hover:text-black transition-colors underline underline-offset-4">[ Términos ]</a>
          <a href="#" className="hover:text-black transition-colors underline underline-offset-4">[ Privacidad ]</a>
        </div>
      </footer>

    </main>
  );
}
