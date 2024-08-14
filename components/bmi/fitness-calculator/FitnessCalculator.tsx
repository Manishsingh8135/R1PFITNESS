"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars } from 'react-icons/fa6';
import { Feature } from '@/types/index';
import { SideMenu } from '../sidemenu/SideMenu';
import { BMICalculator } from '../main/BMICalculator';
import { Button } from "../../../ /ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../../../ /ui/sheet";
import WorkoutPlannerPage from '../workout-planner/WorkoutPlannerMain';
import FitnessChallengePage from '../fitness-challange/FitnessChallangeMain';
import HallOfFameMain from '../RIPHallOfFame/HallOfFameMain';
import RIPProfileMain from '../RIPProfile/RIPProfileMain';
const features: Feature[] = [
  { id: 'bmi', name: 'BMI Calculator' },
  { id: 'timeTravel', name: 'Time Travel BMI' },
  { id: 'compare', name: 'Celebrity Comparison' },
  { id: 'workout', name: 'Workout Suggestions' },
  { id: 'nutrition', name: 'Nutritional Advice' },
  { id: 'gamification', name: 'Fitness Challenges' },
  { id: 'hallOfFame', name: 'RIP Hall of Fame' },
  { id: 'ripprofile', name: 'RIP Profile' },
];

export const FitnessCalculator: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string>('bmi');

  const renderContent = () => {
    switch (activeFeature) {
      case 'bmi':
        return <BMICalculator />;
      case 'timeTravel':
        return <div>Time Travel BMI Content</div>;
      case 'compare':
        return <div>Celebrity Comparison Content</div>;
      case 'workout':
        return <div><WorkoutPlannerPage/></div>;
      case 'nutrition':
        return <div>Nutritional Advice Content</div>;
      case 'gamification':
        return <FitnessChallengePage/>;
      case 'gamification':
          return <FitnessChallengePage/>;
      case 'hallOfFame':
        return <HallOfFameMain/>
      case 'ripprofile':
        return <RIPProfileMain/>
      default:
        return <div>Select a feature from the sidebar</div>;
    }
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-maincolor-dark to-gray-900 text-maincolor-light p-4 sm:p-8">
      <div className="mb-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline"><FaBars className="mr-2" /> Menu</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SideMenu features={features} activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block md:w-64 mr-8">
          <SideMenu features={features} activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
        </div>
        
        <div className="flex-1">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-maincolor to-maincolor-light"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            R1P Fitness Calculator
          </motion.h1>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};