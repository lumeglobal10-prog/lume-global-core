# Objetivo: Sincronizar validación de salud con /api/v1/auth/validate
Ubicación: /var/www/lume_core/out/dashboard/index.html
Ejecución:
cat <<'EOF' | sudo tee /var/www/lume_core/out/dashboard/index.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8"><title>LUME | DASHBOARD</title>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>.font-serif { font-family: 'Cormorant Garamond', serif; } body { text-transform: uppercase; letter-spacing: 0.1em; } .led-blink { animation: pulse 2s infinite; } @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }</style>
</head>
<body class="bg-[#FCFAFA] text-black min-h-screen p-6 md:p-10 flex flex-col">
    <nav class="flex justify-between items-center mb-16">
        <div class="text-[10px] font-black italic tracking-[0.5em]">LUME</div>
        <div onclick="localStorage.clear(); window.location.href='/login/'" class="text-[9px] font-bold opacity-30 cursor-pointer">SALIR ×</div>
    </nav>
    <div class="max-w-4xl mx-auto w-full space-y-12 flex-grow">
        <h1 class="text-4xl md:text-5xl font-serif font-light italic text-center lowercase first-letter:uppercase tracking-normal normal-case">Panel de renderizado.</h1>
        <div class="flex justify-center">
            <div class="border border-black/5 bg-white px-8 py-4 rounded-full flex items-center gap-6 shadow-sm">
                <div id="led" class="w-2.5 h-2.5 rounded-full bg-red-500 led-blink"></div>
                <div class="h-4 w-[1px] bg-black/10"></div>
                <span class="text-lg font-serif italic normal-case" id="credits">0 / 0</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-neutral-50 p-6 rounded-3xl border border-black/5 space-y-3">
                <span class="text-[7px] font-bold opacity-30">CALIDAD</span>
                <div class="flex gap-2">
                    <button class="flex-1 py-3 bg-black text-white rounded-xl text-[9px] font-bold">SOCIAL</button>
                    <button class="flex-1 py-3 bg-white border border-black/5 rounded-xl text-[9px] font-bold opacity-30">2K</button>
                </div>
            </div>
            <div class="bg-neutral-50 p-6 rounded-3xl border border-black/5 space-y-3">
                <span class="text-[7px] font-bold opacity-30">M.I.C. ESTÉTICA</span>
                <div class="text-[11px] font-serif italic normal-case">MEDITERRÁNEO ▼</div>
            </div>
        </div>
    </div>
    <script>
        async function sync() {
            try {
                // Sincronización literal con la nueva estructura de ruteo Nginx
                const res = await fetch('/api/v1/auth/validate');
                if(res.ok) {
                    const led = document.getElementById('led');
                    led.classList.remove('bg-red-500', 'led-blink');
                    led.classList.add('bg-green-500');
                    led.style.boxShadow = '0 0 10px rgba(34,197,94,0.6)';
                }
            } catch(e) {}
        }
        sync();
    </script>
</body>
</html>
EOF
