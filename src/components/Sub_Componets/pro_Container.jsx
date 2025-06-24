import React from "react";
import Arrow from "../../assets/images/arrow.svg";
import Card from "./card";
import ALLButton from "./allButton.jsx";

const Pro_Container = ({ pros }) => {
  return (
    <div className="project-page">
      <div className="py-14 px-5 flex flex-wrap justify-center xl:gap-10 lg:gap-[5.5rem] md:gap-[1.8rem] sm:gap-[2.8rem] gap-[1.8rem]">
        {pros.map((data) => (
          <Card
            key={data.id}
            date={data.date}
            image={data.image}
            title={data.title}
            info={data.description}
            link={data.link}
            weblink={data.weblink}
            skill={data.skills}
          />
          // </BackgroundGradient>
        ))}
      </div>

      <div className="w-[165px] mx-auto">
        <ALLButton
          text={"See More"}
          linkto={"/work-experience"}
          icon={<img src={Arrow} alt="arrow" loading="lazy" />}
        />
        {/* <Link to="/projects">
            <button className="w-full flex h-full py-2 px-4  text-[1.1rem] font-bold rounded-[15rem] bg-[#c1ffff] text-black">
              See More
              <img src={Arrow} alt="arrow" loading="lazy" />
            </button>
          </Link> */}
      </div>
    </div>
  );
};

export default Pro_Container;
