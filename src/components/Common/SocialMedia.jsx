import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Social_Media } from "../../config";

const SocialMediaLinks = memo(() => {
  return (
    <div className="flex md:justify-between sm:gap-4 gap-2 mt-4 xl:w-[25rem] w-[24rem]">
      {Social_Media.map((link) => (
        <Link to={link.path} target="_blank" key={link.id}>
          <img
            src={link.image}
            alt={link.name}
            className="xl:w-[4.5rem] md:w-[3.6rem] w-[3.4rem]"
            loading="lazy"
          />
        </Link>
      ))}
    </div>
  );
});

export default SocialMediaLinks;
