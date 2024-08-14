// File: app/types/workoutTypes.ts

import { UserProfile } from './userTypes';

export interface PhotoAnalysis {
  apparentAge: number;
  bodyType: string;
  muscleDefinition: string;
  posture: string;
  additionalObservations: string[];
}

export interface WorkoutPreferences {
  goal: 'Weight Loss' | 'Muscle Gain' | 'Endurance' | 'Flexibility' | 'Overall Fitness';
  timeframe: number; // in weeks
  intensity: 'Low' | 'Medium' | 'High';
  daysPerWeek: number;
  sessionDuration: number; // in minutes
  medicalConditions: string[];
  dietaryRestrictions: string[];
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  restTime: number; // in seconds
  description: string;
  videoUrl?: string;
}

export interface WorkoutDay {
  day: string;
  exercises: Exercise[];
}

export interface WorkoutPlan {
  userId: string;
  preferences: WorkoutPreferences;
  photoAnalysis: PhotoAnalysis;
  weeklyPlan: WorkoutDay[];
  startDate: Date;
  endDate: Date;
}

export interface WorkoutPlannerProps {
  user: UserProfile;
}