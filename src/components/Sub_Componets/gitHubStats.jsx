import React from "react";
import Model from "../../assets/3d-icon/Github-Model.png";
import Tilt from "./tilt";
import { Link } from "react-router-dom";

const GitHubStats = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center w-full h-full gap-12">
      {/* <Tilt></Tilt> */}
      <div className="lg:w-[55%] md:w-[75%] sm:w-[90%] w-full">
        <Tilt>
          <img src={Model} alt="" className="w-[80%] mx-auto" />
        </Tilt>
      </div>
      <div className="lg:w-[55%] md:w-[70%] sm:w-[90%] w-full p-4 flex flex-col gap-5">
        <Link to="#">
          <Tilt>
            <picture>
              <img
                src="https://github-readme-stats.vercel.app/api?username=piyushsharma777&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=false"
                alt="img"
                className="w-full"
                loading="lazy"
              />
            </picture>
          </Tilt>
        </Link>
        <Link to="#">
          <Tilt>
            <picture>
              <img
                src="https://github-readme-streak-stats.herokuapp.com?user=piyushsharma777&theme=tokyonight&border_radius=10&date_format=j%20M%5B%20Y%5D"
                alt="img"
                loading="lazy"
              />
            </picture>
          </Tilt>
        </Link>
      </div>
    </div>
  );
};

export default GitHubStats;
