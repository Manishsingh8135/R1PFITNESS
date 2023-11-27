// components/Navbar.tsx
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

const Navbar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the scroll listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-10 ${isScrolled ? 'bg-zinc-950 bg-opacity-75' : 'bg-opacity-50'} text-white rounded-b-xl transition-all duration-300 shadow-md`}>
      <div className="max-w-6xl mx-auto px-4 h-16">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" passHref>
            <div className='flex'>
          <img
            src="/assets/riplogo1.png"
            className="h-16 mr-3"
            alt="R1PFITNESS GYM Logo"
          />
            <span className="mt-4 text-xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-bl from-amber-700 via-yellow-300 to-yellow-800">
              R1PFITNESS GYM
            </span>
            </div>
          </Link>

          {/* Primary nav */}
          <div className="flex items-center space-x-8">
            {/* Secondary nav - Visible on md screens and up */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/trainers" passHref>
                <span className="cursor-pointer">Trainers</span>
              </Link>
              <Link href="#faq" passHref>
                <span className="cursor-pointer">FAQ</span>
              </Link>
              <Link href="#footer" passHref>
                <span className="cursor-pointer">Contact Us</span>
              </Link>
              <Link href="/" passHref>
                <span className="cursor-pointer">Day Passes</span>
              </Link>
              <Link href="/" passHref>
                <span className="px-4 py-2 font-bold text-white rounded-full shadow-xl bg-gradient-to-bl from-amber-700 via-yellow-300 to-yellow-800  hover:bg-yellow-300 transition duration-300 cursor-pointer">Book A Tour</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
