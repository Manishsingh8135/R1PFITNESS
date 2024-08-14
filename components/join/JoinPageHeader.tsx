"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

const JoinPageHeader: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Crown className="mx-auto text-yellow-400" size={72} />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200"
      >
        Join Our Royal Ohana
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-2 text-2xl text-amber-100"
      >
        Become part of our exclusive fitness empire
      </motion.p>
    </div>
  );
};

export default JoinPageHeader;
