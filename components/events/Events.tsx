"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PastEvents } from './PastEvents';
import { FutureEvents } from './FutureEvents';

export const EventsSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'past' | 'future'>('past');

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-maincolor-dark to-black py-20 px-4">
      <motion.h1 
        className="text-6xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-maincolor to-maincolor-light"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        R1P FITNESS Events
      </motion.h1>
      
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setActiveSection('past')}
          className={`mx-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
            activeSection === 'past'
              ? 'bg-maincolor text-black'
              : 'bg-maincolor-dark text-maincolor-light hover:bg-maincolor-medium'
          }`}
        >
          Past Events
        </button>
        <button
          onClick={() => setActiveSection('future')}
          className={`mx-2 px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
            activeSection === 'future'
              ? 'bg-maincolor text-black'
              : 'bg-maincolor-dark text-maincolor-light hover:bg-maincolor-medium'
          }`}
        >
          Future Events
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {activeSection === 'past' ? <PastEvents /> : <FutureEvents />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};