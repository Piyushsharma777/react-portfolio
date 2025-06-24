import React from "react";
import { TypeAnimation } from "react-type-animation";
// import Typewriter from "typewriter-effect";

const TextAnimation = ({ size }) => {
  return (
    // <Typewriter
    //   options={{
    //     strings: [
    //       "Software Developer",
    //       "Full Stack Developer",
    //       "Frontend Developer",
    //       "Junior Developer",
    //     ],
    //     autoStart: true,
    //     loop: true,
    //     delay: 75,
    //   }}
    // />

    <TypeAnimation
      sequence={[
        // "Software Developer",
        // 1000,
        // "Full Stack Developer",
        // 1000,
        "Frontend Developer",
        1000,
        // "Junior Developer",
        // 1000,
      ]}
      wrapper="span"
      speed={20}
      deletionSpeed={10}
      style={{ fontSize: size, display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
