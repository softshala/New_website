import { NavLink } from "react-router-dom";

const services = [
  { name: "Salesforce Consulting", path: "/sales-force-consulting" },
  { name: "Salesforce Development", path: "/salesforce-development" },
  { name: "Salesforce Implementation", path: "/salesforce-implementation" },
  { name: "Salesforce Sales Cloud Solutions", path: "/sales-cloud-solutions" },
  { name: "Salesforce AppexChange", path: "/appexchange-app" },
  { name: "Salesforce CPQ (Configure, Price, Quote)", path: "/salesforce-cpq" },
  { name: "Salesforce Experience Cloud", path: "/experience-cloud" },
  { name: "Salesforce Integration", path: "/integration-services" },
  { name: "Salesforce Managed Services", path: "/managed-services" },
  { name: "Salesforce Marketing Cloud Solutions", path: "/marketing-cloud" },
  { name: "Salesforce Services Cloud Solutions", path: "/sales-solution-services" },
];

function SalesForceServices() {
  return (
    <nav
      className="salesforce-dropdown absolute left-0 top-[100%] flex flex-col p-[20px] gap-[10px] text-xl font-raleway text-white bg-[#343434] bg-opacity-100 w-[450px] h-auto rounded-[0px_21px_21px_21px] shadow-lg z-50"
      role="navigation"
      aria-label="Salesforce services navigation"
      onClick={(e) => e.stopPropagation()}
    >
      <NavLink
        className="text-center font-bold text-white text-2xl mb-4 w-full"
        to={`/salesForce`}
      >
        SalesForce
      </NavLink>

      {services.map((service, index) => (
        <NavLink
          to={service.path}
          key={index}
          className="p-[10px] w-full h-[34px] bg-transparent text-white pl-2 pt-0.5 pb-0.5 rounded-[6px] hover:bg-white hover:text-black cursor-pointer"
        >
          {service.name}
        </NavLink>
      ))}

      {/* Inline styles for responsiveness */}
      <style>{`
        .salesforce-dropdown {
          position: absolute;
          left: 0;
          top: 100%; /* Aligns directly below SkillsMenu */
          width: 450px; /* Fixed width for laptop */
          transform: translateX(0); /* Ensure alignment with SkillsMenu */
        }

        @media (max-width: 768px) {
          .salesforce-dropdown {
            position: relative;
            top: 0; /* No gap to align with SkillsMenu */
            left: 0;
            width: 100%;
            max-width: 100%; /* Dynamic width based on screen */
            margin: 0 auto; /* Center the dropdown */
            padding: 0 20px; /* Add padding to fit content */
            max-height: 70vh; /* Limit height to 70% of viewport height */
            overflow-y: auto; /* Enable vertical scrolling */
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
}

export default SalesForceServices;