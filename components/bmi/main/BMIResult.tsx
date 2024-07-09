import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell } from 'react-icons/fa6';
import { BMICategory, Celebrity } from '@/types';

interface BMIResultProps {
  bmi: number;
  category: BMICategory;
  celebMatches: Celebrity[];
}

export const BMIResult: React.FC<BMIResultProps> = ({ bmi, category, celebMatches }) => {
  const getCategoryColor = (cat: BMICategory): string => {
    switch (cat) {
      case 'Underweight': return 'text-blue-400';
      case 'Normal weight': return 'text-green-500';
      case 'Overweight': return 'text-yellow-500';
      case 'Obese': return 'text-red-500';
      default: return 'text-maincolor-light';
    }
  };

  const getBgColor = (cat: BMICategory): string => {
    switch (cat) {
      case 'Underweight': return 'bg-blue-900 bg-opacity-30';
      case 'Normal weight': return 'bg-green-900 bg-opacity-30';
      case 'Overweight': return 'bg-yellow-900 bg-opacity-30';
      case 'Obese': return 'bg-red-900 bg-opacity-30';
      default: return 'bg-maincolor bg-opacity-20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`mt-8 p-6 rounded-2xl shadow-xl ${getBgColor(category)}`}
    >
      <h2 className="text-3xl font-bold mb-4">Your BMI Results</h2>
      <div className="flex items-center justify-center space-x-4">
        <FaDumbbell className={`text-4xl ${getCategoryColor(category)}`} />
        <p className="text-6xl font-bold">{bmi}</p>
      </div>
      <p className="text-xl mt-4 text-center">
        You are classified as <span className={`font-bold ${getCategoryColor(category)}`}>{category}</span>
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Celebrity BMI Matches</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {celebMatches.map((celeb, index) => (
            <motion.div 
              key={index}
              className="bg-maincolor-dark rounded-lg p-2 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={celeb.image} alt={celeb.name} className="w-20 h-20 mx-auto rounded-full object-cover mb-2" />
              <p className="font-bold text-sm">{celeb.name}</p>
              <p className="text-xs">BMI: {celeb.bmi}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};