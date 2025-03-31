import { useState, useEffect } from "react"; // Added imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SalesForce from "./Services/SalesForce";
import ServiceNow from "./Services/ServiceNow";
import WebDevelopment from "./Services/WebDevelopment";
import { useTheme } from "../../Context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { isDarkTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false); // Added state for mobile detection

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className={`w-full min-h-screen justify-center flex ${
        isDarkTheme ? "bg-[#000000] text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`min-w-screen font-raleway pt-10 left-[20px] items-start gap-[46px] relative`}
      >
        {/* Our Services Title */}
        <h1
          className={`services-title font-raleway font-bold ${
            isMobile ? "text-2xl" : "text-4xl" // Smaller size on mobile
          } text-center mr-9 md:mr-0 leading-custom mb-8`}
        >
          Our Services
        </h1>
        <div
          className={`flex flex-col ${
            isMobile ? "gap-1" : "gap-11" // Reduced gap on mobile
          }`}
        >
          <SalesForce />
          <ServiceNow />
          <WebDevelopment />
        </div>
      </div>
    </div>
  );
};

export default Services;