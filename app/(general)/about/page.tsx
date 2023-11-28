import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Acerca de',
    description: 'Acerca de la aplicación',
}

export default function About() {
    return (
        <span className='text-5xl'>Acerca de</span>
    )
}