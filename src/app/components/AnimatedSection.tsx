"use client"
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function AnimatedSection({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  const getInitialPosition = () => {
    switch(direction) {
      case 'up': return { y: 40, x: 0 };
      case 'down': return { y: -40, x: 0 };
      case 'left': return { x: 40, y: 0 };
      case 'right': return { x: -40, y: 0 };
      default: return { y: 40, x: 0 };
    }
  };

  const sectionVariant = {
    initial: { 
      ...getInitialPosition(),
      opacity: 0
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
        ease: "easeOut" as const
      },
    },
  };
  
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-100px"
  });
  
  return (
    <motion.div
      ref={ref}
      variants={sectionVariant}
      initial="initial"
      animate={isInView ? 'animate' : ''}
      className={className}
    >
      {children}
    </motion.div>
  );
}