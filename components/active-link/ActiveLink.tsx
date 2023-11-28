'use client'

import Link from 'next/link'

import style from './ActiveLink.module.css'
import { usePathname } from 'next/navigation'

interface ActiveLinkProps {
  path: string,
  label: string,
}

export const ActiveLink = ({ path, label }: ActiveLinkProps) => {

  const pathName = usePathname()

  return (
    <Link
      className={`${style.link} ${(pathName === path) && style['active-link']}`}
      href={path}
    >
      {label}
    </Link>
  )
}
