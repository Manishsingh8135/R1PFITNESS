// File: app/components/RIPProfile/Achievements.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/ /ui/card";
import { Badge } from "@/ /ui/badge";

interface AchievementsProps {
  achievements: string[];
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <Card className="bg-gray-800 border border-amber-500/30">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-amber-400">Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {achievements.map((achievement, index) => (
            <Badge key={index} variant="secondary" className="bg-amber-500/20 text-amber-300">
              {achievement}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};