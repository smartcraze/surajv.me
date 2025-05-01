"use client";
import courseData from "../data/skills.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { FaPython, FaJava, FaReact, FaGithub, FaGitAlt, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiCplusplus, SiC, SiHono, SiJavascript, SiMongodb, SiNextdotjs, SiPostgresql } from "react-icons/si";

interface skills {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
}

function Skill() {
  const featuredCourses = courseData.Skill.Languages.concat(
    courseData.Skill.Frontend,
    courseData.Skill.Backend,
    courseData.Skill.DevOps
  );

  const iconMap: { [key: string]: JSX.Element } = {
    FaPython: <FaPython size={50} className="text-[#3776AB]" />,
    FaJava: <FaJava size={50} className="text-[#007396]" />,
    FaGithub: <FaGithub size={50} className="text-white" />,
    FaGitAlt: <FaGitAlt size={50} className="text-[#F05032]" />,
    FaReact: <FaReact size={50} className="text-[#61DAFB]" />,
    FaNodeJs: <FaNodeJs size={50} className="text-[#339933]" />,
    FaDocker: <FaDocker size={50} className="text-[#2496ED]" />,
    FaAws: <FaAws size={50} className="text-[#FF9900]" />,
    SiCplusplus: <SiCplusplus size={50} className="text-[#00599C]" />,
    SiC: <SiC size={50} className="text-[#A8B9CC]" />,
    SiJavascript: <SiJavascript size={50} className="text-[#F7DF1E]" />,
    SiMongodb: <SiMongodb size={50} className="text-[#47A248]" />,
    SiNextdotjs: <SiNextdotjs size={50} className="text-white" />,
    SiHono: <SiHono size={50} className="text-[#ff6b81]" />,
    SiPostgresql: <SiPostgresql size={50} className="text-[#336791]" />,
  };

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <p id="skill" className="mt-2 text-3xl text-teal-600 leading-8 font-extrabold tracking-tight sm:text-4xl">
            Skills I know
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredCourses.map((skill: skills) => (
            <div key={skill.id} className="hover:transform hover:scale-105 transition-transform duration-300">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-slate-950 dark:bg-zinc-900 hover:will-change-transform flex flex-col items-center justify-center text-center w-40 h-40">
                <div className="mb-4 flex items-center justify-center">
                  {iconMap[skill.icon]}
                </div>
                <h2 className="text-base text-indigo-200 font-semibold tracking-wide uppercase">
                  {skill.title}
                </h2>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
