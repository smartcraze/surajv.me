import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ProjectCard } from "@/components/Newprojectcards";
import { Project } from "@/components/Projects";
import Skill from "@/components/Skills";
import SocialHandle from "@/components/SocialHandle";
// import projectscard from "@/ProjectCards/projectscard";
import GitHubCalendar from 'react-github-calendar';


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
     <div className="flex flex-col justify-center m-2 items-center">
        <h2 className="text-center text-4xl  m-2 p-2">Proof of works </h2>
        <GitHubCalendar username="smartcraze" />
      </div>
      <Project/>
      <Skill/>
      <SocialHandle/>
      <Footer />
    </main>
  );
}
