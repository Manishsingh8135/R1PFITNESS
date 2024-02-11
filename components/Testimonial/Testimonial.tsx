"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-card";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="relative">
        <div className="absolute bg-amber-600 insert-0 blur-lg w-full border-3 border-maincolor"></div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "R1P FITNESS is not just a gym; it's a home away from home with a warm environment and social camaraderie.",
    name: "Hip Rivera",
    title: "All American Athlete, Founder of R1P FITNESS",
  },
  {
    quote:
      "Choosing R1P FITNESS was a game-changer. Personalized programs and expert trainers elevate my fitness.",
    name: "Satisfied Client",
    title: "Fitness Enthusiast",
  },
  {
    quote:
      "At R1P FITNESS, a haven for fitness enthusiasts awaits. Perfect blend of motivation and support.",
    name: "Happy Gym Member",
    title: "Fitness Devotee",
  },
  {
    quote:
      "R1P FITNESS is more than just a gym; it's transformative. Attention to detail sets it apart.",
    name: "Thriving Fitness Enthusiast",
    title: "R1P FITNESS Advocate",
  },
  {
    quote:
      "Joining R1P FITNESS was the best decision for my fitness journey. Personalized approach and outstanding facilities.",
    name: "Dedicated Gym Goer",
    title: "Fitness Fanatic",
  },
];

  