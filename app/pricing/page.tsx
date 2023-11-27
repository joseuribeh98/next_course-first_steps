import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Precio',
    description: 'Precio de la aplicación',
}

export default function Pricing() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <span className='text-5xl'>Precios</span>
        </main>
    )
    }