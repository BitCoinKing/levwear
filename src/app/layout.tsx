import './globals.css';
import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import FreeShippingBar from '@/components/free-shipping-bar';
import Announcement from '@/components/announcement';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'LEV WEAR • Elevate Every Rep',
  description: 'Premium athletic wear. Minimal aesthetics. Built-to-order quality.',
  metadataBase: new URL('https://levwear.fit'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CartProvider>
            <Announcement message="Limited time offer: 20% off all new arrivals!" linkHref="/shop" />
            <FreeShippingBar currentCartTotal={30} />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
