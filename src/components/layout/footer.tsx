import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ToggleTheme from '../toggle-theme';

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl mb-6">
              <span className="font-normal">TARA</span>FABBS
            </h3>
            <p className="text-muted-foreground text-sm">
              Exquisite sarees crafted with tradition, artistry, and passion since 2008.
            </p>
            <div className="flex space-x-4 mt-6">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 cursor-pointer">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button   
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 cursor-pointer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10 cursor-pointer">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <ToggleTheme />
            </div>
          </div>

          <div>
            <h3 className="font-medium text-base mb-6">Shopping</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/collections/silk-sarees" className="text-muted-foreground hover:text-foreground text-sm">
                  Silk Sarees
                </Link>
              </li>
              <li>
                <Link href="/collections/cotton-sarees" className="text-muted-foreground hover:text-foreground text-sm">
                  Cotton Sarees
                </Link>
              </li>
              <li>
                <Link href="/collections/tussor-sarees" className="text-muted-foreground hover:text-foreground text-sm">
                  Tussor Sarees
                </Link>
              </li>
              <li>
                <Link href="/collections/all" className="text-muted-foreground hover:text-foreground text-sm">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-muted-foreground hover:text-foreground text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/bestsellers" className="text-muted-foreground hover:text-foreground text-sm">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base mb-6">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/artisans" className="text-muted-foreground hover:text-foreground text-sm">
                  Our Artisans
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-foreground text-sm">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/store-locator" className="text-muted-foreground hover:text-foreground text-sm">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-foreground text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-muted-foreground hover:text-foreground text-sm">
                  Saree Care
                </Link>
              </li>
              <li>
                <Link href="/shipping-delivery" className="text-muted-foreground hover:text-foreground text-sm">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-muted-foreground hover:text-foreground text-sm">
                  Terns & Conditions
                </Link>
              </li>

              <li>
                <Link href="/cancellation-refund" className="text-muted-foreground hover:text-foreground text-sm">
                  Cancellation & Refund
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground order-2 md:order-1 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} TARAFABBS. All rights reserved.
          </p>
          <div className="flex gap-1 items-center space-x-4 order-1 md:order-2">
            Made with 💖 by <Link className='hover:underline' href="https://ignite-studios.vercel.app/">Ignite Studios</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}