'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import { ReactLenis, useLenis } from 'lenis/react'

export const Providers = ({ children }: { children: ReactNode }) => {
    useLenis()
    return (
        <ReactLenis root>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange>
                {children}
                <Toaster position="top-center" />
            </ThemeProvider>
        </ReactLenis>
    );
};