import React, { useRef, useState } from "react";
import hero from "../../assets/images/3d-Contact-image.png";
import Web from "../../assets/3d-icon/web-development.png";
import language from "../../assets/3d-icon/language.png";
import emailjs from "@emailjs/browser";
import Tilt from "../../components/Sub_Componets/tilt";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [isloading, setIsLoading] = useState(false);

  const PUBLIC_KEY = "YOeeliDWO8RXStjkb"; // Ideally, store this in an .env file
  const TEMPLATE_ID = "template_j283led";
  const SERVICE_ID = "service_okmc83m";

  // Fix the change handler function
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log("Submitting form...");

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim() ||
      !formRef.current
    ) {
      toast.error("All fields are required!");
      setIsLoading(false);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        toast.success("Thank you 😊 Your information has been submitted!");
        setIsLoading(false);
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("EmailJS error:", error);
        toast.error("Something went wrong. Please try again!");
      });
  };

  return (
    <section className="pt-[15px] pb-[50px] w-11/12 max-w-screen-xl mx-auto">
      {/* <div className="mx-auto max-w-[740px] text-center">
        <h2 className="h2-heading">Get In Touch</h2>
        <h1 className="h1-heading contact">Contact Me</h1>
      </div>

      <div className="contact-page">
        <div className="xl:w-[35%] lg:w-[50%] sm:w-[58%] w-full relative">
          <Tilt>
            <img
              src={hero}
              alt="Contact Icon"
              className="relative w-full"
              loading="lazy"
            />
          </Tilt>
          <img
            src={Web}
            alt="Web Icon"
            loading="lazy"
            className="absolute xl:w-[70px] lg:w-[65px] md:w-[80px] sm:w-[75px] w-[60px] xl:top-[40px] lg:top-[6px] top-[40px] xl:right-[10px] lg:right-[16px] right-0 topdown"
          />
          <img
            src={language}
            alt="Language Icon"
            loading="lazy"
            className="absolute xl:w-[70px] lg:w-[65px] md:w-[80px] sm:w-[75px] w-[60px] sm:top-[20rem] top-[18rem] lg:left-[1rem] left-0 rightleft"
          />
        </div>

        <div className="xl:w-[45%] lg:w-[70%] md:w-[90%] sm:w-[90%] w-[98%] mx-auto">
          <div className="rounded-3xl p-[1px] animate-text hover:bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500">
            <div className="flex rounded-3xl items-center justify-center flex-col pb-3 bg-black">
              <form
                ref={formRef}
                className="flex flex-col sm:items-start items-center"
              >
                <div className="flex flex-wrap justify-center gap-4 p-5">
                  <div className="flex lg:flex-nowrap flex-wrap sm:gap-2 gap-4 w-[100%]">
                    <input
                      type="text"
                      className="xl:w-full md:w-[49%] sm:w-[49%] w-full xl:h-[50px] h-[45px] px-3 rounded-lg outline-none"
                      placeholder="Enter full name..."
                      name="fullName"
                      onChange={changeHandler}
                      value={formData.fullName}
                    />
                    <input
                      type="email"
                      className="xl:w-full md:w-[49%] sm:w-[49%] w-full xl:h-[50px] sm:h-[45px] h-[40px] px-3 rounded-lg outline-none"
                      placeholder="Enter email address..."
                      name="email"
                      onChange={changeHandler}
                      value={formData.email}
                    />
                  </div>

                  <div className="flex lg:flex-nowrap flex-wrap sm:gap-2 gap-4 w-[100%]">
                    <input
                      type="tel"
                      className="xl:w-full md:w-[49%] sm:w-[49%] w-full xl:h-[50px] sm:h-[45px] h-[40px] px-3 rounded-lg outline-none"
                      placeholder="Enter mobile no..."
                      name="phone"
                      onChange={changeHandler}
                      value={formData.phone}
                    />
                    <input
                      type="text"
                      className="xl:w-full md:w-[49%] sm:w-[49%] w-full xl:h-[50px] sm:h-[45px] h-[40px] px-3 rounded-lg outline-none"
                      placeholder="Enter email subject..."
                      name="subject"
                      onChange={changeHandler}
                      value={formData.subject}
                    />
                  </div>

                  <textarea
                    placeholder="Message..."
                    className="w-full md:h-[200px] sm:h-[180px] h-[170px] rounded-lg p-3 outline-none"
                    name="message"
                    onChange={changeHandler}
                    value={formData.message}
                  ></textarea>
                </div>

                <div className="w-[120px] xl:ml-5 lg:ml-6 sm:ml-[15.5rem] ml-[1rem] text-black">
                  <button
                    type="submit"
                    onClick={submitHandler}
                    className="w-full h-full py-2 px-6 gap-1 text-[1.1rem] font-semibold rounded-3xl bg-[#c1ffff]"
                  >
                    {isloading ? "Delivering..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Contact;
