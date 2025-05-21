'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CancellationRefundPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif mb-8">Cancellation & Refund Policy</h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">Order Cancellation</h2>
                <p className="text-muted-foreground mb-4">
                  You can cancel your order before it is shipped. Once an order has been confirmed, it cannot be cancelled,
                  but you can return it as per our return policy.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Orders can be cancelled within 24 hours of placing them</li>
                  <li>Cancellation requests must be made through your account or by contacting customer service</li>
                  <li>Custom orders cannot be cancelled once production has begun</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">Refund Process</h2>
                <p className="text-muted-foreground mb-4">
                  Refunds will be processed within 7-10 business days after we receive and inspect the returned item.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Original payment method will be refunded</li>
                  <li>Shipping charges are non-refundable unless the item received was defective</li>
                  <li>Store credit option available for faster processing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">Return Conditions</h2>
                <p className="text-muted-foreground mb-4">
                  To be eligible for a return, your item must be:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Unused and in the same condition that you received it</li>
                  <li>In the original packaging with all tags attached</li>
                  <li>Returned within 14 days of delivery</li>
                  <li>Accompanied by the original receipt or proof of purchase</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-medium mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our cancellation and refund policy, please contact us:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li>
                    <a
                      className='hover:text-foreground'
                      href="mailto:taramaafabricsprinting@gmail.com">
                      Email: taramaafabricsprinting@gmail.com
                    </a>
                  </li>
                  <li>
                    Phone:
                    <a
                      className='hover:text-foreground'
                      href='tel:+917439839677'>
                      +91 74398 39677
                    </a>
                    {" / "}
                    <a
                      className='hover:text-foreground'
                      href='tel:+919830524019'>
                      +91 98305 24019
                    </a>
                  </li>
                  <li>Hours: Monday - Saturday, 10:00 AM - 10:00 PM IST</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}