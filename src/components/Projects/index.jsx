import React from "react";
import { project } from "../../config";
import Pro_Container from "../Sub_Componets/pro_Container";

const Project = () => {
  return (
    <section className="pt-3 pb-[20px] project-section">
      <div className="mx-auto md:max-w-[740px] sm:max-w-[630px] max-w-[380px] text-center">
        <h2 className="h2-heading">
          Work Experience & What I Have Done This Projects
        </h2>
        <h1 className="h1-heading projects">My Projects</h1>
      </div>
      <Pro_Container pros={project} />
    </section>
  );
};

export default Project;
