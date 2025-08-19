import { ProjectData } from "@/components/ui/ProjectData";
import React from "react";

const Projects = () => {
  return (
    <div
    // className="mx-auto max-w-[1600]"
    >
      <div className="text-2xl md:text-4xl font-mono flex flex-row justify-center mx-auto my-5">
        <b>Experience/ Projects</b>
      </div>
      <ProjectData />
    </div>
  );
};

export default Projects;
