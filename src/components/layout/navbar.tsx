'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMounted } from '@/lib/use-mounted'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { motion } from 'framer-motion'

const NAV = [
  { href: '/shop', label: 'Shop' },
  { href: '/men', label: 'Men' },
  { href: '/women', label: 'Women' },
  { href: '/drops', label: 'Drops' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const mounted = useMounted()
  const pathname = usePathname()
  if (!mounted) return null

  return (
    <motion.header
      initial={false}
      className='sticky top-0 z-50 border-b border-white/10 supports-[backdrop-filter]:bg-black/30 backdrop-blur'
    >
      <div className='pointer-events-none absolute inset-x-0 top-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent' />

      <div className='container-lev h-16 grid grid-cols-3 items-center'>
        {/* Left: mobile menu */}
        <div className='flex lg:hidden'>
          <MobileMenu pathname={pathname} />
        </div>

        {/* Centered Logo (optically balanced) */}
        <div className='flex items-center justify-center'>
          <Link
            href='/'
            className='nav-logo select-none text-sm md:text-base font-semibold text-white/90 hover:text-white transition'
            aria-label='LEV WEAR home'
          >
            LEV &nbsp;•&nbsp; WEAR
          </Link>
        </div>

        {/* Right: desktop nav */}
        <nav className='hidden lg:flex items-center justify-end gap-6'>
          {NAV.map((item) => {
            const active = pathname?.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className='relative text-sm text-white/80 hover:text-white transition'
              >
                {item.label}
                <motion.span
                  layout
                  className='absolute -bottom-1 left-0 h-[2px] bg-white/80'
                  initial={false}
                  animate={{ width: active ? '100%' : 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              </Link>
            )
          })}
        </nav>
      </div>
    </motion.header>
  )
}

function MobileMenu({ pathname }: { pathname: string | null }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' aria-label='Open menu'>
          <Menu className='h-5 w-5' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='bg-background/95 backdrop-blur'>
        <SheetHeader>
          <SheetTitle className='tracking-[0.22em] text-white/90'>LEV • WEAR</SheetTitle>
        </SheetHeader>
        <div className='mt-6 flex flex-col gap-3'>
          {NAV.map((item) => {
            const active = pathname?.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base ${active ? 'text-white' : 'text-white/80'}`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}
