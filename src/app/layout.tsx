import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import { Providers } from '@/components/provider';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'TARAFABBS | Exquisite Handcrafted Sarees',
  description: 'Discover a curated collection of exquisite handcrafted sarees featuring silk, cotton, and tussor fabrics with artisanal techniques including batik, kalamkari, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${montserrat.variable} ${playfair.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}