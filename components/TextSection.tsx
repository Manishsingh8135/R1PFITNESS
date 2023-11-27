"use client"
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const useScrollAnimation = () => {
    const controls = useAnimation();
    const ref = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible");
                } else {
                    controls.start("hidden");
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    return { controls, ref };
};


const TextSection: React.FC = () => {
    const { controls: headingControls, ref: headingRef } = useScrollAnimation();
const { controls: line1Controls, ref: line1Ref } = useScrollAnimation();
const { controls: line2Controls, ref: line2Ref } = useScrollAnimation();
// ... and so on for other lines.

    // Add more lines as needed

    return (
        <div id="textSection" className="bg-black bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text p-20">
            <motion.h1 
                ref={headingRef}
                initial="hidden"
                animate={headingControls}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 50 }
                }}
                className="text-8xl font-extrabold mb-10  bg-gradient-to-tl from-violet-500 via-indigo-700 to-blue-900"
                style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(to left bottom, rgb(101, 163, 13), rgb(22, 163, 74), rgb(16, 185, 129))' }}
            >
                Your fitness journey starts here!!
            </motion.h1>

            <motion.p 
                ref={line1Ref}
                initial="hidden"
                animate={line1Controls}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 50 }
                }}
                className="text-5xl mb-4"
            >
                Transform your fitness journey at R1P FITNESS. 
            </motion.p>

            <motion.p 
                ref={line2Ref}
                initial="hidden"
                animate={line2Controls}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 50 }
                }}
                className="text-5xl mb-4"
            >
                We pride ourselves on offering the ultimate fitness experience, equipped with state-of-the-art machines that push the boundaries of innovation. 
            </motion.p>

            <motion.p 
                ref={line1Ref}
                initial="hidden"
                animate={line1Controls}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 50 }
                }}
                className="text-5xl mb-4"
            >
                Our commitment to excellence is exemplified through our team of top-notch instructors who are dedicated to helping you achieve your fitness goals.
            </motion.p>

            <motion.p 
                ref={line2Ref}
                initial="hidden"
                animate={line2Controls}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 50 }
                }}
                className="text-5xl mb-4"
            >
                Our commitment to excellence is exemplified through our team of top-notch instructors who are dedicated to helping you achieve your fitness goals.
            </motion.p>

            <motion.p 
                ref={line1Ref}
                initial="hidden"
                animate={line1Controls}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 50 }
                }}
                className="text-5xl mb-4"
            >
                Join us today and experience the best of the best in fitness, where cutting-edge equipment and expert guidance converge to create a gym like no other. 
            </motion.p>

            <motion.p 
                ref={line2Ref}
                initial="hidden"
                animate={line2Controls}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 50 }
                }}
                className="text-3xl mb-4"
            >
                Your fitness transformation begins here.
            </motion.p>

            
            

            {/* Add more lines as needed */}
        </div>
    );
};

export default TextSection;
