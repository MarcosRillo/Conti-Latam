// components/AnimatedSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Animated = ({ children, threshold = 0.1, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Animated;