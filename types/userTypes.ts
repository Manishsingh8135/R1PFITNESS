// File: src/types/userTypes.ts

export type Gender = 'Male' | 'Female' | 'Other';

export type FitnessGoal = 'Lose Weight' | 'Gain Muscle' | 'Improve Endurance' | 'Maintain Fitness';

export type ActivityLevel = 'Sedentary' | 'Lightly Active' | 'Moderately Active' | 'Very Active' | 'Extremely Active';

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  gender: Gender;
  height: number; // in cm
  weight: number; // in kg
  fitnessGoal: FitnessGoal;
  activityLevel: ActivityLevel;
  medicalConditions: string[];
  dietaryRestrictions: string[];
  preferredWorkoutDays: string[];
  preferredWorkoutDuration: number; // in minutes
  experienceLevel: 'Beginner' | 'Intermediate' | 'Advanced';
}

// Dummy data
export const dummyUsers: UserProfile[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    height: 180,
    weight: 80,
    fitnessGoal: 'Gain Muscle',
    activityLevel: 'Moderately Active',
    medicalConditions: ['None'],
    dietaryRestrictions: ['None'],
    preferredWorkoutDays: ['Monday', 'Wednesday', 'Friday'],
    preferredWorkoutDuration: 60,
    experienceLevel: 'Intermediate',
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 25,
    gender: 'Female',
    height: 165,
    weight: 65,
    fitnessGoal: 'Lose Weight',
    activityLevel: 'Lightly Active',
    medicalConditions: ['Asthma'],
    dietaryRestrictions: ['Vegetarian'],
    preferredWorkoutDays: ['Tuesday', 'Thursday', 'Saturday'],
    preferredWorkoutDuration: 45,
    experienceLevel: 'Beginner',
  },
  {
    id: '3',
    name: 'Alex Johnson',
    age: 40,
    gender: 'Other',
    height: 175,
    weight: 70,
    fitnessGoal: 'Improve Endurance',
    activityLevel: 'Very Active',
    medicalConditions: ['High Blood Pressure'],
    dietaryRestrictions: ['Gluten-free'],
    preferredWorkoutDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    preferredWorkoutDuration: 90,
    experienceLevel: 'Advanced',
  },
];