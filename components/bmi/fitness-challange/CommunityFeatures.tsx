// File: app/components/FitnessChallenge/CommunityFeatures.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/ /ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/ /ui/button";
interface Post {
    id: string;
    user: {
      name: string;
      avatar: string;
    };
    content: string;
    likes: number;
    comments: number;
  }
  
  interface CommunityFeaturesProps {
    posts: Post[];
  }
  
  const CommunityFeatures: React.FC<CommunityFeaturesProps> = ({ posts }) => {
    return (
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-amber-500">Community Updates</h2>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-black shadow-xl border border-amber-500">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={post.user.avatar} alt={post.user.name} />
                    <AvatarFallback className="bg-amber-500 text-black">{post.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl text-amber-400">{post.user.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-amber-300 mb-6 text-lg">{post.content}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="sm" className="text-amber-400 hover:text-amber-300 hover:bg-amber-900">
                      👍 {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-amber-400 hover:text-amber-300 hover:bg-amber-900">
                      💬 {post.comments}
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" className="border-amber-500 text-amber-400 hover:bg-amber-900">
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  };
  
  export default CommunityFeatures;