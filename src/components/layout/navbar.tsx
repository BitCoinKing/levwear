'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useMounted } from '@/lib/use-mounted';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { title: 'Shop', href: '/shop' },
  { title: 'Men', href: '/men' },
  { title: 'Women', href: '/women' },
  { title: 'Drops', href: '/drops' },
  { title: 'Journal', href: '/journal' },
  { title: 'About', href: '/about' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const mounted = useMounted();
  if (!mounted) return null; // avoid SSR/CSR ID mismatches

  return (
    <motion.header
      initial={false}              // <-- critical: no SSR vs CSR diff
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30"
    >
      <div className='container flex h-16 items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='text-2xl font-bold text-foreground'>
          LEV • WEAR
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className='hidden lg:flex'>
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuLink
                  href={link.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === link.href && 'bg-accent text-accent-foreground',
                  )}
                >
                  {link.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='lg:hidden'>
            <Button variant='ghost' size='icon'>
              <Menu className='size-6' />
              <span className='sr-only'>Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
            <nav className='flex flex-col gap-4 pt-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'w-full justify-start',
                    pathname === link.href && 'bg-accent text-accent-foreground',
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
