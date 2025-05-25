'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { featuredProducts } from '@/lib/data';
import Image from 'next/image';

export default function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productCount = featuredProducts.length;
  const productsPerPage = 4;
  const pageCount = Math.ceil(productCount / productsPerPage);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const visibleProducts = featuredProducts.slice(
    currentIndex * productsPerPage,
    (currentIndex + 1) * productsPerPage
  );

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="group"
          >
            <Link href={`/products/${product.id}`}>
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                <Image
                  width={1000}
                  height={1000}
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="h-5 w-5 text-gray-700" />
                </button>
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-black text-white text-xs font-medium px-2 py-1 rounded">
                    -{product.discount}% OFF
                  </div>
                )}
              </div>
            </Link>
            <h3 className="text-lg font-medium mb-1 line-clamp-1">{product.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <p className="font-medium">₹{product.discountPrice.toLocaleString()}</p>
              {product.discount > 0 && (
                <p className="text-muted-foreground line-through text-sm">
                  ₹{product.originalPrice.toLocaleString()}
                </p>
              )}
            </div>
            <p className="text-muted-foreground text-sm">{product.category}</p>
          </motion.div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center mt-12 gap-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevPage}
          className="h-10 w-10 rounded-full"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-colors",
                currentIndex === i ? "bg-primary" : "bg-muted"
              )}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextPage}
          className="h-10 w-10 rounded-full"
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="text-center mt-10">
        <Button asChild className="rounded-full px-8">
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
    </div>
  );
}