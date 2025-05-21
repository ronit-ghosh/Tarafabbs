'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Customer Love</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear what our customers have to say about their TARAFABBS experience.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center px-6"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="h-6 w-6 text-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl italic mb-6 font-serif">
                  &quot;{testimonials[currentTestimonial].quote}&quot;
                </blockquote>
                <div className="mb-8">
                  <p className="font-medium">{testimonials[currentTestimonial].name}</p>
                  <p className="text-muted-foreground text-sm">{testimonials[currentTestimonial].location}</p>
                </div>
                <div className="w-16 h-1 bg-primary mx-auto"></div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center items-center mt-10 gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-colors",
                    currentTestimonial === i ? "bg-primary" : "bg-muted"
                  )}
                  onClick={() => setCurrentTestimonial(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}