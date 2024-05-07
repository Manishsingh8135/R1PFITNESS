'use client'
import React, { useState } from 'react';

type Offering = {
    id: number;
    title: string;
    description: string;
};

const offerings: Offering[] = [
    { id: 1, title: "Open Gym", description: "Access to all gym facilities with state-of-the-art equipment." },
    { id: 2, title: "Cardio Equipment", description: "Wide range of cardio machines to boost your heart health." },
    { id: 3, title: "Bathrooms with Showers", description: "Clean and well-equipped bathrooms for your comfort." },
    { id: 4, title: "Lounge & Coffee Bar", description: "Relax and refresh at our cozy lounge with complimentary coffee." },
    { id: 5, title: "Free WiFi", description: "Stay connected with our high-speed internet access." },
    { id: 6, title: "Free Group Workouts Saturdays 9AM & 11AM", description: "Join our community for fun and engaging group workouts." },
    { id: 7, title: "Personal Training Packages", description: "Tailored personal training sessions to meet your fitness goals." },
    { id: 8, title: "12-Week Transformation Program", description: "Comprehensive program designed for total fitness transformation." },
    { id: 9, title: "Monthly Community Events", description: "Be a part of our vibrant community through regular events." },
    { id: 10, title: "Salsa & Bachata Dance Lessons", description: "Learn and enjoy Salsa and Bachata with our expert instructors." },
    { id: 11, title: "Friendly & Welcoming Environment", description: "A supportive and positive atmosphere for all members." },
    { id: 12, title: "Positive Vibes & Energy", description: "A place where positivity and energy thrive." }
];

const OfferingsSection = () => {
    const [isVisible, setIsVisible] = useState(false); // State to toggle visibility

    return (
        <div className="bg-black p-4 text-white">
            <div className="text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-16 bg-clip-text text-maincolor">
                    What We Offer
                </h2>
                <div className="inline-block">
                    <svg
                        onClick={() => setIsVisible(!isVisible)}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 cursor-pointer mb-16 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ transform: isVisible ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            {isVisible && (
                <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-8">
                    {offerings.map((offering) => (
                        <div key={offering.id} className="p-4 text-center bg-b-gradient text-white rounded-lg">
                            <h3 className="text-2xl md:text-3xl font-bold">{offering.title}</h3>
                            <p className="text-md md:text-lg">{offering.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OfferingsSection;
