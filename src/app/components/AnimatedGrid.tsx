"use client"
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

interface AnimatedGridProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function AnimatedGrid({ 
  children, 
  className = '',
  staggerDelay = 0.1
}: AnimatedGridProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-50px"
  });

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={isInView ? 'animate' : ''}
      className={className}
    >
      {children}
    </motion.div>
  );
}