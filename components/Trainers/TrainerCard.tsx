// components/TrainerCard.tsx

import Image from 'next/image';
import React from 'react';
import { Trainer } from '../../data/trainersData'; // Adjust the import path to your data file

// Define an array of gradient color strings
const gradientColors = [
    'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600',
    'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
    'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
    'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
    'bg-gradient-to-r from-green-400 to-blue-600',
    'bg-gradient-to-r from-teal-400 via-green-500 to-blue-500',
    'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500',
    'bg-gradient-to-r from-blue-500 to-teal-500',
    'bg-gradient-to-r from-gray-700 via-gray-900 to-black',
    'bg-gradient-to-r from-red-500 to-yellow-500',
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
      <div className="relative overflow-hidden rounded-lg group shadow-lg shadow-yellow-500 bg-gray-800 text-white  mx-auto my-16 h-700 ">
        <Image
          src={trainer.image}
          alt={trainer.name}
          layout="responsive"
          width={500} // Maintain the aspect ratio of the card
          height={700}
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110 border-2 border-yellow-500 rounded-lg"
        />
        <div className="absolute bottom-0 w-full p-4">
          <div></div>
          <h3 className="bg-black bg-opacity-50 rounded-full p-2 text-3xl font-bold mb-2 text-center text-yellow-600">{trainer.name}</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {trainer.certifications.map((cert, index) => (
                //apply a random gradient to each certification

              <span key={index} className={`${getRandomGradient()}bg-white text-white text-m font-semibold  py-1 px-2 rounded-full`}>
                {cert.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TrainerCard;