import {
  CalendarDays,
  MapPin,
} from "lucide-react";
import type { ElementType } from "react";

export interface DevEvent {
  name: string;
  date: string;
  location: string;
  description: string;
  images: string[];
  icon?: ElementType;
}

export const devEvents: DevEvent[] = [
  {
    name: "Warpspeed: Agentic AI Hackathon | Lightspeed India",
    date: "June 2025",
    location: "Bangalore, India",
    description: `Theme: Agentic AI, in collaboration with Lightspeed India, AWS, Google Cloud, and Sarvam AI, Bhindi AI.
    We built a web application that helps users explore and learn through various non-traditional learning methods, all powered by AI agents.
    Along with my teammate Harsha (@webdevharsha), we developed a fully functional platform that reimagines how people learn — moving beyond textbooks and lectures into interactive, adaptive, and engaging learning experiences.`,
    images: [
      "/warpspeed/1.jpg",
      "/warpspeed/2.jpg",
      "/warpspeed/3.jpg",
      "/warpspeed/4.jpg",
      "/warpspeed/5.jpg",
    ],
    icon: MapPin,
  },
  {
    name: "Smart India Hackathon 2024 (Finalist)",
    date: "Dec 2024",
    location: "LPU, Jalandhar",
    description: `Participated in the Smart India Hackathon 2024 — a national-level innovation competition organized to solve real-world challenges.
    Our team tackled a problem statement from the **Delhi Government**, focused on developing a predictive solution using machine learning models on diverse datasets.
    I handled the complete **fullstack development** — integrating the machine learning models with a scalable backend and building the frontend interface for users.
    We built an intelligent platform that provides accurate predictions based on dynamically changing datasets.
    We were a team of 5, where I was the only **2nd-year student**, collaborating alongside 3rd and 4th-year seniors. It was a solid hands-on experience blending AI + web dev at scale.`,
    images: ['/sih/1.png'],
    icon: CalendarDays,
  },
];
