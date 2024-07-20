"use client";
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

function Skill() {
  const featuredCourses = courseData.Skill.filter((skill: skills) => skill);

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            {" "}
          </h2>
          <p id="skill" className="mt-2 text-3xl  text-teal-600 leading-8 font-extrabold tracking-tight  sm:text-4xl">
            Skills I know
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div    className="flex flex-wrap justify-center  gap-3">
          {featuredCourses.map((skill: skills) => (
            <div   className="hover:transform hover:scale-105 transition-transform duration-300" key={skill.id}>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 hover:will-change-transform">
                <Image
                  
                  src={skill.image}
                  alt="{skill.slug}"
                  height="100"
                  width="100"
                  className="object-contain filter  text-center"
                />
                <h2 className="text-base text-center text-indigo-200 font-semibold tracking-wide uppercase">
                  {skill.title}
                </h2>
              </BackgroundGradient>
            </div>
          ))}
          <div className="hover:transform hover:scale-105 transition-transform duration-300" >
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 hover:will-change-transform">
                <Image
                  style={{ filter: 'invert(1)' }}
                  src={"/skillsImage/nodejs.png"}
                  alt="{skill.slug}"
                  height="100"
                  width="100"
                  className="object-contain filter  text-center"
                />
                <h2 className="text-base text-center text-indigo-200 font-semibold tracking-wide uppercase">
                Node js
                </h2>
              </BackgroundGradient>
            </div>
          <div className="hover:transform hover:scale-105 transition-transform duration-300" >
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 hover:will-change-transform">
                <Image
                  style={{ filter: 'invert(1)' }}
                  src={"/skillsImage/c.png"}
                  alt="{skill.slug}"
                  height="100"
                  width="100"
                  className="object-contain filter  text-center"
                />
                <h2 className="text-base text-center text-indigo-200 font-semibold tracking-wide uppercase">
                C
                </h2>
              </BackgroundGradient>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
