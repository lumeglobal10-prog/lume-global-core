import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = "L U M E";

  return (
    // h-screen y overflow-hidden para asegurar que todo entre en el visor de la PC
    <main className="flex flex-col h-screen w-full bg-white text-black font-sans overflow-hidden">
      
      {/* HEADER */}
      <nav className="w-full p-6 md:p-8 flex justify-between items-center shrink-0 z-50">
        <div className="text-sm font-black tracking-[0.4em] uppercase">
          {siteName}
        </div>
        <button className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
          Sign In
        </button>
      </nav>

      {/* ÁREA CENTRAL */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 min-h-0">
        
        {/* TÍTULO: Texto en minúsculas con trazo fino (font-extralight) */}
        <div className="text-center mb-4 md:mb-6 shrink-0">
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight">
            Engineering extreme.
          </h1>
        </div>
        
        {/* CONTENEDOR SLIDER */}
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto flex items-center justify-center shadow-2xl rounded-xl overflow-hidden">
          <HeroSlider />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full p-6 mt-auto border-t border-neutral-100 flex flex-col items-center gap-2 shrink-0 bg-white">
        <p className="max-w-2xl text-[8px] md:text-[9px] font-mono text-neutral-700 text-center leading-relaxed tracking-[0.15em] uppercase">
          LUMEGLOBALCORE.COM ES UNA MARCA OPERADA POR LUME GLOBAL CORE // © 2026 LUME GLOBAL CORE.
        </p>
        <div className="flex gap-8 font-mono text-[9px] text-neutral-6
        
