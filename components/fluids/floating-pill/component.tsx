import FloatingPill from "./floating-pill";

const FloatingPillComponent = () => {
  return (
    <div className="space-y-4 w-full max-w-lg">
      <h2 className="text-base font-medium ">01 - Floating Pill</h2>
      <p className="text-sm  ">
        Menu pill designed to slowly follow users scroll on the page.
      </p>
      <div className="border-[0.5px] min-h-[200px] rounded-2xl w-full shadow-neumorphic">
        <div>
          <FloatingPill fixed={false} />
        </div>
      </div>
    </div>
  );
};

export default FloatingPillComponent;
