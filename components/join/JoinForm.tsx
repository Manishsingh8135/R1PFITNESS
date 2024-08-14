"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { countries } from '../../data/countries';
import AnimatedButton from '@/components/buttons/AnimatedButton';

interface FormData {
  name: string;
  email: string;
  country: string;
  reason: string;
}

interface JoinFormProps {
  onSubmit: (data: FormData) => void;
}

const JoinForm: React.FC<JoinFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    country: '',
    reason: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <label htmlFor="name" className="block text-2xl font-bold text-white mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-black/50 text-amber-100 placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xl"
          placeholder="Enter your name"
        />
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <label htmlFor="email" className="block text-2xl font-bold text-white mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-black/50 text-amber-100 placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xl"
          placeholder="Enter your email"
        />
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <label htmlFor="country" className="block text-2xl font-bold text-white mb-2">
          Country
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-black/50 text-amber-100 placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xl"
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.value} value={country.value} className="bg-black text-amber-100 placeholder-amber-200">
              {country.label}
            </option>
          ))}
        </select>
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <label htmlFor="reason" className="block text-2xl font-bold text-white mb-2">
          Why do you want to join?
        </label>
        <textarea
          id="reason"
          name="reason"
          rows={4}
          value={formData.reason}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-black/50 text-amber-100 placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xl"
          placeholder="Tell us your royal ambitions..."
        />
      </motion.div>
      <AnimatedButton />
    </form>
  );
};

export default JoinForm;