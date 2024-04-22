"use client";
import Link from "next/link";
import courseData from "../data/skills.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface skills {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.Skill.filter((skill: skills) => skill);

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            {" "}
          </h2>
          <p className="mt-2 text-3xl  text-teal-600 leading-8 font-extrabold tracking-tight  sm:text-4xl">
            Skills I know
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="flex flex-wrap justify-center gap-3">
          {featuredCourses.map((skill: skills) => (
            <div>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={skill.image}
                alt="jordans"
                height="100"
                width="100"
                className="object-contain"
              />
              <h2 className="text-base text-indigo-200 font-semibold tracking-wide uppercase">
            {skill.title}
          </h2>
      
              
            
            </BackgroundGradient>
          </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
