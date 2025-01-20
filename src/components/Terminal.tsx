import React from "react";
import TypingAnimation from "./ui/typing-animation";
import { data } from "@/data/data";

const Terminal = () => {
  const processedData = JSON.parse(
    JSON.stringify(data.terminal, (key, value) => {
      if (Array.isArray(value)) {
        return value.join('", "');
      }
      return value;
    })
  );

  // Format the JSON string
  const formattedString = JSON.stringify(processedData, null, 2).replace(
    /\\"/g,
    '"'
  );

  return (
    //@ts-ignore
    <div className="terminal">
      <div className="terminal-header bg-terminal-header h-7 flex justify-start items-center rounded-t-lg ">
        <div className="header-button red bg-[#f96256] w-3 h-3 rounded-full ml-3 border-1 border-solid border-[#f65549]"></div>
        <div className="header-button red border-[#fdbc3d] w-3 h-3 rounded-full ml-2 border-1 border-solid broder-1 bg-[#ffb524]"></div>
        <div className="header-button red bg-[#33c948] w-3 h-3 rounded-full ml-2 border-1 border-solid border-[#2dbb41]"></div>
      </div>
      <div className="terminal-window bg-terminal rounded-b-md px-8 py-3 h-[340] text-white overflow-y-auto">
        <TypingAnimation
          className="text-base "
          style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
        >
          {`> ${data.first_name}.info${"\n"}${formattedString}`}
        </TypingAnimation>
      </div>
    </div>
  );
};

export default Terminal;
