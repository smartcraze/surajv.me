// components/ActionButtons.tsx
import React from "react";
import Link from "next/link";
import {
  Calendar,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/smartcraze",
    icon: Github,
    title: "GitHub",
    colorClass: "hover:text-black dark:hover:text-white",
  },
  {
    href: "mailto:dev.surajv@gmail.com",
    icon: Mail,
    title: "Email",
    colorClass: "hover:text-black dark:hover:text-white",
  },
  {
    href: "https://www.instagram.com/surajv354",
    icon: Instagram,
    title: "Instagram",
    colorClass: "hover:text-pink-500",
  },
  {
    href: "https://www.linkedin.com/in/surajv354",
    icon: Linkedin,
    title: "LinkedIn",
    colorClass: "hover:text-blue-500",
  },
  {
    href: "https://x.com/surajv354",
    icon: Twitter,
    title: "X (Twitter)",
    colorClass: "hover:text-blue-400",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
      {socialLinks.map(({ href, icon: Icon, title, colorClass }) => (
        <Link
          key={title}
          href={href}
          title={title}
          className={`transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 ${colorClass}`}
        >
          <Icon size={20} />
        </Link>
      ))}
    </div>
  );
}

export function ActionButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-4">
      <Link
        href="/meet"
        className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all px-4 py-2 shrink-0 [&_svg]:pointer-events-none [&_svg]:shrink-0"
      >
        <Calendar size={18} />
        Book a Meeting
      </Link>

      <SocialLinks />
    </div>
  );
}
