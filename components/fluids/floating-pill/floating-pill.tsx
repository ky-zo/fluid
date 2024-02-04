"use client";

import Link from "next/link";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { Button } from "../../ui/button";

const FloatingPill = ({ fixed = false }: { fixed: boolean }) => {
  return (
    <div className={`${fixed && "fixed"} top-8 z-50 w-full px-2"`}>
      <ScrollFloatingAnimation>
        <div className="flex-center mx-auto h-12 w-full rounded-full border bg-white/60 px-1 pl-4 shadow-[5px_5px_30px_rgba(190,190,190,0.15),-5px_-5px_30px_rgba(255,255,255,0.15)] backdrop-blur-md sm:w-11/12 md:w-3/4 md:px-2 lg:w-1/2 ">
          <div className="flex w-full max-w-6xl justify-between ">
            <div className="h-10 w-10">🌭</div>
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
                <>
                  <Link href={"/login"}>
                    <Button
                      size={"sm"}
                      variant={"outline"}
                      className="hidden rounded-full shadow-none sm:block"
                    >
                      Login
                    </Button>
                  </Link>

                  <Link href={"/signup"}>
                    <Button size={"sm"} className="rounded-full">
                      Start Now
                    </Button>
                  </Link>
                </>
              </div>
            </div>
          </div>
        </div>
      </ScrollFloatingAnimation>
    </div>
  );
};

export default FloatingPill;

const ScrollFloatingAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.5,
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, (value) => {
    return (value - scrollYProgress.get()) * 100;
  });

  return (
    <>
      <motion.div
        drag
        dragConstraints={{ top: -10, left: -10, right: 10, bottom: 20 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        style={{ y }}
        className="flex-center w-full"
      >
        {children}
      </motion.div>
    </>
  );
};
