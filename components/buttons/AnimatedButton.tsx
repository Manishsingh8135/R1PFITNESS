"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AnimatedButton: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="relative"
    >
      <motion.button
        type="submit"
        className="w-full flex justify-center items-center px-8 py-4 rounded-full text-xl font-bold text-black bg-gradient-to-br from-amber-300 from-10% via-amber-200 via-55% to-amber-500 to-95% focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-all duration-300 relative overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10 flex items-center">
          <Sparkles className="mr-2" />
          Submit Royal Application
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-400"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="w-full h-full relative">
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-border-top" />
            {/* Right border */}
            <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-border-right" />
            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-border-bottom" />
            {/* Left border */}
            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-border-left" />
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
};

export default AnimatedButton;