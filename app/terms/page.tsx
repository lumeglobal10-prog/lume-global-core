'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function TermsPage() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from');
  const backPath = from === 'checkout' ? '/checkout' : '/';

  return (
    <main className="min-h-screen bg-white text-black font-sans p-8 md:p-20 flex flex-col justify-between">
      <div className="max-w-3xl mx-auto w-full">
        {/* NAVEGACIÓN SUPERIOR: LOGO Y RETORNO DINÁMICO */}
        <nav className="flex justify-between items-center w-full mb-12">
          <div className="text-xl font-black tracking-tighter italic">
            LUME 🌎
          </div>
          <Link href={backPath}>
            <button className="text-[10px] font-bold tracking-[0.3em] uppercase border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
              ← VOLVER
            </button>
          </Link>
        </nav>
        
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-12 italic">Términos y Condiciones.</h1>
        
        <div className="space-y-10 text-[11px] leading-relaxed font-mono uppercase tracking-wider text-neutral-800">
          <section>
            <h2 className="font-black text-black mb-4">[ 01. SERVICIOS GLOBALES ]</h2>
            <p>Lume Global Core proporciona una infraestructura avanzada de automatización de imágenes, accesible globalmente. Al utilizar el servicio, el suscriptor acepta la responsabilidad total de cumplir con las leyes y regulaciones de su jurisdicción local.</p>
          </section>

          <section>
            <h2 className="font-black text-black mb-4">[ 02. EJECUCIÓN AUTÓNOMA ]</h2>
            <p>El ecosistema Lume opera estrictamente mediante procesos algorítmicos y cálculos matemáticos. La auditoría y validación del activo generado es responsabilidad exclusiva del suscriptor antes de su uso comercial.</p>
          </section>

          <section>
            <h2 className="font-black text-black mb-4">[ 03. GESTIÓN DE PAGOS ]</h2>
            <p>Todas las transacciones financieras son procesadas por pasarelas de pago autorizadas. Lume Global Core no almacena, procesa ni tiene acceso a credenciales bancarias o números de tarjetas de crédito.</p>
          </section>

          <section>
            <h2 className="font-black text-black mb-4">[ 04. LÍMITES DE RESPONSABILIDAD ]</h2>
            <p>Lume no se responsabiliza por interpretaciones erróneas de los activos generados ni por el uso de los mismos en plataformas de terceros.</p>
          </section>

          <section className="border-l-2 border-black pl-6 py-2 bg-neutral-50">
            <h2 className="font-black text-black mb-4">[ 05. PRINCIPIO DE IGUALDAD OPERATIVA ]</h2>
            <p className="text-black font-bold">Lume Global Core garantiza que todos los suscriptores son iguales ante el Kernel de procesamiento. No existe prioridad de renderizado basada en el costo del plan contratado. La única jerarquía de procesamiento es cronológica, basada estrictamente en el orden de entrada de los activos al núcleo de procesamiento, siempre que la suscripción se encuentre activa.</p>
          </section>
        </div>
      </div>

      {/* FOOTER UNIFICADO */}
      <footer className="flex flex-col items-center space-y-6 pt-20">
        <div className="text-[10px] font-mono tracking-[0.5em] text-neutral-400 uppercase">
          LUME GLOBAL CORE 🌎 // 2026
        </div>
      </footer>
    </main>
  );
      }
