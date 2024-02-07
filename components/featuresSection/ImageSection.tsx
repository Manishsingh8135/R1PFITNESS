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
    <div className="relative w-full md:w-1/2 h-screen flex justify-center items-center p-8 shadow-lg shadow-yellow-500/50 ">
      {/* Background elements */}
      <div className='absolute z-0 w-full md:h-[700px]'>
        
      </div>
      
      {/* Image Container */}
      <div className='relative z-10 md:h-[700px] '> {/* Ensure this div has a higher z-index than elements you want behind */}
        <motion.img
          src={image}
          alt=""
          className="object-cover rounded-lg w-full h-full border-2 border-maincolor"
          variants={imageVariants}
          whileHover="hover"
          initial={{ y: 0, boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)" }}
          transition={{ yoyo: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default ImageSection;
