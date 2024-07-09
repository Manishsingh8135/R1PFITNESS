"use client";
import { ParallaxScroll } from "@/components/CustomUi/parallax-scroll-3";
import { motion } from "framer-motion";

export function TransformationSection() {
  return (
    <div className="bg-gradient-to-b from-black via-maincolor-dark to-black min-h-screen py-20 px-4">
      <motion.h1 
        className="text-6xl md:text-8xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-maincolor to-maincolor-light"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Reborn Stronger
      </motion.h1>
      
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-8 text-maincolor-light"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Incredible Transformations at R1P FITNESS GYM
      </motion.h2>
      
      {/* <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="text-xl md:text-2xl mb-6 text-maincolor-light">
          At R1P FITNESS GYM, we don't just transform bodies; we rebuild lives. Our members' journeys are testaments to the power of dedication, expert guidance, and unwavering community support.
        </p>
        <p className="text-lg md:text-xl text-maincolor-light">
          Each image below tells a story of resilience, showcasing the incredible before-and-after transformations of our members. These are not just physical changes – they represent newfound confidence, strength, and a rekindled zest for life.
        </p>
        <p className="text-lg md:text-xl mt-6 font-semibold text-maincolor">
          Witness the power of being Reborn 1n Paradise. Your transformation journey starts here.
        </p>
      </motion.div> */}
      
      <ParallaxScroll images={images} />
    </div>
  );
}

const images = [
  "/assets/transformations/tfm11.jpeg",
  "/assets/transformations/tfm2.jpeg",
  "/assets/transformations/tfm3.jpeg",
  "/assets/transformations/tfm4.jpeg",
  "/assets/transformations/tfm5.jpeg",
  "/assets/transformations/tfm6.jpeg",
  "/assets/transformations/tfm7.jpeg",
  "/assets/transformations/tfm8.jpeg",
  "/assets/transformations/tfm9.jpeg",
  "/assets/transformations/tfm10.jpeg",
  "/assets/transformations/tfm11.jpeg",
  "/assets/transformations/tff1.jpeg",
  "/assets/transformations/tff2.jpeg",
  "/assets/transformations/tff3.jpeg",
  "/assets/transformations/tff4.jpeg",
  "/assets/transformations/tff5.jpeg",
  "/assets/transformations/tff6.jpeg",
  "/assets/transformations/tff7.jpeg",
  "/assets/transformations/tff8.jpeg",
  "/assets/transformations/tff9.jpeg",
  "/assets/transformations/tff10.jpeg",
  "/assets/transformations/tff11.jpeg"
];