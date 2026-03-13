'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SmartPopup from '../../components/SmartPopup';

const PLANS = [
  { id: 'core', name: 'Core', price: 49, renders: 8 },
  { id: 'empresarial', name: 'Empresarial', price: 99, renders: 20 },
  { id: 'profesional', name: 'Profesional', price: 199, renders: 60 },
  { id: 'business', name: 'Business', price: 499, renders: 200 }
];

export default function PricingPage() {
  const [showTaxPopup, setShowTaxPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    setShowTaxPopup(true);
  };

  const proceedToCheckout = () => {
    if (!isLoggedIn) {
      window.location.href = '/login';
    } else {
      console.log("Iniciando checkout para:", selectedPlan);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col p-6 md:p-12">
      {showTaxPopup && (
        <SmartPopup 
          trigger="tax_notice" 
          onClose={proceedToCheckout} 
        />
      )}

      <nav className="flex justify-between items-center w-full mb-12">
        <Link href="/" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:underline underline-offset-4">
          ← Inicio
        </Link>
      </nav>

      <div className="text-center mb-16">
        <p className="text-xl md:text-2xl font-extralight tracking-[0.2em] text-neutral-400 uppercase">Select your</p>
        <h1 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mt-1">Subscription.</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full">
        {PLANS.map((plan) => (
          <div 
            key={plan.id}
            onClick={() => handleSelectPlan(plan.id)}
            className="group cursor-pointer border-2 border-black rounded-2xl p-8 flex flex-col items-center justify-between hover:bg-black hover:text-white transition-all duration-300"
          >
            <div className="text-center">
              <h2 className="text-xs font-black tracking-[0.3em] uppercase mb-4 opacity-60 group-hover:opacity-100">{plan.name}</h2>
              <div className="flex items-start justify-center">
                <span className="text-2xl font-light mt-2">$</span>
                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
              </div>
              <p className="mt-6 text-[11px] font-bold tracking-widest uppercase">{plan.renders} Renders</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
