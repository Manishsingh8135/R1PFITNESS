import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaCalendar, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { ParticipationForm } from './ParticipationForm';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  capacity: number;
}

interface EventTimelineProps {
  eventType: 'past' | 'future';
}

const pastEvents = [
    {
      id: "1",
      title: "Summer Fitness Challenge",
      date: "June 15, 2023",
      time: "6:00 AM - 8:00 PM",
      location: "R1P Fitness Main Gym",
      description: "A 30-day challenge that pushed our members to new heights. Participants saw incredible transformations and formed lasting bonds.",
      image: "/assets/gym/ripgym1.jpg",
      capacity: 100
    },
    {
      id: "2",
      title: "Yoga Under the Stars",
      date: "August 21, 2023",
      time: "8:00 PM - 10:00 PM",
      location: "Central Park",
      description: "An evening of relaxation and mindfulness under the night sky. Members experienced the calming effects of yoga in a unique outdoor setting.",
      image: "/assets/gym/ripgym2.jpg",
      capacity: 50
    },
    
  ];

  const futureEvents = [
    {
      id: "1",
      title: "Spring Revival Challenge",
      date: "March 1, 2025",
      time: "5:00 AM - 9:00 PM",
      location: "R1P Fitness Main Gym",
      description: "Shake off the winter blues with our 21-day Spring Revival Challenge. Daily workouts, nutrition guidance, and motivational seminars to kickstart your fitness journey.",
      image: "/assets/merchs/merchgw.jpg",
      capacity: 150
    },
    {
      id: "2",
      title: "Outdoor Adventure Bootcamp",
      date: "May 15, 2025",
      time: "8:00 AM - 12:00 PM",
      location: "Mountain Trail Park",
      description: "Take your workout to the great outdoors! This bootcamp combines hiking, bodyweight exercises, and team challenges in a beautiful natural setting.",
      image: "/assets/merchs/merchgw2.jpg",
      capacity: 40
    },
    {
      id: "3",
      title: "Family Fitness Day",
      date: "July 4, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "R1P Fitness and Community Park",
      description: "A day of fun and fitness for the whole family! Enjoy group classes, kids' activities, healthy food vendors, and more.",
      image: "/assets/merchs/merchm.jpg",
      capacity: 300
    },
    
  ];

export const EventTimeline: React.FC<EventTimelineProps> = ({ eventType }) => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const [showParticipationForm, setShowParticipationForm] = useState<string | null>(null);

  const events = eventType === 'past' ? pastEvents : futureEvents;

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-maincolor"></div>

      {events.map((event, index) => (
        <motion.div
          key={event.id}
          className={`mb-16 flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-5/12">
            <motion.div
              className="bg-maincolor-dark p-6 rounded-lg shadow-xl cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.05 }}
              onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
            >
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <div className="flex items-center mb-2">
                <FaCalendar className="mr-2" />
                <p className="text-xl">{event.date}</p>
              </div>
              <AnimatePresence>
                {expandedEvent === event.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-2">
                      <FaClock className="mr-2" />
                      <p className="text-lg">{event.time}</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaMapMarkerAlt className="mr-2" />
                      <p className="text-lg">{event.location}</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <FaUsers className="mr-2" />
                      <p className="text-lg">Capacity: {event.capacity}</p>
                    </div>
                    <p className="text-lg mb-4">{event.description}</p>
                    {eventType === 'future' && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-maincolor text-black font-bold py-2 px-4 rounded"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowParticipationForm(event.id);
                        }}
                      >
                        Participate
                      </motion.button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          <div className="w-2/12 flex justify-center">
            <div className="w-4 h-4 bg-maincolor rounded-full mt-8"></div>
          </div>
          <div className="w-5/12"></div>
        </motion.div>
      ))}

      <AnimatePresence>
        {showParticipationForm && (
          <ParticipationForm
            event={futureEvents.find(e => e.id === showParticipationForm)!}
            onClose={() => setShowParticipationForm(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};