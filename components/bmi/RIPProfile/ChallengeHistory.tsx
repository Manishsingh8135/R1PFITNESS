// File: app/components/RIPProfile/ChallengeHistory.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/ /ui/card";
import { FaTrophy, FaFlagCheckered, FaCoins } from 'react-icons/fa';
interface ChallengeHistoryProps {
  participated: number;
  won: number;
}

export const ChallengeHistory: React.FC<ChallengeHistoryProps> = ({ participated, won }) => {
  return (
    <Card className="bg-gray-800 border border-amber-500/30">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-amber-400">Challenge History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center text-amber-300"><FaFlagCheckered className="mr-2" /> Challenges Participated</span>
          <span className="text-amber-400 font-bold">{participated}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center text-amber-300"><FaTrophy className="mr-2" /> Challenges Won</span>
          <span className="text-amber-400 font-bold">{won}</span>
        </div>
      </CardContent>
    </Card>
  );
};