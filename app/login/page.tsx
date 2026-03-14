'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();

  // BYPASS: Ingreso directo al dashboard de renderizado
  const handleLogin = () => {
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-8 md:p-20 overflow-x-hidden">
      
      {/* NAVEGACIÓN SUPERIOR: LOGO Y RETORNO */}
      <nav className="flex justify-between items-center w-full">
        <div className="text-xl font-black tracking-tighter italic uppercase">
          LUME 🌎
        </div>
        <button 
          onClick={() => router.back()}
          className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-all"
        >
          ← VOLVER
        </button>
      </nav>

      {/* CONTENIDO CENTRAL: ACCESO */}
      <div className="max-w-md mx-auto w-full flex flex-col items-center py-12">
        {/* TÍTULO CORREGIDO: Acceso de Suscriptores (Negrita, Tipografía unificada) */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 italic text-center leading-tight">
          Acceso de Suscriptores
        </h1>
        <div className="h-[1px] w-20 bg-black mb-16"></div>
        
        <div className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-[9px] font-black tracking-[0.2em] uppercase text-neutral-400 italic">
              Ingrese Mail
            </label>
            <input 
              type="email" 
              placeholder="EMAIL@EJEMPLO.COM"
              className="w-full bg-white border border-black p-4 rounded-2xl text-[11px] font-sans uppercase tracking-widest focus:outline-none focus:bg-neutral-50 transition-colors placeholder:text-neutral-200"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-black tracking-[0.2em] uppercase text-neutral-400 italic">
              Ingrese Clave
            </label>
            <input 
              type="password" 
              placeholder="CONTRASEÑA"
              className="w-full bg-white border border-black p-4 rounded-2xl text-[11px] font-sans uppercase tracking-widest focus:outline-none focus:bg-neutral-50 transition-colors placeholder:text-neutral-200"
            />
          </div>

          {/* BOTÓN CON ACCESO DIRECTO AL DASHBOARD */}
          <button 
            onClick={handleLogin}
            className="w-full bg-black text-white p-5 rounded-2xl text-[12px] font-black uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all shadow-xl active:scale-95 mt-4"
          >
            INGRESAR
          </button>
          
          <div className="text-center pt-4">
            <Link href="/pricing" className="text-[9px] font-bold tracking-[0.2em] uppercase hover:underline underline-offset-8">
              ¿No tiene una suscripción activa? Ver planes
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER UNIFICADO LUME CORE */}
      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="flex space-x-8">
          <Link href="/terms" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="text-[9px] font-bold tracking-[0.3em] uppercase hover:underline decoration-2 underline-offset-4">
            Privacidad
          </Link>
        </div>
        <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase italic text-center">
          LUME GLOBAL CORE 🌎 // 2026
        </div>
      </footer>
    </main>
  );
}
