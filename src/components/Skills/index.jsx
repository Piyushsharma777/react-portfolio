import React from "react";
import { skills, skill6, skill5, skill4, skill3 } from "../../config";
import Tilt from "../Sub_Componets/tilt";

const Skills = () => {
  return (
    <section className="px-0 skill-section" id="#skills">
      <div className="mx-auto max-w-[430px] text-center">
        <h2 className="h2-heading">I Have Learn This Skills</h2>
        <h1 className="h1-heading skill">Skills</h1>
      </div>
      <Tilt>
        <div className="skill-page">
          {/* <div className="border border-orange-200 hover:shadow-lg hover:shadow-orange-300 rounded-3xl mx-auto w-[70%] h-[450px] flex flex-wrap justify-between gap-6 p-5"> */}
          {/* <div className="flex lg:flex-nowrap md:flex-wrap lg:justify-evenly justify-between xl:w-[80%] md:w-[90%] w-[96%] py-2 px-1">
            {skill6.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <Image
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    alt="img"
                  />
                </div>
              );
            })}
          </div> */}

          {/* <div className="flex lg:flex-nowrap md:flex-wrap lg:justify-evenly justify-between xl:w-[70%] md:w-[80%] w-[80%] py-2 px-1">
            {skill5.map((item) => {
              return (
                <div className="box" key={item.id}>
                  {/* {item}
                  <Image
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    alt="img"
                  />
                </div>
              );
            })}
          </div> */}

          {/* <div className="flex lg:flex-nowrap md:flex-wrap lg:justify-evenly justify-between xl:w-[60%] md:w-[70%] w-[72%] py-2 px-1">
            {skill4.map((item) => {
              return (
                <div className="box" key={item.id}>
                  {/* {item}
                  <Image
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    className="rounded-[40px]"
                    alt="img"
                  />
                </div>
              );
            })}
          </div> */}

          {/* <div className="flex lg:flex-nowrap md:flex-wrap lg:justify-evenly justify-between xl:w-[50%] md:w-[60%] w-[45%] py-2 px-1">
            {skill3.map((item) => {
              return (
                <div className="box" key={item.id}>
                  {/* {item} 
                  <Image
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    className="rounded-[40px]"
                    alt="img"
                  />
                </div>
              );
            })}
          </div> */}
          {/* </div> */}
          {/* </Tilt> */}
          <div className=" xl:w-[65%] md:w-[80%] sm:w-[95%] w-[90%] flex flex-wrap justify-center mx-auto xl:gap-8 gap-6 md:py-6 py-2">
            {skills.map((item) => {
              return (
                <div className="box" key={item.id}>
                  <img
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    className="xl:rounded-[20px] md:rounded-[10px] rounded-[8px] "
                    alt="img"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Tilt>
    </section>
  );
};

export default Skills;
