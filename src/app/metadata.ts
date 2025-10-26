import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://levwear.com'), // Replace with actual domain
  title: {
    default: 'LEV WEAR | Elevate Every Rep.',
    template: '%s | LEV WEAR',
  },
  description: 'LEV WEAR: Elevate Every Rep. Premium athletic wear designed for performance, minimal aesthetics, and built-to-order quality.',
  keywords: ['LEV WEAR', 'athletic wear', 'performance wear', 'minimal design', 'print-on-demand', 'fitness apparel', 'gym clothes'],
  authors: [{ name: 'LEV WEAR' }],
  creator: 'LEV WEAR',
  openGraph: {
    title: 'LEV WEAR | Elevate Every Rep.',
    description: 'LEV WEAR: Elevate Every Rep. Premium athletic wear designed for performance, minimal aesthetics, and built-to-order quality.',
    url: 'https://levwear.com', // Replace with actual domain
    siteName: 'LEV WEAR',
    images: [
      {
        url: 'https://levwear.com/og-image.jpg', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'LEV WEAR',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LEV WEAR | Elevate Every Rep.',
    description: 'LEV WEAR: Elevate Every Rep. Premium athletic wear designed for performance, minimal aesthetics, and built-to-order quality.',
    images: ['https://levwear.com/twitter-image.jpg'], // Replace with actual Twitter image
    creator: '@levwear', // Replace with actual Twitter handle
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};
