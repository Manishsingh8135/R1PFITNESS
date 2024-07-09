import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FutureEvent {
  id: number;
  title: string;
  date: string;
  description: string;
}

const futureEvents: FutureEvent[] = [
  {
    id: 1,
    title: "Winter Wellness Workshop",
    date: "December 10, 2024",
    description: "Learn how to stay fit and healthy during the winter months.",
  },
  // Add more future events here
];

export const FutureEvents: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<FutureEvent | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    if (selectedEvent) {
      console.log('Form submitted for event:', selectedEvent.title);
    }
    setSelectedEvent(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {futureEvents.map((event) => (
          <motion.div
            key={event.id}
            className="bg-maincolor-dark bg-opacity-50 rounded-lg p-6 cursor-pointer hover:bg-maincolor-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedEvent(event)}
          >
            <h3 className="text-2xl font-bold text-maincolor-light mb-2">{event.title}</h3>
            <p className="text-maincolor">{event.date}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-maincolor-dark rounded-lg p-8 max-w-md w-full"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <h2 className="text-3xl font-bold text-maincolor-light mb-4">{selectedEvent.title}</h2>
              <p className="text-maincolor mb-4">{selectedEvent.date}</p>
              <p className="text-maincolor-light mb-6">{selectedEvent.description}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 rounded bg-maincolor-medium text-maincolor-light placeholder-maincolor"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 rounded bg-maincolor-medium text-maincolor-light placeholder-maincolor"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-maincolor text-black px-4 py-2 rounded-full hover:bg-maincolor-light transition-colors duration-300"
                >
                  Sign Up for Event
                </button>
              </form>
              <button
                className="mt-4 w-full bg-maincolor-medium text-maincolor px-4 py-2 rounded-full hover:bg-maincolor transition-colors duration-300"
                onClick={() => setSelectedEvent(null)}
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};