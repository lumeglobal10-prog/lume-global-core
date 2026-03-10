import React from 'react';

export const metadata = {
  title: 'Lume Global Core',
  description: 'Autoridad Tecnológica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
