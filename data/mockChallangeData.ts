// File: app/data/mockChallengeData.ts

import { UserChallenge, Challenge } from '@/types/challangeTypes';

export const activeChallenges: UserChallenge[] = [
  {
    id: '1',
    name: '30-Day Weight Loss Challenge',
    description: 'Lose 5% of your body weight in 30 days',
    category: 'Weight Loss',
    startDate: new Date('2024-08-01'),
    endDate: new Date('2024-08-30'),
    participants: ['user1', 'user2', 'user3'],
    creatorId: 'admin1',
    rules: 'Log your weight daily, follow the meal plan',
    isPublic: true,
    progress: 60,
    rank: 2,
  },
  // Add more active challenges...
];

export const completedChallenges: UserChallenge[] = [
  {
    id: '2',
    name: '10K Steps Daily',
    description: 'Walk 10,000 steps every day for a month',
    category: 'Endurance',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-31'),
    participants: ['user1', 'user4', 'user5'],
    creatorId: 'admin2',
    rules: 'Log your steps using a fitness tracker',
    isPublic: true,
    progress: 100,
    rank: 1,
  },
  // Add more completed challenges...
];

export const featuredChallenge: Challenge = {
  id: '3',
  name: 'Summer Body Challenge',
  description: 'Get in shape for the summer with this comprehensive 8-week program',
  category: 'Muscle Gain',
  startDate: new Date('2024-09-01'),
  endDate: new Date('2024-10-26'),
  participants: [],
  creatorId: 'admin1',
  rules: 'Follow the workout plan, share progress photos weekly',
  isPublic: true,
};

export const progressData = [
  { date: '2024-08-01', value: 70 },
  { date: '2024-08-08', value: 72 },
  { date: '2024-08-15', value: 69 },
  { date: '2024-08-22', value: 68 },
  { date: '2024-08-29', value: 67 },
];

export const communityPosts = [
  {
    id: '1',
    user: { name: 'John Doe', avatar: '/avatars/john.jpg' },
    content: 'Just completed my first 5K run! Feeling great and motivated!',
    likes: 15,
    comments: 3,
  },
  {
    id: '2',
    user: { name: 'Jane Smith', avatar: '/avatars/jane.jpg' },
    content: 'New personal best in deadlifts today. Hard work pays off!',
    likes: 22,
    comments: 7,
  },
  // Add more community posts...
];