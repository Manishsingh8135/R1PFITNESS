"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedHeadingSection = () => {
    const controls = useAnimation();
    const paragraph = "Transform today. Your fitness journey begins here. Every workout is a step towards your goals. Discover a community that inspires and motivates. Our gym offers state-of-the-art equipment and expert guidance. Join us to embark on a transformative journey of health and wellness. Unleash your potential with personalized training and supportive classes. Together, we'll achieve milestones, surpass limits, and celebrate every success on your path to a healthier, stronger you.";
    const sentences = paragraph.split('. ').map(sentence => sentence.trim() + '.');

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 300) {
                controls.start(i => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.3 }
                }));
            } else {
                controls.start({ opacity: 0, y: 20 });
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [controls]);

    return (
        <div className="h-screen flex flex-col justify-start pt-10 items-center bg-black">
            <motion.div 
                className="text-6xl   lg:text-8xl text-center mb-16 font-bold bg-gradient-to-bl from-amber-700 via-yellow-300 to-yellow-800"
                style={{
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                }}
                animate={controls}
                initial={{ opacity: 0, y: -20 }}
            >
                R1P Fitness
            </motion.div>
            <div className="px-8 text-center">
                {sentences.map((sentence, index) => (
                    <motion.p 
                        key={index}
                        className="text-lg md:text-xl lg:text-2xl font-bold mb-4" // Adjust text size and margin as needed
                        custom={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={controls}
                        exit={{ opacity: 0 }} // Fade out animation
                    >
                        {sentence}
                    </motion.p>
                ))}
            </div>
        </div>
    );
};

export default AnimatedHeadingSection;
