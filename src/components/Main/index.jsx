import { Box } from "@mui/material";
import React from "react";
import Content from "../Sub_Componets/main_content";
import Hero from "../Sub_Componets/main_hero";

const Main = () => {
  return (
    <Box
      component={"section"}
      className="sm:w-[90%] w-full sm:mx-auto mx-0 ml-4 relative flex justify-between"
    >
      {/* <StarsCanvas /> */}
      <Content />
      <Hero />
    </Box>
  );
};

export default Main;
