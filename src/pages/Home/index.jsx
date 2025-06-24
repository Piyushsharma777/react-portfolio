import React, { lazy, Suspense } from "react";
const StarsCanvas = lazy(() => import("../../components/Common/StarBaground"));
import { Box } from "@mui/material";
import HomeComponent from "../../components/Main";
import About from "../../components/About";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Project from "../../components/Projects";

const Home = () => {
  return (
    <Box className="flex flex-col gap-12 w-11/12 z-0 xl:mt-4 mt-1 mx-auto">
      <Box className="w-full lg:h-[40rem] h-[36rem] xl:mt-[2rem] lg:mt-[1rem] mt-0 flex items-center justify-center mx-auto">
        {/* border border-white */}
        <HomeComponent />
      </Box>
      <Suspense fallback={<div>Loading Stars...</div>}>
        <StarsCanvas />
      </Suspense>
      <About />
      <Education />
      <Skills />
      {/* <Experience /> */}
      <Project />
    </Box>
  );
};

export default Home;
