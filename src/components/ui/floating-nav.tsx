"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Icons for the burger menu

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/members", label: "Members" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
];

export function FloatingNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 z-50 w-full flex justify-end pr-4"
    >
      {/* Burger Menu Icon (visible on mobile) */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:gap-2 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 absolute top-14 right-4 lg:static lg:block`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              pathname === item.href
                ? "bg-gradient-to-r from-teal-400 to-blue-400 text-white"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setIsOpen(false)} // Close the menu on link click
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
