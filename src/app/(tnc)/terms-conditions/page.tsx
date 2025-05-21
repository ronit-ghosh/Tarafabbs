'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TermsConditionsPage() {
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
            <h1 className="text-3xl md:text-4xl font-serif mb-8">Terms & Conditions</h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  Welcome to TARAFABBS. By accessing and using our website, you accept and agree to be bound by these
                  terms and conditions. Please read them carefully before using our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">2. Account Registration</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>You must be at least 18 years old to create an account</li>
                  <li>Provide accurate and complete information</li>
                  <li>Keep your account credentials secure</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">3. Product Information</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Product colors may vary due to photography and display settings</li>
                  <li>We reserve the right to modify product specifications</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Products are subject to availability</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">4. Ordering & Payment</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Orders are subject to acceptance and availability</li>
                  <li>We accept major credit cards and selected payment methods</li>
                  <li>Prices are in Indian Rupees (INR)</li>
                  <li>Payment must be received in full before shipping</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">5. Shipping & Delivery</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Delivery times are estimates only</li>
                  <li>Risk passes to you upon delivery</li>
                  <li>International orders may be subject to customs duties</li>
                  <li>We are not responsible for delivery delays beyond our control</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">6. Returns & Refunds</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>14-day return policy from delivery date</li>
                  <li>Items must be unused with original tags</li>
                  <li>Return shipping costs borne by customer</li>
                  <li>Refunds processed within 7-10 business days</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">7. Intellectual Property</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>All content is our intellectual property</li>
                  <li>No reproduction without permission</li>
                  <li>Trademarks and logos are protected</li>
                  <li>User content rights are retained by users</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">8. Privacy & Data Protection</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>We collect and process data as per our Privacy Policy</li>
                  <li>Your data is protected under applicable laws</li>
                  <li>We use cookies to improve user experience</li>
                  <li>You can opt-out of marketing communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  We shall not be liable for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Indirect or consequential losses</li>
                  <li>Loss of profit or business opportunity</li>
                  <li>Technical issues beyond our control</li>
                  <li>Third-party services or content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-medium mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these terms, please contact us:
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
                  <li>Address: 0, Dakshin Rajyadharpur, Mallick Para, Serampore, Hooghly, 712204</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}