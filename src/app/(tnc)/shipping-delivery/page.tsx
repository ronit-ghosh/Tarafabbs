'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Truck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ShippingDeliveryPage() {
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
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary/10 p-4 rounded-full">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif">Shipping & Delivery</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">Shipping Methods</h2>
                <div className="grid gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Standard Shipping</h3>
                    <p className="text-muted-foreground mb-2">7-14 business days</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>Free shipping</li>
                      <li>Available across India</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Express Shipping</h3>
                    <p className="text-muted-foreground mb-2">2-3 business days</p>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>₹350 flat rate</li>
                      <li>Available in major cities</li>
                      <li>Order tracking available</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">Delivery Information</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Orders are processed within 24-48 hours</li>
                  <li>Shipping time starts after order processing</li>
                  <li>Delivery available Monday through Saturday</li>
                  <li>Someone must be present to receive the package</li>
                  <li>Valid ID may be required for high-value orders</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">International Shipping</h2>
                <p className="text-muted-foreground mb-4">
                  We currently ship to the following countries:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Asia & Middle East</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>UAE</li>
                      <li>Singapore</li>
                      <li>Malaysia</li>
                      <li>Saudi Arabia</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Other Regions</h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                      <li>United States</li>
                      <li>United Kingdom</li>
                      <li>Canada</li>
                      <li>Australia</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">Order Tracking</h2>
                <p className="text-muted-foreground mb-4">
                  Track your order using:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Order tracking number (provided in shipping confirmation email)</li>
                  <li>Your registered email address</li>
                  <li>Your order number</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-medium mb-4">Contact Shipping Support</h2>
                <p className="text-muted-foreground mb-4">
                  For shipping-related queries, contact us:
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