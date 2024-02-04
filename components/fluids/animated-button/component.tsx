import { Button } from "./components/button";

const AnimatedButtonComponent = () => {
  return (
    <div className="space-y-4 w-full max-w-lg">
      <h2 className="text-base font-medium ">02 - Animated Button</h2>
      <p className="text-sm  ">A button that animates when hovered.</p>
      <div className="border-[0.5px] min-h-[200px] flex-center rounded-2xl w-full shadow-neumorphic">
        <Button>Hover me</Button>
      </div>
    </div>
  );
};

export default AnimatedButtonComponent;
