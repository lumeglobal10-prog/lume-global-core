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
      
      {/* HEADER
        
