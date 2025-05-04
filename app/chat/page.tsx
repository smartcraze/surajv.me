"use client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect, useRef } from "react";
import { scrapeWebsite } from "@/utils/scraper";
import ReactMarkdown from "react-markdown";

function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [siteContext, setSiteContext] = useState<string>("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Load website context when component mounts
  useEffect(() => {
    async function loadContext() {
      const websiteContent = await scrapeWebsite("https://surajv.me");
      setSiteContext(websiteContent);
    }
    loadContext();
  }, []);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setMessages((prev) => [...prev, { role: "model", content: "" }]);

    const genAI = new GoogleGenerativeAI(
      process.env.NEXT_PUBLIC_GEMINI_API_KEY!
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemContext = `You are a helpful assistant with knowledge about my portfolio website. I am Suraj Vishwakarma, a software developer and competitive programmer. I study computer science and engineering at Lovely Professional University, currently in 2nd year. Here's context about my website: ${siteContext}`;

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
    <div className="flex flex-col h-screen w-full p-4 bg-black text-white">
      <div
        className="flex-1 overflow-y-auto space-y-4 pr-2"
        style={{ scrollbarWidth: "none" }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-lg p-3 rounded-lg shadow-md ${
              msg.role === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-700 text-white mr-auto"
            }`}
          >
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex gap-2   justify-center items-center shadow-md fixed bottom-2 p-4 w-full"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-80 p-2 border rounded-lg focus:outline-none bg-gray-800 text-white"
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded-lg"
          disabled={isLoading}
        >
          {isLoading ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Chat;
