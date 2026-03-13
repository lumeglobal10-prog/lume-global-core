import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans p-8 md:p-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/">
          <button className="text-[10px] font-bold tracking-[0.3em] uppercase mb-12 border border-black px-4 py-2 hover:bg-black hover:text-white transition-all">
            ← Volver
          </button>
        </Link>
        
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-12 italic">Privacidad de Datos.</h1>
        
        <div className="space-y-10 text-[11px] leading-relaxed font-mono uppercase tracking-wider text-neutral-800">
          <section>
            <h2 className="font-black text-black mb-4">[ 01. TRATAMIENTO DE DATOS ]</h2>
            <p>Recolectamos únicamente los datos mínimos necesarios para la gestión de la suscripción, bajo estrictos estándares internacionales de protección de datos (RGPD de la UE, LFPDPPP de México, Ley 25.326 de Argentina y normativas similares).</p>
          </section>

          <section>
            <h2 className="font-black text-black mb-4">[ 02. ACTIVOS VISUALES ]</h2>
            <p>Las imágenes subidas por los suscriptores son procesadas de manera efímera mediante algoritmos propietarios. Lume Global Core no crea bases de datos con las imágenes originales ni las utiliza para fines distintos al servicio contratado.</p>
          </section>

          <section>
            <h2 className="font-black text-black mb-4">[ 03. ALOJAMIENTO Y SEGURIDAD ]</h2>
            <p>Los datos son alojados en nodos de infraestructura de alta disponibilidad con cifrado de grado militar para garantizar la inviolabilidad de la información del suscriptor y la soberanía de sus activos.</p>
          </section>

          <section>
            <h2 className="font-black text-black mb-4">[ 04. DERECHOS DEL TITULAR ]</h2>
            <p>El suscriptor mantiene en todo momento el derecho de acceso, rectificación y eliminación de sus datos personales a través de los canales oficiales de administración de Lume. La transparencia es la base de nuestra tecnología.</p>
          </section>
        </div>

        <footer className="mt-20 pt-8 border-t border-neutral-100 text-[9px] text-neutral-400 font-mono tracking-widest">
          PROTECCIÓN DE DATOS NIVEL ALFA // MARZO 2026
        </footer>
      </div>
    </main>
  );
}
