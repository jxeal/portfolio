import React from "react";
import About from "./About";
import Terminal from "./Terminal";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <About />
      <Terminal />
    </div>
  );
};

export default Hero;
