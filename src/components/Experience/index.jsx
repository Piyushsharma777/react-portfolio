import React from "react";
import WorkEx from "../Sub_Componets/workEx";

const Experience = () => {
  return (
    <section className="pt-3 pb-[20px] work-section">
      <div className="mx-auto md:max-w-[740px] sm:max-w-[630px] max-w-[380px] text-center">
        <h2 className="h2-heading">What I Have Done In My Past Time</h2>
        <h1 className="h1-heading workEx">Work Experience</h1>
      </div>
      <WorkEx />
    </section>
  );
};

export default Experience;
