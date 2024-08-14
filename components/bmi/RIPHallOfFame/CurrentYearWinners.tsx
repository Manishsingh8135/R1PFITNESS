import React from 'react';
import { hallOfFameData } from '@/data/hallOfFameData';
import WinnerCard from './WinnerCard';

const CurrentYearWinners: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const currentWinners = hallOfFameData.filter(winner => winner.year === currentYear);
  
    return (
      <div className="grid grid-cols-1 gap-8">
        {currentWinners.map(winner => (
          <WinnerCard key={winner.id} winner={winner} />
        ))}
      </div>
    );
  };
  
  export default CurrentYearWinners;