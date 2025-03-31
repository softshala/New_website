import { NavLink } from "react-router-dom";

const services = [
  "Frontend Services",
  "Backend Services",
];

const WebDevelopment = () => {
  return (
    <nav
      className="web-development-dropdown absolute left-0 top-[100%] flex flex-col p-[20px] gap-[10px] text-xl [font-family:'Raleway-Regular',Helvetica] text-white bg-[#343434] bg-opacity-80 w-[450px] h-auto rounded-[0px_21px_21px_21px] shadow-lg z-50"
      role="navigation"
      aria-label="Web Development services navigation"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      {/* Centered Title */}
      <h2 className="text-center font-bold text-white text-2xl mb-4 w-full">
        Web Development Services
      </h2>

      {services.map((service, index) => (
        <NavLink
          to="/web-development"
          key={index}
          className="p-[10px] w-full h-[34px] bg-transparent text-white pl-2 pt-0.5 pb-0.5 rounded-[6px] hover:bg-white hover:text-black cursor-pointer"
        >
          {service}
        </NavLink>
      ))}

      {/* Inline styles for responsiveness */}
      <style>{`
        .web-development-dropdown {
          position: absolute;
          left: 0;
          top: 100%; /* Aligns directly below SkillsMenu */
          width: 450px; /* Matches SalesForceServices and ServiceNow width */
          transform: translateX(0); /* Ensure alignment with SkillsMenu */
        }

        @media (max-width: 768px) {
          .web-development-dropdown {
            position: relative;
            top: 0; /* No gap to align with SkillsMenu */
            left: 0;
            width: 100%;
            max-width: 100%; /* Dynamic width based on screen */
            margin: 0 auto; /* Center the dropdown */
            padding: 0 20px; /* Add padding to fit content */
            max-height: 70vh; /* Limit height to 70% of viewport height */
            overflow-y: auto; /* Enable vertical scrolling */
            background-color: #343434; /* Full opacity background */
          }

          .p-[10px] {
            width: 100%;
            padding: 10px;
          }

          .w-full {
            width: 100%;
            max-width: 100%; /* Allow full width of container */
          }

          /* Allow text to wrap naturally */
          a {
            font-size: 16px; /* Smaller font for mobile */
            white-space: normal; /* Wrap text */
            overflow: visible;
            text-overflow: clip;
          }
        }
      `}</style>
    </nav>
  );
};

export default WebDevelopment;