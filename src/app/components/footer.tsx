import Link from "next/link";
import { navItems } from "@/data";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const iconComponents = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-lg shadow-lg mt-8">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-row-3 xl:gap-8">
          <div className="grid grid-row-2 gap-8 xl:col-span-2">
            <ul className="mt-4 space-y-4">
              {navItems.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="text-base text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; Interact club & Ridhesh w.
          </p>
        </div>
      </div>
    </footer>
  );
}
