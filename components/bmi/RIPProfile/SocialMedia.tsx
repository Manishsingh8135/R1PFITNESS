// File: app/components/RIPProfile/SocialMedia.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/ /ui/card";
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

interface SocialMediaProps {
  links: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ links }) => {
  return (
    <Card className="bg-gray-800 border border-amber-500/30">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-amber-400">Social Media</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-around">
        {links.instagram && (
          <a href={`https://instagram.com/${links.instagram}`} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">
            <FaInstagram size={24} />
          </a>
        )}
        {links.twitter && (
          <a href={`https://twitter.com/${links.twitter}`} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">
            <FaTwitter size={24} />
          </a>
        )}
        {links.facebook && (
          <a href={`https://facebook.com/${links.facebook}`} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300">
            <FaFacebook size={24} />
          </a>
        )}
      </CardContent>
    </Card>
  );
};