"use client"
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  index?: number;
}

export function AnimatedCard({ 
  children, 
  delay = 0, 
  className = '',
  index = 0 
}: AnimatedCardProps) {
  const cardVariant = {
    initial: { 
      y: 30, 
      opacity: 0, 
      scale: 0.95
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay + (index * 0.1),
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
      variants={cardVariant}
      initial="initial"
      animate={isInView ? 'animate' : ''}
      className={className}
    >
      {children}
    </motion.div>
  );
}