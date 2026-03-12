'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const PLANS = [
  {
    id: 'core',
    name: 'Core',
    price: 49,
    renders: 8,
    description: 'Ideal para proyectos individuales.'
  },
  {
    id: 'empresarial',
    name: 'Empresarial',
    price: 99,
    renders: 20,
    description: 'Para estudios en crecimiento.'
  },
  {
    id: 'profesional',
    name: 'Profesional',
    price: 199,
    renders: 60,
    description: 'Máximo rendimiento profesional.'
  },
  {
    id: 'business',
    name: 'Business',
    price: 499,
    renders: 200,
    description: 'Solución corporativa full.'
  }
];

export default function PricingPage() {
  // Simulación de estado de sesión (luego lo conectaremos al backend)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSelectPlan = (planId: string) => {
    if (!isLoggedIn) {
      // Si no está logueado, lo mandamos a registrarse
      window.location.href = '/login';
    } else {
      // Si está logueado, lo mandamos a la pasarela de pago
      console.log(`Redirigiendo a pago para el plan: ${planId}`);
      // window.location.href = '/checkout'; 
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col p-6 md:p-12">
      
      {/* NAVEGACIÓN SUPERIOR */}
      <nav className="flex justify-between items-center w-full mb-12">
        <Link href="/" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:underline underline-offset-4">
          ← Inicio
        </Link>
        
        {isLoggedIn && (
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="text-[10px] font-bold text-red-500 tracking-[0.2em] uppercase hover:text-red-700 transition-colors"
          >
            Cerrar Sesión
          </button>
        )}
      </nav>

      {/* TÍTULO DE SECCIÓN */}
      <div className="text-center mb-16">
        <p className="text-xl md:text-2xl font-extralight tracking-[0.2em] text-neutral-400 uppercase">Select your</p>
        <h1 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mt-1">Subscription.</h1>
      </div>

      {/* GRILLA DE PLANES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
        {PLANS.map((plan) => (
          <div 
            key={plan.id}
            onClick={() => handleSelectPlan(plan.id)}
            className="group cursor-pointer border-2 border-black rounded-2xl p-8 flex flex-col items-center justify-between hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-center">
              <h2 className="text-xs font-black tracking-[0.3em] uppercase mb-4 opacity-60 group-hover:opacity-100">
                {plan.name}
              </h2>
              <div className="flex items-start justify-center">
                <span className="text-2xl font-light mt-2">$</span>
                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
              </div>
              <p className="mt-6 text-[11px] font-bold tracking-widest uppercase">
                {plan.renders} Renders Included
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-black/10 group-hover:border-white/20 w-full text-center">
              <span className="text-[9px] font-mono uppercase tracking-tighter group-hover:text-white text-neutral-500">
                Click para seleccionar
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER SIMPLE PARA ESTA CAPA */}
      <footer className="mt-auto pt-12 flex justify-center border-t border-neutral-100">
        <p className="text-[9px] font-mono text-neutral-400 tracking-widest uppercase">
          LUME GLOBAL CORE // Advanced Visual Solutions
        </p>
      </footer>
    </main>
  );
}
