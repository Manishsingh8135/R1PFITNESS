// File: app/components/WorkoutPlanner/WorkoutPlanDisplay.tsx

import React from 'react';
import { WorkoutPlan } from '../../../types/workoutTypes';
import { motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaSwimmer, FaFlag } from 'react-icons/fa';
import { SlCalender } from "react-icons/sl";

import { GrYoga } from "react-icons/gr";


interface WorkoutPlanDisplayProps {
    plan: WorkoutPlan;
}

const exerciseIcons: { [key: string]: React.ReactNode } = {
    'Push-ups': <FaDumbbell />,
    'Running': <FaRunning />,
    'Swimming': <FaSwimmer />,
    'Yoga': <GrYoga />,
    // Add more GrYoga-icon mappings as needed
};

const WorkoutPlanDisplay: React.FC<WorkoutPlanDisplayProps> = ({ plan }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-3xl p-8 shadow-2xl mb-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-bold mb-4 text-white">Your Fitness Journey</h2>
                <div className="grid grid-cols-2 gap-4 text-white">
                    <div>
                        <p className="text-2xl font-semibold">Goal</p>
                        <p className="text-3xl font-bold">{plan.preferences.goal}</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold">Duration</p>
                        <p className="text-3xl font-bold">{plan.preferences.timeframe} weeks</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold">Intensity</p>
                        <p className="text-3xl font-bold">{plan.preferences.intensity}</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold">Workouts/Week</p>
                        <p className="text-3xl font-bold">{plan.preferences.daysPerWeek}</p>
                    </div>
                </div>
            </motion.div>

            {plan.weeklyPlan.map((dayPlan, index) => (
                <motion.div
                    key={dayPlan.day}
                    className="bg-gray-800 rounded-2xl p-6 mb-6 shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <h3 className="text-2xl font-bold mb-4 text-amber-400">{dayPlan.day}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {dayPlan.exercises.map((exercise, exerciseIndex) => (
                            <div key={exerciseIndex} className="bg-gray-700 rounded-xl p-4">
                                <div className="flex items-center mb-2">
                                    <div className="text-4xl text-amber-500 mr-3">
                                        {exerciseIcons[exercise.name] || <FaDumbbell />}
                                    </div>
                                    <h4 className="text-xl font-semibold text-white">{exercise.name}</h4>
                                </div>
                                <p className="text-lg text-amber-300">
                                    {exercise.sets} sets &times; {exercise.reps} reps
                                </p>
                                <p className="text-sm text-gray-400 mt-2">{exercise.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}

            <motion.div
                className="mt-12 mb-8 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="absolute w-full h-1 bg-amber-600 top-1/2 transform -translate-y-1/2"></div>
                <div className="relative flex justify-between items-center">
                    <div className="bg-gray-800 rounded-full p-4 z-10">
                        <SlCalender className="text-3xl text-amber-500" />
                        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center">
                            <p className="text-amber-400 font-bold">Start</p>
                            <p className="text-white">{plan.startDate.toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-full p-4 z-10">
                        <FaFlag className="text-3xl text-amber-500" />
                        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center">
                            <p className="text-amber-400 font-bold">Finish</p>
                            <p className="text-white">{plan.endDate.toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-16">
                    <p className="text-2xl font-bold text-amber-500">
                        {plan.preferences.timeframe} Week Journey
                    </p>
                    <p className="text-gray-400 mt-2">
                        Transform yourself in {plan.preferences.timeframe * 7} days!
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default WorkoutPlanDisplay;