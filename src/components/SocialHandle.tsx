'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip"
import { FaInstagram, FaLinkedin, FaXTwitter, FaGithub } from 'react-icons/fa6'

const handle = [
  {
    id: 1,
    name: 'Instagram',
    designation: 'Surajv354',
    link: "https://www.instagram.com/surajv354/",
    icon: <FaInstagram size={35} style={{ color: '#E1306C' }} />,
  },
  {
    id: 2,
    name: 'LinkedIN',
    designation: 'Surajv354',
    link: "https://www.linkedin.com/in/surajv354/",
    icon: <FaLinkedin size={35} style={{ color: '#0077B5' }} />,
  },
  {
    id: 3,
    name: 'X',
    designation: 'Surajv354',
    link: "https://twitter.com/Surajv354",
    icon: <FaXTwitter size={35} style={{ color: '#000000' }} />,
  },
  {
    id: 4,
    name: 'GitHub',
    designation: 'smartcraze',
    link: "https://github.com/smartcraze",
    icon: <FaGithub size={35} style={{ color: '#181717' }} />,
  },
];


function SocialHandle() {
  return (
    <div className="relative h-[70vh] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Social Media
        </h2>
        <h1 className="mt-5 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-violet-600">
          Discover Me World wide
        </h1>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={handle} />
        </div>
      </WavyBackground>
    </div>
  )
}

export default SocialHandle
