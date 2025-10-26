// Placeholder for Shopify integration
// In a real application, this would connect to the Shopify Storefront API
// to fetch actual product data.

export interface Product {
  id: string
  title: string
  descriptionHtml: string
  handle: string
  price: string
  currencyCode: string
  images: { url: string; altText?: string; width: number; height: number }[]
  variants: {
    id: string
    title: string
    price: string
    currencyCode: string
    selectedOptions: { name: string; value: string }[]
  }[]
}

export async function getProducts(): Promise<Product[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: 'shopify-1',
      title: 'Performance Tee',
      descriptionHtml: '<p>A high-performance tee designed for comfort and style.</p>',
      handle: 'performance-tee',
      price: '35.00',
      currencyCode: 'USD',
      images: [
        { url: '/placeholder-tee.jpg', altText: 'Performance Tee', width: 600, height: 600 },
      ],
      variants: [
        {
          id: 'v1-1',
          title: 'Small',
          price: '35.00',
          currencyCode: 'USD',
          selectedOptions: [{ name: 'Size', value: 'Small' }],
        },
        {
          id: 'v1-2',
          title: 'Medium',
          price: '35.00',
          currencyCode: 'USD',
          selectedOptions: [{ name: 'Size', value: 'Medium' }],
        },
      ],
    },
    {
      id: 'shopify-2',
      title: 'Minimalist Hoodie',
      descriptionHtml: '<p>A comfortable and stylish hoodie for everyday wear.</p>',
      handle: 'minimalist-hoodie',
      price: '60.00',
      currencyCode: 'USD',
      images: [
        { url: '/placeholder-hoodie.jpg', altText: 'Minimalist Hoodie', width: 600, height: 600 },
      ],
      variants: [
        {
          id: 'v2-1',
          title: 'Small',
          price: '60.00',
          currencyCode: 'USD',
          selectedOptions: [{ name: 'Size', value: 'Small' }],
        },
        {
          id: 'v2-2',
          title: 'Medium',
          price: '60.00',
          currencyCode: 'USD',
          selectedOptions: [{ name: 'Size', value: 'Medium' }],
        },
      ],
    },
    {
      id: 'shopify-3',
      title: 'Flex Shorts',
      descriptionHtml: '<p>Flexible shorts perfect for workouts or casual wear.</p>',
      handle: 'flex-shorts',
      price: '45.00',
      currencyCode: 'USD',
      images: [{ url: '/placeholder-shorts.jpg', altText: 'Flex Shorts', width: 600, height: 600 }],
      variants: [
        {
          id: 'v3-1',
          title: 'Small',
          price: '45.00',
          currencyCode: 'USD',
          selectedOptions: [{ name: 'Size', value: 'Small' }],
        },
        {
          id: 'v3-2',
          title: 'Medium',
          price: '45.00',
          currencyCode: 'USD',
          selectedOptions: [{ name: 'Size', value: 'Medium' }],
        },
      ],
    },
  ]
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const products = await getProducts()
  return products.find((product) => product.handle === handle) || null
}
