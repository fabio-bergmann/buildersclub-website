'use client';

import { useLayoutEffect, useRef, useState } from 'react';

interface ElementDimensions {
  width: number;
  height: number;
  left: number;
  top: number;
}

interface UseElementDimensionsReturn {
  ref: React.RefObject<HTMLDivElement | null>;
  dimensions: ElementDimensions;
}

export function useElementDimensions(): UseElementDimensionsReturn {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<ElementDimensions>({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const measureElement = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
        left: rect.left,
        top: rect.top,
      });
    };

    // Initial measurement
    measureElement();

    // Create ResizeObserver for responsive updates
    const resizeObserver = new ResizeObserver(() => {
      measureElement();
    });

    // Observe the element
    resizeObserver.observe(ref.current);

    // Listen for window resize events (for positioning updates)
    const handleWindowResize = () => {
      measureElement();
    };

    window.addEventListener('resize', handleWindowResize);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return { ref, dimensions };
}