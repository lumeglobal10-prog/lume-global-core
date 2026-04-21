import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 🛡️ PROTOCOLO DE INTEGRIDAD DE ACCESO (LGC V5.2)
// ADVERTENCIA: En modo 'output: export', la lógica de redirección debe ser espejada 
// por el componente del Cliente para garantizar el bloqueo operativo.

export function middleware(request: NextRequest) {
  const token = request.cookies.get('lume_session_token')?.value
  const { pathname } = request.nextUrl

  // 1. PROTECCIÓN DE RUTAS DE GESTIÓN (BÚNKER)
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      const loginUrl = new URL('/login/', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  // 2. PREVENCIÓN DE RE-LOGIN
  if (pathname.startsWith('/login')) {
    if (token) {
      return NextResponse.redirect(new URL('/dashboard/', request.url))
    }
  }

  const response = NextResponse.next()
  
  // 3. IDENTIFICADORES DE NODO INMUTABLES (REQUERIMIENTO MANDATORIO)
  response.headers.set('X-Lume-Node', 'SAN_PABLO_01')
  response.headers.set('X-Security-Policy', 'LUME_SIGMA_2026')
  
  return response
}

export const config = {
  matcher: ['/dashboard/:path*', '/login/'],
}
