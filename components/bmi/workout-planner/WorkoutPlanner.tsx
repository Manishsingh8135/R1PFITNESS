// File: app/components/WorkoutPlanner/WorkoutPlanner.tsx
"use client"
import React, { useState } from 'react';
import { WorkoutPlannerProps, WorkoutPreferences, WorkoutPlan, PhotoAnalysis } from '../../../types/workoutTypes';
import PhotoUpload from './PhotoUpload';
import UserInputForm from './UserInputForm';
import WorkoutPlanDisplay from './WorkoutPlanDisplay';
import { analyzePhotos, generateWorkoutPlan } from '../../../utils/workoutUtils';
import { Card, CardContent } from "../../../ /ui/card";
import { Button } from "../../../ /ui/button";
import { motion, AnimatePresence } from "framer-motion";

const WorkoutPlanner: React.FC<WorkoutPlannerProps> = ({ user }) => {
  const [step, setStep] = useState(1);
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoAnalysis, setPhotoAnalysis] = useState<PhotoAnalysis | null>(null);
  const [preferences, setPreferences] = useState<WorkoutPreferences | null>(null);
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null);

  const handlePhotoUpload = async (uploadedPhotos: File[]) => {
    setPhotos(uploadedPhotos);
    const analysis = await analyzePhotos(uploadedPhotos);
    setPhotoAnalysis(analysis);
    setStep(2);
  };

  const handlePreferencesSubmit = async (prefs: WorkoutPreferences) => {
    setPreferences(prefs);
    if (photoAnalysis) {
      const plan = await generateWorkoutPlan(user, photoAnalysis, prefs);
      setWorkoutPlan(plan);
      setStep(3);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-amber-900 min-h-screen p-6">
      <Card className="max-w-4xl mx-auto bg-gray-800 text-white shadow-xl">
        <CardContent className="p-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-amber-400">AI Photo-Based Workout Planner</h1>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="photo-upload"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
              >
                <PhotoUpload onUpload={handlePhotoUpload} />
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="user-input"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
              >
                <UserInputForm onSubmit={handlePreferencesSubmit} photoAnalysis={photoAnalysis!} />
              </motion.div>
            )}
            {step === 3 && workoutPlan && (
              <motion.div
                key="workout-plan"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
              >
                <WorkoutPlanDisplay plan={workoutPlan} />
              </motion.div>
            )}
          </AnimatePresence>
          {step > 1 && (
            <Button 
              variant="outline" 
              onClick={() => setStep(step - 1)} 
              className="mt-4 text-amber-400 border-amber-400 hover:bg-amber-400 hover:text-black"
            >
              Back
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkoutPlanner;