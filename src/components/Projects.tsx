import { ProjectData } from "@/components/ui/ProjectData";
import React from "react";

const Projects = () => {
  return (
    <div
    // className="mx-auto max-w-[1600]"
    >
      <div className="text-4xl pl-6 font-mono flex flex-row justify-center mx-auto p-6">
        <b>Projects</b>
      </div>
      <ProjectData />
    </div>
  );
};

export default Projects;
