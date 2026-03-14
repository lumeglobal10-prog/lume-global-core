'use client';

import { useRouter } from 'next/navigation';

export default function PrivacyPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-black font-sans p-8 md:p-20 flex flex-col justify-between overflow-x-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <nav className="flex justify-between items-center w-full mb-16">
          <div className="text-sm font-black tracking-[0.4em] uppercase italic text-black">
            LUME 🌎
          </div>
          <button 
            onClick={() => router.back()}
            className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-all"
          >
            ← VOLVER
          </button>
        </nav>
        
        <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-16">Privacidad de Datos.</h1>
        
        <div className="space-y-12 text-[11px] md:text-[13px] leading-relaxed tracking-wide text-neutral-800">
          <section>
            <h2 className="font-bold text-black mb-4 tracking-[0.1em] uppercase">[ 01. PROTECCIÓN DE DATOS UNIVERSAL ]</h2>
            <p>Lume Global Core adopta protocolos de privacidad basados en marcos de referencia internacionales como la GDPR europea y la Ley 25.326 argentina, aplicándolos como estándar mínimo de seguridad para el resto del globo. Entendemos que la privacidad es un derecho universal del suscriptor, independientemente de su ubicación geográfica.</p>
          </section>

          <section>
            <h2 className="font-bold text-black mb-4 tracking-[0.1em] uppercase">[ 02. PROCESAMIENTO EFÍMERO ]</h2>
            <p>Los datos y activos visuales subidos a la plataforma son tratados mediante algoritmos propietarios para su optimización. Lume Global Core no utiliza su información para entrenar modelos de inteligencia artificial de terceros ni comercializa los datos de sus suscriptores bajo ninguna circunstancia.</p>
          </section>

          <section>
            <h2 className="font-bold text-black mb-4 tracking-[0.1em] uppercase">[ 03. SEGURIDAD DE TRANSACCIÓN ]</h2>
            <p>No almacenamos ni procesamos datos sensibles de pago en nuestros servidores. Todas las transacciones ocurren en el entorno encriptado de nuestras pasarelas autorizadas, manteniendo su información financiera fuera de nuestro núcleo de datos.</p>
          </section>
        </div>
      </div>

      <footer className="w-full mt-20 pt-8 border-t border-neutral-100 flex flex-col items-center">
        <div className="text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase italic">
          LUME GLOBAL CORE 🌎 // SEGURIDAD CERTIFICADA 2026
        </div>
      </footer>
    </main>
  );
}
