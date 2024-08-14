import React, { useState } from 'react';
import { Winner } from '@/types/hallOfFameTypes';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/ /ui/card";
import { FaInstagram, FaTwitter, FaFacebook, FaTrophy, FaFlag, FaRulerVertical, FaWeight } from 'react-icons/fa';

import { Button } from "@/ /ui/button";
import WinnerDetails from './WinnerDetails';


interface WinnerCardProps {
    winner: Winner;
}

const StatBox: React.FC<{ icon: React.ReactNode; label: string; value: string | number }> = ({ icon, label, value }) => (
    <div className="bg-gray-700 rounded-lg p-3 shadow-md flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-200">
        <div className="text-amber-400 text-2xl mb-2">{icon}</div>
        <div className="text-center">
            <div className="text-sm text-gray-300">{label}</div>
            <div className="text-lg font-bold">{value}</div>
        </div>
    </div>
);

const WinnerCard: React.FC<WinnerCardProps> = ({ winner }) => {
    return (
        <Card className="bg-gray-800 text-white border border-amber-400 overflow-hidden">
            <CardHeader className="bg-amber-400 text-black">
                <CardTitle className="text-3xl font-bold">{winner.name}</CardTitle>
                <p className="text-xl">{winner.category} - {winner.year}</p>
            </CardHeader>
            <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="relative w-full h-full mb-4">
                            <Image
                                src={winner.image}
                                alt={winner.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Social Media Box */}

                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-amber-400 mb-3">🏆 Achievements</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            {winner.achievements.map((achievement, index) => (
                                <div key={index} className="bg-gray-700 rounded-lg p-3 shadow-md transform hover:scale-105 transition-transform duration-200">
                                    <span className="text-amber-400 text-xl mb-1 block">✨</span>
                                    <span className="text-sm">{achievement}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats Boxes */}
                        <h3 className="text-2xl font-bold text-amber-400 mt-6 mb-3">📊 Stats</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <StatBox icon={<FaTrophy />} label="Challenges Won" value={winner.challengesWon} />
                            <StatBox icon={<FaFlag />} label="Challenges Started" value={winner.challengesStarted} />
                            <StatBox icon={<FaRulerVertical />} label="Height" value={`${winner.height} cm`} />
                            <StatBox icon={<FaWeight />} label="Weight" value={`${winner.weight} kg`} />
                        </div>


                        <h3 className="text-2xl font-bold text-amber-400 mt-6 mb-3">📖 Bio</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <p className="text-sm leading-relaxed">{winner.bio}</p>
                        </div>


                        <div className="bg-gray-700 rounded-lg p-4 shadow-md">
                            <h4 className="text-xl font-bold text-amber-400 mb-3">🌐 Connect</h4>
                            <div className="flex justify-around">
                                {winner.socialMedia.instagram && (
                                    <a href={`https://instagram.com/${winner.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors duration-200">
                                        <FaInstagram size={30} />
                                    </a>
                                )}
                                {winner.socialMedia.twitter && (
                                    <a href={`https://twitter.com/${winner.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors duration-200">
                                        <FaTwitter size={30} />
                                    </a>
                                )}
                                {winner.socialMedia.facebook && (
                                    <a href={`https://facebook.com/${winner.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors duration-200">
                                        <FaFacebook size={30} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default WinnerCard;