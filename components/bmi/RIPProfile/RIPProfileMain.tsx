// File: app/components/RIPProfile/RIPProfileMain.tsx
"use client"
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/ /ui/card";
import { ProfileHeader } from './ProfileHeader';
import { RIPScore } from './RIPScore';
import { HealthStats } from './HealthStats';
import { ChallengeHistory } from './ChallengeHistory';
import { Achievements } from './Achievements';
import { SocialMedia } from './SocialMedia';
import { HealthCharts } from './HealthCharts';
import { mockUserProfile, mockWeightData } from '@/data/mockProfileData';

const RIPProfileMain: React.FC = () => {
  const user = mockUserProfile;
  const weightData = mockWeightData;

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card className="bg-gradient-to-br from-gray-900 to-black shadow-xl border border-amber-500/50">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-amber-400">RIP Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProfileHeader user={user} />
            <RIPScore score={user.ripScore} topPercentage={user.topPercentage} />
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HealthStats user={user} />
            <ChallengeHistory 
              participated={user.challengesParticipated} 
              won={user.challengesWon} 
              coins={user.walletCoins} 
            />
            <Achievements achievements={user.achievements} />
          </div>
          <div className="mt-6">
            <HealthCharts weightData={weightData} />
          </div>
          <div className="mt-6">
            <SocialMedia links={user.socialMedia} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RIPProfileMain;