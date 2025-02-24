import Newprojectcards from "@/components/Newprojectcards";
import React from "react";

function Page() {
  interface Event {
    id: number;
    name: string;
    date: string;
    location: string;
    description: string;
  }
  return (
    <>
      {/* Events Section */}
      <div className="flex justify-center">
        <h1 className="bg-orange-500 w-full text-center text-2xl">Events</h1>
      </div>

      <div className="flex h-[calc(100vh-50px)] justify-center items-center">
        {/* <h1 className="text-5xl text-gray-500">Coming soon</h1> */}
        <Newprojectcards />
      </div>
    </>
  );
}

export default Page;
