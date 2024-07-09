"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { motion } from 'framer-motion';

// Footer Data
const footerData = {
  logo: "/assets/riplogo1.png",
  tagline: "Reborn 1n Paradise - Where Fitness Meets Community",
  resources: [
    { label: "R1P Fitness", href: "https://www.r1pohana.net/" },
    { label: "R1P Fitness Shop", href: "https://www.r1pfitness.com/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
  contact: {
    email: "r1pfitnesspr@gmail.com",
    phone: "+1 (808) 208-1066",
  },
  socialMedia: [
    { platform: "Facebook", icon: FaFacebook, href: "https://www.facebook.com/R1PFITNESS/" },
    { platform: "Twitter", icon: FaTwitter, href: "#" },
    { platform: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/r1pfitness/?hl=en" },
    { platform: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/channel/UCOyBqar6fShlIJ6oRLGuUag" },
  ],
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-maincolor-dark to-black text-maincolor-light min-h-screen flex flex-col">
      <div className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14 py-16">
        <LogoSection />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <FooterSection title="Resources" items={footerData.resources} />
          <FooterSection title="Legal" items={footerData.legal} />
          <ContactSection />
          <NewsletterSection />
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

const LogoSection: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="flex flex-col items-center mb-12"
  >
    <Image src={footerData.logo} width={120} height={120} alt="R1PFITNESS GYM Logo" />
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-maincolor mb-4 text-center">R1PFITNESS GYM</h2>
    <p className="text-xl md:text-2xl text-center max-w-2xl">{footerData.tagline}</p>
  </motion.div>
);

const FooterSection: React.FC<{ title: string; items: { label: string; href: string }[] }> = ({ title, items }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="flex flex-col items-center md:items-start"
  >
    <h3 className="text-2xl md:text-3xl font-bold text-maincolor mb-4">{title}</h3>
    <ul className="space-y-2 text-center md:text-left">
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.href} className="text-lg hover:text-maincolor transition-colors duration-300">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ContactSection: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="flex flex-col items-center md:items-start"
  >
    <h3 className="text-2xl md:text-3xl font-bold text-maincolor mb-4">Contact Us</h3>
    <p className="flex items-center mb-2 text-lg">
      <MdEmail className="mr-2 text-maincolor" /> {footerData.contact.email}
    </p>
    <p className="flex items-center text-lg">
      <MdPhone className="mr-2 text-maincolor" /> {footerData.contact.phone}
    </p>
  </motion.div>
);

const NewsletterSection: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="flex flex-col items-center md:items-start"
  >
    <h3 className="text-2xl md:text-3xl font-bold text-maincolor mb-4">Join Our Community</h3>
    <form className="w-full max-w-md">
      <div className="relative">
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full py-3 px-4 bg-black bg-opacity-50 text-maincolor-light rounded-full border-2 border-maincolor focus:outline-none focus:border-maincolor-light"
        />
        <button 
          type="submit" 
          className="absolute right-2 top-2 bg-maincolor text-black font-bold py-2 px-4 rounded-full hover:bg-maincolor-light transition-colors duration-300"
        >
          Subscribe
        </button>
      </div>
    </form>
  </motion.div>
);

const FooterBottom: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="border-t border-maincolor-light py-8 mt-auto"
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm mb-4 md:mb-0">© 2024 R1P Fitness™. All Rights Reserved.</p>
      <div className="flex space-x-6">
        {footerData.socialMedia.map((platform, index) => (
          <SocialIcon key={index} {...platform} />
        ))}
      </div>
    </div>
  </motion.div>
);

const SocialIcon: React.FC<{ platform: string; icon: React.ElementType; href: string }> = ({ platform, icon: Icon, href }) => (
  <Link 
    href={href}
    className="text-maincolor-light hover:text-maincolor transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-6 h-6 md:w-8 md:h-8" aria-label={platform} />
  </Link>
);

export default Footer;
