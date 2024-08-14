// File: app/components/FitnessChallenge/ChallengeCard.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/ /ui/card";
import { Progress } from "@/ /ui/progress";
import { Badge } from "@/ /ui/badge";
import { UserChallenge } from '@/types/challangeTypes';
import { FaTrophy, FaUsers, FaChartLine, FaCalendarAlt } from 'react-icons/fa';

interface ChallengeCardProps {
    challenge: UserChallenge;
    isCompleted?: boolean;
  }
  
  const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, isCompleted = false }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="h-full"
      >
        <Card className="bg-gradient-to-br from-gray-900 to-black shadow-xl border border-amber-500/50 overflow-hidden h-full flex flex-col">
          <CardHeader className="pb-2 space-y-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl text-amber-400 font-bold">{challenge.name}</CardTitle>
              <Badge variant={isCompleted ? "secondary" : "default"} className={`px-3 py-1 text-xs font-semibold ${isCompleted ? 'bg-green-500 text-black' : 'bg-amber-500 text-black'}`}>
                {isCompleted ? "Completed" : "Active"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-4 flex-grow flex flex-col justify-between">
            <div>
              <p className="text-sm text-amber-200 mb-6 line-clamp-2">{challenge.description}</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm text-amber-300">
                  <span className="flex items-center"><FaChartLine className="mr-2" /> Progress</span>
                  <span>{challenge.progress}%</span>
                </div>
                <Progress 
                  value={challenge.progress} 
                  className="w-full h-2 bg-amber-900/50 rounded-full overflow-hidden" 
                >
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-300" 
                    style={{ width: `${challenge.progress}%` }}
                  />
                </Progress>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center bg-amber-900/20 rounded-md p-2">
                  <FaTrophy className="mr-2 text-amber-400" />
                  <span className="text-amber-200">Rank: #{challenge.rank}</span>
                </div>
                <div className="flex items-center bg-amber-900/20 rounded-md p-2">
                  <FaUsers className="mr-2 text-amber-400" />
                  <span className="text-amber-200">Participants: {challenge.participants.length}</span>
                </div>
              </div>
              <div className="flex items-center text-xs text-amber-200 bg-amber-900/20 rounded-md p-2">
                <FaCalendarAlt className="mr-2 text-amber-400" />
                <span>{challenge.startDate.toLocaleDateString()} - {challenge.endDate.toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };
  
  export default ChallengeCard;