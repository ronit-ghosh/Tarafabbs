'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { featuredProducts, categoryData } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CollectionsPage() {
  const [products, setProducts] = useState(featuredProducts);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [sortBy, setSortBy] = useState('featured');

  // Filter products when filters change
  useEffect(() => {
    let filteredProducts = [...featuredProducts];

    // Filter by category
    if (selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === selectedCategory
      );
    }

    // Filter by price range
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.discountPrice >= priceRange[0] &&
        product.discountPrice <= priceRange[1]
    );

    // Sort products
    if (sortBy === 'price-low') {
      filteredProducts.sort((a, b) => a.discountPrice - b.discountPrice);
    } else if (sortBy === 'price-high') {
      filteredProducts.sort((a, b) => b.discountPrice - a.discountPrice);
    } else if (sortBy === 'newest') {
      // In a real app, you would sort by date
      filteredProducts.sort((a, b) => b.id.localeCompare(a.id));
    }

    setProducts(filteredProducts);
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <div className="w-full h-64 bg-muted relative overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src="https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg"
          alt="Collections"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Collections</h1>
            <p className="max-w-md mx-auto">Discover the perfect saree for every occasion</p>
          </div>
        </div>
      </div>

      {/* Filters and Products */}
      <div className="container mx-auto px-4 py-12">
        {/* Mobile Filter Trigger */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    <Button
                      variant={selectedCategory === 'all' ? 'default' : 'outline'}
                      size="sm"
                      className="mr-2 mb-2"
                      onClick={() => setSelectedCategory('all')}
                    >
                      All
                    </Button>
                    {categoryData.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.slug ? 'default' : 'outline'}
                        size="sm"
                        className="mr-2 mb-2"
                        onClick={() => setSelectedCategory(category.slug)}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-full"
                      />
                      <span>to</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPriceRange([0, 5000])}
                      >
                        Under ₹5,000
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPriceRange([5000, 10000])}
                      >
                        ₹5,000 - ₹10,000
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPriceRange([10000, 20000])}
                      >
                        ₹10,000 - ₹20,000
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPriceRange([0, 20000])}
                      >
                        All Prices
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filters */}
          <div className="hidden md:block w-64 shrink-0">
            <h2 className="text-xl font-medium mb-6">Filters</h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  <Button
                    variant={selectedCategory === 'all' ? 'default' : 'outline'}
                    size="sm"
                    className="mr-2 mb-2"
                    onClick={() => setSelectedCategory('all')}
                  >
                    All
                  </Button>
                  {categoryData.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.slug ? 'default' : 'outline'}
                      size="sm"
                      className="mr-2 mb-2"
                      onClick={() => setSelectedCategory(category.slug)}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                    <span>to</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPriceRange([0, 5000])}
                    >
                      Under ₹5,000
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPriceRange([5000, 10000])}
                    >
                      ₹5,000 - ₹10,000
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPriceRange([10000, 20000])}
                    >
                      ₹10,000 - ₹20,000
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPriceRange([0, 20000])}
                    >
                      All Prices
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="hidden md:flex items-center justify-between mb-8">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-full"
                />
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {products.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your filters</p>
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
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
              </motion.div>
            )}

            {/* Pagination (static for now) */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-md">
                  1
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-md">
                  2
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-md">
                  3
                </Button>
                <span>...</span>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-md">
                  12
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}