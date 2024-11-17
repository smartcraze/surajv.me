"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed top-10 justify-center flex items-center inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
    
      <Menu setActive={setActive} >
        <Link href={"/"}>
        <Image
          src={"/smartcraze.png"}
          alt="jordans"
          height="40"
          width="40"
          className="object-contain  "
          />
          </Link>
        <Link href={"/"} className=" relative group/btn ">
          
          <BottomGradient />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
          
        <Link href={"/Social"} className=" relative group/btn" >
        <BottomGradient />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Social Media"
          ></MenuItem>
        </Link>

        <Link href={"https://docs.smartcraze.online/docs/getting-started/introduction"} className=" relative group/btn">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Docs & Blog"
          ></MenuItem>
          <BottomGradient />
        </Link>
      </Menu>
    </div>
    
  );
  
}

export default Navbar;
