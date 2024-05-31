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
 
  "/assets/gym/riptrainerm.jpg",
  "/assets/gym/gymopenarea.JPG",
  "/assets/gym/gymstore.JPG",
  "/assets/gym/ripgym1.jpg",
  "/assets/gym/ripgym2.jpg",
  "/assets/gym/ripgym3.jpg",
  "/assets/gym/ripgym4.jpg",


  
];
