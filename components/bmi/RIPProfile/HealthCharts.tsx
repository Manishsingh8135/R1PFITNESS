// File: app/components/RIPProfile/HealthCharts.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/ /ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WeightData } from '@/types/profileTypes';

interface HealthChartsProps {
  weightData: WeightData[];
}

export const HealthCharts: React.FC<HealthChartsProps> = ({ weightData }) => {
  return (
    <Card className="bg-gray-800 border border-amber-500/30">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-amber-400">Weight Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weightData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#D97706" />
              <YAxis stroke="#D97706" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #D97706' }} />
              <Line type="monotone" dataKey="value" stroke="#FCD34D" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};