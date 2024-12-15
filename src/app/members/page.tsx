"use client";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const members = [
  {
    id: 1,
    name: "Jane Doe",
    role: "President",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Vice President",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Brown",
    role: "Secretary",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Michael Johnson",
    role: "Treasurer",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function Members() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 className="text-4xl font-bold mb-8 text-blue-400" {...fadeIn}>
        Our Members
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <motion.div
            key={member.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            {...fadeIn}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{member.name}</h2>
            <p className="text-blue-400">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
