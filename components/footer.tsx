import React from 'react'
import Link from 'next/link'
import {
    Github,
    Instagram,
    Linkedin,
    Twitter,
    Mail,
} from 'lucide-react'

function Footer() {
  return (
    <footer className="flex flex-col gap-4 text-zinc-400">    
        <div className="flex justify-center items-center gap-4">
            <Link 
              href="https://github.com/smartcraze"
              className="hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
            >
              <Github />
            </Link>
            <Link 
              href="mailto:dev.surajv@gmail.com"
              className="hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
            >
              <Mail />
            </Link>
            <Link 
              href="https://www.instagram.com/surajv354"
              className="hover:text-pink-500 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
            >
              <Instagram />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/surajv354"
              className="hover:text-blue-500 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
            >
              <Linkedin />
            </Link>
            <Link 
              href="https://x.com/surajv354"
              className="hover:text-blue-400 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
            >
              <Twitter />
            </Link>
        </div>
        <div className="text-center">
          &copy; {new Date().getFullYear()} suraj vishwakarma. All rights reserved.
        </div>
        <div></div>
    </footer>
  )
}

export default Footer
