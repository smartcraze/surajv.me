interface Project {
  slug: string;
  title: string;
  status: "fullstack" | "GenAI" | "npm-package" | "web3";
}

export const projects: Project[] = [
  {
    slug: "sketchkaro",
    title: "SketchKaro ",
    status: "fullstack",
  },
  {
    slug: "rapidserve",
    title: "RapidServe ",
    status: "fullstack",
  },
  {
    slug: "cipherstudio",
    title: "CipherStudio ",
    status: "fullstack",
  },
  {
    slug: "studysphere",
    title: "StudySphere ",
    status: "fullstack",
  },
  {
    slug: "paytm",
    title: "Paytm Clone ",
    status: "fullstack",
  },
  {
    slug: "surajgpt",
    title: "SurajGPT",
    status: "GenAI",
  },
  {
    slug: "cursorbot",
    title: "CursorBot",
    status: "GenAI",
  },
  {
    slug: "ezsnipe",
    title: "EzSnipe",
    status: "npm-package",
  },
  {
    slug: "token-launchpad",
    title: "Token Launchpad",
    status: "web3",
  },
];
