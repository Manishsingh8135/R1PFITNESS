"use client";
import { ParallaxScrollSecond } from "../ui/parallax-scroll";

export function ParallaxScrollSecondDemo() {
  return (
    <div className="h-screen">
        <ParallaxScrollSecond images={images} />;
    </div>
  )
    
  
}

const images = [
 
  "/assets/riptrainerm.jpg",
  "/assets/gymopenarea.JPG",
  "/assets/gymstore.JPG",
  "/assets/ripgym1.jpg",
  "/assets/ripgym2.jpg",
  "/assets/ripgym3.jpg",
  "/assets/ripgym4.jpg",


  
];
