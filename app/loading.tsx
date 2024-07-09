"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaHeartbeat, FaApple } from 'react-icons/fa';
import { GiWeightLiftingUp, GiWaterBottle } from 'react-icons/gi';

const Loading = () => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 260,
        damping: 20,
      } 
    },
  };

  const containerVariants = {
    start: { rotate: 0 },
    end: { 
      rotate: 360,
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-maincolor-dark to-black flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={containerVariants}
          initial="start"
          animate="end"
        >
          {[FaDumbbell, FaRunning, FaHeartbeat, FaApple, GiWeightLiftingUp, GiWaterBottle].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                top: `${50 - 40 * Math.cos(index * Math.PI / 3)}%`,
                left: `${50 + 40 * Math.sin(index * Math.PI / 3)}%`,
              }}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
              <Icon className="text-maincolor text-4xl" />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Image
            src="/assets/riplogo1.png"
            alt="R1P FITNESS GYM Logo"
            width={200}
            height={200}
          />
        </motion.div>
        
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-maincolor mb-2">R1P FITNESS GYM</h2>
          <p className="text-xl text-maincolor-light">Loading your fitness journey...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;