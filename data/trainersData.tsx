// Define an interface for the trainer's certifications
export interface Certification {
  name: string;
  certified: boolean;
}

// Define an interface for the trainer object
export interface Trainer {
  id: string;
  name: string;
  designations: String[];
  certifications: Certification[];
  specialities: string[];

  description: string;
  experience: number;
  image: string; // URL to the trainer's image
  contactInfo: {
    email: string;
    phone?: string; // Optional in case you want to add it later
  };
  socialMedia?: { // Optional in case you want to add social media links later
    facebook?: string;
    youtube?: string;
    instagram?: string;
    tiktok?: string;
    linkedin?: string
    twitter?: string;
  };
  favoriteWorkoutDay?: string; // Optional additional information
  favoriteExercise?: string;   // Optional additional information
}

// Example array of trainers
export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Hipolito Rivera',
    designations: ["Founder", "CEO", "Master Trainer"],
    certifications: [
      { name: 'Military Service', certified: true },
      { name: 'All American Athlete', certified: true },
      { name: 'Holistic Fitness Training', certified: true },
      { name: 'Military-Style Physical Training', certified: true },

    ],
    specialities: ['Strength & Conditioning', 'Bodybuilding', 'Weight Loss'],
    description: `High School All-American Athlete: Hipolito's fitness journey began in high school, where he excelled as an All-American athlete, constantly striving to be his best self.
Military Service: His desire to empower others in their fitness quests led him to serve eight years in the United States Navy as a Command Fitness Leader. Here, he played a pivotal role in helping sailors and marines achieve their fitness goals, maintaining the physical standards required for their military careers.
Philosophy: "Transforming you mentally, physically, and emotionally." Hipolito believes fitness is a holistic journey. At R1PFitness, he focuses on providing a fun, engaging, and educational experience to reshape your entire being.

R1PFitness: As the heart and soul of R1PFitness, Hipolito blends his athletic background and military discipline with a passion for teaching. His programs are not just workouts; they are transformative experiences designed to challenge and inspire.`,
    experience: 25,
    image: '/assets/hip2.jpg',
    contactInfo: {
      email: 'taiwan840@gmail.com'
    },
    socialMedia: {
      facebook: 'https://www.netflix.com/search?q=poet',
      instagram: 'https://www.netflix.com/search?q=poet',
      youtube: 'https://www.netflix.com/search?q=poet',
      linkedin: 'https://www.netflix.com/search?q=poet',
      tiktok: 'https://www.netflix.com/search?q=poet',
      twitter: 'https://www.netflix.com/search?q=poet'
    },
    favoriteWorkoutDay: 'Leg day',
    favoriteExercise: 'Squats'
  },
  {
    id: '2',
    name: 'Steven Rodriguez',

    designations: ["Trainer"],
    certifications: [
      { name: 'Military Service', certified: true },
      { name: 'Nutrition Certified', certified: true },
      { name: 'Physique Competitor', certified: true },

      { name: 'Certified Personal Trainer', certified: true },
      { name: 'TRX Certified', certified: true }
    ],
    specialities: ['Strength & Conditioning', 'Bodybuilding', 'Weight Loss'],
    description: 'Taiwan specializes in strength & conditioning, bodybuilding, and weight loss.',
    experience: 25,
    image: '/assets/trainer6a.jpg',
    contactInfo: {
      email: 'taiwan840@gmail.com'
    },
    favoriteWorkoutDay: 'Leg day',
    favoriteExercise: 'Squats'
  },



  {
    id: '3',
    name: 'Shawnee Jacob(SJ)',
    designations: ["Trainer"],
    certifications: [
      { name: 'Customized Workout Plans', certified: true },
      { name: 'Diverse Knowledge', certified: true },
      { name: 'Youth/Elderly Certified', certified: true },
      { name: 'Amateur Bikini Competitor', certified: true },
      { name: 'Communication', certified: true },

    ],
    specialities: ['Strength & Conditioning', 'Bodybuilding', 'Weight Loss'],
    description: 'Taiwan specializes in strength & conditioning, bodybuilding, and weight loss.',
    experience: 25,
    image: '/assets/trainerw4a.jpg',
    contactInfo: {
      email: 'taiwan840@gmail.com'
    },
    favoriteWorkoutDay: 'Leg day',
    favoriteExercise: 'Squats'
  },
  {
    id: '4',
    name: 'Jonathan Diaz',
    designations: ["Trainer"],
    certifications: [
      { name: 'Military Physical Training (PT) Leader', certified: true },
      { name: 'NASM Certified Personal Trainer (CPT)', certified: true },

      { name: 'Hawaiian Physique Bodybuilding Champion- 2019 & 2020', certified: true },



    ],
    specialities: ['Strength & Conditioning', 'Bodybuilding', 'Weight Loss'],
    description: 'Jonathan specializes in strength & conditioning, bodybuilding, and weight loss.',
    experience: 25,
    image: '/assets/trainer12.jpeg'
    ,
    contactInfo: {
      email: 'taiwan840@gmail.com'
    },
    favoriteWorkoutDay: 'Leg day',
    favoriteExercise: 'Squats'
  },



  // ... Add other trainers here
];


