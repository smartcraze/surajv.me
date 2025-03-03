"use client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect } from "react";
import { scrapeWebsite } from "@/utils/scraper";

function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [siteContext, setSiteContext] = useState<string>("");

  // Load website context when component mounts
  useEffect(() => {
    async function loadContext() {
      const websiteContent = await scrapeWebsite("https://surajv.me");
      setSiteContext(websiteContent);
    }
    loadContext();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: input }]);

    // Add an empty message for the model's response
    setMessages((prev) => [...prev, { role: "model", content: "" }]);

    const genAI = new GoogleGenerativeAI(
      process.env.NEXT_PUBLIC_GEMINI_API_KEY!
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemContext = `You are a helpful assistant with knowledge about my portfolio website. i am suraj vishwakarma. i am a software developer and a competitive programmer. i am a student of computer science and engineering. studying in lovely professional university. currently in 2nd  year. Here's the context about the website: ${siteContext}`;

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: systemContext }] },
        ...messages.map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        })),
      ],
    });

    let response = "";
    const result = await chat.sendMessageStream(input);

    // Update the model's response incrementally
    for await (const chunk of result.stream) {
      response += chunk.text();
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "model", content: response },
      ]);
    }

    setInput("");
    setIsLoading(false);
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="space-y-4 mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg ${
              msg.role === "user"
                ? "bg-blue-100 ml-auto text-black"
                : "bg-gray-100 text-red-900"
            }`}
          >
            {msg.content}
            {isLoading && i === messages.length - 1 && msg.role === "model" && (
              <span className="animate-pulse">▊</span>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 text-black mt-24 p-2 border rounded"
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 mt-24 text-white rounded"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Chat;
