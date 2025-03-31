import { useEffect, useRef, useState } from "react"; // Added useState
import { gsap } from "gsap";
import image from "../../public/images/about-us.png";
import { useTheme } from "../Context/ThemeContext";
import NavBar from "./NavBar";

const AboutUs = () => {
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const sectionRef = useRef(null);
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

  useEffect(() => {
    if (window.innerWidth <= 768) return; // Disable animation on mobile

    const about = aboutRef.current;
    const mission = missionRef.current;
    const vision = visionRef.current;
    const section = sectionRef.current;

    const allElements = [about, vision];
    gsap.set(allElements, { opacity: 0, x: 400 });
    gsap.set(mission, { opacity: 0, x: -400 });

    const triggerAnimation = () => {
      gsap.to(about, { x: 0, opacity: 1, duration: 1.9, delay: 0.2 });
      gsap.to(mission, { x: 0, opacity: 1, duration: 1.9, delay: 0.4 });
      gsap.to(vision, { x: 0, opacity: 1, duration: 1.9, delay: 0.6 });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div
        id="about-section"
        ref={sectionRef}
        className={`flex flex-col items-center w-full p-4 pt-10 gap-6 font-raleway 
          ${isDarkTheme ? "bg-black" : "bg-white"}`}
      >
        {/* About Us Section */}
        <div className="w-full mt-8 md:mt-16 px-4 md:px-16">
          <div
            className={`flex flex-col md:flex-row w-full overflow-hidden rounded-xl 
              ${isDarkTheme ? "bg-[#ffffff1a]" : "bg-gray-200"}`}
            ref={aboutRef}
          >
            <div
              className={`flex-1 flex flex-col justify-center ${
                isMobile ? "gap-6" : "gap-4" // Increased gap on mobile
              } p-6`}
            >
              <h2
                className={`text-2xl md:text-3xl font-heading ${
                  isDarkTheme ? "text-white" : "text-black"
                } text-center md:text-left`}
              >
                About Us
              </h2>
              <p
                className={`text-[0.8rem] md:text-base text-justify ${
                  isDarkTheme ? "text-white" : "text-black"
                }`}
              >
                At Softshala Technologies, we&apos;re architects of digital
                transformation, specializing in enterprise solutions that empower
                businesses to thrive in the digital age. With our expertise,
                we&apos;ve established ourselves as pioneers in delivering
                comprehensive ServiceNow and Salesforce solutions, while
                nurturing future talent through our innovative learning platform,
                Learn with Softshala. Our team of certified professionals brings
                deep industry knowledge and technical expertise to every project,
                ensuring solutions that drive real business value.
              </p>
            </div>
            <div className="flex justify-center md:justify-end p-4">
              <img
                src={image}
                alt="About Us"
                className="w-full h-auto md:max-w-[100%] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 px-4 md:px-16">
          {/* Our Mission */}
          <div
            className={`flex-1 p-4 rounded-xl 
              ${isDarkTheme ? "bg-[#ffffff1a]" : "bg-gray-200"}`}
            ref={missionRef}
          >
            <h2
              className={`text-2xl md:text-3xl font-heading ${
                isDarkTheme ? "text-white" : "text-black"
              } text-center md:text-left`}
            >
              Our Mission
            </h2>
            <p
              className={`text-[0.8rem] md:text-base text-justify ${
                isMobile ? "mt-6" : "mt-3" // Increased margin on mobile
              } ${isDarkTheme ? "text-white" : "text-black"}`}
            >
              To empower organizations through innovative technology solutions
              while fostering a culture of continuous learning and excellence. We
              believe in transforming businesses by delivering solutions that not
              only solve today&apos;s challenges but prepare them for
              tomorrow&apos;s opportunities. Through our commitment to quality
              and innovation, we aim to be the catalyst for digital transformation
              across industries.
            </p>
          </div>

          {/* Our Vision */}
          <div
            className={`flex-1 p-4 rounded-xl
              ${isDarkTheme ? "bg-[#ffffff1a]" : "bg-gray-200"}`}
            ref={visionRef}
          >
            <h2
              className={`text-2xl md:text-3xl font-heading ${
                isDarkTheme ? "text-white" : "text-black"
              } text-center md:text-left`}
            >
              Our Vision
            </h2>
            <p
              className={`text-[0.8rem] md:text-base text-justify ${
                isMobile ? "mt-6" : "mt-3" // Increased margin on mobile
              } ${isDarkTheme ? "text-white" : "text-black"}`}
            >
              To empower organizations through innovative technology solutions
              while fostering a culture of continuous learning and excellence. We
              believe in transforming businesses by delivering solutions that not
              only solve today&apos;s challenges but prepare them for
              tomorrow&apos;s opportunities. Through our commitment to quality
              and innovation, we aim to be the catalyst for digital transformation
              across industries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;