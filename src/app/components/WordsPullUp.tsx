"use client"
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function WordsPullUp({
  text,
  className = '',
  delay = 0,
  style,
}: {
  text: string;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const splittedText = text.split(' ');

  const pullupVariant = {
    initial: { y: 20, opacity: 0, filter: 'blur(10px)' },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: delay + (i * 0.05),
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className={cn("flex justify-center flex-wrap", className)} style={style} ref={ref}>
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className="pr-2"
        >
          {current == '' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}