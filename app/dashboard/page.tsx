'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  
  // Datos simulados (para Paddle audit)
  const userPlan = "Empresarial";
  const rendersUsed = 5;
  const rendersTotal = 20;

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  return (
    <main className="h-screen bg-white text-black font-sans flex flex-col overflow-hidden">
      
      {/* HEADER: Más compacto */}
      <nav className="w-full p-4 border-b border-neutral-100 flex justify-between items-center bg-white z-50">
        <div className="text-sm font-black tracking-[0.4em] uppercase italic">L U M E</div>
        <div className="flex items-center gap-6">
          <div className="text-right hidden md:block">
            <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Plan Activo</p>
            <p className="text-[10px] font-black uppercase">{userPlan}</p>
          </div>
          <Link href="/">
            <button className="text-[10px] font-bold border border-black px-4 py-1.5 hover:bg-black hover:text-white transition-all uppercase tracking-widest">
              Salir
            </button>
          </Link>
        </div>
      </nav>

      {/* ÁREA CENTRAL: Usamos flex-grow y overflow-y-auto */}
      <section className="flex-grow p-4 md:p-8 max-w-7xl mx-auto w-full overflow-y-auto">
        
        {/* ESTADO DE RENDERS: Más compacto y centrado en móvil */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100 mx-auto md:mx-0 w-full max-w-sm md:max-w-none">
            <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-1.5">Renders Disponibles</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-black italic">{rendersTotal - rendersUsed}</span>
              <span className="text-neutral-300 text-xs mb-1">/ {rendersTotal}</span>
            </div>
            {/* Barra de progreso compacta */}
            <div className="w-full h-1 bg-neutral-200 mt-3 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black transition-all duration-1000" 
                style={{ width: `${(rendersUsed / rendersTotal) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* ZONA DE CARGA: Rediseño responsivo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          <div className="space-y-4 px-2 md:px-0">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Nueva Orden.</h2>
            <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
              Suba las fotografías de la obra. Nuestro motor procesará la iluminación y el amoblamiento estándar.
            </p>

            <div 
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-3xl p-6 md:p-10 transition-all flex flex-col items-center justify-center min-h-[220px] md:min-h-[260px] ${
                dragActive ? "border-black bg-neutral-50" : "border-neutral-200 bg-white"
              }`}
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-center">
                Arrastre sus fotos aquí <br/>
                <span className="text-neutral-400 font-normal">o haga clic para buscar</span>
              </p>
              <input 
                type="file" 
                multiple 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                onChange={(e) => e.target.files && setFiles(Array.from(e.target.files))}
              />
            </div>

            {files.length > 0 && (
              <div className="p-3 bg-black text-white rounded-xl flex flex-col md:flex-row gap-3 justify-between items-center animate-in fade-in">
                <span className="text-[9px] font-bold uppercase tracking-widest">{files.length} seleccionados</span>
                <button className="bg-white text-black px-4 py-1.5 text-[9px] font-black uppercase tracking-widest hover:bg-neutral-200 transition-all w-full md:w-auto">
                  Procesar
                </button>
              </div>
            )}
          </div>

          {/* HISTORIAL / RESULTADOS: Altura controlada */}
          <div className="bg-neutral-50 rounded-3xl p-6 border border-neutral-100 h-full min-h-[250px] lg:min-h-[400px]">
            <h3 className="text-[9px] font-black uppercase tracking-[0.3em] mb-6 opacity-40">Resultados Recientes</h3>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-[9px] text-neutral-400 uppercase tracking-widest">No hay renders procesados todavía.</p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER: Fijo abajo y compacto */}
      <footer className="w-full p-4 border-t border-neutral-50 flex justify-center bg-white shrink-0">
        <p className="text-[8px] font-mono text-neutral-300 tracking-[0.3em] uppercase">
          LUME OPERATIONAL CORE // SECURE UPLOAD ENABLED
        </p>
      </footer>

    </main>
  );
}
