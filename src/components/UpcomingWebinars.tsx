'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'QR-password-Manager',
      description:
        'Manage your passwords securely with QR codes using this password manager application.',
      slug: 'https://github.com/smartcraze/QR-password-Manager',
      isFeatured: true,
    },
    {
      title: 'zealify',
      description:
        'Discover and share your passion for music with like-minded individuals on this platform.',
      slug: 'https://github.com/smartcraze/zealify',
      isFeatured: true,
    },
    {
      title: 'E-learning-platform ',
      description:
        'Create and access educational content easily with this E-learning platform.',
      slug: 'https://github.com/smartcraze/E-learning-platform',
      isFeatured: true,
    },
    {
      title: 'E-commerce-WebRT',
      description:
        'Build a robust e-commerce website with real-time features using WebRTC technology.',
      slug: 'https://github.com/smartcraze/E-commerce-WebRT',
      isFeatured: true,
    },
    {
      title: 'Ai-Techhub',
      description:
        'Explore the latest advancements in artificial intelligence and technology on this platform.',
      slug: 'https://github.com/smartcraze/Ai-Techhub',
      isFeatured: true,
    },
  ];
  

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>

        <div className="mt-10">
          
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: webinar.slug
            }
          ))}
          
          />
        </div>

        
      </div>
    </div>
  )
}

export default UpcomingWebinars