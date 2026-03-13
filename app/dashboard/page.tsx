'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  
  // Datos simulados del suscriptor (Luego vendrán de la base de datos)
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
    <main className="min-h-screen bg-white text-black font-sans flex flex-col">
      
      {/* HEADER DASHBOARD */}
      <nav className="w-full p-6 border-b border-neutral-100 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="text-sm font-black tracking-[0.4em] uppercase italic">L U M E</div>
        <div className="flex items-center gap-6">
          <div className="text-right hidden md:block">
            <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Plan Activo</p>
            <p className="text-[10px] font-black uppercase">{userPlan}</p>
          </div>
          <Link href="/">
            <button className="text-[10px] font-bold border border-black px-4 py-2 hover:bg-black hover:text-white transition-all uppercase tracking-widest">
              Salir
            </button>
          </Link>
        </div>
      </nav>

      <section className="flex-grow p-6 md:p-12 max-w-6xl mx-auto w-full">
        
        {/* ESTADO DE RENDERS */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
            <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Renders Disponibles</p>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-black italic">{rendersTotal - rendersUsed}</span>
              <span className="text-neutral-300 text-sm mb-1">/ {rendersTotal}</span>
            </div>
            {/* Barra de progreso */}
            <div className="w-full h-1 bg-neutral-200 mt-4 rounded-full overflow-hidden">
              <div 
                className="h-full bg-black transition-all duration-1000" 
                style={{ width: `${(rendersUsed / rendersTotal) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* ZONA DE CARGA (DRAG & DROP) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Nueva Orden de Renderizado.</h2>
            <p className="text-sm text-neutral-500 font-light leading-relaxed">
              Suba las fotografías de la obra en estado crudo. Nuestro motor autónomo procesará la iluminación y el amoblamiento según el estándar LUME.
            </p>

            <div 
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-3xl p-12 transition-all flex flex-col items-center justify-center min-h-[300px] ${
                dragActive ? "border-black bg-neutral-50 scale-[1.01]" : "border-neutral-200 bg-white"
              }`}
            >
              <div className="text-4xl mb-4 text-neutral-300 italic">↑</div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-center">
                Arrastre sus fotos aquí <br/>
                <span className="text-neutral-400 font-normal">o haga clic para buscar archivos</span>
              </p>
              <input 
                type="file" 
                multiple 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                onChange={(e) => e.target.files && setFiles(Array.from(e.target.files))}
              />
            </div>

            {files.length > 0 && (
              <div className="p-4 bg-black text-white rounded-xl flex justify-between items-center animate-in fade-in slide-in-from-bottom-2">
                <span className="text-[10px] font-bold uppercase tracking-widest">{files.length} Archivos seleccionados</span>
                <button className="bg-white text-black px-6 py-2 text-[9px] font-black uppercase tracking-widest hover:bg-neutral-200 transition-all">
                  Iniciar Procesamiento
                </button>
              </div>
            )}
          </div>

          {/* HISTORIAL / RESULTADOS (Simulado) */}
          <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 opacity-40">Resultados Recientes</h3>
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-12 h-12 border border-neutral-200 rounded-full mb-4 flex items-center justify-center text-neutral-300">
                /
              </div>
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest">No hay renders procesados todavía.</p>
            </div>
          </div>

        </div>
      </section>

      <footer className="p-8 mt-auto border-t border-neutral-50 flex justify-center">
        <p className="text-[8px] font-mono text-neutral-300 tracking-[0.3em] uppercase
