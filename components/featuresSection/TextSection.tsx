"use client"
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TextSectionProps {
  heading: string;
  text: string;
}

const TextSection: React.FC<TextSectionProps> = ({ heading, text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, translateY: 0 },
    hidden: { opacity: 0, translateY: 50 },
  };

  return (
    <div className="w-full md:w-1/2  h-24 md:h-full flex flex-col justify-center items-center text-center p-4">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-maincolor"
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        {heading}
      </motion.h1>
      <motion.p
        ref={ref}
        className="text-lg md:text-xl font-bold my-4"
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        
      </motion.p>
    </div>
  );
};

export default TextSection;
