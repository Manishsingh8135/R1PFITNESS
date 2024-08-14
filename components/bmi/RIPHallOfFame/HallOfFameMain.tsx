import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ /ui/tabs";
import CurrentYearWinners from './CurrentYearWinners';
import AllTimeGreats from './AllTimeGreats';

const HallOfFameMain: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'current' | 'allTime'>('current');

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 text-amber-400">
                RIP Hall of Fame
            </h1>
            <Tabs defaultValue="current" className="w-full" onValueChange={(value) => setActiveTab(value as 'current' | 'allTime')}>
                <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger
                        value="current"
                        className={`text-lg transition-colors duration-200 ${activeTab === 'current'
                                ? 'bg-amber-400 text-black'
                                : 'bg-gray-700 text-white hover:bg-gray-600'
                            }`}
                    >
                        Current Year
                    </TabsTrigger>
                    <TabsTrigger
                        value="allTime"
                        className={`text-lg transition-colors duration-200 ${activeTab === 'allTime'
                                ? 'bg-amber-400 text-black'
                                : 'bg-gray-700 text-white hover:bg-gray-600'
                            }`}
                    >
                        All Time Greats
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="current">
                    <CurrentYearWinners />
                </TabsContent>
                <TabsContent value="allTime">
                    <AllTimeGreats />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default HallOfFameMain;