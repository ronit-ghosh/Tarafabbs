'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicyPage() {
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
            <h1 className="text-3xl md:text-4xl font-serif mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name, email address, and contact information</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely through our payment providers)</li>
                  <li>Order history and preferences</li>
                  <li>Communications with our customer service team</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Process your orders and payments</li>
                  <li>Communicate with you about your orders and our services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Detect and prevent fraud</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We share your information only with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Shipping partners to deliver your orders</li>
                  <li>Law enforcement when required by law</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments</li>
                  <li>Limited access to personal information</li>
                  <li>Secure payment processing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-medium mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-medium mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our privacy policy, please contact us:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li>Email: privacy@tarafabbs.com</li>
                  <li>Phone: +91 (XXX) XXX-XXXX</li>
                  <li>Address: 123 Fashion Street, Mumbai, Maharashtra 400001, India</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}