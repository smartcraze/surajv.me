"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { IconBrandGithub } from "@tabler/icons-react";

function HeroSection() {
  const typedElement = useRef(null);

  useEffect(() => {
    if (typedElement.current) {
      const options = {
        strings: [
          "<b>Web development</b>",
          "<b>Machine Learning</b>",
          "<b>Artificial Intelligence</b>",
          "<b>Data Science</b>",
        ],
        typeSpeed: 50,
        loop: true,
      };

      const typed = new Typed(typedElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="bg-black min-h-40 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center text-center md:text-left mt-32 md:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Hey Coders I&apos;m{" "}
              <span className="text-purple-600"> Suraj Vishwakarma</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-2">
              I am Passionate About
            </p>
            <div className="h-8 w-auto mb-2">
              <span
                id="element"
                className="text-2xl md:text-3xl text-orange-500"
                ref={typedElement}
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-4 md:justify-start items-center">
              <a href="/resume.pdf" target="_blank">
                <Button>Resume</Button>
              </a>
              <Link
                href={"https://github.com/smartcraze"}
                target="_blank"
                className="mx-2"
              >
                <Button>
                  <IconBrandGithub className="h-4 w-4  dark:text-neutral-300 mr-2" />
                  <span className="text-white dark:text-neutral-300 text-sm">
                    GitHub
                  </span>
                </Button>
              </Link>

              <Link href={"https://docs.smartcraze.online/docs/getting-started/introduction"}>
                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                    <span>Docs</span>
                    <svg
                      fill="none"
                      height="16"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end p-4">
            <div className="relative overflow-hidden h-64 w-64 md:h-screen md:w-screen ">
              <Image
                src="/portfoliodp.png"
                alt="Profile Picture"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
