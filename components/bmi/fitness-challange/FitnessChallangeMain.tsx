// File: app/pages/fitness-challenge/page.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ChallengeDashboard from './ChallengeDashboard';
import ChallengeCreation from './ChallengeCreation';
import ProgressVisualization from './ProgressVisualization';
import CommunityFeatures from './CommunityFeatures';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ /ui/tabs";
import { 
  activeChallenges, 
  completedChallenges, 
  featuredChallenge, 
  progressData, 
  communityPosts 
} from '@/data/mockChallangeData';

const FitnessChallengePage: React.FC = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
        <motion.h1
          className="text-5xl font-bold text-amber-500 mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Fitness Challenges
        </motion.h1>
  
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800 p-1 rounded-lg">
            <TabsTrigger 
              value="dashboard" 
              className="text-amber-400 data-[state=active]:bg-amber-500 data-[state=active]:text-black transition-all duration-300"
            >
              Dashboard
            </TabsTrigger>
            <TabsTrigger 
              value="create" 
              className="text-amber-400 data-[state=active]:bg-amber-500 data-[state=active]:text-black transition-all duration-300"
            >
              Create Challenge
            </TabsTrigger>
            <TabsTrigger 
              value="progress" 
              className="text-amber-400 data-[state=active]:bg-amber-500 data-[state=active]:text-black transition-all duration-300"
            >
              My Progress
            </TabsTrigger>
            <TabsTrigger 
              value="community" 
              className="text-amber-400 data-[state=active]:bg-amber-500 data-[state=active]:text-black transition-all duration-300"
            >
              Community
            </TabsTrigger>
          </TabsList>
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <TabsContent value="dashboard">
              <ChallengeDashboard
                activeChallenges={activeChallenges}
                completedChallenges={completedChallenges}
                featuredChallenge={featuredChallenge}
              />
            </TabsContent>
  
            <TabsContent value="create">
              <ChallengeCreation />
            </TabsContent>
  
            <TabsContent value="progress">
              <ProgressVisualization
                data={progressData}
                title="Weight Loss Progress"
                unit="kg"
              />
            </TabsContent>
  
            <TabsContent value="community">
              <CommunityFeatures posts={communityPosts} />
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    );
  };
  
  export default FitnessChallengePage;