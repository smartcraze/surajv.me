interface Project {
  slug: string;
  title: string;
  video: string;
  status: string;
  github: string;
  live: string;
}   

export const projects: Project[] = [
  {
    slug: "solpay",
    title: "SolPay",
    video: "https://www.tella.tv/video/cmbmiebi800100cju3uv7alr1/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0",
    status: "Completed",
   
    github: "https://github.com/smartcraze/solpay",
    live: "https://solpay.vercel.app",
  },
  {
    slug: "paytm",
    title: "Paytm Clone",
   
    video: "https://www.tella.tv/video/cmbmiebi800100cju3uv7alr1/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0",
    status: "Completed",
   
    github: "https://github.com/smartcraze/paytm-clone",
    live: "https://paytm.surajv.me",
  },
  {
    slug: "cursorbot",
    title: "CursorBot",
   
    video: "https://www.tella.tv/video/cmbmiebi800100cju3uv7alr1/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0", 
    status: "Learning",
   
    github: "https://github.com/smartcraze/cursorbot",
    live: "https://cursorbot.surajv.me",
  },
  {
    slug: "ezsnipe",
    title: "EzSnipe CLI",
   
    video: "https://www.tella.tv/video/cmbmiebi800100cju3uv7alr1/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0", 
    status: "Completed",
   
    github: "https://github.com/smartcraze/ezsnipe-npm-package",
    live: "https://www.npmjs.com/package/ezsnipe",
  },
 
  {
    slug: "rapidserve",
    title: "RapidServe",
   
    video: "https://www.tella.tv/video/cmbmiebi800100cju3uv7alr1/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=0",
    status: "Completed",
   
    github: "https://github.com/smartcraze/vercel-deploy",
    live: "https://rapidserve.surajv.me",
  }
];
