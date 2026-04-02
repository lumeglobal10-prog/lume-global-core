'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [isSystemOnline, setIsSystemOnline] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [userMail, setUserMail] = useState('');
  const [credits, setCredits] = useState({ used: 0, total: 0 });

  // 🌐 ESPECIFICACIONES SOBERANAS: NODO SAN PABLO (PRODUCCIÓN)
  // Se migra de IP directa a Dominio Certificado bajo HTTPS
  const API_BASE = "https://lumeglobalcore.com"; 
  const LUME_HEADERS = {
    'Content-Type': 'application/json',
    'X-Lume-Node': 'SAN_PABLO',
    'X-Environment': 'PRODUCTION'
  };

  const fetchCredits = async (mail: string) => {
    try {
      const response = await fetch(`${API_BASE}/api/v1/credits?email=${mail}`, {
        headers: LUME_HEADERS
      });
      if (response.ok) {
        const data = await response.json();
        setCredits({ used: data.used || 0, total: data.total || 0 });
      }
    } catch (e) { console.warn("LGC_SYNC_ERROR: Comunicación restringida."); }
  };

  useEffect(() => {
    const mail = localStorage.getItem('lume_user_mail') || '';
    setUserMail(mail);
    
    // Verificación de Handshake con Gateway Soberano (Nginx)
    fetch(`${API_BASE}/api/v1/status`, { headers: LUME_HEADERS })
      .then(res => setIsSystemOnline(res.ok))
      .catch(() => setIsSystemOnline(false));

    if (mail) fetchCredits(mail);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('lume_session_token');
    localStorage.removeItem('lume_user_mail');
    router.push('/');
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !isSystemOnline) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_mail', userMail);

    try {
      const response = await fetch(`${API_BASE}/api/v1/upload`, {
        method: 'POST',
        headers: { 'X-Lume-Node': 'SAN_PABLO' }, 
        body: formData,
      });

      if (response.ok) {
        alert("ÉXITO: ACTIVO PROCESADO EN SAN PABLO.");
        fetchCredits(userMail);
      }
    } catch (error) {
      alert("ERROR CRÍTICO: Fallo de conexión con Gateway San Pablo.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col justify-between p-6 md:p-10 overflow-x-hidden">
      
      {/* NAVEGACIÓN: ESTILO UNIFICADO (SIN MARCOS) */}
      <nav className="flex justify-between items-center w-full shrink-0">
        <div className="text-sm font-black tracking-[0.4em] uppercase italic">LUME 🌎</div>
        <button 
          onClick={handleLogout}
          className="text-black hover:text-neutral-500 text-[9px] font-sans uppercase tracking-[0.2em] underline underline-offset-8 decoration-1 transition-all active:scale-95"
        >
          SALIR ×
        </button>
      </nav>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center flex-grow justify
