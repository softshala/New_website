import Customization from "../images/Customization.png";
import CustomizationService from "../images/CustomizationService.png";
import BlackCustomization from "../images/BlackServiceNowCustomization.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../../../../Context/ThemeContext";

const ServiceNowCustomization = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const movingImageRef = useRef(null);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    if (!inView) return;

    gsap.set(movingImageRef.current, { x: 0 });

    gsap.to(movingImageRef.current, {
      x: "-50%",
      duration: 25,
      ease: "linear",
      repeat: -1,
    });
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`mt-20 md:mt-10 pl-6 md:px-14 pr-4 ${
        isDarkTheme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-start md:justify-center items-start md:items-center mt-6 md:mt-8 mb-4 md:mb-1.5">
        <h6 className="font-bold text-[24px] md:text-[37px] leading-[35px] md:leading-[45.49px] tracking-[0.1em] text-left md:text-center">
          ServiceNow Customization
        </h6>
      </div>
      <div className="flex justify-start md:justify-center items-start md:items-center mb-8 md:mb-10">
        <hr
          className="w-[200px] md:w-[360px] h-[1px] border-none"
          style={{
            backgroundImage: isDarkTheme
              ? "linear-gradient(to right, #FFFFFF, #FFFFFF)"
              : "linear-gradient(to right, #000000, #1F4B55)",
            border: "none",
          }}
        />
      </div>
      <p className="text-[20px] md:text-[27px] flex justify-start md:justify-center items-start md:items-center text-left md:text-center w-[90%] md:w-[920px] mx-auto">
        Tailored Solutions to Fit Your Business Needs
      </p>

      <div className="firstdiv flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mt-11 gap-6 md:gap-8">
        <div className="text-left max-w-[90%] md:max-w-[920px] p-[10px] gap-[10px]">
          <p className="font-raleway font-medium text-[14px] md:text-[18px] text-left md:text-justify leading-[20px] md:leading-[24.59px] tracking-[0.1em] mt-4 md:mt-8">
            At Softshala Technologies, we understand that every business has
            unique needs. Our ServiceNow customization services help you modify
            workflows, user interfaces, and automation features to enhance your
            IT operations.
          </p>
        </div>

        <div className="flex justify-center items-start mr-0 md:mr-10 mt-8 md:mt-0 w-full md:w-auto">
          <img
            src={Customization}
            alt="Discovery & Analysis"
            className="max-w-[220px] md:max-w-[300px] max-h-[200px] md:max-h-[298.39px] object-contain"
          />
        </div>
      </div>

      <div>
        <div className="flex justify-start md:justify-center items-start md:items-center mt-12 md:mt-16 mb-4 md:mb-1.5">
          <h6 className="font-semibold text-[24px] md:text-[37px] leading-[35px] md:leading-[45.49px] tracking-[0.1em] text-left md:text-center">
            Customization Services We Offer:
          </h6>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex w-max"
            ref={movingImageRef}
            style={{ display: "flex", whiteSpace: "nowrap" }}
          >
            <img
              src={isDarkTheme ? CustomizationService : BlackCustomization}
              className="w-[3000px] h-auto"
            />
            <img
              src={isDarkTheme ? CustomizationService : BlackCustomization}
              className="w-[3000px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceNowCustomization;