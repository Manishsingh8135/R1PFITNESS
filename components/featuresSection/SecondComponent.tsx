"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ImageSection from './ImageSection';
import TextSection from './TextSection';

interface SecondComponentProps {
  image: string;
  heading: string;
  text: string;
  reverse: boolean;
}

const SecondComponent: React.FC<SecondComponentProps> = ({ image, heading, text, reverse }) => {
  const sectionClass = "flex flex-col md:flex-row h-screen w-full";

  return (
    <motion.div
      className={reverse ? `${sectionClass} md:flex-row-reverse` : sectionClass}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ImageSection image={image} />
      <TextSection heading={heading} text={text} />
    </motion.div>
  );
};

export default SecondComponent;
