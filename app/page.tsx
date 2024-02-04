import AnimatedButtonComponent from "@/components/fluids/animated-button/component";
import FloatingPillComponent from "@/components/fluids/floating-pill/component";
import FloatingPill from "@/components/fluids/floating-pill/floating-pill";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex prose min-h-[100dvh] w-full  flex-col items-center justify-start gap-10 p-4  sm:p-10">
      <Hero />
      <FloatingPillComponent />
      <AnimatedButtonComponent />
    </section>
  );
}

const Hero = () => {
  return (
    <div className="py-12 max-w-md text-center space-y-4 lowercase">
      <h1 className="text-4xl font-bold leading-5">Fluids</h1>
      <p className="text-sm">
        A library of beautifully designed components that you can copy and paste
        into your apps. Built with Tailwind CSS & Framer Motion.
      </p>
      <div className="w-full border-b-[0.5px] pt-4" />
    </div>
  );
};
