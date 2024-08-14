export interface Winner {
    id: string;
    name: string;
    year: number;
    category: 'Mr RIP' | 'Miss RIP' | 'Legend';
    image: string;
    challengesWon: number;
    challengesStarted: number;
    achievements: string[];
    weight: number;
    height: number;
    socialMedia: {
      instagram?: string;
      twitter?: string;
      facebook?: string;
    };
    bio: string;
  }
  
  export type WinnerCategory = 'current' | 'allTime';