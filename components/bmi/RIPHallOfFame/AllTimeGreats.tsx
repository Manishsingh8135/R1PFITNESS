import React from 'react';
import { hallOfFameData } from '@/data/hallOfFameData';
import WinnerCard from './WinnerCard';

const AllTimeGreats: React.FC = () => {
    const legends = hallOfFameData.filter(winner => winner.category === 'Legend');
  
    return (
      <div className="grid grid-cols-1 gap-8">
        {legends.map(legend => (
          <WinnerCard key={legend.id} winner={legend} />
        ))}
      </div>
    );
  };
  
  export default AllTimeGreats;