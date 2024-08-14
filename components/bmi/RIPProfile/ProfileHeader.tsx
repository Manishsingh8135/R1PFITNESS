// File: app/components/RIPProfile/ProfileHeader.tsx
import React from 'react';
import Image from 'next/image';

interface ProfileHeaderProps {
  user: {
    name: string;
    age: number;
    image: string;
  };
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="relative w-48 h-48">
        <Image
          src={user.image}
          alt={user.name}
          layout="fill"
          objectFit="cover"
          className="rounded-full border-4 border-amber-500"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-amber-400">{user.name}</h2>
        <p className="text-xl text-amber-300">Age: {user.age}</p>
      </div>
    </div>
  );
};