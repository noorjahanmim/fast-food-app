'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      wheelMultiplier: 1,
      gestureOrientation: 'vertical', // touch gestures
      infinite: false,
    });

    // Make Lenis globally accessible
    (window as any).lenis = lenis;

    // Animation frame loop
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Add class to html for CSS targeting
    document.documentElement.classList.add('lenis');

    // Cleanup
    return () => {
      lenis.destroy();
      document.documentElement.classList.remove('lenis');
      delete (window as any).lenis;
    };
  }, []);

  return <>{children}</>;
}
