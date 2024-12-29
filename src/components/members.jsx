"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { members } from "@/data";

export default function MembersCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(2);
  const containerRef = React.useRef();

  const handlePrevious = () => {
    setActiveIndex((current) => (current > 0 ? current - 1 : current));
  };

  const handleNext = () => {
    setActiveIndex((current) =>
      current < members.length - 1 ? current + 1 : current
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-16">Our Members</h2>

      <div className="relative">
        <div
          ref={containerRef}
          className="relative flex items-center justify-center gap-4 mb-8 overflow-hidden h-32"
        >
          <div
            className="flex items-center gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(${(2 - activeIndex) * 144}px)`, // 144px = image width + gap
            }}
          >
            {members.map((member, index) => {
              // Calculate distance from active index
              const distance = Math.abs(activeIndex - index);

              return (
                <div
                  key={member.id}
                  className={cn(
                    "transition-all duration-300 ease-in-out shrink-0",
                    // Size and opacity based on distance from active item
                    distance === 0
                      ? "w-32 h-32 opacity-100 z-30 scale-100"
                      : distance === 1
                      ? "w-32 h-32 opacity-60 z-20 scale-75"
                      : "w-32 h-32 opacity-30 z-10 scale-50",
                    // Hide elements that are too far from the active index
                    distance > 2 && "opacity-0"
                  )}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          disabled={activeIndex === 0}
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4",
            "p-2 rounded-full bg-background border bg-white",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "z-50" // Ensure buttons are above the gradient overlays
          )}
          aria-label="Previous member"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          disabled={activeIndex === members.length - 1}
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4",
            "p-2 rounded-full bg-background border bg-white",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "z-50" // Ensure buttons are above the gradient overlays
          )}
          aria-label="Next member"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Member Info */}
        <div className="text-center mt-6">
          <h3 className="text-2xl font-semibold mb-2 transition-all duration-300">
            {members[activeIndex].name}
          </h3>
          <p className="text-muted-foreground transition-all duration-300">
            {members[activeIndex].title}
          </p>
        </div>
      </div>
    </div>
  );
}
