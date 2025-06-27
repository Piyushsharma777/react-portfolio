import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
// import circle from "../../assets/images/circle.svg";
// import logo from "../../assets/images/logo.png";
import logo from "../../assets/images/Logo Pic.png";
import { Link } from "react-router-dom";
import { Links } from "../../config";
import { RxCross1 } from "react-icons/rx";
import { HiMenuAlt3 } from "react-icons/hi";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkRef = useRef(null);

  return (
    <Box
      component={"header"}
      className="relative flex justify-center w-[96%] h-24 mx-auto"
    >
      <Box
        component={"nav"}
        className="fixed border border-white flex items-center justify-between xl:w-11/12 w-[94%] xl:h-[5.2rem] h-[5rem] mt-2 mx-auto xl:px-[5.5rem] md:px-[3.5rem] sm:px-[2rem] px-[1.5rem] z-[9999] backdrop-blur-md rounded-l-[3rem] rounded-r-[3rem] nav-animation transition-all duration-700"
      >
        <div className="xl:w-[25%] lg:w-[30%] md:w-[50%] w-full">
          <Link
            ref={linkRef}
            to={"/"}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="relative flex items-center gap-2"
          >
            <div className="md:w-[4rem] md:h-[4.5rem] w-[3.8rem] h-[4rem]">
              <img src={logo} alt="logo.png" className="w-full h-full" />
            </div>
            <h2 className="xl:text-3xl md:text-2xl text-[22px] font-bold animate-text bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-400 bg-clip-text text-transparent">
              Piyush Sharma
            </h2>
          </Link>
        </div>

        <div className="xl:w-[50%] md:w-[60%] sm:w-[20%] w-[5%] flex items-center justify-center">
          <ul
            className={`${
              isOpen
                ? "lg:hidden flex flex-col items-center bg-gradient-to-br from-gray-500 to-black backdrop-blur-md absolute md:top-[85px] top-[85px] md:py-5 sm:py-6 py-5 md:px-12 sm:px-12 px-11 gap-6 md:right-5 sm:right-2 right-0 border border-[#858484] shadow-2xl shadow-slate-700 rounded-[2rem]"
                : "lg:flex hidden gap-12"
            } lg:flex-row list-none`}
          >
            {Links.map((link) => (
              <li key={link.id}>
                <Link
                  ref={linkRef}
                  to={link.href}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="font-semibold text-base hover:text-[#268feb] hover:underline underline-offset-2 transition-all duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="lg:hidden flex items-center"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <RxCross1 fontSize={33} /> : <HiMenuAlt3 fontSize={33} />}
        </button>
      </Box>
    </Box>
  );
};

export default NavigationBar;
