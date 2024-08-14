import { Winner } from '../types/hallOfFameTypes';

export const hallOfFameData: Winner[] = [
  {
    id: '1',
    name: 'HIP Rivera',
    year: 2024,
    category: 'Mr RIP',
    image: '/assets/trainers/Hip1.jpg',
    challengesWon: 15,
    challengesStarted: 20,
    achievements: ['Most Consistent', 'Biggest Transformation'],
    weight: 80,
    height: 180,
    socialMedia: {
      instagram: 'johndoe_fitness',
      twitter: 'johndoe_fit',
    },
    bio: 'John has been a dedicated member of the RIP community for 3 years...',
  },
  {
    id: '2',
    name: 'Shawnee Jacob(SJ)',
    year: 2024,
    category: 'Miss RIP',
    image: '/assets/trainers/trainerw1.jpg',
    challengesWon: 18,
    challengesStarted: 22,
    achievements: ['Strongest Lifter', 'Community Leader'],
    weight: 65,
    height: 170,
    socialMedia: {
      instagram: 'janesmith_fit',
      facebook: 'janesmithfitness',
    },
    bio: 'Jane has inspired countless members with her incredible journey...',
  },
  {
    id: '3',
    name: 'Steven Rodriguez',
    year: 2020,
    category: 'Legend',
    image: '/assets/trainers/trainerm1.jpg',
    challengesWon: 50,
    challengesStarted: 60,
    achievements: ['5-Time Mr RIP', 'RIP Ambassador'],
    weight: 85,
    height: 185,
    socialMedia: {
      instagram: 'mike_legend',
      twitter: 'mikejohnson_rip',
      facebook: 'mikejohnsonfit',
    },
    bio: 'Mike is a true RIP legend, having inspired and mentored...',
  },
  // Add more mock data as needed
];