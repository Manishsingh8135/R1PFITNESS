// components/ImageGallery.tsx
import React from "react";
import {ImageComponent} from "./ImageComponent";

const images = [
  { src: "https://www.tailwindtap.com/assets/components/gallery/image1.jpg", className: "w-full lg:w-1/2 p-1 md:p-2" },
  { src: "https://www.tailwindtap.com/assets/components/gallery/image2.jpg", className: "w-full lg:w-1/2 p-1 md:p-2" },
  { src: "https://www.tailwindtap.com/assets/components/gallery/image7.jpg", className: "w-full p-1 md:p-2" },
  // Add more images here
  { src: "https://www.tailwindtap.com/assets/components/gallery/image1.jpg", className: "w-full lg:w-1/2 p-1 md:p-2" },
  { src: "https://www.tailwindtap.com/assets/components/gallery/image2.jpg", className: "w-full lg:w-1/2 p-1 md:p-2" },
  { src: "https://www.tailwindtap.com/assets/components/gallery/image7.jpg", className: "w-full p-1 md:p-2" },
];

const ImageGallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 flex items-center">
      <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
        <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
          {images.map((image, index) => (
            <ImageComponent key={index} src={image.src} className={image.className} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;