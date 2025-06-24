import React from "react";
import { allprojects } from "../../config";
import Pro2_Container from "../../components/Sub_Componets/pro2_Container";

const Project = () => {
  return (
    <section className="flex flex-col gap-10 mt-[1rem]">
      <div className="md:w-11/12 w-[98%] mx-auto">
        <div className="mx-auto md:max-w-[925px] sm:max-w-[630px] max-w-[380px] text-center">
          <h2 className="h2-heading">
            Work Experience & What I Have Done This Projects
          </h2>
          <h1 className="h1-heading project">My Projects</h1>
        </div>
        <Pro2_Container pros={allprojects} />
      </div>
    </section>
  );
};

export default Project;
