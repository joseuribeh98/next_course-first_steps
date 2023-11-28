import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'

const navItems = [
    {path: '/contact', label: 'Contact'},
    {path: '/about', label: 'About'},
    {path: '/pricing', label: 'Pricing'},
]

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href='/' className='flex items-center'>
                <HomeIcon className='mr-2' />
                <span> Home </span>
            </Link>
            <div className="flex flex-1"></div>

            {navItems.map(({path, label}) => (
                <Link key={path} href={path} className='mr-2'>
                    {label}
                </Link>
            ))}
        </nav>
    )
}
