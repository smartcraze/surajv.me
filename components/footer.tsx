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
        <div className=" flex justify-center items-center gap-4">
            <Link href="https://github.com/smartcraze">   <Github /></Link>
            <Link href="mailto:dev.surajv@gmail.com">   <Mail /></Link>
            <Link href="https://www.instagram.com/surajv354">   <Instagram /></Link>
            <Link href="https://www.linkedin.com/in/surajv354">   <Linkedin /></Link>
            <Link href="https://x.com/surajv354">   <Twitter /></Link>
        </div>
        <div className='text-center'>&copy; {new Date().getFullYear()} suraj vishwakarma. All rights reserved.</div>
        <div></div>
    </footer>
  )
}

export default Footer