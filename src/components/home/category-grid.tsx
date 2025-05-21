'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { categoryData } from '@/lib/data';
import Image from 'next/image';

export default function CategoryGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {categoryData.map((category) => (
        <motion.div key={category.id} variants={item}>
          <Link href={`/collections/${category.slug}`} className="group block">
            <div className="overflow-hidden rounded-lg mb-4 aspect-[3/4] relative">
              <Image
                width={1000}
                height={1000}
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl md:text-2xl font-serif">{category.name}</h3>
                <p className="text-sm text-white/80 mt-2">{category.description}</p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}