'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import Silk from '../ui/Silk';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for subscribing!', {
        description: 'You will now receive our newsletter.',
      });
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="w-full relative">
      <div className="absolute -z-10 w-full h-full">
        <Silk
          speed={5}
          scale={1}
          color="#817474"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="container mx-auto px-4 py-20 ">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">Join Our Community</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new arrivals, and stories of our artisans and their crafts.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Your email address"
                className="h-12 rounded-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="h-12 rounded-full px-8"
              disabled={loading}
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>

          <p className="text-xs text-white/70 mt-4">
            By subscribing, you agree to our privacy policy and consent to receive updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}