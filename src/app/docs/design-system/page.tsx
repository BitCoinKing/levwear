'use client';

import React from 'react';
import Container from '@/components/container';
import Section from '@/components/section';
import PageTitle from '@/components/page-title';
import StatCard from '@/components/stat-card';
import Marquee from '@/components/marquee';
import { Button } from '@/components/ui/button';
import { Lightbulb, Zap, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger, smoothReveal } from '@/lib/motion';

const DesignSystemPage = () => {
  return (
    <Container>
      <Section className='text-center'>
          <PageTitle level='display' className='mb-4'>
            LEV WEAR Design System
          </PageTitle>
          <p className='lead text-muted-foreground'>
            A comprehensive guide to the LEV WEAR brand's visual language and components.
          </p>
      </Section>

      {/* Color Palette */}
      <Section>
        <PageTitle level='h2' className='mb-6'>
          Color Palette
        </PageTitle>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ColorSwatch name='Black' hex='#0B0B0C' className='bg-levwear-black text-levwear-white' />
          <ColorSwatch name='Slate (Default)' hex='#0F172A' className='bg-levwear-slate text-levwear-white' />
          <ColorSwatch name='Slate (Light)' hex='#1E293B' className='bg-levwear-slate-light text-levwear-white' />
          <ColorSwatch name='White' hex='#FFFFFF' className='bg-levwear-white text-levwear-black border' />
          <ColorSwatch name='Electric Blue' hex='#2563EB' className='bg-levwear-electric-blue text-levwear-white' />
        </div>
      </Section>

      {/* Typography */}
      <Section>
        <PageTitle level='h2' className='mb-6'>
          Typography
        </PageTitle>
        <div className='space-y-4'>
          <p className='font-heading text-6xl font-bold leading-tight md:text-7xl lg:text-8xl'>Display Heading</p>
          <h1 className='font-heading text-5xl font-bold leading-tight md:text-6xl'>Heading 1</h1>
          <h2 className='font-heading text-4xl font-bold leading-tight md:text-5xl'>Heading 2</h2>
          <h3 className='font-heading text-3xl font-bold leading-tight md:text-4xl'>Heading 3</h3>
          <h4 className='font-heading text-2xl font-bold leading-tight md:text-3xl'>Heading 4</h4>
          <p className='text-xl md:text-2xl font-medium'>Lead paragraph for important information or introductions.</p>
          <p className='text-base md:text-lg'>
            Body text is used for the main content of the website. It should be legible and
            comfortable to read at various screen sizes.
          </p>
          <p className='text-sm md:text-base'>Small text for footnotes, captions, or less prominent information.</p>
        </div>
      </Section>

      {/* Spacing & Radii */}
      <Section>
        <PageTitle level='h2' className='mb-6'>
          Spacing & Radii
        </PageTitle>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
          <TokenDisplay name='--spacing-xs' value='0.25rem (4px)' />
          <TokenDisplay name='--spacing-sm' value='0.5rem (8px)' />
          <TokenDisplay name='--spacing-md' value='1rem (16px)' />
          <TokenDisplay name='--spacing-lg' value='1.5rem (24px)' />
          <TokenDisplay name='--spacing-xl' value='2rem (32px)' />
          <TokenDisplay name='--radius' value='0.5rem (8px)' />
        </div>
      </Section>

      {/* Shadows */}
      <Section>
        <PageTitle level='h2' className='mb-6'>
          Shadows
        </PageTitle>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
          <ShadowDisplay name='--shadow-sm' className='shadow-sm' />
          <ShadowDisplay name='--shadow-md' className='shadow-md' />
          <ShadowDisplay name='--shadow-lg' className='shadow-lg' />
        </div>
      </Section>

      {/* Components */}
      <Section>
        <PageTitle level='h2' className='mb-6'>
          Components
        </PageTitle>

        {/* Container & Section */}
        <div className='mb-8 rounded-lg border p-6'>
          <h3 className='mb-4'>Container & Section</h3>
          <Section className='bg-muted py-8'>
            <Container className='bg-background p-4 rounded-md border'>
              <p className='body'>
                This is content inside a `Container` within a `Section`.
              </p>
            </Container>
          </Section>
        </div>

        {/* PageTitle */}
        <div className='mb-8 rounded-lg border p-6'>
          <h3 className='mb-4'>PageTitle</h3>
          <PageTitle level='h1'>Example H1 Title</PageTitle>
          <PageTitle level='h2'>Example H2 Title</PageTitle>
          <PageTitle level='lead'>Example Lead Title</PageTitle>
        </div>

        {/* StatCard */}
        <div className='mb-8 rounded-lg border p-6'>
          <h3 className='mb-4'>StatCard</h3>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <StatCard
              title='Total Revenue'
              value='$45,231.89'
              description='+20.1% from last month'
              icon={<Zap className='size-4 text-muted-foreground' />}
            />
            <StatCard
              title='Subscriptions'
              value='+2350'
              description='+180.1% from last month'
              icon={<Lightbulb className='size-4 text-muted-foreground' />}
            />
            <StatCard
              title='Sales'
              value='+12,234'
              description='+19% from last month'
              icon={<Rocket className='size-4 text-muted-foreground' />}
            />
          </div>
        </div>

        {/* Marquee */}
        <div className='mb-8 rounded-lg border p-6'>
          <h3 className='mb-4'>Marquee</h3>
          <Marquee className='bg-muted py-4'>
            {[...Array(5)].map((_, i) => (
              <span key={i} className='text-4xl font-bold text-foreground/20'>
                LEV WEAR
              </span>
            ))}
          </Marquee>
        </div>

        {/* CTAButton Variants */}
        <div className='mb-8 rounded-lg border p-6'>
          <h3 className='mb-4'>CTAButton Variants</h3>
          <div className='flex flex-wrap gap-4'>
            <Button variant='default'>Primary CTA</Button>
            <Button variant='secondary'>Secondary CTA</Button>
            <Button variant='default'>Default Button</Button>
            <Button variant='outline'>Outline Button</Button>
          </div>
        </div>
      </Section>

      {/* Motion Helpers */}
      <Section>
        <PageTitle level='h2' className='mb-6'>
          Motion Helpers (Framer Motion)
        </PageTitle>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <motion.div variants={stagger} initial='initial' animate='animate' className='space-y-4'>
            <h3 className='font-heading text-xl font-semibold'>fadeInUp</h3>
            <motion.div variants={fadeInUp} className='h-24 w-full rounded-md bg-primary p-4 text-primary-foreground'>
              <p>This element fades in and moves up.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className='h-24 w-full rounded-md bg-secondary p-4 text-secondary-foreground'>
              <p>Another element with fadeInUp.</p>
            </motion.div>
          </motion.div>

          <motion.div variants={smoothReveal} initial='initial' animate='animate' className='space-y-4 overflow-hidden'>
            <h3 className='font-heading text-xl font-semibold'>smoothReveal</h3>
            <motion.div variants={smoothReveal} className='h-24 w-full rounded-md bg-accent p-4 text-accent-foreground'>
              <p>This element smoothly reveals from the bottom.</p>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </Container>
  );
};

// Helper Components for Documentation
import { cn } from '@/lib/utils'; // Import cn here

const ColorSwatch = ({ name, hex, className }: { name: string; hex: string; className: string }) => (
  <div className={cn('flex h-24 flex-col items-center justify-center rounded-md p-4', className)}>
    <p className='font-semibold'>{name}</p>
    <p className='text-sm'>{hex}</p>
  </div>
);

const TokenDisplay = ({ name, value }: { name: string; value: string }) => (
  <div className='rounded-md border p-4'>
    <p className='font-mono text-sm text-muted-foreground'>{name}</p>
    <p className='font-semibold'>{value}</p>
  </div>
);

const ShadowDisplay = ({ name, className }: { name: string; className: string }) => (
  <div className={cn('flex h-24 items-center justify-center rounded-md border bg-background p-4', className)}>
    <p className='font-mono text-sm text-muted-foreground'>{name}</p>
  </div>
);

export default DesignSystemPage;
