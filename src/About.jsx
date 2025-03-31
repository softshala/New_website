import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import AboutUs from "./Components/About-Us";
import Footer from "./Components/Footer";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="relative z-50">
        <NavBar />
      </div>
      <div
        className={`relative z-5 ${isMobile ? "mt-14" : "mt-12"}`} 
      >
        <AboutUs />
      </div>
      <div className="relative z-10 bg-[#000000]">
        <Footer />
      </div>
    </div>
  );
};

export default About;