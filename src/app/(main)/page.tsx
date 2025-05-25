'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CategoryGrid from '@/components/home/category-grid';
import FeaturedProducts from '@/components/home/featured-products';
import Testimonials from '@/components/home/testimonials';
import Newsletter from '@/components/home/newsletter';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactLenis, useLenis } from 'lenis/react'
import { sooner } from '@/lib/font';

export default function Home() {
  useLenis()
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <ReactLenis root>
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero Section with Video Background */}
        <section className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <video
            ref={videoRef}
            src='https://res.cloudinary.com/drynqkitl/video/upload/v1748125866/bg_pinc5c.mp4'
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/drynqkitl/video/upload/v1748125866/bg_pinc5c.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <motion.h1
              className="text-5xl md:text-7xl font-serif font-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={`${sooner.className}`}>TA<span className='text-[#820404]'>RA</span>FABBS</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-2xl mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Exquisite sarees crafted with tradition, artistry, and passion.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild size="lg" className="rounded-full px-8 bg-white text-black hover:bg-white/90">
                <Link href="/collections">
                  Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
            <motion.div
              className="animate-bounce"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <ChevronRight className="h-8 w-8 text-white rotate-90" />
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Collections</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our exquisite range of hand-crafted sarees, each telling a unique story of traditional craftsmanship.
              </p>
            </div>
            <CategoryGrid />
          </div>
        </section>

        {/* Bestsellers Section */}
        <section className="w-full py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Bestsellers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our most loved pieces, cherished by customers worldwide for their exceptional quality and design.
              </p>
            </div>
            <FeaturedProducts />
          </div>
        </section>

        {/* Artisan Craftsmanship Section */}
        <section className="w-full py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Artisan Craftsmanship</h2>
                <p className="text-muted-foreground mb-6">
                  Each TARAFABBS saree is a testament to the rich heritage of Indian craftsmanship.
                  Our artisans spend countless hours perfecting intricate techniques passed down through generations.
                </p>
                <p className="text-muted-foreground mb-8">
                  From hand-block printing to kalamkari painting, every piece tells a story of tradition and artistry.
                </p>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/about">
                    Our Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  width={1000}
                  height={1000}
                  src="https://res.cloudinary.com/drynqkitl/image/upload/v1748133850/transparent_boiqxk.png"
                  alt="Artisan "
                  className="rounded-lg object-cover h-64 w-full"
                />
                <Image
                  width={1000}
                  height={1000}
                  src="https://res.cloudinary.com/drynqkitl/image/upload/v1748125524/silk6_gynr4n.jpg"
                  alt="Handcrafted details"
                  className="rounded-lg object-cover h-64 w-full"
                />
                <Image
                  width={1000}
                  height={1000}
                  src="https://res.cloudinary.com/drynqkitl/image/upload/v1748125528/tussor8_kdzsqt.jpg"
                  alt="Intricate weaving"
                  className="rounded-lg object-cover h-64 w-full"
                />
                <Image
                  width={1000}
                  height={1000}
                  src="https://res.cloudinary.com/drynqkitl/image/upload/v1748133850/transparent_boiqxk.png"
                  alt="Traditional techniques"
                  className="rounded-lg object-cover h-64 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Newsletter */}
        <Newsletter />
      </main>
    </ReactLenis>
  );
}