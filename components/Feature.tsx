"use client"
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeatureProps {
  imageUrl: string;
  title: string;
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ imageUrl, title, text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 1.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 1.5 },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row mb-10 lg:mb-20">
      <div className="lg:w-1/2 flex justify-center items-center p-8">
        <motion.img
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          src={imageUrl}
          alt="Gym"
          className="w-full h-full object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500"
        >
          {title}
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="text-xl font-bold"
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
};

export default Feature;
