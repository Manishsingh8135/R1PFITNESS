// components/TrainerList.tsx

import Image from 'next/image';
import { Trainer, trainers } from '../../data/trainersData';
import TrainerCard from './TrainerCard';
interface TrainerListProps {
  trainers: Trainer[];
}

export const TrainerList: React.FC<TrainerListProps> = ({ trainers }) => {
    return (
      <div className="bg-gray-950 text-white mb-1">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-8xl font-bold mb-32 text-center bg-clip-text text-transparent bg-gradient-to-bl from-amber-700 via-yellow-300 to-yellow-800">R1PFITNESS PERSONAL TRAINERS</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TrainerList;