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
      className="w-64 bg-maincolor-dark bg-opacity-50 p-6 rounded-lg"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <ul>
        {features.map((feature) => (
          <li key={feature.id} className="mb-2">
            <button
              onClick={() => setActiveFeature(feature.id)}
              className={`w-full text-left p-2 rounded transition-colors ${
                activeFeature === feature.id
                  ? 'bg-maincolor text-black'
                  : 'hover:bg-maincolor-medium'
              }`}
            >
              {feature.name}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};