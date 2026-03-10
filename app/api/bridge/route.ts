import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization');
  
  // Validación de Seguridad Módulo 3 (Custodio)
  if (authHeader !== `Bearer ${process.env.LUME_INTERNAL_TOKEN}`) {
    return NextResponse.json({ error: 'Acceso Denegado - AEGIS Shield Active' }, { status: 401 });
  }

  try {
    const data = await request.json();
    // Aquí recibimos los datos de Londres (165.22.114.116)
    return NextResponse.json({ 
      status: 'Sincronizado', 
      node: 'London-Primary',
      timestamp: new Date().toISOString(),
      payload_received: true 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Error de Trama de Datos' }, { status: 500 });
  }
}
