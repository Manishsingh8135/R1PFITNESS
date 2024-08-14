// File: app/types/profileTypes.ts

export interface UserProfile {
    id: string;
    name: string;
    age: number;
    weight: number;
    height: number;
    bmi: number;
    image: string;
    ripScore: number;
    topPercentage: number;
    walletCoins: number;
    challengesParticipated: number;
    challengesWon: number;
    socialMedia: {
      instagram?: string;
      twitter?: string;
      facebook?: string;
    };
    achievements: string[];
  }
  
  export interface WeightData {
    date: string;
    value: number;
  }
  