"use client"
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

interface AnimatedFAQProps {
  children: React.ReactNode;
  index: number;
}

export function AnimatedFAQ({ children, index }: AnimatedFAQProps) {
  const faqVariant = {
    initial: { 
      x: -20,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.08,
        duration: 0.4,
        ease: "easeOut" as const
      },
    },
  };
  
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-50px"
  });
  
  return (
    <motion.div
      ref={ref}
      variants={faqVariant}
      initial="initial"
      animate={isInView ? 'animate' : ''}
    >
      {children}
    </motion.div>
  );
}