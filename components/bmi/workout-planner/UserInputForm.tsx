// File: app/components/WorkoutPlanner/UserInputForm.tsx
"use client"
import React, { useState } from 'react';
import { WorkoutPreferences, PhotoAnalysis } from '../../../types/workoutTypes';
import { Button } from "../../../ /ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../ /ui/select";
import { Slider } from "../../../ /ui/slider";
import { Input } from "../../../ /ui/input";
import { Textarea } from "../../../ /ui/textarea";

interface UserInputFormProps {
  onSubmit: (preferences: WorkoutPreferences) => void;
  photoAnalysis: PhotoAnalysis;
}

const UserInputForm: React.FC<UserInputFormProps> = ({ onSubmit, photoAnalysis }) => {
  const [preferences, setPreferences] = useState<WorkoutPreferences>({
    goal: 'Overall Fitness',
    timeframe: 12,
    intensity: 'Medium',
    daysPerWeek: 3,
    sessionDuration: 60,
    medicalConditions: [],
    dietaryRestrictions: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-amber-400">AI Photo Analysis</h2>
        <div className="bg-gray-700 p-4 rounded-lg">
          <p><strong>Apparent Age:</strong> {photoAnalysis.apparentAge}</p>
          <p><strong>Body Type:</strong> {photoAnalysis.bodyType}</p>
          <p><strong>Muscle Definition:</strong> {photoAnalysis.muscleDefinition}</p>
          <p><strong>Posture:</strong> {photoAnalysis.posture}</p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-amber-400 mb-1">Fitness Goal</label>
        <Select 
          onValueChange={(value) => setPreferences({ ...preferences, goal: value as WorkoutPreferences['goal'] })}
          defaultValue={preferences.goal}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your goal" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Weight Loss">Weight Loss</SelectItem>
            <SelectItem value="Muscle Gain">Muscle Gain</SelectItem>
            <SelectItem value="Endurance">Endurance</SelectItem>
            <SelectItem value="Flexibility">Flexibility</SelectItem>
            <SelectItem value="Overall Fitness">Overall Fitness</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-amber-400 mb-1">Timeframe (weeks)</label>
        <Slider 
          min={4} 
          max={52} 
          step={1} 
          value={[preferences.timeframe]}
          onValueChange={(value) => setPreferences({ ...preferences, timeframe: value[0] })}
        />
        <span className="block mt-2 text-center">{preferences.timeframe} weeks</span>
      </div>

      <div>
        <label className="block text-sm font-medium text-amber-400 mb-1">Workout Intensity</label>
        <Select 
          onValueChange={(value) => setPreferences({ ...preferences, intensity: value as WorkoutPreferences['intensity'] })}
          defaultValue={preferences.intensity}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select intensity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Low">Low</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="High">High</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-amber-400 mb-1">Days per Week</label>
        <Slider 
          min={1} 
          max={7} 
          step={1} 
          value={[preferences.daysPerWeek]}
          onValueChange={(value) => setPreferences({ ...preferences, daysPerWeek: value[0] })}
        />
        <span className="block mt-2 text-center">{preferences.daysPerWeek} days</span>
      </div>

      <div>
        <label className="block text-sm font-medium text-amber-400 mb-1">Session Duration (minutes)</label>
        <Input 
          type="number" 
          value={preferences.sessionDuration}
          onChange={(e) => setPreferences({ ...preferences, sessionDuration: parseInt(e.target.value) })}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-amber-400 mb-1">Medical Conditions (if any)</label>
        <Textarea 
          value={preferences.medicalConditions.join(', ')}
          onChange={(e) => setPreferences({ ...preferences, medicalConditions: e.target.value.split(', ') })}
          placeholder="Enter any medical conditions, separated by commas"
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-amber-400 mb-1">Dietary Restrictions (if any)</label>
        <Textarea 
          value={preferences.dietaryRestrictions.join(', ')}
          onChange={(e) => setPreferences({ ...preferences, dietaryRestrictions: e.target.value.split(', ') })}
          placeholder="Enter any dietary restrictions, separated by commas"
          className="w-full"
        />
      </div>

      <Button type="submit" className="w-full bg-amber-500 text-black hover:bg-amber-600">
        Generate Workout Plan
      </Button>
    </form>
  );
};

export default UserInputForm;