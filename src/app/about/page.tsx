import type { Metadata } from 'next'
import Image from 'next/image'
import TeamCard from '@/components/team/TeamCard'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About • LEV WEAR',
  description:
    'LEV WEAR builds premium, built-to-order athletic wear with minimalist aesthetics and performance engineering.',
  openGraph: {
    title: 'About • LEV WEAR',
    description: 'Built-to-order athletic wear. Minimalist aesthetics. Performance engineering.',
    url: 'https://levwear.fit/about',
    siteName: 'LEV WEAR',
    images: ['/og-about.png'],
  },
}

const stats = [
  { label: 'Built-to-Order', value: '100%' },
  { label: 'Avg. Production Waste', value: '-35%' },
  { label: 'Customer Satisfaction', value: '4.9/5' },
  { label: 'On-Time Delivery', value: '98%' },
]

const values = [
  {
    title: 'Performance First',
    desc: 'Fabrics and cuts engineered for the demands of serious training.',
  },
  {
    title: 'Minimalist Aesthetic',
    desc: 'Clean lines, restrained branding, timeless color stories.',
  },
  {
    title: 'Made on Demand',
    desc: 'Reduce waste. Make what’s needed. Deliver fresh from the line.',
  },
  {
    title: 'Relentless Quality',
    desc: 'Every stitch matters. Every piece is built to last.',
  },
]

const milestones = [
  { year: '2024', text: 'Concepted LEV WEAR. Built brand foundations & prototype line.' },
  { year: '2025', text: 'Launched first built-to-order drop with investor-ready platform.' },
  { year: 'Next', text: 'Expand material R&D, partnerships, and on-demand capacity.' },
]

export default function AboutPage() {
  return (
    <div className='min-h-screen'>
      {/* HERO */}
      <section className='section-y hero-spotlight'>
        <div className='container-lev grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-center'>
          <div>
            <p className='text-white/60 mb-3 tracking-[0.18em] text-xs'>ABOUT LEV • WEAR</p>
            <h1 className='headline'>Engineered Minimalism. Built to Perform.</h1>
            <p className='subhead mt-4'>
              We design premium, built-to-order athletic wear that blends performance engineering
              with a clean, modern aesthetic. Every piece is made with intent—so you can elevate
              every rep.
            </p>

            <div className='mt-8 flex gap-3'>
              <Link href='/shop' className='btn-primary cta-magnetic'>
                Shop the Drop
              </Link>
              <Link href='/journal' className='btn-ghost cta-magnetic'>
                Read the Journal
              </Link>
            </div>
          </div>

          <div className='relative h-[260px] md:h-[360px] rounded-2xl overflow-hidden ring-1 ring-white/10'>
            <Image
              src='/about/atelier-hero.jpg'
              alt='LEV WEAR atelier'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className='section-y'>
        <div className='container-lev'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {stats.map((s) => (
              <div
                key={s.label}
                className='rounded-2xl bg-white/[0.03] border border-white/10 p-6 text-center'
              >
                <div className='text-3xl md:text-4xl font-semibold'>{s.value}</div>
                <div className='text-white/70 mt-2 text-sm'>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className='section-y'>
        <div className='container-lev'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-6'>Our Values</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            {values.map((v) => (
              <div key={v.title} className='rounded-2xl bg-white/[0.03] border border-white/10 p-6'>
                <h3 className='text-lg font-medium'>{v.title}</h3>
                <p className='text-white/80 mt-2'>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className='section-y'>
        <div className='container-lev'>
          <div className='flex items-end justify-between mb-6'>
            <h2 className='text-2xl md:text-3xl font-semibold'>Founding Team</h2>
            <p className='text-white/60 text-sm'>Los Angeles, California</p>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            <TeamCard
              name='Levon Gevorkyan'
              role='Chief Executive Officer'
              headshotSrc='/about/ceo-placeholder.svg'
              bio='Leads product vision, brand, and partnerships. Drives the built-to-order model with a focus on quality and customer experience.'
              badges={['Product', 'Brand', 'Partnerships']}
            />
            <TeamCard
              name='Gor Gevorkyan'
              role='Chief Operating Officer'
              headshotSrc='/about/coo-placeholder.svg'
              bio='Owns operations, supply chain, and go-to-market. Optimizes production and logistics to deliver on-time, every time.'
              badges={['Operations', 'Supply Chain', 'Growth']}
            />
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className='section-y'>
        <div className='container-lev'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-6'>Milestones</h2>
          <div className='rounded-2xl bg-white/[0.03] border border-white/10 p-6 md:p-8'>
            <div className='space-y-6'>
              {milestones.map((m, i) => (
                <div key={i} className='grid md:grid-cols-[120px,1fr] gap-4'>
                  <div className='text-white/70'>{m.year}</div>
                  <div>{m.text}</div>
                </div>
              ))}
              <Separator className='my-4 bg-white/10' />
              <p className='text-white/70 text-sm'>
                We’re building a performance brand for athletes who value quality and intentional
                design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / PRESS */}
      <section className='section-y'>
        <div className='container-lev'>
          <div className='rounded-2xl bg-gradient-to-r from-white/[0.06] to-transparent border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
            <div>
              <h3 className='text-xl font-semibold'>Partner with LEV WEAR</h3>
              <p className='text-white/75 mt-1'>Media & retail inquiries — we’d love to connect.</p>
            </div>
            <div className='flex gap-3'>
              <Link href='/journal' className='btn-ghost'>
                Press Kit
              </Link>
              <Link href='/contact' className='btn-primary'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
