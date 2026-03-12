'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  // Estado para alternar entre Login y Registro
  const [isRegistering, setIsRegistering] = useState(false);
  
  // Estados para el formulario
  const [formData, setFormData] = useState({
    company: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Limpiar error al escribir
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isRegistering) {
      // Validación de coincidencia de contraseña
      if (formData.password !== formData.confirmPassword) {
        setError('Las contraseñas no coinciden. Por favor, verifíquelas.');
        return;
      }
      // Aquí iría la lógica para guardar en base de datos
      console.log("Registrando usuario...", formData);
      window.location.href = '/pricing'; // Redirigir a planes tras registro
    } else {
      // Lógica de Login
      console.log("Iniciando sesión...", formData.email);
      // Simulación: Si es activo va a dashboard, si no a planes
      window.location.href = '/dashboard'; 
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col items-center justify-center p-6">
      
      {/* Botón Volver al Inicio (Arriba Izquierda) */}
      <div className="absolute top-8 left-8">
        <Link href="/" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:underline underline-offset-4">
          ← Back to Home
        </Link>
      </div>

      <div className="w-full max-w-md space-y-8 bg-neutral-50 p-10 rounded-2xl shadow-sm border border-neutral-100">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tighter uppercase italic">L U M E</h2>
          <p className="mt-2 text-sm text-neutral-500 tracking-widest uppercase">
            {isRegistering ? 'Crea tu cuenta corporativa' : 'Acceso a la plataforma'}
          </p>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <div>
                <label className="block text-[9px] font-bold uppercase tracking-widest mb-1">Nombre de la Empresa</label>
                <input name="company" type="text" required className="w-full px-4 py-3 bg-white border border-neutral-200 rounded text-sm focus:outline-none focus:border-black transition-all" placeholder="EJ: ESTUDIO LUME" onChange={handleInputChange}/>
              </div>
              <div>
                <label className="block text-[9px] font-bold uppercase tracking-widest mb-1">Nombre del Titular</label>
                <input name="fullName" type="text" required className="w-full px-4 py-3 bg-white border border-neutral-200 rounded text-sm focus:outline-none focus:border-black transition-all" placeholder="EJ: JORGE DELLARIA" onChange={handleInputChange}/>
              </div>
              <div>
                <label className="block text-[9px] font-bold uppercase tracking-widest mb-1">Teléfono</label>
                <input name="phone" type="tel" required className="w-full px-4 py-3 bg-white border border-neutral-200 rounded text-sm focus:outline-none focus:border-black transition-all" placeholder="+54 9 11 ..." onChange={handleInputChange}/>
              </div>
            </>
          )}

          <div>
            <label className="block text-[9px] font-bold uppercase tracking-widest mb-1">Email Corporativo</label>
            <input name="email" type="email" required className="w-full px-4 py-3 bg-white border border-neutral-200 rounded text-sm focus:outline-none focus:border-black transition-all" placeholder="admin@empresa.com" onChange={handleInputChange}/>
          </div>

          <div>
            <label className="block text-[9px] font-bold uppercase tracking-widest mb-1">Contraseña</label>
            <input name="password" type="password" required className="w-full px-4 py-3 bg-white border border-neutral-200 rounded text-sm focus:outline-none focus:border-black transition-all" placeholder="••••••••" onChange={handleInputChange}/>
          </div>

          {isRegistering && (
            <div>
              <label className="block text-[9px] font-bold uppercase tracking-widest mb-1">Confirmar Contraseña</label>
              <input name="confirmPassword" type="password" required className="w-full px-4 py-3 bg-white border border-neutral-200 rounded text-sm focus:outline-none focus:border-black transition-all" placeholder="••••••••" onChange={handleInputChange}/>
            </div>
          )}

          {error && <p className="text-red-500 text-[10px] font-bold uppercase text-center">{error}</p>}

          {!isRegistering && (
            <div className="flex justify-end">
              <button type="button" className="text-[9px] text-neutral-400 hover:text-black uppercase tracking-tighter">¿Olvidó su contraseña?</button>
            </div>
          )}

          <button type="submit" className="w-full py-4 bg-black text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-800 transition-all mt-4">
            {isRegistering ? 'Continuar a Planes' : 'Ingresar'}
          </button>
        </form>

        <div className="text-center pt-4 border-t border-neutral-200 mt-6">
          <button 
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-[10px] font-bold text-neutral-500 hover:text-black uppercase tracking-widest"
          >
            {isRegistering ? '¿Ya tienes cuenta? Iniciar Sesión' : '¿No tienes cuenta? Regístrate'}
          </button>
        </div>
      </div>

      {/* Botón Directo a Planes (Abajo) */}
      <div className="mt-8">
        <Link href="/pricing" className="text-[10px] font-bold text-neutral-400 hover:text-black uppercase tracking-[0.2em] border-b border-transparent hover:border-black pb-1 transition-all">
          Explorar Planes de Suscripción →
        </Link>
      </div>
    </main>
  );
      }
