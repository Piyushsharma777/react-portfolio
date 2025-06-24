import React from "react";
import Tilt from "./tilt";

const AboutHero = (props) => {
  const { image, id } = props;
  return (
    <Tilt>
      <div
        className="xl:w-[22rem] xs:w-[20rem] xs:h-[28rem] w-[18rem] h-[26rem] rounded-[4rem] animate-text hover:bg-gradient-to-bl from-cyan-600
           via-indigo-400 to-green-400 bg-clip- text-transparent hover:shadow-card"
        key={id}
      >
        <div className="w-full h-full p-[2px]">
          {/* bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-400 bg-clip- text-transparent  */}
          <img
            src={image}
            alt="img"
            className="w-full h-full rounded-[4rem]"
            loading="lazy"
          />
        </div>
      </div>
    </Tilt>
  );
};

export default AboutHero;
