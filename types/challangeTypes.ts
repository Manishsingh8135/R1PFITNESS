// File: app/types/challengeTypes.ts

export type ChallengeCategory = 'Weight Loss' | 'Muscle Gain' | 'Endurance' | 'Flexibility' | 'Habit Formation';

export interface Challenge {
  id: string;
  name: string;
  description: string;
  category: ChallengeCategory;
  startDate: Date;
  endDate: Date;
  participants: string[]; // User IDs
  creatorId: string;
  rules: string;
  isPublic: boolean;
}

export interface UserChallenge extends Challenge {
  progress: number;
  rank: number;
}

export interface ChallengeTemplate {
  id: string;
  name: string;
  description: string;
  category: ChallengeCategory;
  duration: number; // in days
  defaultRules: string;
}