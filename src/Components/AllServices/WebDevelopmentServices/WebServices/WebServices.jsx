import { useState } from "react";
import { useTheme } from "../../../../Context/ThemeContext";

const WebServices = () => {
  const [flipped, setFlipped] = useState({});
  const { isDarkTheme } = useTheme();

  const toggleFlip = (service) => {
    setFlipped((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  const resetFlip = (service) => {
    setFlipped((prev) => ({
      ...prev,
      [service]: false,
    }));
  };

  const services = [
    {
      id: "frontend",
      front: "Frontend Development",
      back: "Crafting modern, responsive, and interactive user interfaces using HTML, CSS, JavaScript, React, Angular, and Vue.js to provide an intuitive user experience across all devices.",
    },
    {
      id: "backend",
      front: "Backend Development",
      back: "Building scalable, secure, and high-performance server-side architectures using Node.js, Python, Django, Ruby on Rails, and PHP to support complex applications.",
    },
    {
      id: "api",
      front: "API Development & Integration",
      back: "Enabling seamless third-party API and database integrations to enhance functionality, automate workflows, and enable cross-platform compatibility.",
    },
    {
      id: "customApp",
      front: "Custom Web Application Development",
      back: "Developing tailor-made web applications for businesses, startups, and enterprises that align with unique requirements and growth strategies.",
    },
    {
      id: "ecommerce",
      front: "E-Commerce Solutions",
      back: "Creating secure, scalable, and conversion-focused online stores with payment gateway integration, inventory management, and a seamless shopping experience.",
    },
    {
      id: "security",
      front: "Web App Security",
      back: "Implementing end-to-end encryption, SSL certificates, firewalls, and vulnerability assessments to ensure top-notch security and data protection.",
    },
    {
      id: "maintenance",
      front: "Web App Maintenance & Support",
      back: "Providing continuous updates, debugging, performance optimization, and security patches to ensure smooth functionality and long-term success.",
    },
  ];

  return (
    <div className="w-full mt-10 md:mt-20 p-4 md:p-6 flex flex-wrap justify-center gap-4 md:gap-10 mx-auto font-raleway overflow-hidden">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`relative w-[150px] md:w-[245px] h-[200px] md:h-[303px] perspective-1000 ${index % 2 === 0 ? "sm:mr-2 md:mr-5" : ""}`}
          onMouseEnter={() => toggleFlip(service.id)}
          onMouseLeave={() => resetFlip(service.id)}
        >
          {/* Flipping Container */}
          <div
            className={`w-full h-full rounded-[25px] md:rounded-[35px] transition-transform duration-500 transform-style-3d ${
              flipped[service.id] ? "rotate-y-180" : ""
            }`}
          >
            {/* Front Side */}
            <div
              className={`absolute w-full h-full flex items-center justify-center rounded-[25px] md:rounded-[35px] font-extrabold text-[0.9rem] md:text-[1.3rem] text-center backface-hidden ${
                isDarkTheme ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              {service.front}
            </div>

            {/* Back Side (Initially Rotated) */}
            <div
              className={`absolute w-full h-full flex items-center justify-center rounded-[25px] md:rounded-[35px] text-[0.7rem] md:text-[1rem] font-thin text-center rotate-y-180 backface-hidden p-2 md:p-4 ${
                isDarkTheme ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              {service.back}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebServices;