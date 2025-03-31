import { useReducer, useEffect, useRef } from "react";
import SalesForceServices from "./SalesForceServices";
import ServiceNow from "./ServiceNow";
import WebDevelopment from "./WebDevelopment";

const skills = ["Salesforce Services", "ServiceNow", "Web Development"];

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SALESFORCE":
      return {
        salesforce: !state.salesforce,
        servicenow: false,
        webdevelopment: false,
      };
    case "TOGGLE_SERVICENOW":
      return {
        salesforce: false,
        servicenow: !state.servicenow,
        webdevelopment: false,
      };
    case "TOGGLE_WEBDEVELOPMENT":
      return {
        salesforce: false,
        servicenow: false,
        webdevelopment: !state.webdevelopment,
      };
    case "CLOSE_ALL":
      return { salesforce: false, servicenow: false, webdevelopment: false };
    default:
      return state;
  }
};

function SkillsMenu() {
  const [state, dispatch] = useReducer(reducer, {
    salesforce: false,
    servicenow: false,
    webdevelopment: false,
  });

  const menuRef = useRef(null);
  const serviceRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      serviceRef.current &&
      !serviceRef.current.contains(e.target)
    ) {
      dispatch({ type: "CLOSE_ALL" });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative flex gap-4 skills-menu">
      {/* Skills Menu */}
      <nav
        ref={menuRef}
        className="flex flex-col p-[20px] gap-[10px] text-xl [font-family:'Raleway-Regular',Helvetica] text-white bg-[#343434] bg-opacity-100 w-[274px] h-auto rounded-[0px_21px_21px_21px]"
        role="navigation"
        aria-label="Skills navigation"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-[20px] w-[234px] h-[34px] bg-transparent text-white pl-2 pt-0.5 pb-0.5 rounded-[6px] hover:bg-slate-300 hover:text-black cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              if (skill === "Salesforce Services") {
                dispatch({ type: "TOGGLE_SALESFORCE" });
              } else if (skill === "ServiceNow") {
                dispatch({ type: "TOGGLE_SERVICENOW" });
              } else if (skill === "Web Development") {
                dispatch({ type: "TOGGLE_WEBDEVELOPMENT" });
              }
            }}
          >
            {skill}
          </div>
        ))}
      </nav>

      {/* Dropdowns */}
      <div ref={serviceRef} className="dropdown-content">
        {state.salesforce && <SalesForceServices />}
        {state.servicenow && <ServiceNow />}
        {state.webdevelopment && <WebDevelopment />}
      </div>

      {/* Inline styles for responsiveness */}
      <style>{`
        .skills-menu {
          flex-direction: row;
          align-items: flex-start;
        }

        .dropdown-content {
          position: relative;
        }

        @media (max-width: 768px) {
          .skills-menu {
            flex-direction: column;
            width: 100%;
            max-width: 274px;
            margin: 0 auto;
          }

          nav {
            width: 100%;
            max-width: 274px;
          }

          .p-[20px] {
            width: 100%;
            padding: 10px;
          }

          .w-[234px] {
            width: 100%;
            max-width: 234px;
          }

          .dropdown-content {
            width: 100%;
            max-width: 274px;
            padding-top: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default SkillsMenu;