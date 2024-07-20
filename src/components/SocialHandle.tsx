'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";


const handle = [
    {
      id: 1,
      name: 'Instagram',
      designation: 'Surajv354',
      link:"https://www.instagram.com/surajv354/",
      image:
        '/insta.avif',
    },
    {
      id: 2,
      name: 'LinkedIN',
      designation: 'Surajv354',
      link:"https://www.linkedin.com/in/surajv354/",
      image:
        '/linkedin.jpg',
    },
    {
      id: 3,
      name: 'x',
      link:"https://twitter.com/Surajv354",
      designation: 'Surajv354',
      image:
        '/x.png',
    },
    {
      id: 4,
      name: 'github',
      link:"https://github.com/smartcraze",
      designation: 'smartcraze',
      image:
        '/github.png',
    },
  ];

function SocialHandle() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Social Media </h2>
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