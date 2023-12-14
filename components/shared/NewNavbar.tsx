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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16">
        <div className="flex flex-col sm:flex-row justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" passHref>
            <span className='flex items-center cursor-pointer'>
              <img
                src="/assets/riplogo1.png"
                className="h-8 sm:h-16 mr-3" // Adjusting size for mobile
                alt="R1PFITNESS GYM Logo"
              />
              <span className="text-base sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-bl from-amber-700 via-yellow-300 to-yellow-800">
                R1PFITNESS GYM
              </span>
            </span>
          </Link>

          {/* Primary nav */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Links */}
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
              <span className="px-4 py-2 font-bold text-white rounded-full shadow-xl bg-gradient-to-bl from-amber-700 via-yellow-300 to-yellow-800 hover:bg-yellow-300 transition duration-300 cursor-pointer">Book A Tour</span>
            </Link>
          </div>

          {/* Mobile Nav - Consider adding a hamburger menu here for mobile */}
          {/* ... */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
