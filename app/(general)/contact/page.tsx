import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contacto',
    description: 'Contacto de la aplicación',
}

export default function Contact() {
    return (
        <span className='text-5xl'>Contacto</span>
    )
}