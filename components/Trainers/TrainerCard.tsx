// components/TrainerCard.tsx

import Image from 'next/image';
import React from 'react';
import { Trainer } from '../../data/trainersData'; // Adjust the import path to your data file
import Link from 'next/link';

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
    //add these classnames to below div if required: `max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl`
    <div className="relative overflow-hidden rounded-lg group shadow-lg bg-gray-800 text-white   my-4  lg:h-[750px] ">
      <Image
        src={trainer.image}
        alt={trainer.name}
        layout="responsive"
        width={300} // Adjusted for larger display
        height={500} // Adjusted for larger display
        objectFit="cover"
        className="transition-transform duration-500 group-hover:scale-110  rounded-lg lg:h-[750px]"
      />
      <div className="absolute bottom-0 w-full p-4">
        <div className='flex justify-center'>
          <Link href={`/trainers/${trainer.id}`} className="bg-black bg-opacity-50 rounded-full p-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-2 text-center text-yellow-600">{trainer.name}</Link>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {trainer.certifications.map((cert, index) => (
            <span key={index} className={`${getRandomGradient()} text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold py-1 px-2 rounded-full`}>
              {cert.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};



export default TrainerCard;