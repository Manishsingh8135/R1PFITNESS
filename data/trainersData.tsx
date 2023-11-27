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
      name: 'Steven Rodriguez',
      
      
      certifications: [
        { name: 'ISSA Certification', certified: true },
        { name: 'Nutrition Certified', certified: true },
        { name: 'Youth/Elderly Certified', certified: true },
        { name: 'TRX Certified', certified: true },
        { name: 'TRX Certified', certified: true },
        { name: 'TRX Certified', certified: true }
      ],
      specialities: ['Strength & Conditioning', 'Bodybuilding', 'Weight Loss'],
      description: 'Taiwan specializes in strength & conditioning, bodybuilding, and weight loss.',
      experience: 25,
      image: '/assets/trainer6a.png',
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
        { name: 'ISSA Certification', certified: true },
        { name: 'Nutrition Certified', certified: true },
        { name: 'Youth/Elderly Certified', certified: true },
        { name: 'TRX Certified', certified: true }
      ],
      specialities: ['Strength & Conditioning', 'Bodybuilding', 'Weight Loss'],
      description: 'Taiwan specializes in strength & conditioning, bodybuilding, and weight loss.',
      experience: 25,
      image: '/assets/trainerw4a.png',
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
        { name: 'ISSA Certification', certified: true },
        { name: 'Nutrition Certified', certified: true },
        { name: 'Youth/Elderly Certified', certified: true },
        { name: 'TRX Certified', certified: true }
      ],
      specialities: ['Strength & Conditioning', 'Bodybuilding', 'Weight Loss'],
      description: 'Taiwan specializes in strength & conditioning, bodybuilding, and weight loss.',
      experience: 25,
      image: '/assets/trainer5a.png',
      contactInfo: {
        email: 'taiwan840@gmail.com'
      },
      favoriteWorkoutDay: 'Leg day',
      favoriteExercise: 'Squats'
    },
    {
      id: 'trainer-001',
      name: 'Hipolito Rivera',
      certifications: [
        { name: 'ISSA Certification', certified: true },
        { name: 'Nutrition Certified', certified: true },
        { name: 'Youth/Elderly Certified', certified: true },
        { name: 'TRX Certified', certified: true }
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
      name: 'Taiwan Robinson',
      certifications: [
        { name: 'ISSA Certification', certified: true },
        { name: 'Nutrition Certified', certified: true },
        { name: 'Youth/Elderly Certified', certified: true },
        { name: 'TRX Certified', certified: true }
      ],
      specialities: ['Strength & Conditioning', 'Bodybuilding', 'Weight Loss'],
      description: 'Taiwan specializes in strength & conditioning, bodybuilding, and weight loss.',
      experience: 25,
      image: '/assets/trainerw2.jpg',
      contactInfo: {
        email: 'taiwan840@gmail.com'
      },
      favoriteWorkoutDay: 'Leg day',
      favoriteExercise: 'Squats'
    },
    {
      id: 'trainer-001',
      name: 'Taiwan Robinson',
      certifications: [
        { name: 'ISSA Certification', certified: true },
        { name: 'Nutrition Certified', certified: true },
        { name: 'Youth/Elderly Certified', certified: true },
        { name: 'TRX Certified', certified: true }
      ],
      specialities: ['Strength & Conditioning', 'Bodybuilding', 'Weight Loss'],
      description: 'Taiwan specializes in strength & conditioning, bodybuilding, and weight loss.',
      experience: 25,
      image: '/assets/gym5.jpg',
      contactInfo: {
        email: 'taiwan840@gmail.com'
      },
      favoriteWorkoutDay: 'Leg day',
      favoriteExercise: 'Squats'
    },
    // ... Add other trainers here
  ];
  
  
  