'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type Props = {
  name: string
  role: string
  headshotSrc: string
  bio: string
  badges?: string[]
}

export default function TeamCard({ name, role, headshotSrc, bio, badges = [] }: Props) {
  return (
    <Card className='overflow-hidden bg-white/[0.03] border-white/10'>
      <div className='p-6 md:p-8 grid grid-cols-1 sm:grid-cols-[140px,1fr] gap-6'>
        <div className='relative h-[140px] w-[140px] rounded-2xl overflow-hidden ring-1 ring-white/15'>
          <Image
            src={headshotSrc}
            alt={`${name} — ${role}`}
            fill
            sizes='140px'
            className='object-cover'
            priority
          />
        </div>
        <div className='flex flex-col gap-3'>
          <div>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-white/70'>{role}</p>
          </div>
          <p className='text-white/80 leading-relaxed'>{bio}</p>
          {badges.length > 0 && (
            <div className='flex flex-wrap gap-2 mt-1'>
              {badges.map((b) => (
                <Badge key={b} variant='secondary' className='bg-white/10 text-white'>
                  {b}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
