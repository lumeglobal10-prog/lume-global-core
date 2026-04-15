# Ubicación: /var/www/lume_core/out/register/index.html
cat <<'EOF' | sudo tee /var/www/lume_core/out/register/index.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8"><title>LUME | REGISTRO</title>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>.font-serif { font-family: 'Cormorant Garamond', serif; } body { text-transform: uppercase; letter-spacing: 0.15em; }</style>
</head>
<body class="bg-white text-black min-h-screen flex flex-col items-center justify-center p-8 md:p-20">
    <nav class="absolute top-10 left-10 right-10 flex justify-between items-center">
        <div class="text-[10px] font-black italic tracking-[0.5em]">LUME</div>
        <button onclick="window.history.back()" class="text-[9px] font-bold border border-black px-6 py-2 rounded-full">← VOLVER</button>
    </nav>

    <div class="max-w-md w-full space-y-10 py-12">
        <h1 class="text-4xl md:text-5xl font-serif font-light italic text-center lowercase first-letter:uppercase tracking-normal normal-case">Nuevo suscriptor.</h1>
        
        <form id="reg-form" class="space-y-6">
            <div class="space-y-2">
                <label class="text-[8px] font-bold text-neutral-400 italic ml-2">NOMBRE DE EMPRESA</label>
                <input type="text" id="nombre_empresa" required placeholder="RAZÓN SOCIAL" class="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold outline-none focus:border-black/20 shadow-sm uppercase">
            </div>

            <div class="space-y-2">
                <label class="text-[8px] font-bold text-neutral-400 italic ml-2">WHATSAPP (INT.)</label>
                <input type="tel" id="numero_telefono" required placeholder="+54911..." class="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold outline-none focus:border-black/20 shadow-sm uppercase">
            </div>

            <div class="space-y-2">
                <label class="text-[8px] font-bold text-neutral-400 italic ml-2">EMAIL DE SUSCRIPCIÓN</label>
                <input type="email" id="email" required placeholder="USUARIO@LUMEGLOBALCORE.COM" class="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold outline-none focus:border-black/20 shadow-sm uppercase">
            </div>

            <div class="space-y-2">
                <label class="text-[8px] font-bold text-neutral-400 italic ml-2">CREAR CONTRASEÑA</label>
                <input type="password" id="password" required placeholder="••••••••" class="w-full bg-neutral-50/50 border border-black/5 p-4 rounded-2xl text-[10px] font-bold outline-none focus:border-black/20 shadow-sm uppercase">
            </div>

            <button type="submit" id="submit-btn" class="w-full bg-black text-white p-5 rounded-3xl text-[10px] font-bold tracking-[0.5em] shadow-xl active:scale-95 transition-all mt-4">REGISTRAR</button>
        </form>
    </div>

    <script>
        document.getElementById('reg-form').onsubmit = async (e) => {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            btn.innerText = 'PROCESANDO...';

            const payload = {
                email: document.getElementById('email').value.toLowerCase(),
                password: document.getElementById('password').value,
                nombre_empresa: document.getElementById('nombre_empresa').value,
                numero_telefono: document.getElementById('numero_telefono').value
            };

            try {
                const res = await fetch('/api/v1/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'X-Lume-Node': 'SAN_PABLO_01' },
                    body: JSON.stringify(payload)
                });
                if (res.ok) {
                    alert('REGISTRO EXITOSO EN NODO SAN PABLO');
                    window.location.href = '/login/';
                } else { alert('ERROR: DATOS RECHAZADOS POR KERNEL'); }
            } catch (err) { alert('FALLO DE CONEXIÓN'); }
            btn.innerText = 'REGISTRAR';
        };
    </script>
</body>
</html>
EOF
      
