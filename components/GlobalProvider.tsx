'use client';
import { SplashProvider } from '@/context/splashContext';
import { ToastProvider } from '@/context/toastContext';

export default function GlobalProvider({ children }: { children: React.ReactNode }) {
    return (
        <ToastProvider>
            <SplashProvider>{children}</SplashProvider>
        </ToastProvider>
    );
}
