import ServiceNowpng from "./images/ServiceNow.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import allServices from "./images/ServicesNoww.png";
import BlackAllServices from "./images/BlackAllServices.png";
import ServiceNowConsulting from "./ServicesNowServices/ServiceNowConsulting";
import ServiceNowImplementation from "./ServicesNowServices/ServiceNowImplementation";
import ServiceNowIntegration from "./ServicesNowServices/ServiceNowIntegration";
import ServiceNowMigration from "./ServicesNowServices/ServiceNowMigration";
import ServiceNowCustomization from "./ServicesNowServices/ServiceNowCustomization";
import ServiceNowAppDevelopment from "./ServicesNowServices/ServiceNowAppDevelopment";
import ServiceNowManagedServices from "./ServicesNowServices/ServiceNowManagedServices";
import blackService from "./images/BlackServicenow.png";
import lines from ".././images/2x lines.png";
import blackLines from ".././images/blackLines.png";
import { useTheme } from "../../../Context/ThemeContext";
import NavBar from "../../NavBar";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";

const ServiceNow = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const span1Ref = useRef(null);
  const span2Ref = useRef(null);
  const span3Ref = useRef(null);
  const movingImageRef = useRef(null);
  const { isDarkTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 500, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out" }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, duration: 4, scale: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      span1Ref.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 1.5 }
    );
    gsap.fromTo(
      span2Ref.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 2 }
    );
    gsap.fromTo(
      span3Ref.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: "power3.out", delay: 2.5 }
    );

    const images = movingImageRef.current.querySelectorAll("img");
    gsap.to(images, {
      xPercent: -100 * (images.length / 2),
      duration: 25,
      repeat: -1,
      ease: "linear",
      modifiers: {
        xPercent: gsap.utils.unitize((x) => parseFloat(x) % 100),
      },
    });
  }, []);

  const handleNavigation = () => {
    navigate("/get-in-touch", { state: { scrollToContact: true } });
  };

  return (
    <>
      <NavBar />
      <div
        className={`w-full font-raleway salesforceservice min-h-screen grid grid-row-5 mt-2 gap-10 md:gap-8 ${
          isDarkTheme ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex flex-col items-start md:items-center justify-start md:justify-center text-left md:text-center uppercase pt-20 md:pt-20 pl-6 md:px-14 pr-4">
          <div
            ref={textRef}
            className="leading-[3rem] md:leading-[5rem] tracking-[0.4em] text-[1.5rem] md:text-[2.25rem] font-bold"
          >
            <span>Revolutionize Your IT</span>
            <br />
            <span>Service Delivery</span>
            <br />
            <span>with</span>
          </div>
          <img
            ref={imageRef}
            src={isDarkTheme ? ServiceNowpng : blackService}
            className="w-[20rem] md:w-[33rem] p-[0.625rem] gap-[0.625rem] mt-4 md:mt-0"
            alt="SalesForce"
          />
          <br />
          <div className="text-[1rem] md:text-[1.3rem] leading-[1.5rem] md:leading-[1.75rem] tracking-[0.26em] p-[0.625rem] mt-8 md:mt-16">
          <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-2 md:gap-0">
            <span ref={span1Ref}>Trusted by 70M+ Users  </span>| 
            <span ref={span2Ref}>AI-Powered Automation </span>| 
            <span ref={span3Ref}> Scalable IT Solutions </span>
          </div>
        </div>
        </div>
        <div className="flex justify-start md:justify-center mb-2 md:mb-10 pl-6 md:px-14 pr-4">
          <button
            type="submit"
            className={`w-[210px] h-[42px] font-raleway leading-[18.78px] text-[16px] font-bold rounded-[13px] p-[10px] gap-[10px] form-item ${
              isDarkTheme
                ? "bg-white text-black hover:bg-gray-500"
                : "bg-black text-white hover:bg-gray-500"
            }`}
            onClick={handleNavigation}
          >
            Schedule a Consultation
          </button>
        </div>
        <div className="p-6 md:p-10 w-full overflow-hidden relative">
          <div className="2nd content pl-6 md:px-14 pr-4">
            <div className="flex justify-start md:justify-center items-start md:items-center mt-8 p-[10px]">
              <h6 className="font-bold text-[24px] md:text-[37px] leading-[35px] md:leading-[45.49px] tracking-[0.1em] text-left md:text-center">
                Why Choose Softshala Technologies?
              </h6>
            </div>
            <div className="flex justify-start md:justify-center items-start md:items-center mt-0.5">
              <hr
                className="w-[200px] md:w-[360px] h-[1px] border-none"
                style={{
                  backgroundImage: isDarkTheme
                    ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                    : "linear-gradient(to right, #000000, #1F4B55)",
                  height: "px",
                  border: "none",
                }}
              />
            </div>
            <p className="text-start justify-start text-[14px] md:text-[18px] font-normal leading-[20px] md:leading-[24.59px] tracking-[0.125rem] pt-6 md:max-w-[920px]">
              At Softshala Technologies, we ensure that every stage of your
              ServiceNow journey is seamless and ROI-driven. Whether you’re
              adopting the platform for the first time or enhancing your
              existing setup, our tailored approach guarantees measurable
              outcomes.
            </p>
          </div>
          <div className="w-full h-70 p-10 md:p-20 overflow-hidden relative pl-6 md:px-14 pr-4">
            <div className="flex absolute left-0" ref={movingImageRef}>
              <img
                src={isDarkTheme ? allServices : BlackAllServices}
                className="w-auto h-auto"
                alt="Services"
              />
              <img
                src={isDarkTheme ? allServices : BlackAllServices}
                className="w-auto h-auto"
                alt="Services"
              />
              <img
                src={isDarkTheme ? allServices : BlackAllServices}
                className="w-auto h-auto"
                alt="Services"
              />
              <img
                src={isDarkTheme ? allServices : BlackAllServices}
                className="w-auto h-auto"
                alt="Services"
              />
            </div>
          </div>
          <div className="flex justify-start md:justify-center items-start md:items-center mt-8 p-[10px] pl-6 md:px-14 pr-4">
            <h6 className="font-bold text-[24px] md:text-[37px] leading-[35px] md:leading-[45.49px] tracking-[0.1em] text-left md:text-center">
              Our ServiceNow Offerings
            </h6>
          </div>
          <div className="flex justify-start md:justify-center items-start md:items-center mt-0.5 pl-6 md:px-14 pr-4">
            <hr
              className="w-[200px] md:w-[360px] h-[1px] border-none"
              style={{
                backgroundImage: isDarkTheme
                  ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                  : "linear-gradient(to right, #000000, #1F4B55)",
                height: "px",
                border: "none",
              }}
            />
          </div>
          <ServiceNowConsulting />
          <img src={isDarkTheme ? lines : blackLines} className="mt-6 md:mt-10 mx-auto pl-6 md:px-14 pr-4" />
          <ServiceNowImplementation />
          <img src={isDarkTheme ? lines : blackLines} className="mt-6 md:mt-10 mx-auto pl-6 md:px-14 pr-4" />
          <ServiceNowIntegration />
          <img src={isDarkTheme ? lines : blackLines} className="mt-6 md:mt-10 mx-auto pl-6 md:px-14 pr-4" />
          <ServiceNowMigration />
          <img src={isDarkTheme ? lines : blackLines} className="mt-6 md:mt-10 mx-auto pl-6 md:px-14 pr-4" />
          <ServiceNowCustomization />
          <img src={isDarkTheme ? lines : blackLines} className="mt-6 md:mt-10 mx-auto pl-6 md:px-14 pr-4" />
          <ServiceNowAppDevelopment />
          <img src={isDarkTheme ? lines : blackLines} className="mt-6 md:mt-10 mx-auto pl-6 md:px-14 pr-4" />
          <ServiceNowManagedServices />
          <img src={isDarkTheme ? lines : blackLines} className="mt-4 mx-auto pl-6 md:px-14 pr-4" />
        </div>
        <div className="flex flex-col gap-4 mx-6 md:mx-0 pl-6 md:px-14 pr-4">
          <div className="flex justify-start items-start">
            <h6 className="font-bold text-[24px] md:text-[37px] leading-[35px] md:leading-[45.49px] tracking-[0.1em] text-left">
              Ready to Transform Your Business
              <hr
                className="w-[200px] md:w-[360px] h-[1px] border-none"
                style={{
                  backgroundImage: isDarkTheme
                    ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                    : "linear-gradient(to right, #000000, #1F4B55)",
                  height: "px",
                  border: "none",
                }}
              />
            </h6>
          </div>
          <div className="flex justify-start items-start">
            <h6 className="font-bold text-[24px] md:text-[37px] leading-[35px] md:leading-[45.49px] tracking-[0.1em] text-left">
              with ServiceNow?
              <hr
                className="w-[200px] md:w-[360px] h-[1px] border-none"
                style={{
                  backgroundImage: isDarkTheme
                    ? "linear-gradient(to right, #9CFF00, #00D1FF)"
                    : "linear-gradient(to right, #000000, #1F4B55)",
                  height: "px",
                  border: "none",
                }}
              />
            </h6>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mx-6 md:mx-0 justify-start md:justify-center items-start md:items-center mb-10 pl-6 md:px-14 pr-4">
          <button
            type="submit"
            className={`w-[210px] md:w-[22.75rem] h-[42px] font-raleway leading-[18.78px] text-[16px] font-bold rounded-[13px] p-[10px] gap-[10px] form-item ${
              isDarkTheme
                ? "bg-white text-black hover:bg-gray-500"
                : "bg-black text-white hover:bg-gray-500"
            }`}
            onClick={handleNavigation}
          >
            Contact Us Today
          </button>
          <p className="text-start justify-start text-[14px] md:text-[18px] font-normal leading-[20px] md:leading-[24.59px] tracking-[0.125rem] pb-3 md:max-w-[920px]">
            Whether you&apos;re exploring ServiceNow for the first time or optimizing
            your existing platform, Softshala Technologies is your trusted
            partner. We bring unparalleled expertise and cutting-edge solutions
            to revolutionize your IT service delivery.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceNow;