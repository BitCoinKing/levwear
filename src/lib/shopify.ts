// Placeholder for Shopify integration
// In a real application, this would connect to the Shopify Storefront API
// to fetch actual product data.

interface Product {
  id: string;
  title: string;
  handle: string;
  price: string;
  currencyCode: string;
  image: string;
  altText?: string;
}

export async function getProducts(): Promise<Product[]> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return [
    {
      id: 'shopify-1',
      title: 'Performance Tee',
      handle: 'performance-tee',
      price: '35.00',
      currencyCode: 'USD',
      image: '/placeholder-tee.jpg',
      altText: 'Performance Tee',
    },
    {
      id: 'shopify-2',
      title: 'Minimalist Hoodie',
      handle: 'minimalist-hoodie',
      price: '60.00',
      currencyCode: 'USD',
      image: '/placeholder-hoodie.jpg',
      altText: 'Minimalist Hoodie',
    },
    {
      id: 'shopify-3',
      title: 'Flex Shorts',
      handle: 'flex-shorts',
      price: '45.00',
      currencyCode: 'USD',
      image: '/placeholder-shorts.jpg',
      altText: 'Flex Shorts',
    },
  ];
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find(product => product.handle === handle) || null;
}
