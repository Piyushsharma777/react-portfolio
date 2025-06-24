import React from "react";
import React_js from "../../assets/3d-icon/react.png";
import Express from "../../assets/3d-icon/express.png";
import Node from "../../assets/3d-icon/NodeJs.png";
import DB from "../../assets/3d-icon/mongo-db.png";
import Js from "../../assets/3d-icon/js.png";
import Java from "../../assets/3d-icon/java.png";
import Heros from "../../assets/images/Hero-Image1.jpg";
import Tilt from "./tilt";

const Hero = () => {
  return (
    <div className="xl:w-[42%] lg:w-[42%] md:w-[55%] sm:w-[55%] w-[100%] h-full md:-right-[55px] sm:-right-[10%] -right-[40%] sm:mt-0 mt-1 flex items-center justify-end lg:static absolute">
      <div>
        <Tilt>
          <img
            src={Heros}
            alt="img"
            loading="lazy"
            className="xl:w-[30rem] md:w-[25rem] sm:w-[24rem] w-[26rem] h-full xl:-mt-[1rem] lg:-mt-[0] md:mt-[1rem] sm:mt-[3rem] mt-0 lg:opacity-100 opacity-[0.50]"
          />
        </Tilt>

        <div className="absolute lg:flex hidden xl:top-6 lg:top-16 top-0 ">
          <img
            src={React_js}
            alt="React.js"
            loading="lazy"
            className="xl:w-[4.5rem] lg:w-[3.8rem] md:w-[3rem] topdown"
          />
        </div>
        {/* Express */}
        <div className="absolute lg:flex hidden xl:top-[15rem] lg:top-[14rem] top-[15rem] xl:right-[32rem] lg:right-[26rem] right-[22rem]">
          <img
            src={Express}
            alt="Express"
            loading="lazy"
            className="xl:w-[4rem] lg:w-[3.3rem] w-[2.5rem] rightleft "
          />
        </div>
        {/* DB */}
        <div className="absolute lg:flex hidden xl:top-[29rem] lg:top-[26.5rem] top-[27rem] xl:right-[25rem] lg:right-[18rem] right-[16rem]">
          <img
            src={DB}
            alt="DB"
            loading="lazy"
            className="xl:w-[4.5rem] lg:w-[3.8rem] w-[3rem] topdown"
          />
        </div>
        {/* Js */}
        <div className="absolute lg:flex hidden lg:top-[23rem] top-[24rem] xl:right-[5rem] right-[3rem]">
          <img
            src={Js}
            alt="Js"
            loading="lazy"
            className="xl:w-[4.5rem] lg:w-[3.4rem] w-[3rem] rightleft "
          />
        </div>
        {/* Java */}
        {/* <div className="absolute lg:flex hidden xl:top-[15rem] top-[13rem] -right-[2rem]">
          <img
            src={Java}
            alt="Java"
            loading="lazy"
            className="xl:w-[4.5rem] lg:w-[3.6rem] md:w-[3rem] topdown"
          />
        </div> */}
        {/* Node */}
        <div className="absolute lg:flex hidden xl:top-[4rem] lg:top-[4rem] top-[7rem] xl:right-[3.5rem] lg:right-[4rem] right-[1rem]">
          <img
            src={Node}
            alt="Node"
            loading="lazy"
            className="xl:w-[4.5rem] lg:w-[3.8rem] md:w-[3rem] rightleft "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
