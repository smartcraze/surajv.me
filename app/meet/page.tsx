"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";



export default function Meetingpage() {
  return (
    <main className="flex  flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-200 mb-2 text-center">
        Book a 1-on-1 with Me 
      </h1>
      <p className="text-gray-400 text-center max-w-xl mb-8">
        Let&apos;s chat about projects, ideas, or collaboration. Pick a slot that
        works for you below.
      </p>
      <div className="w-full overflow-hidden">
        <Calldotmeet />
      </div>
    </main>
  );
}

function Calldotmeet() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Cal
      namespace="30min"
      calLink="surajv354/30min"
      style={{ width: "100%", height: "100%" }}
      config={{ layout: "month_view" }}
    />
  );
}
