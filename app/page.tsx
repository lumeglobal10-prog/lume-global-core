export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[100dvh] bg-white px-6">
      <div className="max-w-screen-xl w-full">
        {/* Título Principal - White Engineering */}
        <div className="flex flex-col mb-24">
          <h1 className="text-[14vw] md:text-[9vw] font-black leading-[0.8] tracking-[-0.06em] text-black uppercase">
            Precision<br />Engineering<span className="text-gray-200">.</span>
          </h1>
        </div>
        
        {/* Línea Técnica y Estado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-black pt-8 gap-4">
          <div className="flex flex-col">
            <p className="font-mono text-[10px] tracking-[0.5em] font-bold uppercase">
              Lume Global Core // System_v1.0
            </p>
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase opacity-50 mt-2">
              Status: [ Online ] // London_Node_165.22.114.116
            </p>
          </div>
          
          <div className="flex flex-col text-right">
            <p className="font-mono text-[9px] tracking-[0.4em] uppercase font-bold">
              Autonomous Ecosystem
            </p>
            <p className="font-mono text-[8px] tracking-[0.3em] uppercase opacity-30 mt-1">
              Soberanía Técnica Absoluta
            </p>
          </div>
        </div>
      </div>

      {/* Footer Legal */}
      <footer className="absolute bottom-10 w-full px-10 flex justify-between items-center font-mono text-[8px] tracking-[0.4em] uppercase opacity-20">
        <span>Lume Real Estate LLC</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
