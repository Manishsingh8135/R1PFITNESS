import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface PastEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  images: string[];
  memories: string;
}

const pastEvents: PastEvent[] = [
  {
    id: 1,
    title: "Summer Fitness Challenge 2023",
    date: "July 15, 2023",
    description: "A month-long challenge that pushed our members to new heights.",
    images: ["/assets/events/summer2023_1.jpg", "/assets/events/summer2023_2.jpg"],
    memories: "Record-breaking participation with over 200 members completing the challenge."
  },
  // Add more past events here
];

export const PastEvents: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<PastEvent | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastEvents.map((event) => (
          <motion.div
            key={event.id}
            className="bg-maincolor-dark bg-opacity-50 rounded-lg p-6 cursor-pointer hover:bg-maincolor-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedEvent(event)}
          >
            <h3 className="text-2xl font-bold text-maincolor-light mb-2">{event.title}</h3>
            <p className="text-maincolor-light">{event.date}</p>
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
              className="bg-maincolor-dark rounded-lg p-8 max-w-2xl w-full"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <h2 className="text-3xl font-bold text-maincolor-light mb-4">{selectedEvent.title}</h2>
              <p className="text-maincolor mb-4">{selectedEvent.date}</p>
              <p className="text-maincolor-light mb-6">{selectedEvent.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {selectedEvent.images.map((img, index) => (
                  <Image key={index} src={img} alt={`Event ${index + 1}`} width={300} height={200} className="rounded-lg w-full h-40 object-cover" />
                ))}
              </div>
              <p className="text-maincolor italic">{selectedEvent.memories}</p>
              <button
                className="mt-6 bg-maincolor text-black px-4 py-2 rounded-full hover:bg-maincolor-light transition-colors duration-300"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};