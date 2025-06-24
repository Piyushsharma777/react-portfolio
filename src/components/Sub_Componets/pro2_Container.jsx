import React from "react";
import Arrow from "../../assets/images/arrow.svg";
import ALLButton from "./allButton";
import Card from "./card";

const Pro2_Container = ({ pros }) => {
  return (
    <div className="project-page">
      <div className="md:p-14 sm:p-16 py-8 px-6 flex flex-wrap justify-center gap-14">
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
        ))}
      </div>

      <div className="w-[190px] mx-auto">
        <ALLButton
          text={"Go to Home"}
          linkto={"/"}
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

export default Pro2_Container;
