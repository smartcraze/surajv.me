import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { BottomGradient } from "./Navbar";
import { IconBrandGithub } from "@tabler/icons-react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

function HeroSection() {
  const words = [
    {
      text: "FullStack",
      className: "text-green-500 dark:text-green-500",
    },
    {
      text: "|",
      className: " text-indigo-800",
    },
    {
      text: "AI ML",
      className: "text-indigo-500 dark:text-indigo-500",
    },
    {
      text: "|",
      className: " text-indigo-800",
    },
    {
      text: "Data Science",
      className: "text-red-500 dark:text-red-500",
    },
  ];
  return (
    <div
      id="home"
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Suraj Vishwakarma
        </h1>
        <h1 className="mt-5 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-amber-300">
          I am Passionate About
        </h1>

        <div className="flex flex-col  text-lg items-center justify-center h-[4rem]  ">
          <TypewriterEffectSmooth words={words} />
        </div>
        <div className="mt-4 flex items-center justify-center">
          <Link href={"/Social"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-800 text-black dark:text-white border-neutral-200 dark:border-slate-800 group/btn relative"
            >
              Smartcraze
            </Button>
            <BottomGradient />
          </Link>
          <LinkPreview
          
          
            url="https://github.com/smartcraze"
            
            className=" mx-2"
          >
            <Button
              borderRadius="1.75rem"
              className="bg-white  dark:bg-slate-800 text-black dark:text-white border-white dark:border-slate-800 group/btn relative "
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                GitHub
              </span>
              <BottomGradient />
            </Button>
          </LinkPreview>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
