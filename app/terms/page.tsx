import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans p-8 md:p-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/">
          <button className="text-[10px] font-bold tracking-[0.3em] uppercase mb-12 border border-black px-4 py-2 hover:bg-black hover:text-white transition-all">
            ← Volver
          </button>
        </Link>
        
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-12 italic">Términos y Condiciones.</h1>
        
        <div className="space-y-10 text-[11px] leading-relaxed font-mono uppercase tracking-wider text-neutral-800">
          <section>
            <h2 className="font-black text-black mb-4">[ 01. SERVICIOS GLOBALES ]</h2>
            <p>Lume Global Core proporciona una infraestructura avanzada de automatización de imágenes, accesible globalmente. Al utilizar el servicio, el suscriptor acepta la responsabilidad total de cumplir con las leyes y regulaciones de su jurisdicción local.</p>
          </section>

          <section>
            <h2 className="font-black text-black mb-4">[ 02. EJECUCIÓN AUTÓNOMA ]</h2>
            <p>El ecosistema Lume opera estrictamente mediante procesos algorítmicos y cálculos matemáticos sin intervención directa de inteligencia artificial para el renderizado final. La auditoría y validación del activo generado es responsabilidad exclusiva del suscriptor antes de su uso comercial.</p>
          </section>

          <section>
            <h2 className="font-black text-black mb-4">[ 03. GESTIÓN DE PAGOS ]</h2>
            <p>Todas las transacciones financieras son procesadas por pasarelas de pago autorizadas (Paddle / Lemon Squeezy). Lume Global Core no almacena, procesa ni tiene acceso a credenciales bancarias o números de tarjetas de crédito.</p>
          </section>

          <section>
            <h2 className="font-black text-black mb-4">[ 04. LÍMITES DE RESPONSABILIDAD ]</h2>
            <p>Lume no se responsabiliza por interpretaciones erróneas de los activos generados ni por el uso de los mismos en plataformas de terceros. El sistema garantiza la excelencia técnica, pero la decisión final de publicación es humana.</p>
          </section>
        </div>

        <footer className="mt-20 pt-8 border-t border-neutral-100 text-[9px] text-neutral-400 font-mono tracking-widest">
          ÚLTIMA ACTUALIZACIÓN: MARZO 2026 // LUME GLOBAL CORE REGULATORY CORE
        </footer>
      </div>
    </main>
  );
}
