'use client'

import Image from 'next/image'
import Link from 'next/link'

type Props = {
  href: string
  name: string
  price: string
  src: string
  alt: string
  priority?: boolean
}

export default function ProductCard({ href, name, price, src, alt, priority=false }: Props) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 p-4 md:p-5"
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw, 33vw"
            className="object-cover object-center transition-transform duration-500 will-change-transform group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-white/70 text-sm">{price}</p>
        </div>
        <span className="text-white/60 group-hover:text-white text-sm">Shop →</span>
      </div>
    </Link>
  )
}
