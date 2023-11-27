
// "use client"
// import React, { useRef, useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useWindowSize } from 'react-use';

// const images = [
//   '/assets/gym1.jpg',
//   '/assets/gym2.jpg',
//   '/assets/gym3.jpg',
//   // Add more image URLs as needed
// ];

// const ImageGallery: React.FC = () => {
//   const { width, height } = useWindowSize();
//   const controls = useAnimation();
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleScroll = () => {
//     if (containerRef.current) {
//       const percentage = window.scrollY / height;
//       const x = -(containerRef.current.scrollWidth - width) * percentage;
//       controls.start({ x });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [width, height, controls]);

//   return (
//     <motion.div ref={containerRef} animate={controls} className="flex overflow-hidden h-screen">
//       {images.map((src, index) => (
//         <motion.img
//           key={index}
//           src={src}
//           className="min-w-full object-cover"
//           alt={`Gallery ${index + 1}`}
//         />
//       ))}
//     </motion.div>
//   );
// };

// export default ImageGallery;
