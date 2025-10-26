'use client';

import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import ProductDetailsClient from '@/components/product/ProductDetailsClient';
import Container from '@/components/container';
import Section from '@/components/section';
import PageTitle from '@/components/page-title';
import { Button } from '@/components/ui/button';
import { getProductByHandle } from '@/lib/shopify'; // Import the function to fetch a single product

// Define the type for a product based on the shopify.ts structure
interface Product {
  id: string;
  title: string;
  descriptionHtml: string;
  handle: string;
  price: string;
  currencyCode: string;
  images: { url: string; altText?: string; width: number; height: number }[];
  variants: {
    id: string;
    title: string;
    price: string;
    currencyCode: string;
    selectedOptions: { name: string; value: string }[];
  }[];
}

// Define the type for the page props, including the handle from the URL
interface ProductPageProps {
  params: {
    handle: string;
  };
}

// Fetch product data using the handle
async function fetchProductData(handle: string): Promise<Product | null> {
  try {
    const product = await getProductByHandle(handle);
    return product;
  } catch (error) {
    console.error(`Error fetching product with handle "${handle}":`, error);
    // Return null or mock data in case of error
    return null;
  }
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { handle } = params;
  const product = await fetchProductData(handle);

  // Handle case where product is not found
  if (!product) {
    return (
      <Section className='bg-background text-foreground py-12 md:py-16'>
        <Container>
          <PageTitle level='h1' className='text-center mb-8'>Product Not Found</PageTitle>
          <p className='text-center text-lg text-muted-foreground'>
            The product you are looking for could not be found.
          </p>
          <div className='text-center mt-8'>
            <Button asChild variant='outline' size='lg'>
              <Link href='/shop'>Back to Shop</Link>
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <ProductDetailsClient product={product} />
  );
}
