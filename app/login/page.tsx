# Ubicación: /var/www/lume_core/out/login/index.html
cat <<'EOF' | sudo tee /var/www/lume_core/out/login/index.html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8"><title>LUME | LOGIN</title>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>.font-serif { font-family: 'Cormorant Garamond', serif; } body { text-transform: uppercase; letter-spacing: 0.2em; }</style>
</head>
<body class="bg-white text-black min-h-screen flex flex-col items-center justify-center p-10">
    <h1 class="text-4xl md:text-5xl font-serif font-light italic text-center lowercase first-letter:uppercase mb-12 tracking-normal">Acceso de suscriptores.</h1>
    <form id="auth-form" class="w-full max-w-xs space-y-8">
        <div class="space-y-2">
            <label class="text-[8px] font-bold text-neutral-400 italic">EMAIL DE SUSCRIPCIÓN</label>
            <input type="email" id="email" required class="w-full border-b border-black/10 py-3 text-[10px] font-bold outline-none focus:border-black transition-all bg-transparent">
        </div>
        <div class="space-y-2">
            <label class="text-[8px] font-bold text-neutral-400 italic">CREDENCIAL</label>
            <input type="password" id="password" required class="w-full border-b border-black/10 py-3 text-[10px] font-bold outline-none focus:border-black transition-all bg-transparent">
        </div>
        <button type="submit" class="w-full bg-black text-white py-5 rounded-3xl text-[9px] font-bold tracking-[0.5em] shadow-xl active:scale-95 transition-all">INGRESAR</button>
    </form>
    <script>
        document.getElementById('auth-form').onsubmit = async (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            btn.innerText = 'SINCRONIZANDO...';
            
            try {
                // RUTA RELATIVA SEGÚN DIRECTIVA ADMINISTRADOR
                const res = await fetch('/api/v1/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'X-Lume-Node': 'SAN_PABLO_01' },
                    body: JSON.stringify({ 
                        email: document.getElementById('email').value.toLowerCase(),
                        password: document.getElementById('password').value
                    })
                });
                if (res.ok) {
                    const data = await res.json();
                    localStorage.setItem('lume_session_token', data.access_token);
                    localStorage.setItem('lume_user_mail', document.getElementById('email').value);
                    window.location.href = '/dashboard/';
                } else { alert('ACCESO DENEGADO: ERROR EN BÚNKER SAN PABLO'); }
            } catch (err) { alert('FALLO DE CONEXIÓN: VERIFICAR PROXY NGINX'); }
            btn.innerText = 'INGRESAR';
        };
    </script>
</body>
</html>
EOF
  
