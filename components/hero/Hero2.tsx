"use client"
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Crown, Dumbbell, Users, Calendar } from 'lucide-react';

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;

      const opacityValue = 1 - scrollY / maxScroll;
      const yValue = -scrollY;

      controls.start({
        opacity: opacityValue,
        y: yValue
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  useEffect(() => {
    const videoElement = videoRef.current;

    const playVideoWithSound = () => {
      if (videoElement) {
        videoElement.muted = isMuted;
        videoElement.play().catch(error => {
          console.error("Error playing video with sound: ", error);
        });
      }
    };

    if (videoElement) {
      videoElement.play().catch(error => {
        console.error("Error playing video: ", error);
      });
    }

    window.addEventListener('click', playVideoWithSound);

    return () => {
      window.removeEventListener('click', playVideoWithSound);
    };
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(prevState => !prevState);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const goldGradient = 'linear-gradient(45deg, #FFD700, #FFA500, #DAA520)';

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      <video 
        ref={videoRef} 
        className="absolute w-full h-full object-cover bg-gradient-to-b from-slate-500 via-gray-700 to-black" 
        autoPlay 
        loop 
        muted={isMuted}
      >
        <source src="/assets/videos/welcome.mp4" type="video/mp4" />
      </video>

      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent"></div>
      
      <div className='flex flex-col items-center z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Crown className="w-24 h-24 mx-auto" style={{ stroke: 'url(#goldGradient)' }} />
        </motion.div>

        <motion.h1
          className="text-7xl font-extrabold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            backgroundImage: goldGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          R1P FITNESS GYM
        </motion.h1>

        <motion.p
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            backgroundImage: goldGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Reborn 1n Paradise
        </motion.p>

        <motion.div
          className="flex space-x-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FeatureButton icon={<Dumbbell size={24} />} text="Elite Training" />
          <FeatureButton icon={<Users size={24} />} text="Community" />
          <FeatureButton icon={<Calendar size={24} />} text="Events" />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 rounded-full font-bold text-xl transition duration-300 filter drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            background: goldGradient,
            color: '#000',  // Dark text for contrast
          }}
        >
          Join Our Royal Family
        </motion.button>
      </div>

      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 p-2 bg-black bg-opacity-50 rounded-full"
      >
        {isMuted ? <VolumeX color="white" size={44} /> : <Volume2 color="white" size={44} />}
      </button>

      <svg width="0" height="0">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#DAA520" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const FeatureButton: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center bg-yellow-900/40 rounded-lg p-3 backdrop-blur-sm"
  >
    <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
      {React.cloneElement(icon as React.ReactElement, { style: { stroke: 'url(#goldGradient)' } })}
    </div>
    <span className="mt-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
      {text}
    </span>
  </motion.div>
);

export default HeroSection;