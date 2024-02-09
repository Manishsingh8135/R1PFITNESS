import React from 'react';
import Image from 'next/image';

interface ImageSectionProps {
  image: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ image }) => {
  return (
    <div className="relative w-full md:w-1/2 flex justify-center items-center p-2 shadow-lg shadow-yellow-500/50">
      {/* Background elements */}
      <div className='absolute z-0 w-full md:h-[700px]'>
        {/* Background content */}
      </div>

      {/* Image Container */}
      <div className='relative z-10 h-[500px] md:h-[700px]'> {/* Ensure this div has a higher z-index than elements you want behind */}
        <Image
          src={image}
          alt=""
          width={500} // Specify width for Next.js optimization
          height={500} // Specify height for Next.js optimization
          className="object-cover rounded-xl w-full h-full border-2 border-maincolor"
          loading="lazy" // Enable lazy loading
          quality={80} // Adjust image quality if needed
        />
      </div>
    </div>
  );
};

export default ImageSection;
