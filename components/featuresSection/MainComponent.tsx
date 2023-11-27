
"use client"
import React from 'react';

import SecondComponent from './SecondComponent';

interface SectionData {
  img: string;
  heading: string;
  text: string;
}
const sectionsData = [
  {
    img: '/assets/riptrainerm.jpg',
    heading: 'Personal Training',
    text: 'Our certified trainers provide one-on-one guidance tailored to your goals.',
  },
  {
    img: '/assets/ripgym2.jpg',
    heading: 'Group Fitness Classes',
    text: 'Join our dynamic group classes led by experienced instructors for an energizing workout.',
  },
  {
    img: '/assets/ripgym1.jpg',
    heading: 'Holistic Health Programs',
    text: 'Explore holistic health programs that integrate physical, mental, and spiritual well-being.',
  },
  {
    img: '/assets/ripgym3.jpg',
    heading: 'Nutritional Coaching',
    text: 'Receive personalized nutrition plans and coaching to complement your fitness journey.',
  },
  {
    img: '/assets/ripgym4.jpg',
    heading: 'Advanced Equipment Training',
    text: 'Get hands-on with the latest in fitness technology for a cutting-edge exercise experience.',
  },
  
  {
    img: '/assets/gym6.jpg',
    heading: 'Powerlifiting/CrossFit Equipment',
    text: 'Discover top-tier Powerlifting and CrossFit equipment, designed to elevate your workout experience and performance.',
  },
  // ...add as many sections as you like
];


export default function MainComponent() {
  return (
    <div className="min-h-screen bg-black">
     {sectionsData.map((section, index) => (
  <SecondComponent
    key={index}
    image={section.img}
    heading={section.heading} // Add this line
    text={section.text}
    reverse={index % 2 !== 0}
  />
))}
    </div>
  );
}
