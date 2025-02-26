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
  let formattedString = JSON.stringify(processedData, null, 2).replace(
    /\\"/g,
    '"'
  );
  formattedString =
    "{ " + formattedString.substring(2, formattedString.length - 2) + "\n}";

  return (
    <div className="terminal">
      <div className="terminal-header bg-terminal-header h-7 flex justify-start items-center rounded-t-lg ">
        <div className="header-button red bg-[#f96256] w-3 h-3 rounded-full ml-3 border-1 border-solid border-[#f65549]"></div>
        <div className="header-button red border-[#fdbc3d] w-3 h-3 rounded-full ml-2 border-1 border-solid broder-1 bg-[#ffb524]"></div>
        <div className="header-button red bg-[#33c948] w-3 h-3 rounded-full ml-2 border-1 border-solid border-[#2dbb41]"></div>
      </div>
      <div className="terminal-window flex bg-terminal rounded-b-md px-6 py-3 h-fit text-white overflow-y-auto items-end ">
        <TypingAnimation
          className="lg:text-xl lg:leading-8 md:text-xl text-base leading-7 font-mono whitespace-pre-wrap"
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {`~% ${data.first_name}.info${"\n"}${formattedString}`}
        </TypingAnimation>
      </div>
    </div>
  );
};

export default Terminal;
