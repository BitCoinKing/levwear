'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/container';
import Section from '@/components/section';
import PageTitle from '@/components/page-title';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { fadeInUp, stagger } from '@/lib/motion';

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

interface ProductDetailsClientProps {
  product: Product;
}

const ProductDetailsClient: React.FC<ProductDetailsClientProps> = ({ product }) => {
  // State for selected variant and image
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  // Function to handle variant selection
  const handleVariantChange = (variantId: string) => {
    const variant = product.variants.find(v => v.id === variantId);
    if (variant) {
      setSelectedVariant(variant);
      // Update image based on variant if possible (requires variant image mapping)
      // For simplicity, we'll just use the first image for now or the one associated with the variant if available
      // In a real app, you'd map variant options to specific images.
      const variantImage = product.images.find(img =>
        variant.selectedOptions.every(option =>
          img.altText?.includes(option.value) || img.altText?.includes(option.name)
        )
      );
      if (variantImage) {
        setSelectedImage(variantImage);
      }
    }
  };

  // Function to handle adding to cart (placeholder)
  const handleAddToCart = () => {
    console.log('Adding to cart:', selectedVariant);
    // TODO: Implement actual add to cart logic using cart state management
    alert('Add to Cart functionality not yet implemented.');
  };

  return (
    <>
      {/* Product Details Section */}
      <Section className='bg-background text-foreground py-12 md:py-16'>
        <Container>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Product Image Gallery */}
            <motion.div variants={stagger} initial='initial' animate='animate' className='flex flex-col lg:flex-row gap-4'>
              <div className='relative w-full h-[500px] lg:h-[600px] order-2 lg:order-1'>
                <Image
                  src={selectedImage?.url || '/placeholder-image.jpg'}
                  alt={selectedImage?.altText || product.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='rounded-lg shadow-md'
                />
              </div>
              <div className='flex lg:flex-col gap-4 order-1 lg:order-2'>
                {product.images.map((image, index) => (
                  <motion.div
                    variants={fadeInUp}
                    key={index}
                    className='relative w-24 h-24 cursor-pointer border-2 rounded-md overflow-hidden hover:border-primary'
                    onClick={() => setSelectedImage(image)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={image.url || '/placeholder-image.jpg'}
                      alt={image.altText || product.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className='rounded-md'
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Product Information */}
            <motion.div variants={stagger} initial='initial' animate='animate' className='lg:pl-8'>
              <PageTitle level='h1' className='text-4xl md:text-5xl font-bold mb-4'>{product.title}</PageTitle>
              <p className='text-xl font-semibold text-primary mb-6'>
                {product.price} {product.currencyCode}
              </p>
              <div className='mb-6 text-muted-foreground' dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />

              {/* Variant Picker */}
              {product.variants.length > 1 && (
                <div className='mb-6'>
                  <h3 className='text-lg font-semibold mb-2'>Select Options:</h3>
                  <select
                    value={selectedVariant?.id}
                    onChange={(e) => handleVariantChange(e.target.value)}
                    className='w-full md:w-[280px] p-2 border border-gray-300 rounded-md bg-background text-foreground'
                    aria-label='Select product variant'
                  >
                    <option value=''>Select a variant</option>
                    {product.variants.map((variant) => (
                      <option key={variant.id} value={variant.id}>
                        {variant.title} - {variant.price} {product.currencyCode}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Add to Cart Button */}
              <motion.div variants={fadeInUp}>
                <Button size='lg' className='w-full md:w-auto' onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ProductDetailsClient;
