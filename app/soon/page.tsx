"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Instagram,
  Youtube,
  Twitter,
  ArrowLeft,
} from "lucide-react";

export default function Soon() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden p-6">
      
      {/* Navbar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-between items-center text-lg font-semibold tracking-wide mb-10"
      >
        <span className="text-gray-300">Suraj Vishwakarma</span>
        <Link
          href="https://github.com/smartcraze"
          target="_blank"
          className="text-gray-300 hover:text-white transition"
        >
          <Github size={22} />
        </Link>
      </motion.div>

      {/* Main content */}
      <div className="flex-grow flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl p-10 text-center shadow-2xl max-w-2xl"
        >
          {/* Title */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
          >
            Coming soon
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-400"
          >
            We’re building something exciting right here.
            This project will be live very soon.
            Thanks for your patience!
          </motion.p>

          {/* Loading Dots */}
          <div className="mt-10 flex justify-center gap-3">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-4 h-4 rounded-full bg-gray-300"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.9, 1.2, 0.9],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Return Home Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-10 border border-gray-500 px-5 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
          >
            <ArrowLeft size={18} />
            Return Home
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-col items-center gap-3 text-gray-500 text-sm mt-10"
      >
        {/* Social Links */}
        <div className="flex gap-5">
          <Link href="/instagram" className="hover:text-white transition">
            <Instagram size={20} />
          </Link>
          <Link href="/github" className="hover:text-white transition">
            <Github size={20} />
          </Link>
          <Link href="/youtube" className="hover:text-white transition">
            <Youtube size={20} />
          </Link>
          <Link href="/x" className="hover:text-white transition">
            <Twitter size={20} />
          </Link>
        </div>

        {/* Copyright */}
        <span>
          © {new Date().getFullYear()} Suraj Vishwakarma — All rights reserved.
        </span>
      </motion.div>
    </div>
  );
}
