import React, { useRef } from "react";
import { Link } from "react-router-dom";

const FootLink = (props) => {
  const { path, icon, name } = props;
  const { linkRef } = useRef(null);

  return (
    <Link
      to={path}
      ref={linkRef}
      className="flex items-center font-bold md:text-[14px] sm:text-[16px] text-[12px] gap-2"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      {icon} {name}
    </Link>
  );
};

export default FootLink;
