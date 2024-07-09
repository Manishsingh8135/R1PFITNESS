'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EventTimeline } from './EventTimeline';

type EventType = 'past' | 'future';

export const EventsSection2: React.FC = () => {
  const [eventType, setEventType] = useState<EventType>('future');

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-maincolor-dark to-gray-900 text-maincolor-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-12 text-maincolor"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          R1P Fitness Events
        </motion.h1>

        <div className="flex justify-center items-center space-x-4 mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setEventType('past')}
            className={`px-6 py-3 rounded-full text-xl font-bold transition-colors duration-300 ${
              eventType === 'past'
                ? 'bg-maincolor text-black'
                : 'bg-maincolor-dark text-maincolor-light hover:bg-maincolor-light hover:text-black'
            }`}
          >
            Past Events
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setEventType('future')}
            className={`px-6 py-3 rounded-full text-xl font-bold transition-colors duration-300 ${
              eventType === 'future'
                ? 'bg-maincolor text-black'
                : 'bg-maincolor-dark text-maincolor-light hover:bg-maincolor-light hover:text-black'
            }`}
          >
            Future Events
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={eventType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <EventTimeline eventType={eventType} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};