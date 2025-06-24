import React, { useRef } from "react";
import { Link } from "react-router-dom";

const ALLButton = (props) => {
  const { text, linkto, icon, page } = props;

  const { linkRef } = useRef(null);
  return (
    // <ShimmerButton >
    <button
      className="xl:w-full max-w-fit py-2 xl:px-4 
    px-4 border h-12 text-black lg:text-[1.05rem] text-[1rem] font-bold bg-[#c1ffff] rounded-[50px] mt-5 shadowcon"
    >
      <Link
        ref={linkRef}
        to={linkto}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        target={page}
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3"
        locale={false}
      >
        {text}
        {icon}
      </Link>
    </button>
    // </ShimmerButton>
  );
};

export default ALLButton;
