// File: app/components/FitnessChallenge/ChallengeDashboard.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/ /ui/card";
import { Button } from "@/ /ui/button";
import { UserChallenge, Challenge } from '@/types/challangeTypes';
import ChallengeCard from './ChallengeCard';

interface ChallengeDashboardProps {
  activeChallenges: UserChallenge[];
  completedChallenges: UserChallenge[];
  featuredChallenge: Challenge;
}

const ChallengeDashboard: React.FC<ChallengeDashboardProps> = ({
  activeChallenges,
  completedChallenges,
  featuredChallenge,
}) => {
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-r from-amber-500 to-amber-700 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl text-black font-bold">Challenge of the Month</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-2xl font-bold text-black mb-3">{featuredChallenge.name}</h3>
            <p className="text-lg text-black mb-5">{featuredChallenge.description}</p>
            <Button variant="secondary" className="bg-black text-amber-500 hover:bg-gray-800 text-lg py-2 px-6">Join Challenge</Button>
          </CardContent>
        </Card>
      </motion.div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-amber-500">Active Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-amber-500">Completed Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} isCompleted />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeDashboard;