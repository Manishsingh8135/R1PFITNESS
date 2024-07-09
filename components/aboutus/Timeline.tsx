'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaFlag, FaUsers, FaTshirt, FaDumbbell, FaGlobeAmericas, FaWindowClose } from 'react-icons/fa';

const timelineEvents = [
  { 
    year: 2019, 
    title: "The Beginning",
    icon: FaFlag,
    content: "Foundation Laid",
    description: "In the serene landscapes of Hawaii, R1P Fitness was born out of necessity. A group of military members, facing invisible wounds of service, came together to create a sanctuary for healing through fitness."
  },
  { 
    year: 2020, 
    title: "Community Growth",
    icon: FaUsers,
    content: "Expanded Programs",
    description: "What started as a small support group blossomed into a thriving community. United by shared experiences, members found strength in each other, fostering resilience and clarity."
  },
  { 
    year: 2021, 
    title: "First Merchandise Line",
    icon: FaTshirt,
    content: "Brand Identity",
    description: "The launch of our first merchandise line marked a significant milestone. Each piece of apparel became a symbol of unity, resilience, and belonging, worn with pride by our growing R1P family."
  },
  { 
    year: 2022, 
    title: "Gym Opening",
    icon: FaDumbbell,
    content: "Physical Space",
    description: "The opening of our first physical gym location provided a dedicated space for our community. More than just a place to work out, it became a sanctuary where members could push their boundaries and feel supported."
  },
  { 
    year: 2023, 
    title: "Going Global",
    icon: FaGlobeAmericas,
    content: "Worldwide Reach",
    description: "R1P Fitness began its journey to build communities worldwide. Through digital platforms and international partnerships, we started spreading our message of hope and strength globally."
  },
];

const Timeline: React.FC = () => {
    const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ 
      target: containerRef,
      offset: ["start start", "end end"] 
    });
    const scaleY = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-16" ref={containerRef}>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-maincolor">Our Journey</h2>
        <div className="relative">
          {/* Timeline line - visible on all screen sizes */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-maincolor"></div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-maincolor-light"
            style={{ scaleY, originY: 0 }}
          />
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-24 relative flex flex-col md:flex-row">
              <motion.div 
                className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-maincolor rounded-full -ml-4 cursor-pointer flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                onClick={() => setExpandedEvent(expandedEvent === index ? null : index)}
              >
                <event.icon className="text-black text-lg" />
              </motion.div>
              
              <motion.div 
                className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-maincolor-light mb-2">{event.year}</h3>
                <h4 className="text-xl sm:text-2xl font-semibold text-maincolor mb-2">{event.title}</h4>
                <p className="text-lg sm:text-xl text-maincolor-light">{event.content}</p>
              </motion.div>
            </div>
          ))}
        </div>
        
        <AnimatePresence>
          {expandedEvent !== null && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedEvent(null)}
            >
              <motion.div 
                className="bg-gradient-to-br from-maincolor-dark to-maincolor bg-opacity-90 p-8 rounded-lg shadow-2xl max-w-2xl w-full relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  className="absolute top-4 right-4 text-white hover:text-maincolor-light transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setExpandedEvent(null)}
                >
                  <FaWindowClose className="text-2xl" />
                </motion.button>
                <h4 className="text-3xl sm:text-4xl font-bold mb-4 text-white font-serif">{timelineEvents[expandedEvent].year}: {timelineEvents[expandedEvent].title}</h4>
                <p className="text-xl sm:text-2xl text-gray-100 font-light leading-relaxed font-cursive"
                   style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {timelineEvents[expandedEvent].description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  export default Timeline;