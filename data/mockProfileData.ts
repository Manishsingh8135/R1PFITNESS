// File: app/data/mockProfileData.ts

import { UserProfile, WeightData } from '../types/profileTypes';

export const mockUserProfile: UserProfile = {
  id: "user1",
  name: "HIP Rivera",
  age: 30,
  weight: 75,
  height: 180,
  bmi: 23.1,
  image: "/assets/trainers/Hip1.jpg",
  ripScore: 85,
  topPercentage: 5,
  walletCoins: 1500,
  challengesParticipated: 10,
  challengesWon: 3,
  socialMedia: {
    instagram: "johndoe",
    twitter: "johndoe_fit",
    facebook: "johndoefitness"
  },
  achievements: [
    "Weight Loss Champion",
    "30-Day Challenge Completer",
    "Consistency King",
    "Strength Milestone Achiever"
  ]
};

export const mockWeightData: WeightData[] = [
  { date: '2023-01', value: 80 },
  { date: '2023-02', value: 78 },
  { date: '2023-03', value: 76 },
  { date: '2023-04', value: 75 },
  { date: '2023-05', value: 74 },
];