interface Project {
  slug: string;
  title: string;
  status: "fullstack" | "GenAI" | "npm-package" | "web3";
}

export const projects: Project[] = [
  {
    slug: "sketchkaro",
    title: "SketchKaro Realtime Collaborative Drawing App",
    status: "fullstack",
  },
  {
    slug: "rapidserve",
    title: "RapidServe cloud deployment platform",
    status: "fullstack",
  },
  {
    slug: "cipherstudio",
    title: "CipherStudio react editor with live preview",
    status: "fullstack",
  },
  {
    slug: "studysphere",
    title: "StudySphere  Student Learning  Platform",
    status: "fullstack",
  },
  {
    slug: "paytm",
    title: "fullstack Paytm Clone ",
    status: "fullstack",
  },
  {
    slug: "surajgpt",
    title: "SurajGPT  AI-Powered Personal Assistant",
    status: "GenAI",
  },
  {
    slug: "cursorbot",
    title: "CursorBot Text-to-Animation Generator using Manim",
    status: "GenAI",
  },
  {
    slug: "ezsnipe",
    title: "EzSnipe Component Delivery System for React Apps",
    status: "npm-package",
  },
  {
    slug: "token-launchpad",
    title: "Token Launchpad Solana-Based Token Deployer",
    status: "web3",
  },
];
