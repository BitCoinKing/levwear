'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Container from '@/components/container'
import Section from '@/components/section'
import PageTitle from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { fadeInUp, stagger } from '@/lib/motion'
import { getProducts, Product } from '@/lib/shopify' // Import the function to fetch products and the Product interface

// Fetch products on the server or at build time (ISR)
// For now, we'll fetch them directly in the component, but this should ideally be server-side or using Next.js data fetching methods
// For ISR, we'd typically use fetch with revalidate option or dynamic functions.
// For simplicity here, we'll fetch directly and assume caching/ISR is handled by Next.js or the shopifyFetch function.
async function fetchProducts(): Promise<Product[]> {
  try {
    // The getProducts function in lib/shopify.ts is already cached and uses 'force-cache'
    // For ISR, we might need to adjust the fetch options in shopify.ts or use Next.js's dynamic functions.
    // For now, we rely on the caching mechanism in lib/shopify.ts.
    const products = await getProducts()
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    // Return mock data or an empty array in case of error
    return [
      {
        id: 'mock-1',
        title: 'Performance Tee (Mock)',
        descriptionHtml: '<p>A mock high-performance tee.</p>',
        handle: 'performance-tee-mock',
        price: '35.00',
        currencyCode: 'USD',
        images: [
          { url: '/placeholder-tee.jpg', altText: 'Performance Tee', width: 600, height: 600 },
        ],
        variants: [],
      },
      {
        id: 'mock-2',
        title: 'Minimalist Hoodie (Mock)',
        descriptionHtml: '<p>A mock comfortable and stylish hoodie.</p>',
        handle: 'minimalist-hoodie-mock',
        price: '60.00',
        currencyCode: 'USD',
        images: [
          { url: '/placeholder-hoodie.jpg', altText: 'Minimalist Hoodie', width: 600, height: 600 },
        ],
        variants: [],
      },
      {
        id: 'mock-3',
        title: 'Flex Shorts (Mock)',
        descriptionHtml: '<p>A mock flexible shorts.</p>',
        handle: 'flex-shorts-mock',
        price: '45.00',
        currencyCode: 'USD',
        images: [
          { url: '/placeholder-shorts.jpg', altText: 'Flex Shorts', width: 600, height: 600 },
        ],
        variants: [],
      },
    ]
  }
}

export default async function ShopPage() {
  const products = await fetchProducts()

  return (
    <>
      {/* Page Header */}
      <Section className='bg-background text-foreground py-12 md:py-16'>
        <Container>
          <PageTitle level='h1' className='text-center mb-8'>
            Shop All Products
          </PageTitle>
          <p className='text-center text-lg text-muted-foreground max-w-2xl mx-auto'>
            Discover our latest collection of high-performance, minimalist athletic wear.
          </p>
          {/* Placeholder for Filters */}
          <div className='mt-8 flex justify-center gap-4'>
            {/* Filter buttons would go here */}
            <Button variant='outline' size='sm'>
              Men
            </Button>
            <Button variant='outline' size='sm'>
              Women
            </Button>
            <Button variant='outline' size='sm'>
              Category
            </Button>
          </div>
        </Container>
      </Section>

      {/* Product Grid */}
      <Section className='bg-muted text-foreground'>
        <Container>
          <motion.div
            variants={stagger}
            initial='initial'
            animate='animate'
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {products.map((product) => (
              <motion.div variants={fadeInUp} key={product.id}>
                <Link href={`/product/${product.handle}`} className='block'>
                  <Card className='h-full overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                    <div className='relative w-full h-64'>
                      <Image
                        src={product.images[0]?.url || '/placeholder-image.jpg'} // Fallback image
                        alt={product.images[0]?.altText || product.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className='transition-transform duration-300 hover:scale-105'
                      />
                    </div>
                    <CardContent className='p-4'>
                      <CardTitle className='text-lg font-semibold mb-1'>{product.title}</CardTitle>
                      <CardDescription className='text-muted-foreground'>
                        {product.price} {product.currencyCode}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          {/* Placeholder for pagination or load more */}
          <div className='text-center mt-12'>
            <Button variant='outline' size='lg'>
              Load More Products
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
