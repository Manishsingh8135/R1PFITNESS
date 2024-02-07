// components/TrainerList.tsx

import Image from 'next/image';
import { Trainer, trainers } from '../../data/trainersData';
import TrainerCard from './TrainerCard';
interface TrainerListProps {
  trainers: Trainer[];
}

export const TrainerList: React.FC<TrainerListProps> = ({ trainers }) => {
  return (
    <div className="bg-gray-950 text-white mb-1" id='Trainers'>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-5xl   md:text-7xl   font-bold mb-8 sm:mb-16 md:mb-32 text-center text-maincolor ">R1PFITNESS PERSONAL TRAINERS</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 place-items-center">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </div>
  );
};


  
  export default TrainerList;