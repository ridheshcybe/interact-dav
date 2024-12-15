"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { UpcomingEvents, cards } from "@/data";
import { GradientText } from "@/components/ui/gradient-text";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-black bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, transparent 20%, black)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, transparent 20%, black)",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-6xl font-bold mb-6">
            Welcome to{" "}
            <GradientText className="flex items-center justify-center">
              <Image
                src="/logo-only.png"
                width={45}
                height={45}
                alt="Interact Club"
                loading="lazy"
              />
              Interact Club
            </GradientText>
            <small>(Dav school)</small>
          </h1>
          <div className="text-xl text-gray-400 mb-8">
            Empowering students to lead, serve, and create positive change
            <br />
            <div className="flex justify-center items-center">
              By the &nbsp;
              <Link href="https://www.rotary.org/en">
                <Image
                  src="/rotary.svg"
                  alt="Rotary"
                  loading="lazy"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </div>
          <Link
            href="/join"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Join Now
          </Link>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((e, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.01 }}
              key={i}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4">{e.title}</h3>
              <p className="text-gray-400">{e.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events Preview */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            <GradientText>Upcoming Events</GradientText>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UpcomingEvents.map((e, i) => (
              <div key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.01 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2">{e.title}</h3>
                  <p className="text-blue-400 mb-4">{e.date}</p>
                  <p className="text-gray-400">{e.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to <GradientText>Make a Difference?</GradientText>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join Interact Club today and start your journey of service and
            leadership
          </p>
          <Link
            href="/join"
            className="inline-block px-8 py-4 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            Apply Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
