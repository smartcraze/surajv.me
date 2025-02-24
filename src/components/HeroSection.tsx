"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { IconBrandGithub } from "@tabler/icons-react";
import { BookCheck } from "lucide-react";

function HeroSection() {
  const typedElement = useRef(null);

  useEffect(() => {
    if (typedElement.current) {
      const options = {
        strings: [
          "<b>Web development</b>",
          "<b>Devops</b>",
          "<b>Machine Learning</b>",
          "<b>Artificial Intelligence</b>",
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
                <Button>
                  <BookCheck className="h-4 w-4  dark:text-neutral-300 mr-2" />
                  Resume
                </Button>
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

              <Link
                href={"https://docs.smartcraze.online"}
                target="_blank"
                className="mx-2"
              >
                <Button>
                  <BookCheck className="h-4 w-4  dark:text-neutral-300 mr-2" />
                  <span className="text-white dark:text-neutral-300 text-sm">
                    Docs/Blog
                  </span>
                </Button>
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
