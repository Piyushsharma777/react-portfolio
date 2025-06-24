import React from "react";
import Model from "../../assets/3d-icon/LinkdIn-Model.png";
import photo from "../../assets/3d-icon/Passport pic.jpg";
import baground from "../../assets/images/linkdin-bg.jpg";
import Tilt from "./tilt";
import { Link } from "react-router-dom";

const LinkedInCon = () => {
  return (
    <div className="flex lg:flex-row flex-col text-center items-center w-full h-full gap-12 text-black">
      <div
        className="md:w-[50%] sm:w-[61%] w-[100%]"
      >
        <Tilt>
          <div className="bg-white xl:w-[88%] sm:w-full w-[90%] h-[23.5rem] mx-auto rounded-[13%] flex flex-col gap-4">
            <img src={baground} className="background" alt="img" />
            <div>
              <img
                src={photo}
                alt=""
                loading="lazy"
                className="w-[6rem] h-[6rem] -mt-[3.5rem] mx-auto border-[2px] rounded-[10rem]"
              />
            </div>

            <h1 className="xl:text-[1.4rem] text-[1.2rem] font-semibold opacity-[75%]">
              Raj Yadav
            </h1>

            <p className="flex flex-col mx-auto xl:text-[1rem] sm:text-[0.8rem] text-[0.9rem] px-[3px]">
              <span className="font-semibold opacity-[41%]">
                &quot;🚀 Passionate (SDE) - Software
              </span>
              <span className="font-semibold opacity-[41%]">
                Development Engineer | DSA | MERN stack
              </span>
              <span className="font-semibold opacity-[41%]">
                or Full Stack Developer Enthusiast |
              </span>
              <span className="font-semibold opacity-[41%]">
                Open to Exciting Opportunities&quot;
              </span>
            </p>

            <Link to="https://www.linkedin.com/in/rajyadav-2920r0218j8/">
              <button className="text-[1.2rem] font-semibold opacity-[70%]">
                View full profile
              </button>
            </Link>
          </div>
        </Tilt>
      </div>

      <div className="lg:w-[50%] md:w-[70%] sm:w-[90%] w-[100%]">
        <Tilt>
          <img src={Model} alt="" className="w-[80%] mx-auto" loading="lazy" />
        </Tilt>
      </div>
    </div>
  );
};

export default LinkedInCon;
