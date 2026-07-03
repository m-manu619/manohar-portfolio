import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Apple-style text/container scroll reveal.
 * Gradually fades from dim opacity to solid white and slides up slightly.
 */
export function ScrollReveal({ children, className, style }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 55%'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.75], [0.22, 1]);
  const y = useTransform(scrollYProgress, [0, 0.75], [18, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y, ...style }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Apple-style container zoom reveal.
 * Gradually scales up (e.g., from 0.94 to 1.0) and fades in.
 * Perfect for panels, experience cards, and project cards.
 */
export function ScrollZoom({ children, className, style }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 92%', 'center center'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.85], [0.93, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [0.35, 1]);

  return (
    <motion.div ref={ref} style={{ scale, opacity, ...style }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Apple-style text line mask scrub.
 * Gradually lights up subheaders as they scroll into the viewport center.
 */
export function ScrollTextScrub({ children, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9], [0.15, 1]);

  return (
    <motion.div ref={ref} style={{ opacity }} className={className}>
      {children}
    </motion.div>
  );
}
