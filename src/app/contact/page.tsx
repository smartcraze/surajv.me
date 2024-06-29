'use client';

import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/utils/cn';
import { BackgroundBeams } from '@/components/ui/background-beams';

function SmartcrazeContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/sendmail', {
        email,
        message,
        name,
      });
      setStatus('Email sent successfully!');
    } catch (error) {
      setStatus('Error sending email.');
      console.error(error);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 py-8 pt-36">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-md mx-auto p-4 md:p-8 relative z-10 bg-white dark:bg-black rounded-none md:rounded-2xl shadow-input">
        <h1 className="text-neutral-600 mb-4 text-xl max-w-sm dark:text-neutral-300 text-center">
          Hey everyone, you can reach out to me
          <p className="text-yellow-500">Drop your mail here!</p>
        </h1>

        <form onSubmit={handleSubmit} className="">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              rows={3}
              required
            ></textarea>
            <BottomGradient />
          </LabelInputContainer>

          <button
            className="relative group/btn bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>
        </form>
        <p className="text-center text-neutral-600 text-sm mt-2 dark:text-neutral-300">
          {status && (
            <span className="inline-block bg-green-500 text-white px-2 py-1 rounded-md">
              {status}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn('flex flex-col space-y-2 w-full', className)}>
    {children}
  </div>
);

export default SmartcrazeContactUs;
