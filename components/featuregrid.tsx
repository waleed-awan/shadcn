import React from "react";
import LineAnimation from "./lineanimation";
import FeatureShowcase from "./featureshowcase";
import InstallFlowCard from "./InstallFlowCard";

const FeatureGrid = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* Mobile: stack | Large: fixed layout */}
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between w-full">

        {/* Left */}
        <div className="w-full lg:w-auto">
          <LineAnimation />
        </div>

        {/* Center */}
        <div className="w-full lg:w-auto">
          <FeatureShowcase />
        </div>

        {/* Right */}
        <div className="w-full lg:w-auto">
          <InstallFlowCard />
        </div>

      </div>

    </div>
  );
};

export default FeatureGrid;