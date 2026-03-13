import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  BadgeCheck,
  GraduationCap,
  ExternalLink,
  CalendarDays,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Highlights",
  description:
    "Achievements, certificates, and education highlights of Suraj Vishwakarma.",
};

const achievements = [
  {
    title: "SIH 2025 Finalist",
    date: "Jan 2025",
    note: "Finalist among 2000+ participants nationwide.",
    image: "/sih/1.png",
  },
  {
    title: "Top-20 at WarpSpeed",
    date: "Dec 2025",
    note: "Top-20 out of 180+ hackathon teams.",
    image: "/warpspeed/1.jpg",
  },
];

const certificates = [
  {
    title: "SIH Certificate",
    issuer: "Smart India Hackathon",
    href: "https://drive.google.com/file/d/197zaRGtLKGKxWQ02g__DjgyAALDMArxW/view?usp=sharing",
  },
  {
    title: "Complete Generative AI with LangChain",
    issuer: "Udemy",
    href: "https://drive.google.com/file/d/11McI6YFoegI4NvrykUTHtNCEQkL_lH0Z/view?usp=sharing",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "100xDevs",
    href: "https://drive.google.com/file/d/1UO053gYexkAYvziVRN4rrU8jVTpMBMnC/view?usp=sharing",
  },
];

const education = [
  {
    name: "Lovely Professional University",
    detail: "B.Tech CSE, CGPA 7.3",
    location: "Phagwara, Punjab",
    duration: "Aug 2023 - Present",
  },
  {
    name: "Narayana PU College",
    detail: "Intermediate, 79%",
    location: "Vidyaranyapura, Bangalore",
    duration: "Apr 2021 - Mar 2023",
  },
  {
    name: "Narayana E-Techno School",
    detail: "Matriculation, 88%",
    location: "Yelahanka, Bangalore",
    duration: "Apr 2020 - Mar 2021",
  },
];

function SectionHeading({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon aria-hidden="true" className="w-5 h-5 text-zinc-500" />
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
    </div>
  );
}

export default function HighlightsPage() {
  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Highlights
        </h1>

        <div className="space-y-3">
          <SectionHeading title="Achievements" icon={Trophy} />
          <div className="grid sm:grid-cols-2 gap-3">
            {achievements.map((item) => (
              <article
                key={item.title}
                className="w-full border border-zinc-600 rounded-md p-2 text-zinc-900 dark:text-zinc-100 hover:bg-linear-to-r hover:from-zinc-100 hover:to-indigo-50 dark:hover:from-zinc-800 dark:hover:to-indigo-900/30 transition-[transform,box-shadow,background-color] duration-200 ease-in-out hover:shadow-md hover:scale-[1.01] hover:-translate-y-0.5"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={520}
                  height={300}
                  className="w-full h-36 object-cover rounded-md border border-zinc-700/40"
                />
                <div className="pt-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">{item.date}</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <SectionHeading title="Certificates" icon={BadgeCheck} />
          <div className="space-y-3">
            {certificates.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-zinc-600 rounded-md p-3 flex items-center gap-2 text-zinc-900 dark:text-zinc-100 hover:bg-linear-to-r hover:from-zinc-100 hover:to-indigo-50 dark:hover:from-zinc-800 dark:hover:to-indigo-900/30 transition-[transform,box-shadow,background-color,color] duration-200 ease-in-out hover:shadow-md hover:scale-[1.01] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <BadgeCheck aria-hidden="true" className="w-4 h-4 text-zinc-400" />
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base truncate">{item.title}</p>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">{item.issuer}</p>
                </div>
                <ExternalLink aria-hidden="true" className="w-4 h-4 ml-auto text-zinc-400" />
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <SectionHeading title="Education" icon={GraduationCap} />
          <div className="space-y-3">
            {education.map((item) => (
              <article
                key={`${item.name}-${item.duration}`}
                className="w-full border border-zinc-600 rounded-md p-3 text-zinc-900 dark:text-zinc-100 hover:bg-linear-to-r hover:from-zinc-100 hover:to-indigo-50 dark:hover:from-zinc-800 dark:hover:to-indigo-900/30 transition-[transform,box-shadow,background-color] duration-200 ease-in-out hover:shadow-md hover:scale-[1.01] hover:-translate-y-0.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-sm sm:text-base">{item.name}</h3>
                  <span className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                    <CalendarDays aria-hidden="true" className="w-3.5 h-3.5" />
                    {item.duration}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{item.detail}</p>
                <p className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  <MapPin aria-hidden="true" className="w-3.5 h-3.5" />
                  {item.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}