"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Together,",
    },
    {
      text: "we",
    },
    {
      text: "sweat,",
    },
    {
      text: "we",
    },
    {
        text: "grow,",
      },
      {
        text: "we",
      },
      {
        text: "thrive,",
      },
      {
        text: "JOIN",
        className: "text-maincolor dark:text-maincolor"
      },
    {
      text: "RIPFITNESS",
      className: "text-maincolor dark:text-maincolor",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="  flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 ">
       <div className="relative">
        <div className="absolute insert-0 bg-maincolor h-10 border-2 border-rose-500 w-full blur-lg"></div>
        <button className="p relative w-40 h-10 rounded-xl bg-black border dark:border-maincolor font-bold border-transparent text-maincolor text-2xl">
          Join now
        </button>
        </div>
      </div>
    </div>
  );
}
