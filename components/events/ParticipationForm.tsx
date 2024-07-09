import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface ParticipationFormProps {
  event: {
    id: string;
    title: string;
    date: string;
  };
  onClose: () => void;
}

export const ParticipationForm: React.FC<ParticipationFormProps> = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { event: event.id, ...formData });
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    alert('Participation registered successfully!');
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-maincolor-dark to-gray-900 p-8 rounded-lg shadow-2xl max-w-md w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-maincolor">Participate in {event.title}</h2>
          <button onClick={onClose} className="text-maincolor-light hover:text-maincolor transition-colors">
            <FaTimes size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-xl mb-2 text-maincolor-light">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-maincolor-light text-black text-lg"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xl mb-2 text-maincolor-light">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-maincolor-light text-black text-lg"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xl mb-2 text-maincolor-light">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-maincolor-light text-black text-lg"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-maincolor text-black font-bold py-3 px-6 rounded-full text-xl mt-6 transition-colors hover:bg-maincolor-light"
          >
            Register
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};