"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingNav() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            pathname === item.href
              ? "bg-gradient-to-r from-teal-400 to-blue-400 text-white"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 z-50 w-full flex justify-end pr-4"
    >
      {/* Burger Menu Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white lg:hidden"
      >
        {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
      </button>

      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="hidden lg:flex lg:items-center lg:gap-2 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
          <NavLinks />
        </div>
      )}

      {/* Mobile Side Popup */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md border-l border-white/10 flex flex-col items-start p-4 pt-16"
          >
            <NavLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
