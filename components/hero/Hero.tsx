"use client"
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

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

    // Play video muted initially
    if (videoElement) {
      videoElement.play().catch(error => {
        console.error("Error playing video: ", error);
      });
    }

    // Unmute and play video on user interaction
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

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      <video 
        ref={videoRef} 
        className="absolute w-full h-full object-cover bg-gradient-to-b from-slate-500 via-gray-700 to-black" 
        autoPlay 
        loop 
        muted={isMuted} // Start video muted to comply with autoplay policies
      >
        <source src="/assets/videos/welcome.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent"></div>
      <div className='flex flex-col items-center'>
        <motion.div
          className="z-10 text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold text-transparent p-4"
          initial={{ opacity: 1, y: 0 }}
          animate={controls}
          style={{
            backgroundImage: 'linear-gradient(45deg, #d6cdcd, #8c8888)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          R1PFITNESS GYM
        </motion.div>

        <div className='text-center mt-4'>
          <motion.div
            className="z-10 text-xl sm:text-xl md:text-lg lg:text-2xl font-extrabold text-transparent"
            initial={{ opacity: 1, y: 0 }}
            animate={controls}
            style={{
              backgroundImage: 'linear-gradient(45deg, #d6cdcd, #8c8888)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Home away from Home
          </motion.div>
        </div>
      </div>
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 p-2 bg-black bg-opacity-50 rounded-full"
      >
        {isMuted ? <VolumeX color="white" size={44} /> : <Volume2 color="white" size={44} />}
      </button>
    </div>
  );
};

export default HeroSection;
