import React from "react";
import LineAnimation from "./lineanimation";
import FeatureShowcase from "./featureshowcase";
import InstallFlowCard from "./InstallFlowCard";

const FeatureGrid = () => {
  return (
    <div className="flex">
      <LineAnimation />
      <FeatureShowcase />
      <InstallFlowCard />
    </div>
  );
};

export default FeatureGrid;