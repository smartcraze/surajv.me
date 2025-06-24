"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { devEvents } from "@/lib/events";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Events I&apos; ve Attended
      </motion.h1>

      <motion.p
        className="text-zinc-500 mb-10 max-w-xl text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        These are some of the meetups, hackathons, and conferences I&apos; ve joined.
        Raw thoughts, no filter. Click, swipe, feel the vibe.
      </motion.p>

      <div className="space-y-10">
        {devEvents.map((event, idx) => {
          const Icon = event.icon || ExternalLink;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="border rounded-xl p-6 shadow-sm dark:border-zinc-700 bg-white dark:bg-zinc-900 transition duration-300 group hover:shadow-md relative overflow-hidden"
            >
              {/* Animated background particles */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    animate={{
                      y: [-20, -100],
                      x: [0, Math.random() * 40 - 20],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut",
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </motion.div>

              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 mb-2 text-sm relative z-10">
                <Icon className="h-4 w-4 shrink-0" />
                <span>{event.date} • {event.location}</span>
              </div>

              <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition relative z-10">
                {event.name}
              </h2>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 relative z-10">
                {event.description}
              </p>

              {event.images.length > 0 && (
                <div className="relative">
                  <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-1">
                    {event.images.map((img, i) => (
                      <motion.div
                        key={i}
                        className="min-w-[180px] h-[120px] relative rounded-md overflow-hidden border dark:border-zinc-700"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={img}
                          alt={`${event.name} photo ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="absolute right-2 top-2 flex items-center gap-1 bg-white/70 dark:bg-zinc-900/70 backdrop-blur px-2 py-1 rounded-full text-xs text-zinc-500 dark:text-zinc-400"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span>Swipe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
