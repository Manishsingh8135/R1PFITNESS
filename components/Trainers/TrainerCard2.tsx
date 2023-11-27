// components/TrainerCard.tsx

import Image from 'next/image';
import React from 'react';
import { Trainer } from '../../data/trainersData'; // Adjust the import path to your data file

// Define an array of gradient color strings
const gradientColors = [
    'bg-gradient-to-r from-green-400 to-blue-500',
    'bg-gradient-to-r from-red-400 to-red-600',
    'bg-gradient-to-r from-purple-400 to-pink-500',
    // ... add 7 more gradient color strings
  ];

  // Function to get a random gradient class
function getRandomGradient() {
    return gradientColors[Math.floor(Math.random() * gradientColors.length)];
  }
  
interface TrainerCardProps {
  trainer: Trainer;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ trainer }) => {
    return (
      <div className="relative overflow-hidden rounded-lg group bg-gray-800 text-white shadow-lg m-auto h-700 ">
        <Image
          src={trainer.image}
          alt={trainer.name}
          layout="responsive"
          width={500} // Maintain the aspect ratio of the card
          height={700}
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 w-full p-4">
          <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {trainer.certifications.map((cert, index) => (
              <span key={index} className="bg-white text-black text-xs font-medium py-1 px-2 rounded-full">
                {cert.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TrainerCard;