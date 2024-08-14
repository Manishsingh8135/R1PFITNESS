// File: app/components/RIPProfile/HealthStats.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/ /ui/card";

interface HealthStatsProps {
  user: {
    weight: number;
    height: number;
    bmi: number;
  };
}

export const HealthStats: React.FC<HealthStatsProps> = ({ user }) => {
  return (
    <Card className="bg-gray-800 border border-amber-500/30">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-amber-400">Health Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-amber-300">Weight: {user.weight} kg</p>
        <p className="text-amber-300">Height: {user.height} cm</p>
        <p className="text-amber-300">BMI: {user.bmi}</p>
      </CardContent>
    </Card>
  );
};