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
        "R1P FITNESS is not just a gym; it's a home away from home. The warm and welcoming environment, coupled with the social camaraderie, makes every workout session a delightful experience. The facilities are top-notch, and the coffee bar adds a touch of comfort. The workout area is amazing, offering both open spaces and private workout areas for a personalized fitness journey.",
      name: "Hip Rivera",
      title: "All American Athlete, Founder of R1P FITNESS",
    },
    {
      quote:
        "Choosing R1P FITNESS was a game-changer for me. The personalized workout programs and the expertise of the highly qualified trainers have taken my fitness journey to new heights. The weight loss program is effective, the strength training is empowering, and the military training program adds a unique and challenging dimension to my workouts. R1P FITNESS is not just a gym; it's a holistic fitness experience.",
      name: "Satisfied Client",
      title: "Fitness Enthusiast",
    },
    {
      quote:
        "At R1P FITNESS, I discovered a haven for fitness enthusiasts. The atmosphere is unlike any other – a perfect blend of motivation and support. Hip Rivera's expertise as an All American Athlete is evident in every aspect of the gym. The personalized workout programs cater to individual needs, and the trainers go above and beyond to ensure a rewarding fitness journey. It's not just a gym; it's a community that inspires and uplifts.",
      name: "Happy Gym Member",
      title: "Fitness Devotee",
    },
    {
      quote:
        "R1P FITNESS is more than just a gym; it's a transformative experience. The attention to detail in creating a home-like environment sets it apart. The coffee bar, the amazing workout areas, and the private workout zones provide a holistic fitness space. The highly qualified trainers, led by the incredible Hip Rivera, make every session challenging and enjoyable. Whether you're on a weight loss journey, building strength, or embracing military training, R1P FITNESS is the place to be.",
      name: "Thriving Fitness Enthusiast",
      title: "R1P FITNESS Advocate",
    },
    {
      quote:
        "Joining R1P FITNESS was the best decision I made for my fitness journey. The personalized approach, combined with the outstanding facilities, creates a unique and effective workout experience. The trainers are not just knowledgeable but also passionate about helping you achieve your goals. It's not just a gym; it's a community that supports and motivates you every step of the way.",
      name: "Dedicated Gym Goer",
      title: "Fitness Fanatic",
    },
  ];
  