import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 🛡️ PROTOCOLO DE INTEGRIDAD DE ACCESO (LGC V5.8.1)
export function middleware(request: NextRequest) {
  // 1. CAPTURA DE ESTADO DE SESIÓN
  // Nota: El token se busca en las cookies para validación de Server-Side Rendering
  const token = request.cookies.get('lume_session_token')?.value
  const { pathname } = request.nextUrl

  // 2. PROTECCIÓN DE RUTAS DE GESTIÓN (M-07 / M-22)
  // Bloqueo de acceso al dashboard y sub-rutas sin credenciales activas
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      const loginUrl = new URL('/login', request.url)
      // Se añade la ruta de origen para redirección post-login
      loginUrl.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // 3. PREVENCIÓN DE RE-LOGIN (SI YA ESTÁ AUTENTICADO)
  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  // 4. INYECCIÓN DE CABECERAS DE NODO (LITERALIDAD SAN PABLO)
  const response = NextResponse.next()
  response.headers.set('X-Lume-Node', 'SAN_PABLO_01')
  response.headers.set('X-Security-Policy', 'LUME_SIGMA_2026')
  
  return response
}

// CONFIGURACIÓN DE MATCHER SEGÚN BLUEPRINT
export const config = {
  /*
   * Match de todas las rutas excepto:
   * - api (rutas del backend)
   * - _next/static (archivos estáticos)
   * - _next/image (optimización de imágenes)
   * - favicon.ico (iconos)
   * - public (imágenes y assets)
   */
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|public).*)'],
}
