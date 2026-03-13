import React from "react";
import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import NewsletterSubscribe from "@/components/newsletter-subscribe";

function Footer() {
  return (
    <footer className="flex flex-col gap-4 text-zinc-400">
            <NewsletterSubscribe />

      <div className="flex justify-center items-center gap-4">
        <Link
          href="https://github.com/smartcraze"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
        >
          <Github aria-hidden="true" />
        </Link>
        <Link
          href="mailto:dev.surajv@gmail.com"
          aria-label="Email"
          className="hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
        >
          <Mail aria-hidden="true" />
        </Link>
        <Link
          href="https://www.instagram.com/surajv354"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
        >
          <Instagram aria-hidden="true" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/surajv354"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
        >
          <Linkedin aria-hidden="true" />
        </Link>
        <Link
          href="https://x.com/surajv354"
          aria-label="X"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
        >
          <Twitter aria-hidden="true" />
        </Link>
      </div>
      <div className="text-center">
        &copy; {new Date().getFullYear()} suraj vishwakarma. All rights
        reserved.
      </div>
      <div className="text-center text-sm">
        <Link
          href="/passion"
          className="hover:text-zinc-200 transition-colors underline decoration-dotted"
        >
          Check out my YouTube channel
        </Link>
      </div>

      

    </footer>
  );
}

export default Footer;
