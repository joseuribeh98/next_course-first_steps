import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Acerca de',
    description: 'Acerca de la aplicación',
}

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <span className='text-5xl'>Acerca de</span>
        </main>
    )
    }