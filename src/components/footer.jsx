import { Links } from "@/data";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <div className="bg-black px-5 py-5 flex  flex-col text-white items-center text-center justify-center">
      <h2>Connect with Us</h2>
      <p>
        Email =&gt;
        <br />
        interactdavofficial@gmail.com
      </p>
      <div className="flex items-center space-x-4">
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
    </div>
  );
}
