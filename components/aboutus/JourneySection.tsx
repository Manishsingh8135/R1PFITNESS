'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoenixFramework, FaDumbbell, FaTshirt, FaUsers, FaGlobeAmericas } from 'react-icons/fa';
import Timeline from './Timeline';

const JourneySection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-maincolor-dark to-gray-900 text-maincolor-light min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-16 text-maincolor"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Journey: Reborn 1n Paradise
      </motion.h1>

      <HeroSection />
      <Timeline />
      <Highlights />
    </div>
  );
};

const HeroSection: React.FC = () => (
  <motion.div 
    className="max-w-4xl mx-auto mb-24 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <FaPhoenixFramework className="text-7xl sm:text-8xl md:text-9xl text-maincolor mx-auto mb-8" />
    <p className="text-2xl sm:text-3xl mb-8 font-serif italic text-maincolor-light">
      From the ashes of struggle, we rise stronger. Reborn 1n Paradise is more than a fitness brand;
      it's a beacon of hope, strength, and community.
    </p>
  </motion.div>
);

const Highlights: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const highlights = [
    { icon: FaDumbbell, title: "The Gym", description: "A sanctuary for physical and mental growth" },
    { icon: FaTshirt, title: "Merchandise", description: "Symbols of unity and resilience" },
    { icon: FaUsers, title: "Community", description: "A family united by shared experiences" },
    { icon: FaGlobeAmericas, title: "Global Mission", description: "Spreading hope and strength worldwide" },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-24 mb-24">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-maincolor">Key Milestones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-maincolor to-maincolor-dark rounded-lg p-8 text-center shadow-xl transform transition-all duration-300 hover:scale-105 h-80 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <motion.div
              animate={{
                scale: hoveredIndex === index ? 1.2 : 1,
                rotateY: hoveredIndex === index ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <highlight.icon className="text-6xl text-maincolor-light mx-auto" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-white">{highlight.title}</h3>
            <p className="text-maincolor-light text-lg">{highlight.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JourneySection;