import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'
import './globals.css'

const titillium = Titillium_Web({ weight: ["400"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App - Curso Fernando Herrera',
  description: 'Esta es una aplicación de ejemplo para el curso de Next.js de Fernando Herrera',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={titillium.className}>{children}</body>
    </html>
  )
}
