"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Interact Club
        </Link>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/members">Members</NavLink>
          <NavLink href="/join">Join Us</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 space-y-2"
        >
          <NavLink href="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink href="/about" onClick={() => setIsOpen(false)}>
            About Us
          </NavLink>
          <NavLink href="/events" onClick={() => setIsOpen(false)}>
            Events
          </NavLink>
          <NavLink href="/members" onClick={() => setIsOpen(false)}>
            Members
          </NavLink>
          <NavLink href="/join" onClick={() => setIsOpen(false)}>
            Join Us
          </NavLink>
          <NavLink href="/contact" onClick={() => setIsOpen(false)}>
            Contact Us
          </NavLink>
        </motion.nav>
      )}
    </header>
  );
};

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className="block py-2 px-4 hover:bg-blue-600 rounded transition duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
