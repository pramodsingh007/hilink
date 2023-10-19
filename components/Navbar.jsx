"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./UI/Button";
import { useState } from "react";
import LI from "./UI/LI";
import { twMerge } from "tailwind-merge";

function Navbar() {
  const [showNav, setNav] = useState("sm:-right-full max-sm:-right-full sm:hidden  lg:flex max-sm:hidden");
  const [toggle,setToggle] = useState(false)
  const showNavbar = () => {
    setToggle(!toggle)
    setNav(() =>
      showNav === "sm:right-0 max-sm:right-0"
        ? "sm:-right-full max-sm:-right-full lg:flex sm:hidden max-sm:hidden"
        : "sm:right-0 max-sm:right-0"
    );
  };

  return (
    <nav className="flex justify-between place-items-center pt-6 pb-6 sm:mr-8 max-sm:mr-8 max-sm:ml-8 sm:ml-8 lg:mr-20 lg:ml-20">
      <Image src="./hilink-logo.svg" width={80} height={70} alt="logo"></Image>
      <ul
        className={twMerge(
          `z-10 rounded-md  sm:w-[50%] max-sm:w-[50%]  flex lg:space-x-6 lg:place-items-center lg:relative sm:absolute max-sm:absolute max-sm:flex-col sm:flex-col sm:top-14 max-sm:top-14   lg:right-0  lg:flex-row sm:space-y-5 max-sm:space-y-5 lg:space-y-0 sm:bg-slate-100 max-sm:bg-slate-100 lg:bg-transparent sm:h-full max-sm:h-full max-sm:p-7 sm:p-7 lg:p-0 lg:top-0 duration-500 sm:-right-full max-sm:-right-full`,
          showNav
        )}
      >
        <LI>
          <Link href={"/"}>Home</Link>
        </LI>
        <LI>
          <Link href={"/howtowork"}>How Howlink Work</Link>
        </LI>
        <LI>
          <Link href={"/services"}>Services</Link>
        </LI>
        <LI>
          <Link href={"/pricing"}>Pricing</Link>
        </LI>
        <LI>
          <Link href={"/contact"}>Contact Us</Link>
        </LI>
        <LI>
          <Button className=" sm:flex max-sm:flex lg:hidden bg-slate-950 w-full  h-14 text-white font-bold flex justify-center place-items-center p-4 rounded-3xl">
            <Image
              src={"./user.svg"}
              width={20}
              height={20}
              className="mr-1"
              alt="user"
            />{" "}
            <label htmlFor="">Login</label>{" "}
          </Button>
        </LI>
      </ul>
      <Button className=" sm:hidden max-sm:hidden lg:flex bg-slate-950 w-36 h-14 text-white font-bold flex justify-center place-items-center p-4 rounded-3xl">
        <Image
          src={"./user.svg"}
          width={20}
          height={20}
          className="mr-1"
          alt="user"
        />{" "}
        Login
      </Button>
      {!toggle&&<Image
        onClick={showNavbar}
        className="sm:flex lg:hidden cursor-pointer"
        src={"./menu.svg"}
        width={30}
        height={30}
        alt="menu"
      ></Image>}
      {toggle&&<Image
        onClick={showNavbar}
        className="sm:flex lg:hidden cursor-pointer bg-slate-700"
        src={"./close.svg"}
        width={30}
        height={30}
        alt="menu"
      ></Image>}
    </nav>
  );
}

export default Navbar;
