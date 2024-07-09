'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FaDumbbell, FaWeightScale, FaRuler, FaBars } from 'react-icons/fa6';
import { calculateBMI, getBMICategory, getCelebrityMatches } from '@/utils/bmiUtils';
import { BMICategory, Celebrity, Feature } from '@/types/index';
import { SideMenu } from '../sidemenu/SideMenu';
import { BMIResult } from './BMIResult';
import { Button } from "@/ /ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/ /ui/sheet";
import {Switch} from "@/ /ui/switch"


const features: Feature[] = [
    { id: 'bmi', name: 'BMI Calculator' },
    { id: 'timeTravel', name: 'Time Travel BMI' },
    { id: 'compare', name: 'Celebrity Comparison' },
    { id: 'workout', name: 'Workout Suggestions' },
    { id: 'nutrition', name: 'Nutritional Advice' },
    { id: 'gamification', name: 'Fitness Challenges' },
  ];
  
  export const R1PFitnessCalculator: React.FC = () => {
    const [activeFeature, setActiveFeature] = useState<string>('bmi');
    const [height, setHeight] = useState<number>(170);
    const [weight, setWeight] = useState<number>(70);
    const [bmi, setBmi] = useState<number | null>(null);
    const [bmiCategory, setBmiCategory] = useState<BMICategory | null>(null);
    const [celebMatches, setCelebMatches] = useState<Celebrity[]>([]);
    const [isMetric, setIsMetric] = useState<boolean>(true);
  
    const handleCalculate = () => {
      let calculatedBMI: number;
      if (isMetric) {
        calculatedBMI = calculateBMI(weight, height);
      } else {
        const heightInCm = height * 2.54;
        const weightInKg = weight * 0.453592;
        calculatedBMI = calculateBMI(weightInKg, heightInCm);
      }
      setBmi(calculatedBMI);
      const category = getBMICategory(calculatedBMI);
      setBmiCategory(category);
      setCelebMatches(getCelebrityMatches(calculatedBMI));
  
      if (category === 'Normal weight') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    };
  
    const toggleUnit = () => {
      setIsMetric(!isMetric);
      if (isMetric) {
        setHeight(Math.round(height / 2.54));
        setWeight(Math.round(weight * 2.20462));
      } else {
        setHeight(Math.round(height * 2.54));
        setWeight(Math.round(weight / 2.20462));
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
            
            <div className="max-w-xl mx-auto bg-maincolor-dark bg-opacity-50 p-6 sm:p-8 rounded-2xl shadow-2xl">
              <div className="flex justify-center mb-6">
                <motion.div 
                  className="bg-maincolor-light bg-opacity-20 p-1 rounded-full flex items-center"
                  initial={false}
                  animate={{ backgroundColor: isMetric ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' }}
                >
                  <motion.button
                    className={`px-4 py-2 rounded-full text-sm font-medium ${isMetric ? 'text-black' : 'text-maincolor-light'}`}
                    animate={{ backgroundColor: isMetric ? 'rgba(255,255,255,0.9)' : 'transparent' }}
                    onClick={() => setIsMetric(true)}
                  >
                    Metric
                  </motion.button>
                  <motion.button
                    className={`px-4 py-2 rounded-full text-sm font-medium ${!isMetric ? 'text-black' : 'text-maincolor-light'}`}
                    animate={{ backgroundColor: !isMetric ? 'rgba(255,255,255,0.9)' : 'transparent' }}
                    onClick={() => setIsMetric(false)}
                  >
                    Imperial
                  </motion.button>
                </motion.div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMetric ? 'metric' : 'imperial'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 sm:space-y-8"
                >
                  <div className="relative">
                    <FaRuler className="absolute top-3 left-3 text-2xl text-maincolor" />
                    <input
                      type="range"
                      min={isMetric ? "100" : "39"}
                      max={isMetric ? "250" : "98"}
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full h-3 bg-maincolor-light rounded-lg appearance-none cursor-pointer"
                    />
                    <input 
                      type="number" 
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="mt-2 w-full bg-maincolor-medium text-maincolor-light p-3 rounded-lg text-center text-xl font-bold"
                    />
                    <label className="block text-center mt-2 text-lg">Height ({isMetric ? 'cm' : 'inches'})</label>
                  </div>
  
                  <div className="relative">
                    <FaWeightScale className="absolute top-3 left-3 text-2xl text-maincolor" />
                    <input
                      type="range"
                      min={isMetric ? "30" : "66"}
                      max={isMetric ? "200" : "440"}
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-full h-3 bg-maincolor-light rounded-lg appearance-none cursor-pointer"
                    />
                    <input 
                      type="number" 
                      value={weight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="mt-2 w-full bg-maincolor-medium text-maincolor-light p-3 rounded-lg text-center text-xl font-bold"
                    />
                    <label className="block text-center mt-2 text-lg">Weight ({isMetric ? 'kg' : 'lbs'})</label>
                  </div>
                </motion.div>
              </AnimatePresence>
  
              <Button
                onClick={handleCalculate}
                className="w-full mt-8 bg-maincolor hover:bg-maincolor-light text-black font-bold py-4 px-6 rounded-lg text-xl transition-colors duration-300"
              >
                Calculate BMI
              </Button>
            </div>
  
            {bmi !== null && bmiCategory && (
              <BMIResult bmi={bmi} category={bmiCategory} celebMatches={celebMatches} />
            )}
          </div>
        </div>
      </div>
    );
  };