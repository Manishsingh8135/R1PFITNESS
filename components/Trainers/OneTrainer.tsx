// pages/trainers/[id].tsx
"use client"
import { useRouter } from 'next/router';
import Image from 'next/image';
import React from 'react';
// Import your Navbar component if you have one
// import Navbar from '../../components/Navbar';

const TrainerProfilePage = () => {
  const router = useRouter();
  // The trainer's data will be fetched using this ID
  const { id } = router.query;

  // This is where you would fetch the trainer's data using the ID
  // For now, we're just setting up the skeleton

  return (
    <div>
      {/* Navbar: Replace with your actual Navbar component */}
      <div className="bg-purple-600 text-white text-center p-4">Navbar</div>

      {/* Trainer's Name */}
      <h1 className="text-6xl font-bold text-center my-4">Trainer Name</h1>

      {/* Trainer's Image */}
      <div className="bg-red-400 p-4">
        {/* Replace with actual Image component */}
        <div className="w-full h-96 bg-blue-200">Image</div>
      </div>

      {/* Trainer's Details */}
      <div className="flex flex-col md:flex-row justify-around items-center my-4">
        {/* Left Column for Name and Description */}
        <div className="flex-1">
          <div className="bg-blue-200 p-4 mb-4">Name</div>
          <div className="bg-orange-300 p-4">Description</div>
        </div>

        {/* Right Column for Age, Experience, etc. */}
        <div className="flex-1">
          <div className="bg-yellow-300 p-4 mb-4">Age</div>
          <div className="bg-yellow-300 p-4 mb-4">Experience</div>
          <div className="bg-yellow-300 p-4 mb-4">Favorite Workout</div>
          <div className="bg-yellow-300 p-4 mb-4">Favorite Exercise</div>
          <div className="bg-yellow-300 p-4 mb-4">Specialties</div>
          <div className="bg-yellow-300 p-4 mb-4">Certifications</div>
          <div className="bg-yellow-300 p-4">Social Media</div>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfilePage;
