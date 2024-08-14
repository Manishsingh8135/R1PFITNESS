"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FaDumbbell, FaWeightScale, FaRuler } from 'react-icons/fa6';
import { calculateBMI, getBMICategory, getCelebrityMatches } from '@/utils/bmiUtils';
import { BMICategory, Celebrity } from '@/types/index';
import { BMIResult } from './BMIResult';
import { Button } from "@/ /ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ /ui/card";
import { Slider } from "@/ /ui/slider";
import { Switch } from "@/ /ui/switch";

export const BMICalculator: React.FC = () => {
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
    <Card className="bg-gradient-to-br from-gray-900 to-black shadow-xl border border-amber-500/50 overflow-hidden">
      <CardHeader>
        <CardTitle className="text-3xl text-amber-400 font-bold">BMI Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-amber-300">Units</span>
          <div className="flex items-center space-x-2">
            <span className={`text-sm ${isMetric ? 'text-amber-400' : 'text-amber-300'}`}>Metric</span>
            <Switch
              checked={!isMetric}
              onCheckedChange={toggleUnit}
              className="bg-amber-500"
            />
            <span className={`text-sm ${!isMetric ? 'text-amber-400' : 'text-amber-300'}`}>Imperial</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-amber-300 mb-2">Height ({isMetric ? 'cm' : 'inches'})</label>
            <div className="flex items-center space-x-4">
              <FaRuler className="text-2xl text-amber-400" />
              <Slider
                min={isMetric ? 100 : 39}
                max={isMetric ? 250 : 98}
                step={1}
                value={[height]}
                onValueChange={(value) => setHeight(value[0])}
                className="flex-grow"
              />
              <input 
                type="number" 
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-20 bg-gray-800 text-amber-300 p-2 rounded-md text-center"
              />
            </div>
          </div>

          <div>
            <label className="block text-amber-300 mb-2">Weight ({isMetric ? 'kg' : 'lbs'})</label>
            <div className="flex items-center space-x-4">
              <FaWeightScale className="text-2xl text-amber-400" />
              <Slider
                min={isMetric ? 30 : 66}
                max={isMetric ? 200 : 440}
                step={1}
                value={[weight]}
                onValueChange={(value) => setWeight(value[0])}
                className="flex-grow"
              />
              <input 
                type="number" 
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-20 bg-gray-800 text-amber-300 p-2 rounded-md text-center"
              />
            </div>
          </div>
        </div>

        <Button
          onClick={handleCalculate}
          className="w-full bg-amber-500 text-black hover:bg-amber-600 font-bold py-3 rounded-lg text-xl transition-colors duration-300"
        >
          Calculate BMI
        </Button>
      </CardContent>

      {bmi !== null && bmiCategory && (
        <BMIResult bmi={bmi} category={bmiCategory} celebMatches={celebMatches} />
      )}
    </Card>
  );
};