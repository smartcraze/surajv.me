'use client';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Bot, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from 'use-sound';
import ReactMarkdown from 'react-markdown';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

export default function SurajGPTWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('surajgpt_chat');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  const [play] = useSound('/sounds/typing.mp3', { volume: 0.2 });

  useEffect(() => {
    inputRef.current?.focus();
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
    localStorage.setItem('surajgpt_chat', JSON.stringify(messages));
  }, [messages]);

 async function sendMessage(e: React.FormEvent) {
  e.preventDefault();
  if (!input.trim()) return;

  if (input.trim().toLowerCase() === '/clear') {
    setMessages([]);
    localStorage.removeItem('surajgpt_chat');
    setInput('');
    return;
  }

  const userMsg: Message = { sender: 'user', text: input };
  setMessages((prev) => [...prev, userMsg]);
  setLoading(true);
  play();

  try {
    const res = await axios.post('https://ragv2.surajv.me/ask', { question: input });
    const botMsg: Message = {
      sender: 'bot',
      text: res.data?.answer || 'No answer available.',
    };
    setMessages((prev) => [...prev, botMsg]);
  } catch {
    setMessages((prev) => [
      ...prev,
      { sender: 'bot', text: 'Oops! Something went wrong.' },
    ]);
  } finally {
    setInput('');
    setLoading(false);
  }
}


  return (
    <>
      {/* Floating Open Button */}
      <button
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition"
        onClick={() => setOpen(true)}
      >
        <Bot className="w-6 h-6" />
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-[#1a1a1a] text-white shadow-xl z-50 flex flex-col rounded-l-lg"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="text-lg font-bold">SurajGPT</h2>
              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={chatRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-4 h-[75vh]"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className="flex items-end gap-2 max-w-[75%]">
                    {msg.sender === 'bot' && (
                      <div className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center text-sm font-bold">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`px-4 py-2 rounded-xl whitespace-pre-line text-sm ${
                        msg.sender === 'user'
                          ? 'bg-purple-600 text-white rounded-br-none'
                          : 'bg-white/10 text-white rounded-bl-none'
                      }`}
                    >
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                    {msg.sender === 'user' && (
                      <div className="w-8 h-8 bg-white/20 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        👤
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="text-sm italic text-white animate-pulse">SurajGPT is typing...</div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={sendMessage}
              className="p-4 flex items-center gap-2 border-t border-white/10"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something...    /clear to reset"
                className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="p-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white transition disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
