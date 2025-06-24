import React from "react";
import { Link } from "react-router-dom";

const Hanlder = (props) => {
  const { image, name, path } = props;

  return (
    <Link to={path}>
      <img src={image} className="w-[55px]" loading="lazy" alt={name} />
    </Link>
  );
};

export default Hanlder;
