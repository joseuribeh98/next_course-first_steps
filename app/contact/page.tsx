import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contacto',
    description: 'Contacto de la aplicación',
}

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <span className='text-5xl'>Contacto</span>
        </main>
    )
    }