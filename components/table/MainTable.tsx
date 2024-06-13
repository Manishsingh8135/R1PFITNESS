// pages/index.tsx
"use client"
import Image from "next/image";
import { GymComparisonTable } from "./GymComparisonTable";
import {useState, useEffect} from "react"

export default function MainTable() {
  const [isMobile, setIsMobile] = useState(false)

  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth <= 768)
  }

     useEffect (() => {
      checkScreenWidth();
      window.addEventListener("resize", checkScreenWidth)
      return () => {
        window.removeEventListener("resize", checkScreenWidth)
      }
     }, [])

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-4xl md:text-6xl font-bold  text-center my-12 text-maincolor">Choose Your Perfect Gym: A Detailed Comparison</h1>
      {isMobile ? (
        <div className=" w-full flex items-center justify-center"> 
          <Image
          src="/assets/comparisontable/GymComparisonImg.png"
          width = {500}
          height= {500}
          alt = "comparison"
          />
        </div>
        
      ):(
        <GymComparisonTable />
      )}
      
      
    </div>
  );
}
