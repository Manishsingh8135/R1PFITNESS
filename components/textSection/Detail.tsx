"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const R1pFitnessComponent = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.8,
            },
        }),
    };

    return (
        <div className="container mx-auto px-4 py-24 pb-32 min-h-screen flex flex-col justify-center">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-7xl md:text-8xl font-extrabold mb-8 custom-gradient text-transparent bg-clip-text">
                    Welcome to R1pfitness
                </h1>
                <h2 className="text-3xl md:text-5xl italic text-secondary">
                    Your Wellness Hub in the Heart of Waipahu, Oahu
                </h2>
            </motion.div>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeInUpVariants}
                className="space-y-12"
            >
                {[
                    "This isn't just a gym, but a <span class='font-bold text-maincolor'>vibrant community</span> of <span class='font-bold text-maincolor'>passionate individuals</span>...",
                    "Our ethos at R1pfitness is rooted in four pillars — <span class='font-bold text-maincolor'>Motivation</span>, <span class='font-bold text-maincolor'>Accountability</span>, <span class='font-bold text-maincolor'>Empowerment</span>, and <span class='font-bold text-maincolor'>Respect</span>.",
                    "As the leading fitness facility in Oahu, we take pride in fostering a space where people from all walks of life can find the <span class='font-bold text-maincolor'>motivation to push their boundaries</span>."
                ].map((text, index) => (
                    <motion.p
                        key={index}
                        custom={index}
                        variants={fadeInUpVariants}
                        className="text-2xl md:text-3xl px-8 md:px-16 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: text }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 },
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default R1pFitnessComponent;