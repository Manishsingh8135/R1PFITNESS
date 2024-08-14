import React from 'react';
import { motion } from 'framer-motion';
import { Feature } from '@/types/index';
interface SideMenuProps {
  features: Feature[];
  activeFeature: string;
  setActiveFeature: (feature: string) => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({ features, activeFeature, setActiveFeature }) => {
  return (
    <motion.div 
      className="w-72 bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl shadow-lg"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
        Features
      </h2>
      <ul className="space-y-3">
        {features.map((feature) => (
          <motion.li 
            key={feature.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setActiveFeature(feature.id)}
              className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 font-medium ${
                activeFeature === feature.id
                  ? 'bg-amber-400 text-gray-900 shadow-md'
                  : 'text-amber-400 hover:bg-gray-800 hover:text-amber-300'
              }`}
            >
              {feature.name}
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};