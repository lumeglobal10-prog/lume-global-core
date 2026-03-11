export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[100dvh] bg-white px-6">
      <div className="max-w-screen-xl w-full">
        {/* Título de Autoridad Técnica */}
        <div className="flex flex-col mb-20">
          <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-[-0.08em] text-black">
            Precision<br />Engineering<span className="text-gray-300">.</span>
          </h1>
        </div>
        
        {/* Bloque de Estado Sentinel */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-black pt-6">
          <div className="flex flex-col">
            <p className="font-mono text-[10px] tracking-[0.4em] font-bold uppercase">
              Lume Global Core // V1.0
            </p>
            <p className="font-mono text-[8px] tracking-[0.2em] uppercase opacity-40 mt-1">
              Status: [ Online ] // London_Node_165.22.114.116
            </p>
          </div>
          
          <div className="hidden md:block">
            <p className="font-mono text-[8px] tracking-[0.5em] uppercase opacity-30">
              Soberanía Técnica Total
            </p>
          </div>
        </div>
      </div>

      {/* Footer Legal Minimalista */}
      <footer className="absolute bottom-10 w-full px-10 flex justify-between items-center font-mono text-[7px] tracking-[0.3em] uppercase opacity-20">
        <span>Operado por Lume Real Estate LLC</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
