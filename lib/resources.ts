import { Github, BookOpen, Globe, Link, Calendar1Icon, Compass, Beer, MessageCircleCode, SchoolIcon, ShoppingBag, AtomIcon, Book, BookDashedIcon, Search, Flame, BookCopy, FlameIcon,ListTodo, Banknote,  Code2Icon, RocketIcon, Component } from "lucide-react";
import { ElementType } from "react";

export interface Resource {
  title: string;
  link: string;
  icon: ElementType;
}


export const resources: Resource[] = [
  {
    title: "Lab(building)",
    link: "https://www.whatever.codes",
    icon: Code2Icon,
  },
  {
    title: "UI Library",
    link: "https://ui.whatever.codes",
    icon: Component,
  },
  {
    title: "code playground ",
    link: "/resource",
    icon: Link,
  },
  {
    title: "Event Calendar",
    link: "/events",
    icon: Calendar1Icon
  },
  {
    title: "Projects",
    link: "/projects",      
    icon: BookOpen
  },
  {
    title:"ArchiveRepo",
    link:"https://github.com/whateverui",
    icon: Github
  }
  
];

export interface ResourcePage {
    label: string;
    url: string;
    icon: ElementType;
}

export const ResourcePage:ResourcePage[] = [
  {
    label:"TakeUforward redesign landing page",
    url: "https://tufplus.surajv.me",
    icon: RocketIcon ,
  },
    {
      label: "Personal Portfolio",
      url: "https://surajv.me",
      icon: BookOpen,
    },
    {
      label: "Suraj Enterprise CMS",
      url: "https://cms.surajv.me/",
      icon: Globe,
    },
    {
      label: "Sketchkaro colaborative sketching app",
      url: "https://sketchkaro.surajv.me",
      icon: Compass,
    },
    {
      label: "Virtual Bar AI Assistant",
      url: "https://virtual-bartender-lake.vercel.app/",
      icon: Beer,
    },
    {
      label: "Feedback Form",
      url: "https://feedmeback.surajv.me",
      icon: MessageCircleCode,
    },
    {
      label: "Ed tech platform studysphere",
      url: "https://studysphere.surajv.me",
      icon: SchoolIcon,
    },
    {
        label: "Paytm Clone",
        url: "https://paytm.surajv.me/",
        icon: Banknote,
    },
    {
      label: "WebRT X smartcraze",
      url: "https://cn-080.vercel.app",
      icon: ShoppingBag,
    },
    {
      label: "AI techHUb",
      url: "https://ai-techhub.vercel.app/",
      icon: AtomIcon,
    },
    {
      label: "Hack IOT",
      url: "https://hackiot.vercel.app/",
      icon: Book,
    },
    {
      label: "Reporting incident Dashboard",
      url: "https://reporting-incident.vercel.app/",
      icon: BookDashedIcon,
    },
    {
      label: "Searchbar idex mongoDB",
      url: "https://searcbar-speakx.vercel.app/",
      icon: Search,
    },
    {
        label: "Flexcode - DSA visualization",
        url: "https://www.flexcode.in/",
        icon: Flame,
    },
    {
        label: "SmartDocs Docs ",
        url: "https://docs.surajv.me/",
        icon: BookCopy,
    },
    {
        label: "Daily checkin for consistency",
        url: "https://todo-notes-eight.vercel.app/",
        icon: FlameIcon,
    },
    {
        label: "Todo Notes Backends",
        url: "https://backend-todo-suraj-vishwakarmas-projects.vercel.app/",
        icon: ListTodo,
    },
    {
        label: "Smart events",
        url: "https://smartevents-frontend-suraj-vishwakarmas-projects.vercel.app/",
        icon: Calendar1Icon,
    },
  ];
  