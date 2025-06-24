import React, { useState } from "react";
import Arrow from "../../assets/images/arrow.svg";
import githubIcon from "../../assets/3d-icon/github.png";
import Tilt from "./tilt";
import { Link } from "react-router-dom";
import ALLButton from "./allButton";

const Card = (props) => {
  const { image, title, date, info, link, weblink, skill, key } = props;

  const [readmore, setReadMore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 150)}....`;

  function readmoreHanlder() {
    console.log("click hua hn");
    setReadMore(!readmore);
    // console.log(description);
  }

  return (
    <Tilt>
      {/* <BackgroundGradient className="rounded-[45px] max-w-sm bg-white dark:bg-zinc-900"> */}
      <div
        className="md:w-[325px] sm:w-[310px] w-[295px] h-full project-card-shadow rounded-[2.5rem] flex flex-col justify-center gap-5 p-4 hover:-translate-y-5 transition-all duration-700"
        key={key}
      >
        <div className="relative">
          <img
            src={image}
            alt="Main Image"
            className=" rounded-t-[2rem] border"
            loading="lazy"
          />
          <Link to={link}>
            <img
              src={githubIcon}
              alt="GithubIcon"
              className="absolute w-[60px] top-0 right-0"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="flex gap-3">
          {skill.map((skill) => (
            <div className="w-[35px]" key={skill.id}>
              <img src={skill.image} alt={skill.name} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="text-[16px] font-bold ">
          <p>{title}</p>
          <p>{date}</p>
        </div>
        <div>
          <p className="text-justify text-[14px]">
            {description}
            <span
              className="text-blue-600 cursor-pointer text-[15px]"
              onClick={readmoreHanlder}
            >
              {readmore ? `...show less` : `read more`}
            </span>
          </p>
        </div>

        <div className="w-[225px] mx-auto">
          <ALLButton
            text={"Go to Web page"}
            linkto={weblink}
            page={"_blank"}
            icon={<img src={Arrow} alt="arrow" loading="lazy" />}
          />
          {/* <Link to={weblink}>
            <button className="w-full flex h-full py-2 px-3 text-[1.1rem] font-bold rounded-[15rem] bg-[#c1ffff] text-black">
              Go to Web page
              <img src={Arrow} alt="arrow" loading="lazy" />
            </button>
          </Link> */}
        </div>
      </div>
      {/* </BackgroundGradient> */}
    </Tilt>
  );
};

export default Card;
