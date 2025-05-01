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
    FaPython: <FaPython size={40} className="text-[#3776AB]" />,
    FaJava: <FaJava size={40} className="text-[#007396]" />,
    FaGithub: <FaGithub size={40} className="text-white" />,
    FaGitAlt: <FaGitAlt size={40} className="text-[#F05032]" />,
    FaReact: <FaReact size={40} className="text-[#61DAFB]" />,
    FaNodeJs: <FaNodeJs size={40} className="text-[#339933]" />,
    FaDocker: <FaDocker size={40} className="text-[#2496ED]" />,
    FaAws: <FaAws size={40} className="text-[#FF9900]" />,
    SiCplusplus: <SiCplusplus size={40} className="text-[#00599C]" />,
    SiC: <SiC size={40} className="text-[#A8B9CC]" />,
    SiJavascript: <SiJavascript size={40} className="text-[#F7DF1E]" />,
    SiMongodb: <SiMongodb size={40} className="text-[#47A248]" />,
    SiNextdotjs: <SiNextdotjs size={40} className="text-white" />,
    SiHono: <SiHono size={40} className="text-[#ff6b81]" />,
    SiPostgresql: <SiPostgresql size={40} className="text-[#336791]" />,
  };

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <p id="skill" className="mt-2 text-3xl text-teal-600 leading-8 font-extrabold tracking-tight sm:text-4xl">
          Skills I know
        </p>
      </div>

      <div className="mt-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {featuredCourses.map((skill: skills) => (
            <BackgroundGradient
              key={skill.id}
              className="rounded-[22px] w-[140px] h-[160px] p-4 bg-slate-950 dark:bg-zinc-900  flex flex-col items-center justify-center text-center hover"
            >
              <div className="flex items-center justify-center h-[60px] hover:scale-110 transition-transform">
                {iconMap[skill.icon]}
              </div>
              <h2 className="text-sm text-indigo-200 font-semibold tracking-wide uppercase">
                {skill.title}
              </h2>
            </BackgroundGradient>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
