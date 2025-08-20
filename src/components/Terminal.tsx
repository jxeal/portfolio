import React from "react";
import TypingAnimation from "./ui/typing-animation";
import { data } from "@/data/data";

const Terminal = () => {
  return (
    <div className="terminal font-['Clash_Display']">
      <div className="terminal-header bg-terminal-header h-7 flex justify-start items-center rounded-t-lg ">
        <div className="header-button red bg-[#f96256] w-3 h-3 rounded-full ml-3 border-1 border-solid border-[#f65549]"></div>
        <div className="header-button red border-[#fdbc3d] w-3 h-3 rounded-full ml-2 border-1 border-solid broder-1 bg-[#ffb524]"></div>
        <div className="header-button red bg-[#33c948] w-3 h-3 rounded-full ml-2 border-1 border-solid border-[#2dbb41]"></div>
      </div>
      <div className="terminal-window bg-terminal rounded-b-md px-3 md:px-6 py-3 h-fit text-white overflow-y-auto items-end ">
        <div className="lg:text-xl md:text-xl font-medium text-base text-accent">
          {`~% ${data.first_name}.info`}
        </div>
        <div className="space-y-2">
          <div>
            <div className="lg:text-xl md:text-xl text-base font-light text-accent">
              Location:
            </div>
            <TypingAnimation
              className="lg:text-xl md:text-xl font-light text-base pl-4"
              duration={65}
            >
              {`${data.terminal.location}`}
            </TypingAnimation>
          </div>

          <div>
            <div className="lg:text-xl md:text-xl text-base font-light text-accent">
              Interests:
            </div>
            <TypingAnimation className="lg:text-xl md:text-xl font-light text-base pl-4">
              {`${data.terminal.interests}`}
            </TypingAnimation>
          </div>

          <div>
            <div className="lg:text-xl md:text-xl text-base font-light text-accent">
              Education:
            </div>
            <TypingAnimation className="lg:text-xl md:text-xl font-light text-base pl-4">
              {`${data.terminal.education}`}
            </TypingAnimation>
          </div>

          <div>
            <div className="lg:text-xl md:text-xl text-base font-light text-accent">
              Skills:
            </div>
            <TypingAnimation className="lg:text-xl md:text-xl font-light text-base pl-4">
              {`${data.terminal.skills}`}
            </TypingAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
