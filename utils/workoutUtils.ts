// File: app/utils/workoutUtils.ts

import { UserProfile } from '../types/userTypes';
import { WorkoutPreferences, WorkoutPlan, PhotoAnalysis, Exercise, WorkoutDay } from '../types/workoutTypes';

// Simulated AI photo analysis
export const analyzePhotos = async (photos: File[]): Promise<PhotoAnalysis> => {
  // In a real app, you'd send these photos to an AI service for analysis
  // This is a placeholder that returns random data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        apparentAge: Math.floor(Math.random() * 30) + 20,
        bodyType: ['Ectomorph', 'Mesomorph', 'Endomorph'][Math.floor(Math.random() * 3)],
        muscleDefinition: ['Low', 'Moderate', 'High'][Math.floor(Math.random() * 3)],
        posture: ['Good', 'Fair', 'Poor'][Math.floor(Math.random() * 3)],
        additionalObservations: ['Appears to have good flexibility', 'Shows signs of previous athletic training'],
      });
    }, 2000); // Simulate a 2-second delay for "processing"
  });
};

// Simulated workout plan generation
export const generateWorkoutPlan = async (
  user: UserProfile, 
  photoAnalysis: PhotoAnalysis, 
  preferences: WorkoutPreferences
): Promise<WorkoutPlan> => {
  // In a real app, you'd use a more sophisticated algorithm or AI model here
  const exercises: Exercise[] = [
    { name: 'Push-ups', sets: 3, reps: 10, restTime: 60, description: 'Standard push-ups' },
    { name: 'Squats', sets: 3, reps: 15, restTime: 60, description: 'Bodyweight squats' },
    { name: 'Pull-ups', sets: 3, reps: 8, restTime: 90, description: 'Standard pull-ups' },
    { name: 'Plank', sets: 3, reps: 1, restTime: 60, description: 'Hold for 30 seconds' },
    { name: 'Lunges', sets: 3, reps: 10, restTime: 60, description: 'Alternating legs' },
    { name: 'Burpees', sets: 3, reps: 10, restTime: 90, description: 'Full body burpees' },
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const weeklyPlan: WorkoutDay[] = days.slice(0, preferences.daysPerWeek).map(day => ({
    day,
    exercises: exercises.slice(0, 3).map(exercise => ({
      ...exercise,
      sets: preferences.intensity === 'High' ? exercise.sets + 1 : exercise.sets,
      reps: preferences.intensity === 'Low' ? exercise.reps - 2 : exercise.reps,
    })),
  }));

  return {
    userId: user.id,
    preferences: preferences,
    photoAnalysis: photoAnalysis,
    weeklyPlan: weeklyPlan,
    startDate: new Date(),
    endDate: new Date(Date.now() + preferences.timeframe * 7 * 24 * 60 * 60 * 1000),
  };
};

// Helper function to get exercise recommendations based on goals and body type
export const getExerciseRecommendations = (goal: string, bodyType: string): string[] => {
  // This is a simplified version. In a real app, you'd have a more comprehensive database of exercises
  const recommendations: { [key: string]: { [key: string]: string[] } } = {
    'Weight Loss': {
      'Ectomorph': ['HIIT', 'Compound lifts', 'Cardio'],
      'Mesomorph': ['Circuit training', 'Cardio', 'Resistance training'],
      'Endomorph': ['Low-impact cardio', 'Strength training', 'Swimming'],
    },
    'Muscle Gain': {
      'Ectomorph': ['Heavy compound lifts', 'Progressive overload', 'Increased calorie intake'],
      'Mesomorph': ['Hypertrophy training', 'Compound and isolation exercises', 'Moderate cardio'],
      'Endomorph': ['Strength training', 'HIIT', 'Careful diet management'],
    },
    // Add more goals and body types as needed
  };

  return recommendations[goal]?.[bodyType] || ['Consult a fitness professional for personalized advice'];
};