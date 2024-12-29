"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Links } from "@/data";

export function Nav() {
  const [openMail, setOpenMail] = useState(false);

  // useEffect to handle the window.open logic
  useEffect(() => {
    if (openMail) {
      window.open("mailto:interactdavofficial@gmail.com");
      setOpenMail(false); // Reset after opening
    }
  }, [openMail]);

  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Image
            src="/logo-crop.png"
            width={130 / 2}
            height={130 / 2}
            alt="Interact Logo"
          />
          Interact
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {Links.links.map((e) => (
            <Link
              key={e.name}
              href={e.link}
              className="text-white hover:text-gray-300 no-underline"
            >
              {e.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href={Links.social.twitter}
            className="text-white hover:text-gray-300"
          >
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link
            href={Links.social.facebook}
            className="text-white hover:text-gray-300"
          >
            <FaFacebook className="w-5 h-5" />
          </Link>
          <Link
            href={Links.social.instagram}
            className="text-white hover:text-gray-300"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link
            href={Links.social.linkedin}
            className="text-white hover:text-gray-300"
          >
            <FaLinkedin className="w-5 h-5" />
          </Link>
        </div>

        {/* CTA Button */}
        <button
          variant="outline"
          className="bg-white text-black hover:bg-gray-100 rounded-xl px-3 py-2"
          onClick={() => setOpenMail(true)} // Update state instead of directly opening the email
        >
          Join Us Today! →
        </button>
      </div>
    </nav>
  );
}
