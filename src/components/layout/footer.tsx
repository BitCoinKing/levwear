'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Container from '@/components/container';
import Section from '@/components/section';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section className='bg-levwear-black text-levwear-white py-12 md:py-16'>
      <Container>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4'>
          {/* Column 1: Logo and Description */}
          <div className='col-span-1'>
            <Link href='/' className='text-2xl font-bold text-levwear-white'>
              LEV • WEAR
            </Link>
            <p className='mt-4 text-sm text-levwear-slate-light'>
              Elevate Every Rep. Premium athletic wear designed for performance, minimal aesthetics, and built-to-order quality.
            </p>
          </div>

          {/* Column 2: Shop Links */}
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Shop</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/shop' className='text-levwear-slate-light hover:text-levwear-white'>
                  All Products
                </Link>
              </li>
              <li>
                <Link href='/men' className='text-levwear-slate-light hover:text-levwear-white'>
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link href='/women' className='text-levwear-slate-light hover:text-levwear-white'>
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link href='/drops' className='text-levwear-slate-light hover:text-levwear-white'>
                  Latest Drops
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Support Links */}
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Company & Support</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/about' className='text-levwear-slate-light hover:text-levwear-white'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/journal' className='text-levwear-slate-light hover:text-levwear-white'>
                  Journal
                </Link>
              </li>
              <li>
                <Link href='/contact' className='text-levwear-slate-light hover:text-levwear-white'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href='/faq' className='text-levwear-slate-light hover:text-levwear-white'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href='/shipping-returns' className='text-levwear-slate-light hover:text-levwear-white'>
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div className='col-span-1 md:col-span-1 lg:col-span-1'>
            <h3 className='mb-4 text-lg font-semibold'>Stay Connected</h3>
            <p className='text-sm text-levwear-slate-light'>
              Subscribe to our newsletter for exclusive updates and offers.
            </p>
            <form className='mt-4 flex gap-2'>
              <Input type='email' placeholder='Your email' className='flex-grow bg-levwear-slate-light border-levwear-slate-default text-levwear-white placeholder:text-levwear-slate-default' />
              <Button type='submit' variant='ctaPrimary'>
                <Mail className='size-4' />
                <span className='sr-only'>Subscribe</span>
              </Button>
            </form>
            <div className='mt-6 flex space-x-4'>
              <Link href='#' className='text-levwear-slate-light hover:text-levwear-white'>
                <Facebook className='size-6' />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link href='#' className='text-levwear-slate-light hover:text-levwear-white'>
                <Instagram className='size-6' />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link href='#' className='text-levwear-slate-light hover:text-levwear-white'>
                <Twitter className='size-6' />
                <span className='sr-only'>Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-levwear-slate-light pt-8 text-center text-sm text-levwear-slate-light'>
          &copy; {currentYear} LEV WEAR. All rights reserved.
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
