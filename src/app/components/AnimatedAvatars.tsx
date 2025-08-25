"use client"
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function AnimatedAvatars({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const pullupVariant = {
    initial: { y: 20, opacity: 0, filter: 'blur(10px)' },
    animate: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay,
        duration: 0.3,
        ease: "easeOut"
      },
    },
  };
  
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      variants={pullupVariant}
      initial="initial"
      animate={isInView ? 'animate' : ''}
      className="h-12 flex items-center"
    >
      {children}
    </motion.div>
  );
}