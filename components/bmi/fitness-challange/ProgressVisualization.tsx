// File: app/components/FitnessChallenge/ProgressVisualization.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/ /ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ProgressData {
  date: string;
  value: number;
}

interface ProgressVisualizationProps {
  data: ProgressData[];
  title: string;
  unit: string;
}
const ProgressVisualization: React.FC<ProgressVisualizationProps> = ({ data, title, unit }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gray-900 shadow-xl border border-amber-500">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-500 font-bold">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4a4a4a" />
                  <XAxis 
                    dataKey="date" 
                    stroke="#ffc107"
                    tick={{ fill: '#ffffff' }}  // Changed to white for visibility
                    fontSize={12}
                  />
                  <YAxis 
                    unit={unit} 
                    stroke="#ffc107"
                    tick={{ fill: '#ffffff' }}  // Changed to white for visibility
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1a1a1a', 
                      border: '1px solid #ffc107',
                      color: '#ffffff'
                    }}
                    labelStyle={{ color: '#ffc107' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#ffc107" 
                    strokeWidth={3}
                    dot={{ fill: '#ffc107', strokeWidth: 2, r: 6 }}
                    activeDot={{ fill: '#ffeb3b', strokeWidth: 2, r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };
  
  export default ProgressVisualization;