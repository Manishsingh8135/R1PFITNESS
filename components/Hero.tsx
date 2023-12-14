"use client"
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

const HeroSection: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;

      const opacityValue = 1 - scrollY / maxScroll;
      const yValue = -scrollY;

      controls.start({
        opacity: opacityValue,
        y: yValue
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      <video className="absolute w-full h-full object-cover bg-gradient-to-b from-slate-500 via-gray-700 to-black" autoPlay muted loop>
        <source src="/assets/welcome.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent"></div>
      <div className='flex flex-col items-center'>
        <motion.div
          className="z-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent"
          initial={{ opacity: 1, y: 0 }}
          animate={controls}
          style={{
            backgroundImage: 'linear-gradient(45deg, #d6cdcd, #8c8888)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          R1PFITNESS GYM
        </motion.div>

        <div className='text-center mt-4'>
          <motion.div
            className="z-10 text-xl sm:text-xl md:text-lg lg:text-2xl font-extrabold text-transparent"
            initial={{ opacity: 1, y: 0 }}
            animate={controls}
            style={{
              backgroundImage: 'linear-gradient(45deg, #d6cdcd, #8c8888)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Home away from Home
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
