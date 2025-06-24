import React, { useRef } from "react";
import student from "../../assets/3d-icon/student.png";
import mail from "../../assets/3d-icon/Gmail.png";
import Location from "../../assets/3d-icon/location.png";
import Arrow from "../../assets/images/arrow.svg";
import ALLButton from "./allButton";
import TextAnimation from "./textanimation";

const AboutContent = (props) => {
  const { title, heading, description, email, location, id } = props;
  const { linkRef } = useRef(null);

  return (
    <div
      className="xl:w-[45rem] md:w-[40rem] sm:w-[30rem] w-[22rem] sm:h-[32rem] h-[30px] flex flex-col items-start gap-4 p-2 pt-6"
      key={id}
    >
      <h1 className="text-[2.5rem] lg:mx-0 mx-auto flex gap-2 font-bold leading-normal about-text">
        {title}
        <img
          src={student}
          alt="student.png"
          loading="lazy"
          className="w-[4rem] rounded-b-2xl -mt-1"
        />
      </h1>

      <h2 className="flex xl:text-[1.66rem] lg:text-[1.4rem] sm:text-[1.6rem] text-[.85rem] lg:mx-0 mx-auto font-semibold leading-normal">
        {heading}
        <span className="auto-typing-1 text-[#f8ce96] ml-1">
          <TextAnimation />
          {/* Full Stack Developer */}
        </span>
      </h2>

      <p className="text-justify leading-normal font-bold xl:text-[1rem] sm:text-[0.85rem] text-[0.7rem]">
        {description}
      </p>

      {/* Mail */}
      <div className="flex flex-row items-center">
        {/* <img src="./3D ICON/Gmail.png" alt="img.png"> */}
        <img
          src={mail}
          alt=""
          className="xl:w-16 sm:w-14 w-11"
          loading="lazy"
        />
        <p className="pl-2 font-bold sm:text-[1rem] text-[0.8rem]  ">
          <span className="text-[#f8ce96] ">Mail id : </span>
          {email}
        </p>
      </div>

      {/* Location  */}
      <div className="flex flex-row items-center">
        <img
          src={Location}
          alt=""
          className="xl:w-16 sm:w-14 w-11"
          loading="lazy"
        />
        <p className="pl-2 font-bold sm:text-[1rem] text-[0.8rem]">
          <span className="text-[#f8ce96] ">Location : </span>
          {location}
        </p>
      </div>

      <div className="lg:mx-0 mx-auto">
        <ALLButton
          text={"Read more"}
          linkto={props.path}
          icon={<img src={Arrow} alt="arrow" loading="lazy" />}
        />
      </div>

      {/* <Link to="/about">
              <button className="w-full flex h-full py-2 xl:px-5 px-4 gap-1 text-[1.1rem] font-bold rounded-[15rem] bg-[#c1ffff] text-black">
                Read more
                <img src={Arrow} alt="arrow" loading="lazy" />
              </button>
            </Link> */}
    </div>
  );
};

export default AboutContent;
