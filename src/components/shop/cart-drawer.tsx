'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { cartItems } from '@/lib/data';
import Image from 'next/image';

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  // Function to calculate cart total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md w-full flex flex-col h-full">
        <SheetHeader className="space-y-2.5 pb-6">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Your Cart (3)
            </SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <X className="h-5 w-5" />
                <span className="sr-only">Close cart</span>
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="aspect-square h-24 w-24 rounded-md overflow-hidden bg-secondary/50 flex-shrink-0">
                      <Image
                        width={1000}
                        height={1000}
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium line-clamp-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.variant}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center border rounded-full">
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                        <p className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 pt-6">
              <Separator />
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{calculateTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>₹{calculateTotal().toLocaleString()}</span>
                </div>
              </div>

              <SheetFooter className="flex flex-col gap-2 sm:space-x-0">
                <Button size="lg" asChild>
                  <Link href="/checkout">
                    Proceed to Checkout
                  </Link>
                </Button>
                <SheetClose asChild>
                  <Button variant="outline" size="lg">
                    Continue Shopping
                  </Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <div className="bg-muted rounded-full p-6">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="font-medium text-xl">Your cart is empty</h3>
            <p className="text-muted-foreground text-center max-w-xs">
              Looks like you haven&apos;t added anything to your cart yet.
            </p>
            <SheetClose asChild>
              <Button size="lg">
                Continue Shopping
              </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}