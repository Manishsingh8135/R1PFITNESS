// Define an interface for the trainer's certifications
export interface Certification {
    name: string;
    certified: boolean;
  }
  
  // Define an interface for the trainer object
  export interface Trainer {
    id: string;
    name: string;
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
      instagram?: string;
      facebook?: string;
      twitter?: string;
    };
    favoriteWorkoutDay?: string; // Optional additional information
    favoriteExercise?: string;   // Optional additional information
  }
  
  // Example array of trainers
  export const trainers: Trainer[] = [
    {
      id: 'trainer-001',
      name: 'Hipolito Rivera (FOUNDER, CEO, Master Trainer)',
      certifications: [
        { name: 'Military Service', certified: true },
        { name: 'All American Athlete', certified: true },
        { name: 'Holistic Fitness Training', certified: true },
        { name: 'Motivational Coach', certified: true },
        { name: 'Military-Style Physical Training', certified: true },
        { name: 'Customized Workout Programs', certified: true }
      ],
      specialities: ['Strength & Conditioning', 'Bodybuilding', 'Weight Loss'],
      description: 'Taiwan specializes in strength & conditioning, bodybuilding, and weight loss.',
      experience: 25,
      image: '/assets/hip2.jpg',
      contactInfo: {
        email: 'taiwan840@gmail.com'
      },
      favoriteWorkoutDay: 'Leg day',
      favoriteExercise: 'Squats'
    },
    {
      id: 'trainer-001',
      name: 'Steven Rodriguez',
      
      
      certifications: [
        { name: 'Military Service', certified: true },
        { name: 'Nutrition Certified', certified: true },
        { name: 'Physique Competitor', certified: true },
        { name: 'Personal Training Guru', certified: true },
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
      id: 'trainer-001',
      name: 'Shawnee Jacob(SJ)',
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
      id: 'trainer-001',
      name: 'Bishop Watkins',
      certifications: [
        { name: 'Sports Conditioning', certified: true },
        { name: 'Military Physical Training (PT) Leader', certified: true },
        { name: 'NASM Certified Personal Trainer (CPT)', certified: true },
        { name: 'First Aid and CPR certified', certified: true },
        { name: 'Kettlebell Instructor Level 3', certified: true },
        { name: 'Hawaiian Physique Bodybuilding Champion- 2019 & 2020', certified: true },
       
        { name: 'Military Training', certified: true },
        
      ],
      specialities: ['Strength & Conditioning', 'Bodybuilding', 'Weight Loss'],
      description: 'Taiwan specializes in strength & conditioning, bodybuilding, and weight loss.',
      experience: 25,
      image: '/assets/trainer5a.jpg',
      contactInfo: {
        email: 'taiwan840@gmail.com'
      },
      favoriteWorkoutDay: 'Leg day',
      favoriteExercise: 'Squats'
    },
    
    
    
    // ... Add other trainers here
  ];
  
  
  