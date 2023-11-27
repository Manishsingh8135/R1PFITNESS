"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface ImageSectionProps {
  image: string;
}

const imageVariants = {
  hover: {
    y: -20,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
  }
};

const ImageSection: React.FC<ImageSectionProps> = ({ image }) => {
  return (
    <div className="w-full md:w-1/2 h-screen flex justify-center items-center p-8 shadow-lg shadow-yellow-500/50">
      <motion.img
        src={image}
        alt=""
        className="object-cover rounded-lg w-full h-full border-2 border-yellow-500 "
        variants={imageVariants}
        whileHover="hover"
        initial={{ y: 0, boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)" }}
        transition={{ yoyo: Infinity, duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ImageSection;
