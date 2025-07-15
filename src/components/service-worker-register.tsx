"use client";
import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
    useEffect(() => {
        // Only register service worker in production
        if (process.env.NODE_ENV !== 'production') return;

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(() => {
                    })
                    .catch((registrationError) => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }, []);

    return null;
} 