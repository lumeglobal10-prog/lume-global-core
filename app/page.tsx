import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = "L U M E";

  return (
    // 'h-screen' fija la altura al 100% de la ventana. 'overflow-hidden' quita el scroll.
    <main className="flex flex-col h-screen w-full bg-white text-black font-sans overflow-hidden">
      
      {/* HEADER: Mantener compacto */}
      <nav className="w-full p-4 md:p-6 flex justify-between items-center shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase">{siteName}</div>
        <button className="bg-black text-white px-5 py-2 text-[9px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all">
          Sign In
        </button>
      </nav>

      {/* CUERPO CENTRAL: Ajustado para separar el slider */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 min-h-0">
        
        {/* TEXTOS: Ajustamos el margen inferior (mb-6 -> mb-10) para separarlo
          
