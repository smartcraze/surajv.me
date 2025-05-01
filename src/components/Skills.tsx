"use client";
import courseData from "../data/skills.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { FaPython, FaJava, FaReact, FaCss3Alt, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiCplusplus, SiC, SiJavascript, SiMongodb, SiNextdotjs } from "react-icons/si";

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
    FaPython: <FaPython size={50} className="text-yellow-500" />,
    FaJava: <FaJava size={50} className="text-orange-600" />,
    FaReact: <FaReact size={50} className="text-blue-500" />,
    FaNodeJs: <FaNodeJs size={50} className="text-green-600" />,
    FaDocker: <FaDocker size={50} className="text-blue-700" />,
    FaAws: <FaAws size={50} className="text-orange-400" />,
    SiCplusplus: <SiCplusplus size={50} className="text-blue-400" />,
    SiC: <SiC size={50} className="text-white" />,
    SiJavascript: <SiJavascript size={50} className="text-yellow-400" />,
    SiMongodb: <SiMongodb size={50} className="text-green-500" />,
    SiNextdotjs: <SiNextdotjs size={50} className="text-white" />
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
        <div className="flex flex-wrap justify-center gap-6">
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
