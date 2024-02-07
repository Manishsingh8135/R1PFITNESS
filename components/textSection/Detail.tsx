'use client'
import { motion } from 'framer-motion';
import React from 'react';



const R1pFitnessComponent = () => {
    const fadeInUpVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 }
    };

    return (
        <div className="container mx-auto px-4 py-24 pb-32 h-screen flex flex-col  justify-center ">
            <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold  mb-6 custom-gradient text-transparent bg-clip-text">Welcome to R1pfitness</h1>
                <h2 className="text-2xl md:text-4xl italic text-secondary mb-8">Your Wellness Hub in the Heart of Waipahu, Oahu</h2>
            </motion.div>

            <motion.div
                variants={fadeInUpVariants}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                <p className="text-lg md:text-2xl px-20 md:px-10 leading-relaxed">
                    This isn't just a gym, but a <span className="font-bold  text-maincolor ">vibrant community</span> of <span className="font-bold  text-maincolor">passionate individuals</span>...
                </p>
                <p className="text-lg md:text-2xl px-20 md:px-10 leading-relaxed">
                    Our ethos at R1pfitness is rooted in four pillars — <span className="font-bold   text-maincolor">Motivation</span>, <span className="font-bold  text-maincolor">Accountability</span>, <span className="font-bold  text-maincolor">Empowerment</span>, and <span className="font-bold  text-maincolor">Respect</span>.
                </p>
                <p className="text-lg md:text-2xl px-20 md:px-10 leading-relaxed">
                    As the leading fitness facility in Oahu, we take pride in fostering a space where people from all walks of life can find the <span className="font-bold  text-maincolor">motivation to push their boundaries</span>.
                </p>
            </motion.div>
        </div>
    );
};

export default R1pFitnessComponent;
