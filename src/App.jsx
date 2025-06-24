import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import WorkExperience from "./pages/Work_Experience";
import NavigationBar from "./components/Header/NavBar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component={"main"}
      className="flex flex-col w-screen min-h-screen bg-[#000814] overflow-x-hidden"
    >
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/contact" element={<></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Contact />
      <Footer />
    </Box>
  );
};

export default App;
