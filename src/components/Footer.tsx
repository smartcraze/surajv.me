import React from "react";
import Link from "next/link"; // Import Link from Next.js
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            I&apos;m passionate about coding and creating innovative solutions. My
            goal is to continue learning and growing in the field of software
            development.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link href="#home">
                <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="#project">
                <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Connect With Me</h2>
          <div className="flex space-x-4">
            <LinkPreview url="https://www.linkedin.com/in/surajv354/">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                LinkedIn
              </span>
            </LinkPreview>
            <LinkPreview url="https://github.com/smartcraze">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                GitHub
              </span>
            </LinkPreview>
            <LinkPreview url="https://twitter.com/surajv354">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                Twitter
              </span>
            </LinkPreview>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>
            <LinkPreview url="https://www.instagram.com/surajv354">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                Instagram - @surajv354
              </span>
            </LinkPreview>
          </p>
          <p>
            <LinkPreview url="https://www.linkedin.com/in/surajv354">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                LinkedIn - @surajv354
              </span>
            </LinkPreview>
          </p>
          <p>
            <LinkPreview url="https://twitter.com/surajv354">
              <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                Twitter - @surajv354
              </span>
            </LinkPreview>
          </p>
        </div>
      </div>
      <p className="text-center text-xl pt-8">© 2024 Smartcraze-suraj Vishwakarma. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
