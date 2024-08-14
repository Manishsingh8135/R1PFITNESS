// File: app/components/RIPProfile/RIPScore.tsx
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface RIPScoreProps {
  score: number;
  topPercentage: number;
}

export const RIPScore: React.FC<RIPScoreProps> = ({ score, topPercentage }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-48 h-48">
        <CircularProgressbar
          value={score}
          text={`${score}`}
          strokeWidth={10}
          styles={buildStyles({
            textColor: '#FCD34D',
            pathColor: '#F59E0B',
            trailColor: '#374151',
          })}
        />
      </div>
      <h3 className="mt-4 text-2xl font-bold text-amber-400">RIP Score</h3>
      <p className="text-amber-300">Top {topPercentage}% of RIP members</p>
    </div>
  );
};