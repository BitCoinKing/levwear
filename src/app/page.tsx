import Link from 'next/link'
import ProductCard from '../components/ProductCard'

const features = [
  {
    title: 'Performance Driven',
    desc: 'Advanced fabrics and ergonomic cuts for serious training.',
  },
  { title: 'Minimalist Aesthetic', desc: 'Clean lines, subtle branding, elevated palette.' },
  { title: 'Built-to-Order Quality', desc: 'Reduced waste, fresh production, brand-first focus.' },
]

// Map images from /public (numbers → products)
const products = [
  {
    name: 'Performance Tee',
    price: '$35.00',
    href: '/products/performance-tee',
    src: '/001.jpg',
    alt: 'LEV WEAR Performance Tee in black',
  },
  {
    name: 'Minimalist Hoodie',
    price: '$60.00',
    href: '/products/minimalist-hoodie',
    src: '/002.jpg',
    alt: 'LEV WEAR Minimalist Hoodie with LW logo',
  },
  {
    name: 'Flex Shorts',
    price: '$45.00',
    href: '/products/flex-shorts',
    src: '/003.jpg',
    alt: 'LEV WEAR Flex Shorts in black with LW logo',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className='section-y hero-spotlight'>
        <div className='container-lev'>
          <div className='max-w-3xl'>
            <h1 className='headline'>Elevate Every Rep.</h1>
            <p className='subhead mt-4'>
              Premium athletic wear designed for performance, minimal aesthetics, and built-to-order
              quality.
            </p>
            <div className='mt-8 flex gap-4'>
              <Link href='/shop' className='btn-primary'>
                Shop the Drop
              </Link>
              <Link href='/journal' className='btn-ghost'>
                Join the Journal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className='section-y'>
        <div className='container-lev'>
          <div className='flex items-end justify-between mb-6'>
            <h2 className='text-2xl md:text-3xl font-semibold'>Featured Products</h2>
            <Link href='/shop' className='text-white/80 hover:text-white'>
              View All
            </Link>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {products.map((p, i) => (
              <ProductCard
                key={p.name}
                href={p.href}
                name={p.name}
                price={p.price}
                src={p.src}
                alt={p.alt}
                priority={i === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
