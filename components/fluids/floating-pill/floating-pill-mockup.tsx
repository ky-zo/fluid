"use client";

import Link from "next/link";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { Button } from "../../ui/button";
import { Cloud } from "@phosphor-icons/react";

const FloatingPillMockup = () => {
  return (
    <div className="flex-center mx-auto h-12 w-full rounded-full border bg-white/60 px-1 pl-4 shadow-[5px_5px_30px_rgba(190,190,190,0.15),-5px_-5px_30px_rgba(255,255,255,0.15)] backdrop-blur-md sm:w-11/12 ">
      <div className="flex w-full max-w-6xl justify-between  items-center ">
        <div className="flex-center gap-2 font-bold leading-4">
          <Cloud /> fluid
        </div>

        <div className=" hidden w-full items-center justify-end px-4 sm:flex">
          <Link
            href={"/home#pricing"}
            scroll={true}
            className=" text-sm text-[#444240] hover:underline"
          >
            Pricing
          </Link>
        </div>

        <div className=" flex items-center justify-center gap-4">
          <div className="hidden h-5 border-r  border-gray-200 sm:block " />
          <div className="flex items-center gap-3 text-xs">
            <Link href={"/login"}>
              <Button variant={"outline"} className=" rounded-full shadow-none">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingPillMockup;
