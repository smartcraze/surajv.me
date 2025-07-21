import Image from 'next/image';
import React from 'react';
import { MapPin } from 'lucide-react';

function Introduction() {
  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
          Suraj Vishwakarma
        </h1>
        <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4" />    
        <p className="text-zinc-600 dark:text-zinc-500">
        Bangalore, India
        </p>
        </div>

        <p className="text-zinc-600 dark:text-zinc-500 max-w-md p-2">
        Fullstack developer with a love for clean code and real-world problem-solving.
        Always building, always learning from JS to Rust to cloud infra.
        </p>
      </div>
      <div>
        <Image
          src="/me.png"
          alt="suraj's photo"
          height={200}
          width={200}
          className="object-cover rounded-full border-4 dark:border-zinc-800 border-zinc-900"
        />
      </div>
    </div>
  );
}

export default Introduction;