import HeroSlider from '../components/HeroSlider';

export default function LumeHome() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "lumeglobalcore.com";

  return (
    <main className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* HEADER DE ALTA GAMA */}
      <nav className="w-full p-6 md:p-10 flex justify-between items-center">
        {/* LOGO LUME - ESPACIADO TÉCNICO */}
        <div className="text-xl font-black tracking-[0.5em] uppercase pl-2">
          L U M E
        </div>
        
        {/* ACCESO SIG
          
