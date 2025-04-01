import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import webDevelopment from "../../../../public/images/WebDev.png";

gsap.registerPlugin(ScrollTrigger);

const WebDevelopment = () => {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const listRef = useRef(null);
  const listRef2 = useRef(null);

  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      gsap.set(imageRef.current, { opacity: 1 });
      gsap.set([headingRef.current, paragraphRef.current, listRef.current, listRef2.current], {
        opacity: 0,
      });
    }
  }, [isMobile]);

  const handleMouseEnter = () => {
    if (hasAnimated || isMobile) return;

    gsap.fromTo(
      imageRef.current,
      { x: "0%", y: "0%", scale: 1, opacity: 1 },
      { x: "-60%", y: "-45%", scale: 0.5, opacity: 1, duration: 1, ease: "power3.inOut", marginLeft: "120px" } // Reduced from 2
    );
    gsap.fromTo(
      headingRef.current,
      { x: 900, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.6, duration: 0.5, ease: "power3.out" } // Reduced from 1.2 and 1
    );
    gsap.fromTo(
      paragraphRef.current,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.7, duration: 0.6, stagger: 0.45, ease: "power3.out" } // Reduced from 1.4, 1.2, and 0.9
    );
    gsap.fromTo(
      listRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.9, duration: 1, stagger: 0.45, ease: "power3.out" } // Reduced from 1.8, 2, and 0.9
    );
    gsap.fromTo(
      listRef2.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, delay: 1, duration: 0.75, stagger: 0.45, ease: "power3.out" } // Reduced from 2, 1.5, and 0.9
    );
    setHasAnimated(true);
  };

  return (
    <div
      className={`w-full max-w-[1055px] mx-auto p-4 md:p-0 md:w-[1055px] h-auto md:h-[544.81px] gap-5 relative mt-8 flex flex-col items-center ${
        isMobile ? "justify-center" : "md:items-start"
      }`}
      onMouseEnter={handleMouseEnter}
    >
      <img
        ref={imageRef}
        src={webDevelopment}
        alt="WebDevelopment"
        className={`w-full md:w-auto max-w-[400px] mr-9 md:mr-0 md:max-w-none service-img ${
          isMobile ? "relative -mt-8" : "absolute z-20"
        }`}
      />
      <h1
        ref={headingRef}
        className="text-1xl hidden md:flex md:text-3xl font-raleway font-thin md:mt-16 mb-3 md:ml-24 text-center md:text-left" // Changed md:mt-4 to md:mt-16
      >
        Web Development Service
      </h1>

      <p
        ref={paragraphRef}
        className="text-sm md:text-lg mt-4 md:mt-8 leading-relaxed text-justify w-[300px] mr-9 md:w-full" // Changed mt-0 md:mt-5 to mt-4 md:mt-8
      >
        At Softshala Technologies, we specialize in providing end-to-end Full Stack Web Development solutions that empower businesses to thrive in today’s digital landscape. From front-end design to back-end architecture, our expert developers combine the best technologies and practices to create scalable, efficient, and high-performance web applications.<br />
        With a deep understanding of both the technical and creative aspects of web development, we craft custom solutions that bring your ideas to life while ensuring seamless functionality, user experience, and business alignment. Whether you’re building a new website, enhancing an existing platform, or integrating web-based solutions, we provide comprehensive development services designed to meet your unique needs.
      </p>

      <div className="text-sm md:text-lg flex flex-col md:flex-row md:justify-between gap-3 w-[300px] md:w-full p-4">
        <ul ref={listRef} className="list-disc flex flex-col w-full md:w-1/2 space-y-2 pl-6">
          <li>Front-End Development</li>
          <li>Back-End Development</li>
          <li>API Development & Integration</li>
          <li>Custom Web Application Development</li>
        </ul>
        <ul ref={listRef2} className="list-disc flex flex-col w-full md:w-1/2 space-y-2 pl-6">
          <li>E-Commerce Solutions</li>
          <li>Web App Security</li>
          <li>Web Application Maintenance & Support</li>
        </ul>
      </div>
    </div>
  );
};

export default WebDevelopment;