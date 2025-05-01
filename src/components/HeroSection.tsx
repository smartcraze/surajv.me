"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/moving-border";
import { IconBrandGithub } from "@tabler/icons-react";
import {
  BookCheck,
  ChevronDown,
  Code,
  Server,
  Cpu,
  BrainCircuit,
} from "lucide-react";

const TECH_STACK = [
  { name: "Frontend", icon: <Code className="h-5 w-5" /> },
  { name: "Backend", icon: <Server className="h-5 w-5" /> },
  { name: "DevOps", icon: <Cpu className="h-5 w-5" /> },
  { name: "Cloud", icon: <BrainCircuit className="h-5 w-5" /> },
];

// Typed animation strings
const TYPED_STRINGS = [
  "<b>Frontend Development</b>",
  "<b>Backend Systems</b>",
  "<b>DevOps</b>",
  "<b>Product Building</b>",
];

// Background glow effect - changed to purple
const GLOWING_BG =
  "absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle,rgba(147,51,234,0.2)_0%,rgba(0,0,0,1)_90%)] before:blur-3xl before:opacity-50";

/**
 * TechPill Component - Displays a technology pill with icon
 */
interface Tech {
  name: string;
  icon: JSX.Element;
}

function TechPill({ tech, index }: { tech: Tech; index: number }) {
  return (
    <motion.div
      className="flex items-center space-x-1 bg-gray-800/50 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-700"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
    >
      {tech.icon}
      <span className="text-sm text-gray-300">{tech.name}</span>
    </motion.div>
  );
}

/**
 * ProjectBubble Component - Animated project preview bubble
 */
function ProjectBubble({ index }: { index: number }) {
  return (
    <motion.div
      className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-lg"
      initial={{ scale: 0, x: 0, y: 0 }}
      animate={{
        scale: 1,
        x: Math.cos(((2 * Math.PI) / 3) * index) * 80,
        y: Math.sin(((2 * Math.PI) / 3) * index) * 80,
      }}
      transition={{
        delay: 0.8 + index * 0.2,
        duration: 0.5,
        type: "spring",
      }}
    >
      <div className="w-full h-full bg-gradient-to-br from-purple-700 to-purple-400 opacity-80"></div>
    </motion.div>
  );
}

/**
 * FloatingBubble Component - Background decoration element
 */
function FloatingBubble({ index }: { index: number }) {
  const randomSize = Math.random() * 50 + 20;
  const randomX = `${Math.random() * 100}%`;
  const randomY = `${Math.random() * 100}%`;
  const randomDuration = Math.random() * 30 + 20;

  return (
    <motion.div
      className="absolute opacity-20 rounded-full bg-gradient-to-r from-purple-500 to-purple-300"
      initial={{ x: randomX, y: randomY, scale: Math.random() * 0.5 + 0.5 }}
      animate={{
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        transition: {
          duration: randomDuration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      style={{ width: `${randomSize}px`, height: `${randomSize}px` }}
    />
  );
}

/**
 * ActionButton Component - Navigation button with icon
 */
interface ActionButtonProps {
  href: string;
  icon: JSX.Element;
  text: string;
}

function ActionButton({ href, icon, text }: ActionButtonProps) {
  return (
    <Link href={href} target="_blank" passHref>
      <Button
        borderRadius="1.75rem"
        className="bg-black dark:bg-slate-900 text-white dark:text-slate-200 border-purple-500/50"
      >
        {icon}
        <span className="text-white text-sm">{text}</span>
      </Button>
    </Link>
  );
}

/**
 * ProfileImage Component - Main profile image with animations
 */
function ProfileImage({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.div
      className="flex items-center justify-center order-1 md:order-2 mb-6 md:mb-0"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
        {/* Glowing effect - changed to purple */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full opacity-75 blur-sm animate-pulse"></div>

        {/* Profile image */}
        <div className="relative bg-black rounded-full overflow-hidden border-2 border-purple-500/50 h-full w-full">
          <Image
            src="/profile21.png"
            alt="Profile Picture"
            fill
            sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="rounded-full bg-white/10"
            priority
          />
        </div>

        {/* Project preview bubbles */}
        {[0, 1, 2].map((i) => (
          <ProjectBubble key={i} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

/**
 * ScrollIndicator Component - Animated scroll indicator
 */
function ScrollIndicator({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-purple-400" />
      </motion.div>
    </motion.div>
  );
}

/**
 * HeroContent Component - Main content section (left side)
 */
function HeroContent({
  isVisible,
  typedRef,
}: {
  isVisible: boolean;
  typedRef: React.RefObject<HTMLSpanElement>;
}) {
  return (
    <motion.div
      className="flex flex-col justify-center text-center md:text-left mt-0 md:mt-0 order-2 md:order-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
        Hi, I&apos;m{" "}
        <span className="text-purple-400 animate-bounce">
          Suraj Vishwakarma
        </span>
      </h1>

      <p className="text-base sm:text-lg text-gray-300 mb-4 max-w-md mx-auto md:mx-0">
        I build websites from start to finish. I handle both frontend and
        backend, plus DevOps. I love creating products and learning new
        technologies.
      </p>

      <p className="text-base sm:text-lg md:text-xl text-white mb-2 animate-fade-in">
        I work with
      </p>
      <div className="h-8 w-auto mb-4">
        <span
          id="element"
          className="text-xl sm:text-2xl md:text-3xl text-purple-400"
          ref={typedRef}
        />
      </div>

      {/* Tech stack pills */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
        {TECH_STACK.map((tech, index) => (
          <TechPill key={index} tech={tech} index={index} />
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
        <ActionButton
          href="/resume.pdf"
          icon={<BookCheck className="h-4 w-4 mr-2" />}
          text="Resume"
        />
        <ActionButton
          href="https://github.com/smartcraze"
          icon={<IconBrandGithub className="h-4 w-4 mr-2" />}
          text="GitHub"
        />
        {/* <ActionButton
          href="https://docs.smartcraze.online"
          icon={<BookCheck className="h-4 w-4 mr-2" />}
          text="Docs/Blog"
        />  */}
      </div>
    </motion.div>
  );
}

/**
 * HeroSection Component - Main hero section
 */
export default function HeroSection() {
  const typedRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: TYPED_STRINGS,
        typeSpeed: 50,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] overflow-hidden py-12">
      {/* Navbar space adjustment */}
      <div className="h-16  w-full absolute top-0 left-0">
        <DevOpsFlex />
      </div>

      {/* Background effects */}
      <div className={GLOWING_BG}></div>

      {/* Floating background bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <FloatingBubble key={i} index={i} />
        ))}
      </div>

      {/* Main content container */}
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 relative z-10 pt-16 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left side content */}
          <HeroContent isVisible={isVisible} typedRef={typedRef} />

          {/* Right side - Profile image */}
          <ProfileImage isVisible={isVisible} />
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator isVisible={isVisible} />
    </section>
  );
}

export const DevOpsFlex = () => {
  return (
    <h1 className="text-xl  text-center font-extrabold  animate-pulse">
      Proudly Dockerised 🚀
    </h1>
  );
};
