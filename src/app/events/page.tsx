"use client";
import { motion } from "framer-motion";
import { UpcomingEvents as events } from "@/data";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 className="text-4xl font-bold mb-8 text-blue-400" {...fadeIn}>
        Upcoming Events
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2">
        {events.map((event, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            {...fadeIn}
          >
            <h2 className="text-2xl font-bold mb-2 text-blue-400">
              {event.title}
            </h2>
            <p className="text-gray-400 mb-2">{event.date}</p>
            <p>{event.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
