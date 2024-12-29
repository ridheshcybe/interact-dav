"use client";

import Image from "next/image";
import { useState } from "react";

export default function ClubSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Join Our Interact Club of Dav School Community Today!
              </h1>
              <p className="text-lg text-gray-600">
                Become a part of something bigger something stronger. Engage in
                exciting activities, meet new friends, and develop your skills
                with us. Our club welcomes all students eager to learn,
                collaborate, and grow.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Sign In With Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full max-w-md text-base"
                />
              </div>
              <button
                type="submit"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-semibold"
              >
                Get Started Now!
              </button>
            </form>
          </div>

          {/* Right Column */}
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/candidate.svg"
              width={120}
              height={120}
              alt="Students engaging in club activities"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
