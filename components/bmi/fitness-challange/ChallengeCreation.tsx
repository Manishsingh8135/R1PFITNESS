// File: app/components/FitnessChallenge/ChallengeCreation.tsx
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/ /ui/card";
import { Button } from "@/ /ui/button";
import { Input } from "@/ /ui/input";
import { Textarea } from "@/ /ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ /ui/select";
import { Switch } from "@/ /ui/switch";
import { ChallengeCategory } from '@/types/challangeTypes';

const prebuiltChallenges = [
    {
        name: "Fat Loss Challenge",
        gradient: "from-red-500 to-orange-500",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4M12 4v16m8-8l-4-4m0 8l4-4" />
            </svg>
        )
    },
    {
        name: "MMA Challenge",
        gradient: "from-blue-500 to-purple-500",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        name: "Weight Gain Challenge",
        gradient: "from-green-500 to-teal-500",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        name: "Running Challenge",
        gradient: "from-yellow-500 to-green-500",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        name: "Flexibility Challenge",
        gradient: "from-pink-500 to-purple-500",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        )
    },
];
const ChallengeCreation: React.FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState<ChallengeCategory>('Weight Loss');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [rules, setRules] = useState('');
    const [isPublic, setIsPublic] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle challenge creation logic here
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >
            <div>
                <h2 className="text-2xl font-bold text-amber-400 mb-4">Pre-built Challenges</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {prebuiltChallenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card className={`bg-gradient-to-br ${challenge.gradient} shadow-lg cursor-pointer overflow-hidden`}>
                                <CardContent className="p-4 flex flex-col items-center justify-center h-40">
                                    <div className="text-white mb-2">
                                        {challenge.icon}
                                    </div>
                                    <h3 className="text-white text-center font-bold mt-2">{challenge.name}</h3>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Card className="bg-black shadow-2xl border border-amber-500">
                <CardHeader>
                    <CardTitle className="text-3xl text-amber-500">Create a Custom Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            placeholder="Challenge Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-gray-800 text-amber-300 border-amber-500 text-lg"
                        />
                        <Textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="bg-gray-800 text-amber-300 border-amber-500 text-lg"
                        />
                        <Select onValueChange={(value) => setCategory(value as ChallengeCategory)}>
                            <SelectTrigger className="bg-gray-800 text-amber-300 border-amber-500 text-lg">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 text-amber-300 border-amber-500">
                                <SelectItem value="Weight Loss">Weight Loss</SelectItem>
                                <SelectItem value="Muscle Gain">Muscle Gain</SelectItem>
                                <SelectItem value="Endurance">Endurance</SelectItem>
                                <SelectItem value="Flexibility">Flexibility</SelectItem>
                                <SelectItem value="Habit Formation">Habit Formation</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                type="date"
                                placeholder="Start Date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="bg-gray-800 text-amber-300 border-amber-500 text-lg"
                            />
                            <Input
                                type="date"
                                placeholder="End Date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="bg-gray-800 text-amber-300 border-amber-500 text-lg"
                            />
                        </div>
                        <Textarea
                            placeholder="Challenge Rules"
                            value={rules}
                            onChange={(e) => setRules(e.target.value)}
                            className="bg-gray-800 text-amber-300 border-amber-500 text-lg"
                        />
                        <div className="flex items-center space-x-2">
                            <Switch
                                id="public-challenge"
                                checked={isPublic}
                                onCheckedChange={setIsPublic}
                                className="bg-amber-500"
                            />
                            <label htmlFor="public-challenge" className="text-amber-300 text-lg">Make challenge public</label>
                        </div>
                        <Button type="submit" className="w-full bg-amber-500 text-black hover:bg-amber-600 text-lg py-2">Create Challenge</Button>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ChallengeCreation;