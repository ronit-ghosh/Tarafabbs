'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import CartDrawer from '@/components/shop/cart-drawer';
import { navLinks } from '@/lib/data';
import { sooner } from '@/lib/font';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isHomePage && !isScrolled
          ? 'bg-transparent text-white'
          : 'bg-background/80 backdrop-blur-md text-foreground shadow-sm'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className={cn("h-6 w-6", isHomePage && !isScrolled ? "text-white" : "")} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:max-w-sm">
              <nav className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8 pt-4">
                  <div className="font-serif text-2xl">
                    <span className={`${sooner.className}`}>TA<span className='text-[#820404]'>RA</span>FABBS</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <div className="space-y-6 flex-1">
                  {navLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-lg py-2 border-b border-border"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="py-6 border-t border-border mt-auto">
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Button className="flex-1" asChild>
                      <Link href="/register">Register</Link>
                    </Button>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="font-serif text-2xl">
            <span className={`${sooner.className}`}>TA<span className='text-[#820404]'>RA</span>FABBS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : isHomePage && !isScrolled ? "text-white" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-transparent">
              <Search className={cn("h-5 w-5", isHomePage && !isScrolled ? "text-white" : "")} />
              <span className="sr-only">Search</span>
            </Button>
            <Link href='/signin'>
              <Button
                variant="ghost"
                size="icon"
                className='hover:bg-transparent'>
                <User className={cn("h-5 w-5", isHomePage && !isScrolled ? "text-white" : "")} />
                <span className="sr-only">Auth</span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCartOpen(true)}
              className="relative hover:bg-transparent"
            >
              <ShoppingBag className={cn("h-5 w-5", isHomePage && !isScrolled ? "text-white" : "")} />
              <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </div>

      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </header>
  );
}