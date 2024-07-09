import { BMICategory, Celebrity } from '@/types/index';
import { celebrities } from '@/data/celebrity';

export const calculateBMI = (weight: number, height: number): number => {
  return Number((weight / ((height / 100) ** 2)).toFixed(1));
};

export const getBMICategory = (bmi: number): BMICategory => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal weight';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
};

export const getCelebrityMatches = (bmi: number, limit: number = 5): Celebrity[] => {
  return celebrities
    .sort((a, b) => Math.abs(a.bmi - bmi) - Math.abs(b.bmi - bmi))
    .slice(0, limit);
};