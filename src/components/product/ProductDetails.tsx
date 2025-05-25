'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Minus, Plus, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { featuredProducts, ProductTypes } from '@/lib/data';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import Image from 'next/image';

export default function ProductDetail({ product }: { product: ProductTypes }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Product not found</h1>
          <Button asChild>
            <Link href="/products">Browse Collections</Link>
          </Button>
        </div>
      </div>
    );
  }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const addToCart = () => {
    toast.success('Added to cart', {
      description: `${product.name} (Qty: ${quantity})`,
    });
  };

  const handleBuyNow = () => {
    // Add to cart and redirect to checkout
    addToCart();
    window.location.href = '/checkout';
  };

  const handleWishlist = () => {
    toast.success('Added to wishlist', {
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Product Images */}
          <div className="w-full md:w-1/2">
            <Dialog>
              <DialogContent className="max-w-4xl">
                <Carousel className="w-full">
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-square relative">
                          <Image
                            width={1000}
                            height={1000}
                            src={image}
                            alt={`${product.name} - Image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </DialogContent>
              <DialogTrigger asChild>
                <div className="relative overflow-hidden rounded-lg aspect-square mb-4 cursor-pointer">
                  <motion.img
                    src={selectedImage || product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-4 left-4 bg-black text-white text-xs font-medium px-2 py-1 rounded">
                      -{product.discount}% OFF
                    </div>
                  )}
                </div>
              </DialogTrigger>
            </Dialog>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative overflow-hidden rounded-md aspect-square w-24 h-24 ${(selectedImage || product.images[0]) === image ? 'ring-2 ring-primary' : ''
                    }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    width={1000}
                    height={1000}
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2">
            <div>
              <p className="text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-3xl font-medium mb-4">{product.name}</h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-2xl font-semibold">₹{product.discountPrice.toLocaleString()}</span>
                {product.discount > 0 && (
                  <span className="text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                    Save {product.discount}%
                  </span>
                )}
              </div>

              <Separator className="my-6" />

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Description</h3>
                  <p className="text-muted-foreground">
                    This exquisite {product.name.toLowerCase()} showcases the finest craftsmanship and traditional techniques.
                    Perfect for special occasions and celebrations, this saree combines timeless elegance with contemporary style.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Material & Care</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 100% premium fabric</li>
                    <li>• Handcrafted by skilled artisans</li>
                    <li>• Blouse piece included</li>
                    <li>• Dry clean only</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Product Details</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Length: 5.5 meters</li>
                    <li>• Width: 48 inches</li>
                    <li>• Style: Traditional</li>
                    <li>• Occasion: Festive, Wedding</li>
                    <li>• Delivery Time: 5-7 business days</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Quantity</h3>
                  <div className="flex items-center border rounded-full w-fit">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-full"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="w-10 text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-full"
                      onClick={incrementQuantity}
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    onClick={addToCart}
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground"
                  onClick={handleWishlist}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <div className="mt-8">
              <TabsContent value="details" className="max-w-3xl mx-auto">
                <div className="prose prose-sm">
                  <h3 className="text-xl font-medium mb-4">Product Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Premium quality fabric</li>
                        <li>• Handwoven by master craftsmen</li>
                        <li>• Natural dyes used for coloring</li>
                        <li>• Intricate design patterns</li>
                        <li>• Soft texture for comfort</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Dimensions</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Length: 5.5 meters</li>
                        <li>• Width: 48 inches</li>
                        <li>• Blouse Piece: 0.9 meters</li>
                        <li>• Weight: Approximately 800 grams</li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="font-medium mt-6 mb-2">The Craft</h4>
                  <p className="text-muted-foreground">
                    This saree showcases the traditional craft of {product.category === 'Silk Sarees' ? 'silk weaving that dates back centuries' :
                      product.category === 'Cotton Sarees' ? 'hand-block printing using carved wooden blocks' :
                        'tussor silk production from wild silkworms'}. Each piece takes our skilled artisans approximately 15-20 days to complete,
                    ensuring exceptional quality and attention to detail.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="shipping" className="max-w-3xl mx-auto">
                <div className="prose prose-sm">
                  <h3 className="text-xl font-medium mb-4">Shipping Information</h3>
                  <p className="text-muted-foreground mb-4">
                    We offer both standard and express shipping options to deliver your saree safely to your doorstep.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Delivery Options</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Standard Shipping: 5-7 business days</li>
                        <li>• Express Shipping: 2-3 business days</li>
                        <li>• Free shipping on orders above ₹10,000</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Returns Policy</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Easy 14-day returns</li>
                        <li>• Product must be unused with original tags</li>
                        <li>• Return shipping fee may apply</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="max-w-3xl mx-auto">
                <div>
                  <h3 className="text-xl font-medium mb-4">Customer Reviews</h3>
                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5"
                          fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <span className="ml-2">
                      {product.rating} out of 5 ({product.reviewCount} reviews)
                    </span>
                  </div>

                  <div className="space-y-6">
                    {/* Sample reviews */}
                    <div className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Anita Sharma</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4"
                              fill={i < 5 ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">Verified Purchase - June 12, 2023</p>
                      <p className="text-muted-foreground">
                        The craftsmanship of this saree is outstanding. The colors are vibrant and the fabric feels luxurious.
                        I received many compliments when I wore it to a wedding. Highly recommend!
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Priya Nair</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4"
                              fill={i < 4 ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">Verified Purchase - May 3, 2023</p>
                      <p className="text-muted-foreground">
                        Beautiful saree with excellent quality. The blouse piece matched perfectly and the packaging was very good.
                        I&apos;m deducting one star only because delivery took longer than expected.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Rajiv Mehta</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4"
                              fill={i < 5 ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">Verified Purchase - April 18, 2023</p>
                      <p className="text-muted-foreground">
                        Purchased this for my wife&apos;s birthday and she absolutely loves it. The quality is exceptional and the
                        craftsmanship is evident in every detail. Worth every penny!
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Button>See All Reviews</Button>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-medium mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="group">
                  <Link href={`/products/${relatedProduct.id}`}>
                    <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                      <Image
                        width={1000}
                        height={1000}
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {relatedProduct.discount > 0 && (
                        <div className="absolute top-4 left-4 bg-black text-white text-xs font-medium px-2 py-1 rounded">
                          -{relatedProduct.discount}% OFF
                        </div>
                      )}
                    </div>
                  </Link>
                  <h3 className="text-lg font-medium mb-1 line-clamp-1">{relatedProduct.name}</h3>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">₹{relatedProduct.discountPrice.toLocaleString()}</p>
                    {relatedProduct.discount > 0 && (
                      <p className="text-muted-foreground line-through text-sm">
                        ₹{relatedProduct.originalPrice.toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}