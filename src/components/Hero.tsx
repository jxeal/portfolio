import React from "react";
import About from "./About";
import Terminal from "./Terminal";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className=" lg:basis-1/2">
        <About></About>
      </div>
      <div className=" lg:basis-1/2">
        <Terminal></Terminal>
      </div>
    </div>
  );
};

export default Hero;
