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
    <div >
      <SocialLinks />
    </div>
  );
}
