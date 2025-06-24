import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import insta from "../../assets/3d-icon/Instagram.png";
import fb from "../../assets/3d-icon/Facebook.png";
import linkedin from "../../assets/3d-icon/LinkedIn.png";
import github from "../../assets/3d-icon/github.png";
import { RiCopyrightLine } from "react-icons/ri";
import ContactInfo from "../Sub_Componets/contactInfo";
import Hanlder from "../Sub_Componets/hanlder";
import FootLink from "../Sub_Componets/footLink";

const Footer = () => {
  return (
    <div className="pb-5">
      <div className="footer-page">
        <div className="flex flex-wrap xl:w-[90%] lg:w-[90%] w-full lg:h-[300px] md:h-[550px] sm:h-[700px] h-[750px] justify-around mx-auto">
          <div className="lg:w-[30%] md:w-[45%] sm:w-[60%] w-full p-5 flex flex-col md:items-start items-center gap-4">
            <h1 className="font-extrabold xl:text-[35px] sm:text-[30px] text-[28px] text-orange-400">
              Piyush Sharma
            </h1>
            <p className="font-bold md:text-start text-center md:text-[14px] sm:text-[16px] text-[12px]">
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
              <br />
              <br /> Keep Rising 🚀.
            </p>
          </div>

          <div className="lg:w-[30%] md:w-[40%] sm:w-[60%] w-full p-5 flex flex-col md:items-start items-center gap-4">
            <h1 className="font-extrabold xl:text-[34px]  sm:text-[30px] text-[28px] text-[#9ae341]">
              Direct Link
            </h1>
            <div className="flex flex-col gap-2">
              <FootLink
                path={"/"}
                name={"Home"}
                icon={<IoHome size={18} color="#9ae341" />}
              />

              <FootLink
                path={"/about"}
                name={"About"}
                icon={<FaUser size={18} color="#9ae341" />}
              />

              <FootLink
                path={"/education"}
                name={"Education"}
                icon={<FaUserGraduate size={18} color="#9ae341" />}
              />

              <FootLink
                path={"/#skills"}
                name={"Skills"}
                icon={<FaLaptopCode size={18} color="#9ae341" />}
              />

              <FootLink
                path={"/work-experience"}
                name={"Projects"}
                icon={
                  <AiOutlineFundProjectionScreen size={18} color="#9ae341" />
                }
              />
            </div>
          </div>

          <div className="lg:w-[30%] md:w-[45%] sm:w-[60%] w-full p-5 flex flex-col md:items-start items-center gap-4">
            <h1 className="font-extrabold xl:text-[35px] sm:text-[30px] text-[28px] text-[#d650f7]">
              Contact Info.
            </h1>
            <ContactInfo
              icon={<FaPhone size={20} color="#d650f7" />}
              text={"+91 7777-777-777"}
            />

            <ContactInfo
              icon={<IoIosMail size={20} color="#d650f7" />}
              text={"777piyushsharma@gmail.com"}
            />

            <ContactInfo
              icon={<FaMapLocationDot size={20} color="#d650f7" />}
              text={"Ambala (Haryana) - India"}
            />

            <div className="flex gap-3">
              <Hanlder path={"#"} name={"Linkedin"} image={linkedin} />
              <Hanlder path={"#"} name={"GitHub"} image={github} />
              <Hanlder path={"#"} name={"Facebook"} image={fb} />
              <Hanlder path={"#"} name={"Instagram"} image={insta} />
            </div>
          </div>
        </div>

        <div className="w-[90%] flex flex-col gap-4 items-center">
          <div className="w-full h-[1px] border"></div>
          <div className="font-bold sm:text-[14px] text-[12px] flex items-center gap-2">
            <RiCopyrightLine /> Copyright 2025 by Piyush Sharma
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
