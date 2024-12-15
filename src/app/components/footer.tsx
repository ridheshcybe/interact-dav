import Link from "next/link";
import { navItems } from "@/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-800 bg-black px-4 py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Link
            href="https://github.com/yourusername"
            className="text-[#40E0D0] hover:text-[#40E0D0]/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by Ridhesh w.
          </Link>
          <p className="text-sm text-gray-400">
            © {currentYear} Interact Club DAV & Ridhesh w. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm text-gray-400 hover:text-[#40E0D0] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
