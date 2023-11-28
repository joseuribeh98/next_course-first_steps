import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Precio',
    description: 'Precio de la aplicación',
}

export default function Pricing() {
    return (
        <span className='text-5xl'>Precios</span>
    )
}